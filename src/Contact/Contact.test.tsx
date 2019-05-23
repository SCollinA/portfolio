import * as enzyme from "enzyme";
import React from "react";
import Contact from "./Contact";

describe("Contact component", () => {
    it("renders without crashing", () => {
        const contact = enzyme.shallow(<Contact/>);
        expect(contact.exists()).toBe(true);
    });
});
