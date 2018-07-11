import { createStore, combineReducers } from 'redux';

import { sessionReducer } from "./redux/session";

const reducer = combineReducers({
    session : sessionReducer,
});

const store = createStore(reducer,{});


export default store;