import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/es/storage';

import { sessionReducer } from "./redux/session";
import { toastReducer } from "./redux/toast";
import {breadcrumbReducer} from "./redux/breadcrumb";
import {platfromReducer} from "./redux/platform";
import {API} from "./api";

const reducer = combineReducers({
    session : persistReducer({key:'session',storage},sessionReducer),
    toast : toastReducer,
    breadcrumb : breadcrumbReducer,
    app : platfromReducer,
});

const composeEnhancers = window.devToolsExtension || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument(API))
    )
);

export const persistor = persistStore(store);