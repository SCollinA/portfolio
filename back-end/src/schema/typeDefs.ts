import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        getName: String
    }

    type Mutation {
        contact(name: String, email: String, message: String): String
    }
`;
