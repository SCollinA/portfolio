import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default () => {
    return (
        <header className="NavBar">
            <NavLink to="/">home</NavLink>
            <NavLink to="/github">github</NavLink>
            <NavLink to="/resume">resume</NavLink>
            <NavLink to="/contact">contact</NavLink>
        </header>
    );
};
