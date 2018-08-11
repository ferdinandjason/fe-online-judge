import React from 'react';
import classNames from 'classnames';
import {Classes} from '@blueprintjs/core';

import {getIntentClassName} from "../FormInputValidation";
import {FormTableInput} from "../FormTableInput";

import Styles from './FormTableTextArea.scss';

export const FormTableTextArea = (props) => (
    <FormTableInput {...props}>
        <textarea
            {...props.input}
            className={classNames(Classes.INPUT, Styles.FORM_TABLE_TEXTAREA, getIntentClassName(props.meta))}
            rows={5}
        />
    </FormTableInput>
);