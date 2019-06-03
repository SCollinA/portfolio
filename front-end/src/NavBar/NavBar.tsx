import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default () => {
    return (
        <header className="NavBar">
            <NavLink
                activeClassName="active-nav-link"
                exact={true}
                to="/"
            >
                home
            </NavLink>
            <NavLink
                activeClassName="active-nav-link"
                to="/github"
            >
                github
            </NavLink>
            <NavLink
                activeClassName="active-nav-link"
                to="/resume"
            >
                resume
            </NavLink>
            <NavLink
                activeClassName="active-nav-link"
                to="/contact"
            >
                contact
            </NavLink>
        </header>
    );
};
