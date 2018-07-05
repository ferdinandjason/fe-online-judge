import types from './type';

const INITIAL_STATE = { isAuthenticated : false }

const sessionReducer = (state = INITIAL_STATE,action) => {
    switch (action.type){
        case types.ADD_TOKEN :
            return {...state,token: action.payload };
        case types.ADD_USER :
            return {isAuthenticated: true,user: action.payload };
        case types.DELETE_SESSION :
            return state;
        default :
            return state;
    }
};

export default sessionReducer;