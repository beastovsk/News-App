import React from "react";
import NewsListItem from "./NewsListItem/NewsListItem";

import { store } from '../../store'
import './NewsList.css'
import { connect } from "react-redux";

function NewsList() {
    let newsContentData = store.getState()

    return (
        <div className="news-list">
            <NewsListItem newsList={newsContentData} />
        </div>
    );
}

export default connect(
    (state) => ({
        newsList: state
    })
)(NewsList);
