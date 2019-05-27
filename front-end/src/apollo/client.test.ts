import gql from "graphql-tag";
import { client } from "./client";

describe("Portfolio GraphQL client", () => {
    it("should hit my Portfolio API", (done) => {
        client.query({
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
