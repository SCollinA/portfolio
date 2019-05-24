import dotenv from "dotenv";
dotenv.config();

// const { GITHUB_TOKEN } = process.env;

export const resolvers = {
    Query: {
        getRepos: () => {
        // (obj: any, args, context, info) => {
            return "Hello World!";
        },
    },
};
