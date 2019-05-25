import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        getName: String
    }
`;

// type Query {
//     getRepos: String
// }
