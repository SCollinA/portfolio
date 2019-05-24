import gql from "graphql-tag";
import { gitHubClient } from "./client";

describe("GitHub GraphQL client", () => {
    it("should hit GraphQL API", (done) => {
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
                data:  {
                    user:  {
                        __typename: "User",
                        name: "Collin Argo",
                    },
                },
                loading: false,
                networkStatus: 7,
                stale: false,
            });
            done();
        });
    }, 10000);
});
