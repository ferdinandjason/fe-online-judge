// Actions
export const CHANGE_PLATFORM = 'platform/CHANGE';

const INITIAL_STATE = {
    platform : undefined,
};

const INITIAL_ACTION = {
    type : 'none',
};

// Reducer
export function platfromReducer(state = INITIAL_STATE, action = INITIAL_ACTION) {
    switch (action.type) {
        case CHANGE_PLATFORM :
            return Object.assign({...state},{
                    platform : action.payload,
                });
        default: return state;
    }
}

// Action Creators
export function ChangePlatform(platform){
    return {
        type : CHANGE_PLATFORM,
        payload : platform,
    }
}