import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { sessionReducer } from "./redux/session";

const reducer = combineReducers({
    session : sessionReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);


export default store;