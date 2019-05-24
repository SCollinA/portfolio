import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";

export default () => {
    return (
        <div className="GitHub">
            <Query query={REPO_INFO}>
                {gitHubRepos}
            </Query>
        </div>
    );
};

export const gitHubRepos = (response: IQueryResponse) => {
    let nodes;
    if (response && !response.loading) {
        nodes = response.data.user.repositories.nodes;
    }
    return (
        <div className="repositories">
            {nodes && nodes.map((node, index) => repoName(node.name, index))}
        </div>
    );
};

const repoName = (name: string, key: number) => (
    <h1
        key={key}
        className="repoName"
    >
        {name}
    </h1>
);

export const REPO_INFO = gql`
    query {
        user(login: "SCollinA") {
            repositories(first: 50) {
                nodes {
                    name
                }
            }
        }
    }
`;

export interface IQueryResponse {
    data: IRepoData;
    loading: boolean;
}

export interface IRepoData {
    user: IUser;
}

export interface IUser {
    // name: string;
    repositories: IRepo;
}

export interface IRepo {
    nodes: INode[];
}

export interface INode {
    name: string;
}
