import { store } from "./store";

const getAsyncNews = (query = null) => {
    if (query) {
        return `https://newsapi.org/v2/everything&category=technology&q=${query}&sortBy=publishedAt&apiKey=038d62d2a1f54972a0e97725a3beb8ab`;
    }
    return `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=038d62d2a1f54972a0e97725a3beb8ab
`;
};

export default fetch(getAsyncNews())
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        store.dispatch({ type: 'SEND_ARTICLES', articles: [...response.articles] })
    })
