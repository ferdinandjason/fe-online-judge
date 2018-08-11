// Actions
export const CHANGE_PLATFORM = 'platform/CHANGE';
export const SET_DOCUMENT_TITLE = 'platform/SET_TITLE';
export const DELETE_DOCUMENT_TITLE = 'platform/DELETE_TITLE';


const INITIAL_STATE = {
    platform: undefined,
    title: '',
};

const INITIAL_ACTION = {
    type: 'none',
};

// Reducer
export function platformReducer(state = INITIAL_STATE, action = INITIAL_ACTION) {
    switch (action.type) {
        case CHANGE_PLATFORM :
            return Object.assign({...state}, {
                platform: action.payload,
            });
        case SET_DOCUMENT_TITLE :
            return Object.assign({...state}, {
                title: action.payload,
            });
        case DELETE_DOCUMENT_TITLE :
            return Object.assign({...state}, {
                title: '',
            });
        default:
            return state;
    }
}

// Action Creators
export function ChangePlatform(platform) {
    return {
        type: CHANGE_PLATFORM,
        payload: platform,
    }
}

export function SetDocumentTitle(title) {
    return {
        type: SET_DOCUMENT_TITLE,
        payload: title,
    }
}

export function DeleteDocumentTitle() {
    return {
        type: DELETE_DOCUMENT_TITLE,
    }
}