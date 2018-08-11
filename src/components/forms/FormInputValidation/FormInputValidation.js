import React from 'react';
import {Classes, Intent} from '@blueprintjs/core';

export function getIntentClassName(meta) {
    return {
        [Classes.INTENT_DANGER]: !isValid(meta),
    }
}

export function getIntent(meta) {
    return isValid(meta) ? undefined : Intent.DANGER;
}

export function isValid(meta) {
    return !meta.touched || meta.valid;
}

export const FormInputValidation = (props) => (
    isValid(props.meta) ? null : (
        <div className={Classes.FORM_HELPER_TEXT}>
            {props.meta.error}
        </div>
    )
);