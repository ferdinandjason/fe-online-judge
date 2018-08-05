import React from 'react';
import { Classes } from '@blueprintjs/core';

import { getIntentClassName } from "../FormInputValidation";
import { FormTableInput } from "../FormTableInput/FormTableInput";

export const FormTableSelect = (props) => (
    <FormTableInput {...props}>
        <div className={Classes.HTML_SELECT}>
            <select {...props.input} className={getIntentClassName(props.meta)}>
                {props.children}
            </select>
        </div>
    </FormTableInput>
);