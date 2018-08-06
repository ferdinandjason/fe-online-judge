import React from 'react';
import { Field , reduxForm } from 'redux-form'
import {Intent,Button} from "@blueprintjs/core";

import {FormInputPassword} from "../../../../../../../../components/forms/FormInputPassword";
import {Password, Required} from "../../../../../../../../components/forms/FormInputValidation/Validation";
import {HorizontalDivider} from "../../../../../../../../components/HorizontalDivider";

const oldPasswordField = {
    name: 'old_password',
    label: 'Old Password',
    labelInfo: '(required)',
    placeholder: 'Old Password',
    validate: [Required],
};

const newPasswordField = {
    name: 'password',
    label: 'New Password',
    labelInfo: '(required)',
    placeholder: 'New Password',
    validate: [Required],
};

const confirmPasswordField = {
    name: 'password',
    label: 'Confirm New Password',
    labelInfo: '(required)',
    placeholder: 'Confirm New Password',
    validate: [Required,Password],
};



const ChangePasswordForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <Field component={FormInputPassword} {...oldPasswordField}/>
        <Field component={FormInputPassword} {...newPasswordField}/>
        <Field component={FormInputPassword} {...confirmPasswordField}/>
        <HorizontalDivider/>
        <Button type="submit" text="Change Password" intent={Intent.PRIMARY} loading={!props.submitFailed && props.submitting} />
    </form>
);

export default reduxForm({form:'change-password-form'})(ChangePasswordForm);