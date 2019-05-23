import * as enzyme from "enzyme";
import React from "react";
import GitHub from "./GitHub";

describe("GitHub component", () => {
    it("renders without crashing", () => {
        const github = enzyme.shallow(<GitHub/>);
        expect(github.exists()).toBe(true);
    });

    it("renders an h1 as only child", () => {
        const github = enzyme.shallow(<GitHub/>);
        expect(github.getElements().length).toBe(1);
        expect(github.childAt(0).is("h1")).toBe(true);
    });
});
