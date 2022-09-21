import React, { useState } from "react";
import { store } from "../../redux/store";
import getAsyncNews from "../../async/asyncNews";

import "./Navigation.css";

function Navigation() {
    const [search, setSearch] = useState("");
    const queryRequest = () => {
        store.dispatch({ type: "SEND_QUERY", query: search });
        getAsyncNews(search);
    };
    const queryOnChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="navigation">
            <input
                className=" input navigation__input"
                type="text"
                placeholder="For example: new web technologies"
                onChange={queryOnChange}
            />
            <button
                className="button navigation__button"
                onClick={queryRequest}
            >
                Search
            </button>
        </div>
    );
}

export default Navigation;
