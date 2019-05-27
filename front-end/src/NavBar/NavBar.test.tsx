import * as enzyme from "enzyme";
import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar component", () => {
    it("renders without crashing", () => {
        const navbar = enzyme.shallow(<NavBar/>);
        expect(navbar.exists()).toBe(true);
    });

    it("renders a header element", () => {
        const navbar = enzyme.shallow(<NavBar/>);
        expect(navbar.is("header")).toBe(true);
    });

    it("renders a NavLink to '/' path as first child", () => {
        const navbar = enzyme.shallow(<NavBar/>);
        expect(navbar.childAt(0).is(NavLink)).toBe(true);
        expect(navbar.childAt(0).prop("to")).toBe("/");
    });

    it("renders a NavLink to '/github' path as second child", () => {
        const navbar = enzyme.shallow(<NavBar/>);
        expect(navbar.childAt(1).is(NavLink)).toBe(true);
        expect(navbar.childAt(1).prop("to")).toBe("/github");
    });

    it("renders a NavLink to '/resume' path as third child", () => {
        const navbar = enzyme.shallow(<NavBar/>);
        expect(navbar.childAt(2).is(NavLink)).toBe(true);
        expect(navbar.childAt(2).prop("to")).toBe("/resume");
    });

    it("renders a NavLink to '/contact' path as fourth child", () => {
        const navbar = enzyme.shallow(<NavBar/>);
        expect(navbar.childAt(3).is(NavLink)).toBe(true);
        expect(navbar.childAt(3).prop("to")).toBe("/contact");
    });
});
