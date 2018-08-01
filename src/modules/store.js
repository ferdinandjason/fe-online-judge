import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/es/storage';

import {breadcrumbReducer, platformReducer, sessionReducer, toastReducer} from "./redux";

import {sessionAPI} from "./api/session/session";
import {userAPI} from "./api/user/user";
import {errorAPI} from "./api/error/error";
import {omnibarAPI} from "./api/search/omnibar";
import {problemAPI} from "./api/problem/problem";

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

console.log(sessionAPI());