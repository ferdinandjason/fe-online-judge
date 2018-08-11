import React from 'react';
import classNames from 'classnames';
import {Classes, FormGroup} from "@blueprintjs/core";

import {FormInputValidation, getIntent, getIntentClassName} from "../FormInputValidation/FormInputValidation";

import Styles from './FormInputText.scss';

export const FormInputText = (props) => {
    return (
        <FormGroup
            labelFor={props.input.name}
            label={props.label}
            labelInfo={props.labelInfo}
            intent={getIntent(props.meta)}
        >
            <input
                {...props.input}
                placeholder={props.placeholder}
                type='text'
                className={classNames(Classes.INPUT, getIntentClassName(props.meta), Styles.FORM_INPUT_TEXT)}
            />
            <FormInputValidation meta={props.meta}/>
        </FormGroup>
    )
};