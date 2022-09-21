import { store } from "../redux/store";

let getAsyncNews

export default getAsyncNews = (query) => {

    const asyncLink = (query = "") => {
        if (query) {
            return `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=038d62d2a1f54972a0e97725a3beb8ab`;
        }
        return `https://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=038d62d2a1f54972a0e97725a3beb8ab`;
    };

    fetch(asyncLink(query))
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            store.dispatch({
                type: "SEND_ARTICLES",
                articles: [...response.articles],
            });
        })
        .catch((err) => console.error(err))
};

getAsyncNews();