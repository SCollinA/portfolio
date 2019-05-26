import * as enzyme from "enzyme";
import React, { FormEvent } from "react";
import { Mutation } from "react-apollo";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";
import Contact, { contactFormSubmit, SUBMIT_CONTACT } from "./Contact";

const mocks: MockedResponse[] = [
    {
        request: {
            query: SUBMIT_CONTACT,
            variables: {
                email: "collin.argo@gmail.com",
                message: "Hello World!",
                name: "Collin",
            },
        },
        result: {},
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

    it("form has 4 inputs for name, email, message, and submit", () => {
        const contactForm = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Contact/>
            </MockedProvider>
        )).find("form");
        expect(contactForm.find("input").length).toBe(4);
    });

    it("first input is text, has class contactName, and has name name", () => {
        const contactForm = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Contact/>
            </MockedProvider>
        )).find("form");
        const contactNameInput = contactForm.find("input").at(0);
        expect(contactNameInput.prop("type")).toBe("text");
        expect(contactNameInput.hasClass("contactName")).toBe(true);
        expect(contactNameInput.prop("name")).toBe("name");
        expect(contactNameInput.prop("id")).toBe("name");
    });

    it("second input is email, has class contactEmail, and has name email", () => {
        const contactForm = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Contact/>
            </MockedProvider>
        )).find("form");
        const contactEmailInput = contactForm.find("input").at(1);
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
        const contactMessageInput = contactForm.find("input").at(2);
        expect(contactMessageInput.prop("type")).toBe("text");
        expect(contactMessageInput.hasClass("contactMessage")).toBe(true);
        expect(contactMessageInput.prop("name")).toBe("message");
    });

    it("third input is text, has class contactMessage, and has name message", () => {
        const contactForm = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Contact/>
            </MockedProvider>
        )).find("form");
        const contactMessageInput = contactForm.find("input").at(3);
        expect(contactMessageInput.prop("type")).toBe("submit");
        expect(contactMessageInput.hasClass("contactSubmit")).toBe(true);
        expect(contactMessageInput.prop("value")).toBe("contact collin");
    });

    it("has a mutation component as only child", () => {
        const contact = enzyme.shallow(<Contact/>);
        expect(contact.children().length).toBe(1);
        expect(contact.childAt(0).is(Mutation)).toBe(true);
    });

    it("contains a form with onSubmit", () => {
        const contact = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Contact/>
            </MockedProvider>
        ));
        const contactForm = contact.find("form");
        expect(contactForm.simulate("submit", {
            target: {
                email: {
                    value: "collin.argo@gmail.com",
                },
                message: {
                    value: "Hello World!",
                },
                name: {
                    value: "Collin",
                },
            },
        })).toBeDefined();
    });

    it("form has 4 labels for name, email, message, and submit inputs", () => {
        const contactForm = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <Contact/>
            </MockedProvider>
        )).find("form");
        expect(contactForm.find("label").length).toBe(4);
        expect(contactForm.find("label").at(0).prop("htmlFor")).toBe("name");
        expect(contactForm.find("label").at(0).text()).toBe("name");
        expect(contactForm.find("label").at(1).prop("htmlFor")).toBe("email");
        expect(contactForm.find("label").at(1).text()).toBe("email");
        expect(contactForm.find("label").at(2).prop("htmlFor")).toBe("message");
        expect(contactForm.find("label").at(2).text()).toBe("message");
        expect(contactForm.find("label").at(3).prop("htmlFor")).toBe("submit");
        expect(contactForm.find("label").at(3).text()).toBe("submit");
    });
});
