import {Intent} from '@blueprintjs/core';

// Actions
export const ADD_TOAST = 'toast/ADD_TOAST';

const INITIAL_STATE = {
    message: null,
};

const INITIAL_ACTION = {
    type: 'toast',
};

// Reducer
export function toastReducer(state = INITIAL_STATE, action = INITIAL_ACTION) {
    switch (action.type) {
        case ADD_TOAST :
            console.log(action);
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
    success: (message, icon = 'tick', action = null) => {
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
    alert: (message, icon = 'envelope', action = null) => {
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
    error_: (message, icon = 'warning-sign', action = null) => {
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
    show_: (message, icon = '', action = null) => {
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