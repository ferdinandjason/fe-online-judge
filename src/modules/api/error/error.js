import React from 'react';
import {AnchorButton} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {isUserAuthenticated, LogOut} from "../../redux/session";
import {store} from "../../store";
import {Toast} from "../../redux/toast";

export class UnauthorizedError {
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

    constructor(error) {
        this.message = error.message;
        this.status_code = error.status_code;
    }
}

export class ForbiddenError {
    action = () => {
        store.dispatch(Toast.error_("You do not have permissions to perform this action.\n" +
            "    Please contact your system administrator to request the appropriate access rights.", 'warning-sign'));
    }

    constructor(error) {
        this.message = error.message;
        this.status_code = error.status_code;
    }
}

export class InternalServerError {
    action = () => {
        store.dispatch(Toast.error_("Internal server error; please try again later.", 'warning-sign'));
    }

    constructor(error) {
        this.message = error.message;
        this.status_code = error.status_code;
    }
}

export class ValidationError {
    action = () => {
        for (let name in this.errors) {
            for (let error in this.errors[name]) {
                store.dispatch(Toast.error_(`${this.errors[name][error]}`));
            }
        }
    }

    constructor(error) {
        this.message = error.message;
        this.errors = error.errors;
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