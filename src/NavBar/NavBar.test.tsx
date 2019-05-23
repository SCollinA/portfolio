import * as enzyme from "enzyme";
import React from "react";
import NavBar from "./NavBar";

describe("NavBar component", () => {
    it("renders without crashing", () => {
        const navbar = enzyme.shallow(<NavBar/>);
        expect(navbar.exists()).toBe(true);
    });
});
