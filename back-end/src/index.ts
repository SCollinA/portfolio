import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import http from "http";
import { resolvers } from "./schema/resolvers";
import { typeDefs } from "./schema/typeDefs";

export const apollo = new ApolloServer({
    resolvers,
    typeDefs,
});

const app = express();
app.use(helmet());
app.disable("x-powered-by");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(express.static("build"));

apollo.applyMiddleware({ app });

export const server = http.createServer(app);
export const config = {
    port: 4020,
};
server.listen(config.port, () =>
    console.log( // tslint:disable-line
        `🚀 Server ready at`,
        `http://localhost:${config.port}${apollo.graphqlPath}`,
    ),
);
