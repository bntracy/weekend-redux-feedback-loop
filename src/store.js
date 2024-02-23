import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const feelingNum = (state = 0, action) => {
    return state;
}

const understandingNum = (state = 0, action) => {
    return state;
}

const supportNum = (state = 0, action) => {
    return state;
}

const commentsText = (state = '', action) => {
    return state;
}

const store = createStore(
    combineReducers({
        feelingNum,
        understandingNum,
        supportNum,
        commentsText
    }), applyMiddleware(logger)
);

export default store;