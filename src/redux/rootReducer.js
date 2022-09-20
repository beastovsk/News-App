import { initialState } from "../store";

export const rootReducer = (state = initialState, action) => {

    // Actions
    switch (action.type) {
        case "SEND_QUERY":
            return {
                articles: [],
                query: action.query,
            };
        default:
            break;
        case "SEND_ARTICLES":
            return {
                articles: [...state.articles, ...action.articles],
                query: null
            };
    }

    return state;
};
