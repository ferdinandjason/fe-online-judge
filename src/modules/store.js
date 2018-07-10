import { createStore, combineReducers } from 'redux';

import { reducer as sessionReducer } from './redux/session';

const reducer = combineReducers({
    session : sessionReducer(),
});

const store = createStore(reducer);

export default store;