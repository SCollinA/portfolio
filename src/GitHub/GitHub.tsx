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
            {nodes && nodes.map((node, index) => repoDiv(index, node))}
        </div>
    );
};

const repoDiv = (key: number, {name, createdAt, description, languages}: INode) => (
    <div
        key={key}
        className="repoDiv"
    >
        {repoName(name)}
        {repoCreatedAt(createdAt)}
        {repoDesc(description)}
        {repoLangs(languages)}
    </div>
);

const repoName = (name: string) => (
    <h1 className="repoName">
        {name}
    </h1>
);

const repoCreatedAt = (createdAt: string) => (
    <h4 className="repoCreatedAt">
        {new Date(createdAt).toLocaleDateString()}
    </h4>
);

const repoDesc = (description: string) => (
    <h4 className="repoDesc">
        {description}
    </h4>
);

const repoLangs = (languages: ILang) => (
    <div className="repoLangsDiv">
        {languages.nodes.map(({ name }, index) => <h4 key={index} className="repoLang">{name}</h4>)}
    </div>
);

export const REPO_INFO = gql`
    query {
        user(login: "SCollinA") {
            repositories(first: 100, orderBy: {field:UPDATED_AT, direction:DESC}) {
                nodes {
                    name
                    createdAt
                    description
                    languages(first: 10) {
                        nodes {
                            name
                        }
                    }
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
    repositories: IRepo;
}

export interface IRepo {
    nodes: INode[];
}

export interface INode {
    name: string;
    createdAt: string;
    description: string;
    languages: ILang;
}

export interface ILang {
    nodes: ILangNode[];
}

export interface ILangNode {
    name: string;
}
