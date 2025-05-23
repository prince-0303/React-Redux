import { combineReducers } from "redux";
import InputReducer from "./src/DisplayOutput/Reducer2"
import Reducer from "./src/Reducer"


const Reducers = combineReducers({
    Count : Reducer,
    Input : InputReducer
});

export default Reducers;