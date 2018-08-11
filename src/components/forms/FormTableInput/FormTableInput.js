import React from 'react';
import {FormGroup} from '@blueprintjs/core';

import {FormInputValidation, getIntent} from "../FormInputValidation";

import Styles from './FormTableInput.scss';

export const FormTableInput = (props) => (
    <tr className={Styles.FORM_TABLE_INPUT}>
        <td>
            <div className={Styles.FORM_TABLE_INPUT_GROUP_LABEL}>
                <span className={Styles.FORM_TABLE_INPUT_LABEL}>
                    {props.label}
                </span>
                {props.labelHelper &&
                <span className={Styles.FORM_TABLE_INPUT_LABEL_HELPER}>({props.labelHelper})</span>}
            </div>
        </td>
        <td>
            <FormGroup intent={getIntent(props.meta)} helperText={props.inputHelper}
                       className={Styles.FORM_TABLE_INPUT_GROUP}>
                {props.children}
                <FormInputValidation meta={props.meta}/>
            </FormGroup>
        </td>
    </tr>
);