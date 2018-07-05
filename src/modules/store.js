import { combineReducers, createStore } from 'redux';

import sessionReducer from './session/reducer';

const rootReducer = combineReducers({
    session : sessionReducer,
});

const store = createStore(rootReducer);

export default store;