import { initialState } from "../store";

export const rootReducer = (state = initialState, action) => {

    // Actions
    switch (action.type) {
        case "ADD_CONTACT":
            return true
        default:
            break;
    }

    return state;
};
