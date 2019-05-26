import gql from "graphql-tag";
import React, { FormEvent } from "react";
import { Mutation, MutationFn } from "react-apollo";

export default () => {
    return (
        <div className="Contact">
            <Mutation mutation={SUBMIT_CONTACT}>
                {(submitContactForm: MutationFn) => contactForm(submitContactForm)}
            </Mutation>
        </div>
    );
};

const contactForm = (submitContactForm: MutationFn) => {
    return (
        <form
            className="contactForm"
            onSubmit={(event) => contactFormSubmit(event, submitContactForm)} //tslint:disable-line
        >
            <label htmlFor="name">name</label>
            <input
                className="contactName"
                type="text"
                name="name"
                id="name"
            />
            <label htmlFor="email">email</label>
            <input
                className="contactEmail"
                type="email"
                name="email"
            />
            <label htmlFor="message">message</label>
            <input
                className="contactMessage"
                type="text"
                name="message"
            />
            <label htmlFor="submit">submit</label>
            <input
                className="contactSubmit"
                type="submit"
                value="contact collin"
            />
        </form>
    );
};

interface IContactFormEvent extends FormEvent {
    target: IContactFormTarget;
}

interface IContactFormTarget extends EventTarget {
    name?: any;
    email?: any;
    message?: any;
}

const contactFormSubmit = (event: IContactFormEvent, submitContactForm: MutationFn) => {
    event.preventDefault();
    const { name, email, message } = event.target;
    submitContactForm({ variables: {
        email: email.value,
        message: message.value,
        name: name.value,
    }});
};

export const SUBMIT_CONTACT = gql`
    mutation SubmitContactForm($name: String, $email: String, $message: String) {
        contact(name: $name, email: $email, message: $message)
    }
`;
