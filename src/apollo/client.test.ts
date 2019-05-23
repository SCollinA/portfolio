import gql from "graphql-tag";
import { gitHubClient } from "./client";

describe("GitHub GraphQL client", () => {
    it("should hit to GraphQL API", (done) => {
        gitHubClient.query({
            query: gql`
                query {
                    user(login: "SCollinA") {
                        name
                    }
                }
            `,
        })
        .then((result) => {
            expect(result).toEqual({
                data: {
                    user: {
                        name: "Collin Argo",
                    },
                },
            });
        });
    });
});
