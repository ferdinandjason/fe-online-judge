import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import { HorizontalDivider } from '../../../../../components';
import {FormInputText,FormInputPassword} from "../../../../../components/forms";

import Styles from './LoginForm.scss';

const emailField = {
    name: 'email',
    label: 'Email',
    labelInfo: '(required)',
    placeholder: 'Email',
};

const passwordField = {
    name: 'password',
    label: 'Password',
    labelInfo: '(required)',
    placeholder: 'Password',
};

export class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading : false,
        };
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field component={FormInputText} {...emailField}/>
                <Field component={FormInputPassword} {...passwordField}/>
                <p className={Styles.FORM_LOGIN_FORGOT_PASSWORD}>
                    <Link to="/forgot-password">Forgot your password?</Link>
                </p>

                <HorizontalDivider />

                <div className={Styles.FORM_LOGIN_WRAPPER}>
                    <Button type="submit" text="Log in" intent={Intent.PRIMARY} loading={this.state.loading} />
                    <p className={Styles.FORM_LOGIN_REGISTER}>
                        Don't have account? <Link to="/register">Register now</Link>
                    </p>
                </div>
            </form>
        )
    }
}

export default LoginForm = reduxForm({form: 'login'})(LoginForm);