import React from 'react';
import { Classes } from '@blueprintjs/core';
import classNames from 'classnames';

import { getIntentClassName } from "../FormInputValidation";
import { FormTableInput } from "../FormTableInput/FormTableInput";

export const FormTableTextInput = (props) => (
    <FormTableInput {...props}>
        <input
            {...props.input}
            type='text'
            className={classNames(Classes.INPUT,getIntentClassName(props.meta))}
        />
    </FormTableInput>
);