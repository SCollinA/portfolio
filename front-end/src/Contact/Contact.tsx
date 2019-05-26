import gql from "graphql-tag";
import React from "react";
import { Mutation, MutationFn, MutationResult } from "react-apollo";

export default () => {
    return (
        <div className="Contact">
            <Mutation mutation={SUBMIT_CONTACT}>
                {(submitContactForm: MutationFn, { data, loading }: MutationResult) => contactForm(submitContactForm)}
            </Mutation>
        </div>
    );
};

const contactForm = (submitContactForm: MutationFn) => {
    return (
        <form className="contactForm">
            <input
                className="contactName"
                type="text"
                name="name"
            />
            <input
                className="contactEmail"
                type="email"
                name="email"
            />
            <input
                className="contactMessage"
                type="text"
                name="message"
            />
        </form>
    );
};

export const SUBMIT_CONTACT = gql`
mutation SubmitContactForm($name: String, $email: String, $message: String) {
    contact(name: $name, email: $email, message: $message)
}
`;
