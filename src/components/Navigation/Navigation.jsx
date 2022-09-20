import React from "react";

import "./Navigation.css";

function Navigation() {
    return (
        <div className="navigation">
            <input
                className=" input navigation__input"
                type="text"
                placeholder="For example: new web technologies"
            />
            <button className="button navigation__button">Search</button>
        </div>
    );
}

export default Navigation;
