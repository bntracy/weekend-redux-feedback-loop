import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const feelingNum = (state = 0, action) => {
    if (action.type === 'FEELINGNUM_STORE') {
        return action.payload;
    }
    return state;
}

const understandingNum = (state = 0, action) => {
    if (action.type === 'UNDERSTANDINGNUM_STORE') {
        return action.payload;
    }
    return state;
}

const supportNum = (state = 0, action) => {
    if (action.type === 'SUPPORTNUM_STORE') {
        return action.payload;
    }
    return state;
}

const commentsText = (state = '', action) => {
    if (action.type === 'COMMENTSTEXT_STORE') {
        return action.payload;
    }
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