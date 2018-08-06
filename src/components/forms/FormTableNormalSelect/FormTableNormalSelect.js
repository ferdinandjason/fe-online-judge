import React from 'react';
import classNames from 'classnames';
import { Classes } from '@blueprintjs/core';

import { getIntentClassName } from "../FormInputValidation";
import { FormTableInput } from "../FormTableInput/FormTableInput";

export const FormTableSelect = (props) => (
    <FormTableInput {...props}>
        <div className={Classes.SELECT}>
            <select {...props.input} className={classNames(getIntentClassName(props.meta))}>
                {props.children}
            </select>
        </div>
    </FormTableInput>
);