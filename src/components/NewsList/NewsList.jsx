import React from "react";
import NewsListItem from "./NewsListItem/NewsListItem";

import { store } from "../../redux/store";
import "./NewsList.css";
import loading from "./loading.svg";
import { connect } from "react-redux";

function NewsList() {
    let newsContentData = store.getState();

    const isLoadedNews =
        newsContentData.articles.length === 0 ? (
            <img src={loading} alt="" />
        ) : (
            <NewsListItem newsList={newsContentData.articles} />
        );

    return <div className="news-list">{isLoadedNews}</div>;
}

export default connect((state) => ({
    newsList: state.articles,
}))(NewsList);
