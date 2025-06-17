import { applyMiddleware, createStore } from "redux";
import Reducers from "../CombineReducer";
import { createLogger } from "redux-logger";

const logger = createLogger();
export const Store = createStore(
    Reducers, 
    applyMiddleware(logger)
)