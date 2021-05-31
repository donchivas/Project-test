import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsReducer} from "./news/newsReducer";
import logger from "redux-logger";

const reducers = combineReducers({
    news: newsReducer,
});

export const store = createStore(reducers, applyMiddleware(logger));