import React from 'react';
import {AnchorButton} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {isUserAuthenticated, LogOut} from "../../dispatcher/session";
import {Toast} from "../../dispatcher/toast";
import {store} from "../../store";
import {BaseError} from "./base-error";


export class UnauthorizedError extends BaseError{
    action = () => {
        if (isUserAuthenticated()) {
            store.dispatch(LogOut());
            store.dispatch(Toast.error_('Your session has timeout, Please login again', 'user', {
                text: <AnchorButton icon={IconNames.LOG_IN} text='Login' href='/login'/>,
            }));
        } else {
            store.dispatch(Toast.show_('Please Login', 'user', {
                text: <AnchorButton icon={IconNames.LOG_IN} text='Login' href='/login'/>,
            }));
        }
    };
}

export class ForbiddenError extends BaseError {
    action = () => {
        store.dispatch(Toast.error_("You do not have permissions to perform this action.\n    Please contact your system administrator to request the appropriate access rights.", 'warning-sign'));
    };
}

export class InternalServerError extends BaseError {
    action = () => {
        store.dispatch(Toast.error_("Internal server error; please try again later.", 'warning-sign'));
    };
}

export class ValidationError extends BaseError {
    action = () => {
        for (let name in this.errors) {
            for (let error in this.errors[name]) {
                store.dispatch(Toast.error_(`${this.errors[name][error]}`));
            }
        }
    };

    constructor(error) {
        super(error);
        this.status_code = error.status_code;
    }
}

export const IdentifyError = (error) => {
    if (error.status_code === 401) {
        return new UnauthorizedError(error);
    } else if (error.status_code === 403) {
        return new ForbiddenError(error);
    } else if (error.status_code === 422) {
        return new ValidationError(error);
    } else if (error.status_code === 500) {
        return new InternalServerError(error);
    }
};