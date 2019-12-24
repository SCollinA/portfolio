import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import dotenv from "dotenv";
import { introspectSchema, makeRemoteExecutableSchema } from "graphql-tools";
import fetch from "node-fetch";
dotenv.config();

const { GITHUB_TOKEN } = process.env;

const options: HttpLink.Options = {
    fetch: fetch as any,
    uri: "https://api.github.com/graphql",
};

const http = new HttpLink(options);

const link = setContext((_request, _prevContext) => ({
    headers: {
      authorization: `Bearer ${GITHUB_TOKEN}`,
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
