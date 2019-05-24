import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";

export default () => {
    return (
        <div className="GitHub">
            <Query query={REPO_NAMES}>
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
            {nodes && nodes.map((node, index) => <h1 key={index}>{node.name}</h1>)}
        </div>
    );
};

export const REPO_NAMES = gql`
    query {
        user(login: "SCollinA") {
            name
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
    name: string;
    repositories: IRepo;
}

export interface IRepo {
    nodes: INode[];
}

export interface INode {
    name: string;
}
