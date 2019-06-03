import * as enzyme from "enzyme";
import React from "react";
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
});
