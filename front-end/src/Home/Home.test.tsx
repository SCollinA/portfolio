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
        expect(home.children().length).toBe(3);
    });

    it("renders an h1 with text 'Hello World!' as first child", () => {
        const home = enzyme.shallow(<Home/>);
        expect(home.childAt(0).is("h1")).toBe(true);
        expect(home.childAt(0).text()).toBe("Hello World!");
    });
});
