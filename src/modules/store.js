import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/es/storage';
import {reducer as formReducer} from 'redux-form';

import {breadcrumbReducer, platformReducer, sessionReducer, toastFileReducer, toastReducer} from "./dispatcher";

import {sessionAPI} from "./api/session/session";
import {userAPI} from "./api/user/user";
import {omnibarAPI} from "./api/search/omnibar";
import {problemAPI} from "./api/problem/problem";
import {submissionAPI} from "./api/submission/submission";

const reducer = combineReducers({
    session: persistReducer({key: 'session', storage}, sessionReducer),
    toast: toastReducer,
    toastFile: toastFileReducer,
    breadcrumb: breadcrumbReducer,
    app: platformReducer,
    form: formReducer,
});

const composeEnhancers = window.devToolsExtension || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({
            sessionAPI: sessionAPI(),
            userAPI: userAPI(),
            omnibarAPI: omnibarAPI(),
            problemAPI: problemAPI(),
            submissionAPI: submissionAPI(),
        }))
    )
);

export const persistor = persistStore(store);

console.log(sessionAPI());