import * as enzyme from "enzyme";
import React from "react";
import Resume from "./Resume";

describe("Resume component", () => {
    it("renders without crashing", () => {
        const resume = enzyme.shallow(<Resume/>);
        expect(resume.exists()).toBe(true);
    });

    it("is a div and has a class of Resume", () => {
        const resume = enzyme.shallow(<Resume/>);
        expect(resume.is("div")).toBe(true);
        expect(resume.hasClass("Resume")).toBe(true);
    });

    it("has an img tag as only child", () => {
        const resume = enzyme.shallow(<Resume/>);
        expect(resume.children().length).toBe(1);
        expect(resume.childAt(0).is("img")).toBe(true);
    });

    it("img tag has src of resume.pdf and alt of install pdf viewer", () => {
        const resume = enzyme.shallow(<Resume/>);
        const resumeImg = resume.childAt(0);
        expect(resumeImg.prop("src")).toBe("images/resume.png");
        expect(resumeImg.prop("alt")).toBe("collin's resume");
    });

    it("resume img has a class of resumeImg", () => {
        const resume = enzyme.shallow(<Resume/>);
        const resumeImg = resume.childAt(0);
        expect(resumeImg.hasClass("resumeImg")).toBe(true);
    });
});
