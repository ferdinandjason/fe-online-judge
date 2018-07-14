import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/es/storage';

import { sessionReducer } from "./redux/session";
import { toastReducer } from "./redux/toast";

const reducer = combineReducers({
    session : persistReducer({key:'session',storage},sessionReducer),
    toast : toastReducer,
});

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);