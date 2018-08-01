import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/es/storage';

import {sessionReducer,toastReducer,breadcrumbReducer,platformReducer} from "./redux";
import {sessionAPI,userAPI,errorAPI,omnibarAPI,problemAPI} from "./api";

const reducer = combineReducers({
    session: persistReducer({key: 'session', storage}, sessionReducer),
    toast: toastReducer,
    breadcrumb: breadcrumbReducer,
    app: platformReducer,
});

const composeEnhancers = window.devToolsExtension || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({
            sessionAPI: sessionAPI(),
            userAPI: userAPI(),
            errorAPI: errorAPI(),
            omnibarAPI: omnibarAPI(),
            problemAPI: problemAPI(),
        }))
    )
);

export const persistor = persistStore(store);
