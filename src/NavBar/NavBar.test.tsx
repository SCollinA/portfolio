import * as enzyme from "enzyme";
import React from "react";
import { NavLink } from "react-router-dom";
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
});
