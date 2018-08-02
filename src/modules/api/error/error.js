import React from 'react';
import { push } from 'react-router-redux';

import {isUserAuthenticated, LogOut} from "../../redux/session";
import {store} from "../../store";
import {Toast} from "../../redux/toast";

export class UnauthorizedError {
    constructor(error){
        this.message = error.message;
        this.status_code = error.status_code;
    }
    action = () => {
        if(isUserAuthenticated()){
            store.dispatch(LogOut());
            store.dispatch(Toast.error_('Your session has timeout, Please login again', 'user', {
                text: <strong>Login</strong>,
            }));
        } else {
            store.dispatch(Toast.show_('Please Login', 'user', {
                text: <strong>Login</strong>,
            }));
        }
    }
}

export class ForbiddenError {
    constructor(error){
        this.message = error.message;
        this.status_code = error.status_code;
    }
    action = () => {
        store.dispatch(Toast.error_("You do not have permissions to perform this action.\n" +
            "    Please contact your system administrator to request the appropriate access rights.", 'warning-sign'));
    }
}

export class InternalServerError {
    constructor(error){
        this.message = error.message;
        this.status_code = error.status_code;
    }
    action = () => {
        store.dispatch(Toast.error_("Internal server error; please try again later.", 'warning-sign'));
    }
}

export const IdentifyError = (error) => {
    if(error.status_code === 401) {
        return new UnauthorizedError(error);
    } else if(error.status_code === 403) {
        return new ForbiddenError(error);
    } else if(error.status_code === 500) {
        return new InternalServerError(error);
    }
};