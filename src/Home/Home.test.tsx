import * as enzyme from "enzyme";
import React from "react";
import Home from "./Home";

describe("Home component", () => {
    it("renders without crashing", () => {
        const home = enzyme.shallow(<Home/>);
        expect(home.exists()).toBe(true);
    });

    it("renders an h1 as only child", () => {
        const home = enzyme.shallow(<Home/>);
        expect(home.getElements().length).toBe(1);
        expect(home.find("h1").exists()).toBe(true);
    });
});
