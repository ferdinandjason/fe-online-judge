import {Intent} from '@blueprintjs/core';

// Actions
export const ADD_TOAST = 'toast/ADD_TOAST';

const INITIAL_STATE = {
    message: null,
};

const INITIAL_ACTION = {
    type: 'session',
};

// Reducer
export function toastReducer(state = INITIAL_STATE, action = INITIAL_ACTION) {
    switch (action.type) {
        case ADD_TOAST :
            return Object.assign(
                {...state},
                {...action.payload}
            );
        default:
            return state;
    }
}

// Action Creators
export const Toast = {
    success: (message, icon = 'tick', action = undefined) => {
        return {
            type: ADD_TOAST,
            payload: {
                icon: icon,
                message: message,
                intent: Intent.SUCCESS,
                timeout: 3000,
                action: action,
            }
        }
    },
    alert: (message, icon = 'envelope', action = undefined) => {
        return {
            type: ADD_TOAST,
            payload: {
                icon: icon,
                message: message,
                intent: Intent.WARNING,
                timeout: 3000,
                action: action,
            }
        }
    },
    error_: (message, icon = 'warning-sign', action = undefined) => {
        return {
            type: ADD_TOAST,
            payload: {
                icon: icon,
                message: message,
                intent: Intent.DANGER,
                timeout: 3000,
                action: action,
            }
        }
    },
    show_: (message, icon = '', action = undefined) => {
        console.log(message);
        return {
            type: ADD_TOAST,
            payload: {
                icon: icon,
                message: message,
                intent: Intent.PRIMARY,
                timeout: 3000,
                action: action,
            }
        }
    }
};