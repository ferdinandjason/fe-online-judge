import React from 'react';

import {LogOut} from "../../redux/session";
import {store} from "../../store";
import {Toast} from "../../redux/toast";

export class UnauthorizedError {
    constructor(error){
        this.message = error.message;
        this.status_code = error.status_code;
    }
    action = () => {
        store.dispatch(LogOut());
        store.dispatch(Toast.show_('Your session has timeout, please login again', 'user', {
            href: "/login",
            text: <strong>Login</strong>,
        }));
    }
}

export class ForbiddenError {
    constructor(error){
        this.message = error.message;
        this.status_code = error.status_code;
    }
}

export const IdentifyError = (error) => {
    if(error.status_code === 401) {
        return new UnauthorizedError(error);
    } else if(error.status_code === 403) {
        return new ForbiddenError(error);
    }
};