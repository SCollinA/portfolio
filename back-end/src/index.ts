import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import express from "express";
import { makeExecutableSchema, mergeSchemas } from "graphql-tools";
import helmet from "helmet";
import http from "http";
import path from "path";
import { rateLimiter } from "./redis/rateLimiter";
import getGitHubSchema from "./schema/gitHubSchema";
import { resolvers } from "./schema/resolvers";
import { typeDefs } from "./schema/typeDefs";

const app = express();
app.use(rateLimiter);
app.use(helmet());
app.disable("x-powered-by");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(express.static(path.join(__dirname, "../../front-end/build")));

const server = http.createServer(app);
const config = {
    port: 4020,
};

export const startServer = async () => {
    const gitHubSchema = await getGitHubSchema();

    const apollo = new ApolloServer({
        resolvers,
        schema: mergeSchemas({
            schemas: [
                gitHubSchema,
                makeExecutableSchema({
                    resolvers,
                    typeDefs,
                }),
            ],
        }),
        typeDefs,
    });

    apollo.applyMiddleware({ app });

    await server.listen(config.port, () =>
        console.log( // tslint:disable-line
            `🚀 Server ready at`,
           `http://localhost:${config.port}${apollo.graphqlPath}`,
        ),
    );
};

export const stopServer = async () => {
    await server.close();
};

startServer();
