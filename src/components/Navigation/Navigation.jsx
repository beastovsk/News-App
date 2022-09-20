import React, { useState } from "react";
import { store } from "../../store";
import getAsyncNews from "../../asyncNews";

import "./Navigation.css";

function Navigation() {
    const [search, setSearch] = useState("");
    const queryRequest = () => {
        store.dispatch({ type: "SEND_QUERY", query: search })
        getAsyncNews(search);
    }

    return (
        <div className="navigation">
            <input
                className=" input navigation__input"
                type="text"
                placeholder="For example: new web technologies"
                onChange={(event) => setSearch(event.target.value)}
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
