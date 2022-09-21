import React from "react";

import "./NewsListItem.css";

function NewsListItem({ newsList }) {
    return newsList.map((newsItem, i) => {
        const { author, publishedAt, description, url, urlToImage, source } =
            newsItem;

        let publishedData = publishedAt.slice(0, 10);
        let publishedTime = publishedAt.slice(11, 16);

        if (!urlToImage) {
            return false
        }

        return (
            <div className="news-item" key={i}>
                <a
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="news-item__link-image"
                >
                    <img src={urlToImage} className="news-item__image" alt="" />
                </a>
                <div className="news-item__content">
                    <h1 className="news-item__content-heading">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {description}
                        </a>
                    </h1>

                    <div className="news-item__content-footer">
                        <p className="news-item__content-footer-text">
                            {publishedData}, {publishedTime}
                        </p>
                        <p className="news-item__content-footer-text">
                            {author ? author : source.name}
                        </p>
                    </div>
                </div>
            </div>
        );
    });
}

export default NewsListItem;
