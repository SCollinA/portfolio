import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default () => {
    return (
        <header className="NavBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/github">GitHub</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </header>
    );
};
