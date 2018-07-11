import store from '../store'

// Actions
export const PUT_TOKEN = 'session/PUT_TOKEN';
export const ADD_USER = 'session/ADD_USER';
export const LOG_IN_SUCCESS = 'session/LOG_IN_SUCCESS';
export const LOG_IN_FAILED = 'session/LOG_IN_FAIILED';
export const LOG_OUT = 'session/LOG_OUT';

const INITIAL_STATE = {
    isAuthenticated : false,
    token : null,
    user : null,
};

const INITIAL_ACTION = {
    type : 'session',
};

// Reducer
export function sessionReducer(state = INITIAL_STATE, action = INITIAL_ACTION) {
    switch (action.type) {
        case PUT_TOKEN :
            return Object.assign({...state},{
                token : action.payload
            });
        case ADD_USER :
            return Object.assign({...state},{
                user : action.payload
            });
        case LOG_IN_SUCCESS :
            return Object.assign({...state},{
                isAuthenticated : true
            });
        case LOG_IN_FAILED :
            return Object.assign({...state},{
                isAuthenticated : false
            });
        case LOG_OUT :
            return Object.assign({...state},{
                isAuthenticated : false,
                token : null,
                user : null
            });
        default: return state;
    }
}

// Action Creators
export function PutToken(token){
    return {
        type : PUT_TOKEN,
        payload : token,
    }
}

export function AddUser(user){
    return {
        type : ADD_USER,
        payload : user,
    }
}

export function LogInSucces(){
    return {
        type : LOG_IN_SUCCESS
    }
}

export function LogInFailed(){
    return {
        type : LOG_IN_FAILED
    }
}

export function LogOut(){
    return {
        type : LOG_OUT
    }
}

// Selector
export function selectToken(){
    return store.getState().token;
}