import gql from "graphql-tag";
import React, { FormEvent } from "react";
import { Mutation, MutationFn } from "react-apollo";
import "./Contact.css";

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
            <label htmlFor="name">name
                <input
                    className="contactName"
                    type="text"
                    name="name"
                    id="name"
                />
            </label>
            <label htmlFor="email">email
                <input
                    className="contactEmail"
                    type="email"
                    name="email"
                />
            </label>
            <label htmlFor="message">message
                <textarea
                    className="contactMessage"
                    name="message"
                    maxLength={500}
                />
            </label>
            <label htmlFor="submit">submit
                <input
                    className="contactSubmit"
                    type="submit"
                    value="contact collin"
                />
            </label>
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
