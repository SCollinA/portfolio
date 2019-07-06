import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default () => {
    return (
        <div className="Footer">
            <div className="built-with">
                <h4>Built with:</h4>
                <NavLink to="https://www.apollographql.com/">Apollo</NavLink>
                <NavLink to="https://reactjs.org">React</NavLink>
            </div>
            <div className="social-links">
                <NavLink to="https://github.com/SCollinA">
                    GitHub
                </NavLink>
            </div>
            <div className="copy-date">
                © 2019
            </div>
        </div>
    );
};
