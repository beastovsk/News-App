import { initialState } from "../store";

export const rootReducer = (state = initialState, action) => {

    // Actions
    switch (action.type) {
        case "SEND_QUERY":
            return true
        default:
            break;
        case "SEND_ARTICLES":
            return [...state, ...action.articles]
    }

    return state;
};
