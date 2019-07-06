import * as enzyme from "enzyme";
import React from "react";
import Home from "./Home";

describe("Home component", () => {
    it("renders without crashing", () => {
        const home = enzyme.shallow(<Home/>);
        expect(home.exists()).toBe(true);
    });

    it("renders three children: h1, img, p", () => {
        const home = enzyme.shallow(<Home/>);
        // expect(home.children().length).toBe(3);
        expect(home.find("h1").exists()).toBe(true);
        expect(home.find("img").exists()).toBe(true);
        expect(home.find("p").exists()).toBe(true);
    });

    it("renders an h1 with text 'Hello World!'", () => {
        const home = enzyme.shallow(<Home/>);
        expect(home.find("h1").text()).toBe("Hello World!");
    });

    it("renders the Hello World and profile picture in a Hero div", () => {
        const home = enzyme.shallow(<Home/>);
        const heroDiv = home.find("div.heroDiv");
        expect(heroDiv.exists()).toBe(true);
        expect(heroDiv.children().length).toBe(2);
        expect(heroDiv.childAt(0).is("h1")).toBe(true);
        expect(heroDiv.childAt(1).is("img")).toBe(true);
    });
});
