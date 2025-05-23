import { ADD_INPUT } from "../Action";

const initialState = { output :[] };

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INPUT :
            return {
                ...state,
                output :[...state.output, action.payload]
            }
            default:
                return state;
    }
}

export default inputReducer;