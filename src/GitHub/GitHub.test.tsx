import * as enzyme from "enzyme";
import React from "react";
import { Query } from "react-apollo";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";
import GitHub, { gitHubRepos, INode, REPO_INFO } from "./GitHub";

const mocks: MockedResponse[] = [
    {
        request: {
            query: REPO_INFO,
            variables: {},
        },
        result: {
            data: {
                user: {
                    repositories: {
                        nodes: [
                            {
                                name: "Repo1",
                            },
                        ],
                    },
                },
            },
            loading: false,
        },
    },
];

describe("GitHub component", () => {
    it("renders without crashing", () => {
        const github = enzyme.shallow(<GitHub/>);
        expect(github.exists()).toBe(true);
    });

    it("calls GitHub API and queries for repos", () => {
        const github = enzyme.shallow(<GitHub/>);
        expect(github.find(Query).exists()).toBe(true);
        expect(github.find(Query).prop("query")).toBe(REPO_INFO);
    });

    it("destructures data only after it has loaded", () => {
        expect(gitHubRepos).not.toThrowError();
    });

    it("displays names of repos as h1's", async () => {
        const github = enzyme.mount((
            <MockedProvider mocks={mocks} addTypename={false}>
                <GitHub/>
            </MockedProvider>
        ));
        await new Promise((resolve) => setTimeout(resolve));
        github.update();
        expect(github.find("h1").hasClass("repoName")).toBe(true);
    });
});
