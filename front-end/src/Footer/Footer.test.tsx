import * as enzyme from "enzyme";
import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Footer from "./Footer";

describe("Footer component", () => {
    it("renders without crashing", () => {
        const footer = enzyme.shallow(<Footer/>);
        expect(footer.exists()).toBe(true);
    });

    it("contains divs for built with, copyright date, and social links", () => {
        const footer = enzyme.shallow(<Footer/>);
        expect(footer.children().length).toBe(3);
        expect(footer.childAt(0).is("div")).toBe(true);
        expect(footer.childAt(0).hasClass("built-with")).toBe(true);
        expect(footer.childAt(1).is("div")).toBe(true);
        expect(footer.childAt(1).hasClass("social-links")).toBe(true);
        expect(footer.childAt(2).is("div")).toBe(true);
        expect(footer.childAt(2).hasClass("copy-date")).toBe(true);
    });

    it("built-with div has links to Apollo and React", () => {
        const footer = enzyme.shallow(<Footer/>);
        const builtWith = footer.find("div.built-with");
        const builtLinks = builtWith.find(NavLink);
        expect(builtLinks.length).toBe(2);
        expect(builtLinks.at(0).prop("children")).toBe("Apollo");
        expect(builtLinks.at(0).prop("to")).toBe("https://www.apollographql.com/");
        expect(builtLinks.at(1).prop("children")).toBe("React");
        expect(builtLinks.at(1).prop("to")).toBe("https://reactjs.org");
    });
});
