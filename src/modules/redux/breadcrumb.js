// Actions
export const PUSH_BREADCRUMB = 'breadcrumb/PUSH';
export const POP_BREADCRUMB = 'breadcrumb/POP';

const INITIAL_STATE = {
    values : []
};

const INITIAL_ACTION = {
    type : 'stable',
};

// Reducer
export function breadcrumbReducer(state = INITIAL_STATE, action = INITIAL_ACTION) {
    switch (action.type) {
        case PUSH_BREADCRUMB :
            return {
                values : [...state.values , action.payload]
            };
        case POP_BREADCRUMB :
            return {
                values : state.values.filter(item => item.link !== action.payload.link)
            };
        default: return state;
    }
}

// Action Creators
export function PushBreadcrumb(breadcrumb){
    return {
        type : PUSH_BREADCRUMB,
        payload : breadcrumb,
    }
}

export function PopBreadcrumb(breadcrumb){
    return {
        type : POP_BREADCRUMB,
        payload : breadcrumb,
    }
}

// Selector
export function getBreadcrumbs(state){
    return state.breadcrumb.values.slice().sort((a,b) => a.link.length - b.link.length)
}