import * as enzyme from "enzyme";
import React from "react";
import { Query } from "react-apollo";
import { gitHubClient } from "../apollo/client";
import GitHub, { gitHubRepos, INode, REPO_NAMES } from "./GitHub";

describe("GitHub component", () => {
    it("renders without crashing", () => {
        const github = enzyme.shallow(<GitHub/>);
        expect(github.exists()).toBe(true);
    });

    // it("renders an h1 as only child", () => {
    //     const github = enzyme.shallow(<GitHub/>);
    //     expect(github.getElements().length).toBe(1);
    //     expect(github.childAt(0).is("h1")).toBe(true);
    // });

    it("calls GitHub API and queries for repos", () => {
        const github = enzyme.shallow(<GitHub/>);
        expect(github.find(Query).exists()).toBe(true);
        expect(github.find(Query).prop("query")).toBe(REPO_NAMES);
    });

    it("destructures data only after it has loaded", () => {
        expect(gitHubRepos).not.toThrowError();
    });

    it("displays names of repos as h1's", (done) => {
        gitHubClient.query({
            query: REPO_NAMES,
        })
        .then(({ data, loading }) => {
            if (!loading) {
                const github = enzyme.shallow(<GitHub/>);
                data.user.repositories.nodes.forEach((node: INode) => {
                    expect(github.find("h1").text()).toBe(node.name);
                });
            }
        });
        done();
    });
});
