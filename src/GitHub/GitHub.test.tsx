import * as enzyme from "enzyme";
import React from "react";
import GitHub from "./GitHub";

describe("GitHub component", () => {
    it("renders without crashing", () => {
        const github = enzyme.shallow(<GitHub/>);
        expect(github.exists()).toBe(true);
    });
});
