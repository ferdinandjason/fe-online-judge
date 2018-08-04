import {store} from "../store";

// Actions
export const ADD_FILE_TOAST = 'toast/ADD_FILE_TOAST';
export const GIVE_KEY_FILE_TOAST = 'toast/GIVE_KEY_FILE_TOAST';
export const PERCENTAGE_FILE_TOAST = 'toast/PERCENTAGE_FILE_TOAST';

const INITIAL_STATE = {
    filename : null,
    percentage: null,
    key: null,
};

const INITIAL_ACTION = {
    type: 'toast',
};

// Reducer
export function toastFileReducer(state = INITIAL_STATE, action = INITIAL_ACTION){
    switch(action.type) {
        case ADD_FILE_TOAST :
            return Object.assign(
                {...state},
                {...action.payload},
            );
        case GIVE_KEY_FILE_TOAST :
            return Object.assign(
                {...state},
                {...action.payload},
            );
        default:
            return state;
    }
}

// Action Creator
export const AddToastFile = (filename) => {
    return {
        type: ADD_FILE_TOAST,
        payload : {
            filename : filename,
            percentage : 0,
            key : undefined,
        }
    }
};

export const AddKeyToastFile = (key) => {
    return {
        type: GIVE_KEY_FILE_TOAST,
        payload : {
            key: key,
        }
    }
};

export const UpdatePercentageToastFile = (percentage) => {
    return {
        type: PERCENTAGE_FILE_TOAST,
        payload : {
            percentage: percentage,
        }
    }
};

export const GetPercentageToastFile = () => {
    return store.getState().toastFile.percentage;
};

export const GetKeyToastFile = () => {
    return store.getState().toastFile.key;
};