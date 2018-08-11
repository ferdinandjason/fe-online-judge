import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button, Intent} from "@blueprintjs/core/lib/esm/index";
import {Link} from 'react-router-dom';

import {HorizontalDivider} from '../../../../../components';

import Styles from '../../../login/components/LoginForm/LoginForm.scss';
import {FormInputPassword, FormInputText} from "../../../../../components/forms";
import {
    ConfirmPassword,
    EmailAddress,
    Password,
    Required
} from "../../../../../components/forms/FormInputValidation/Validation";

const nameField = {
    name: 'name',
    label: 'Name',
    labelInfo: '(required)',
    placeholder: 'Name',
    validate: [Required],
};

const emailField = {
    name: 'email',
    label: 'Email',
    labelInfo: '(required)',
    placeholder: 'Email',
    validate: [Required, EmailAddress],
};

const passwordField = {
    name: 'password',
    label: 'Password',
    labelInfo: '(required)',
    placeholder: 'Password',
    validate: [Required, Password],
};

const retypePasswordField = {
    name: 'retype_password',
    label: 'Retype Password',
    labelInfo: '(required)',
    placeholder: 'Password',
    validate: [Required, Password, ConfirmPassword],
};


export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field component={FormInputText} {...nameField}/>
                <Field component={FormInputText} {...emailField}/>
                <Field component={FormInputPassword} {...passwordField}/>
                <Field component={FormInputPassword} {...retypePasswordField}/>
                <HorizontalDivider/>
                <div className={Styles.FORM_LOGIN_WRAPPER}>
                    <Button type="submit" text="Register" intent={Intent.PRIMARY} loading={this.state.loading}/>
                    <p className={Styles.FORM_LOGIN_REGISTER}>
                        Already have a account? <Link to="/login">Login now</Link>
                    </p>
                </div>
            </form>
        )
    };
}

export default RegisterForm = reduxForm({form: 'register'})(RegisterForm);