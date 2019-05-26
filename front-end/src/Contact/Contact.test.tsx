import * as enzyme from "enzyme";
import React from "react";
import { Mutation } from "react-apollo";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";
import Contact, { SUBMIT_CONTACT } from "./Contact";

const mocks: MockedResponse[] = [
    {
        request: {
            query: SUBMIT_CONTACT,
            variables: {
                email: "collin.argo@gmail.com",
                message: "Hello world!",
                name: "Collin",
            },
        },
    },
];

describe("Contact component", () => {
    it("renders without crashing", () => {
        const contact = enzyme.shallow(<Contact/>);
        expect(contact.exists()).toBe(true);
    });

    it("contains a form with class of contactForm", () => {
        const contact = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Contact/>
            </MockedProvider>
        ));
        expect(contact.find("form").hasClass("contactForm")).toBe(true);
    });

    it("form has 3 inputs for name, email, and message", () => {
        const contactForm = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Contact/>
            </MockedProvider>
        )).find("form");
        expect(contactForm.children().length).toBe(3);
    });

    it("first input is text, has class contactName, and has name name", () => {
        const contactForm = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Contact/>
            </MockedProvider>
        )).find("form");
        const contactNameInput = contactForm.childAt(0);
        expect(contactNameInput.prop("type")).toBe("text");
        expect(contactNameInput.hasClass("contactName")).toBe(true);
        expect(contactNameInput.prop("name")).toBe("name");
    });

    it("second input is email, has class contactEmail, and has name email", () => {
        const contactForm = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Contact/>
            </MockedProvider>
        )).find("form");
        const contactEmailInput = contactForm.childAt(1);
        expect(contactEmailInput.prop("type")).toBe("email");
        expect(contactEmailInput.hasClass("contactEmail")).toBe(true);
        expect(contactEmailInput.prop("name")).toBe("email");
    });

    it("third input is text, has class contactMessage, and has name message", () => {
        const contactForm = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Contact/>
            </MockedProvider>
        )).find("form");
        const contactMessageInput = contactForm.childAt(2);
        expect(contactMessageInput.prop("type")).toBe("text");
        expect(contactMessageInput.hasClass("contactMessage")).toBe(true);
        expect(contactMessageInput.prop("name")).toBe("message");
    });

    it("has a mutation component as only child", () => {
        const contact = enzyme.shallow(<Contact/>);
        expect(contact.children().length).toBe(1);
        expect(contact.childAt(0).is(Mutation)).toBe(true);
    });
});
