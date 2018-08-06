import React from 'react';
import classNames from 'classnames';
import CountryList from 'country-list';
import { Classes, Button, Intent, ButtonGroup} from '@blueprintjs/core';
import { Field, reduxForm } from 'redux-form';

import {FormTableTextInput,FormTableSelect,FormTableTextArea} from "../../../../../../../components/forms";
import {HorizontalDivider} from "../../../../../../../components/HorizontalDivider";
import {MODE,THEME} from "../../../../../../../config";

import Styles from './ProfileForm.scss';

const nameField = {
    name: 'name',
    label: 'Name',
};

const genderField = {
    name: 'gender',
    label: 'Gender',
};

const nationalityField = {
    name: 'nationality',
    label: 'Country',
};

const homeAddressField = {
    name: 'homeAddress',
    label: 'Home Address',
};

const themeDefaultField = {
    name: 'theme',
    label: 'Theme',
};

const languageDefaultField = {
    name: 'language',
    label: 'Languane',
};

const ProfileForm = (props) => {
    const countryOptions = CountryList().getNames()
        .map(name=>(
            <option key={name} value={name}>
                {name}
            </option>
        ));

    const languageOptions = MODE.map(mode=>(
        <option key={mode.mode} value={mode.mode}>
            {mode.title}
        </option>
    ));

    const themeOptions = THEME.map(theme=>(
        <option key={theme.theme} value={theme.theme}>
            {theme.title}
        </option>
    ));

    return (
        <form onSubmit={props.handleSubmit}>
            <h4>Personal Info</h4>
            <table className={classNames(Classes.HTML_TABLE,Classes.HTML_TABLE_STRIPED,Styles.PROFILE_FORM)}>
                <tbody>
                    <Field component={FormTableTextInput} {...nameField}/>
                    <Field component={FormTableSelect} {...genderField}>
                        <option />
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </Field>
                    <Field component={FormTableSelect} {...nationalityField}>
                        <option />
                        {countryOptions}
                    </Field>
                    <Field component={FormTableTextArea} {...homeAddressField} />
                </tbody>
            </table>
            <HorizontalDivider/>
            <h4>Personal Configuration</h4>
            <table className={classNames(Classes.HTML_TABLE,Classes.HTML_TABLE_STRIPED,Styles.PROFILE_FORM)}>
                <tbody>
                    <Field component={FormTableSelect} {...themeDefaultField}>
                        <option/>
                        {themeOptions}
                    </Field>
                    <Field component={FormTableSelect} {...languageDefaultField}>
                        <option/>
                        {languageOptions}
                    </Field>
                </tbody>
            </table>
            <HorizontalDivider/>
            <ButtonGroup>
                <Button type="submit" text="Save changes" intent={Intent.PRIMARY} loading={props.submitting} style={{marginRight:'10px'}}/>
                <Button text="Cancel" onClick={props.onCancel} disabled={props.submitting} />
            </ButtonGroup>
        </form>
    )
};

export default reduxForm({form:'profile-edit'})(ProfileForm);