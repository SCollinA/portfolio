import React from "react";
import Home from "./Home";
import * as enzyme from "enzyme";

describe("Home component", () => {
    it("renders without crashing", () => {
        const home = enzyme.shallow(<Home/>);
        expect(home.exists()).toBe(true);
    });
});