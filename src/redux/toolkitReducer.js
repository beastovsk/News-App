import { createReducer, createAction } from '@reduxjs/toolkit'

let initialState = {
    articles: [],
    query: null
};

const sendQuery = createAction("SEND_QUERY")
const sendArticles = createAction("SEND_ARTICLES")

export default createReducer(initialState, {
    [sendQuery]: (state, action) => {
        state.query = action.query;
    },
    [sendArticles]: (state, action) => {
        state.articles = action.articles;
    },
});