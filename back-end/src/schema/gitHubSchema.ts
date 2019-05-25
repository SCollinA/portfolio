import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import dotenv from "dotenv";
import { introspectSchema, makeRemoteExecutableSchema } from "graphql-tools";
import fetch from "node-fetch";
dotenv.config();

const { GITHUB_TOKEN } = process.env;

const http = new HttpLink({
    fetch,
    uri: "https://api.github.com/graphql",
});

const link = setContext((_, __) => ({
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  })).concat(http);

export default async () => {
  const schema = await introspectSchema(link);

  const executableSchema = makeRemoteExecutableSchema({
    link,
    schema,
  });

  return executableSchema;
};
