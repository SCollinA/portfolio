import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import {
    ApolloLink,
    // split
} from "apollo-link";
// import { setContext } from "apollo-link-context";
// import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
// import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "apollo-utilities";
// import fetch from "isomorphic-fetch";

const httpLink = new HttpLink({
    // uri: "http://localhost:4020/graphql",
    uri: "https://collinargo.com:4020/graphql",
});

  // Create a WebSocket link:
// const wsLink = process.browser ? new WebSocketLink({
//     options: {
//         reconnect: true,
//         // the below would be used to have authenticated subscriptions
//         // connectionParams: {
//             //   authToken: localStorage.getItem('auth-token')
//             // }
//     },
//     uri: `ws://localhost:4000/graphql`,
//   }) : undefined;

// const link = process.browser ? split(
//     // split based on operation type
//     ({ query }) => {
//       const { kind, operation } = getMainDefinition(query);
//       return kind === "OperationDefinition" && operation === "subscription";
//     },
//     wsLink, // comes here if above callback returns true
//     httpLink,
//   ) : httpLink;

export const client = new ApolloClient({
    // fetch,
    cache: new InMemoryCache(),
    link: ApolloLink.from([
        // onError(({ graphQLErrors, networkError }) => {
            //     if (graphQLErrors) {
                //         graphQLErrors.map(({ message, locations, path }) =>
                //             console.log(
                    //                 `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    //             ),
                    //         );
                    //     }
                    //     if (networkError) { console.log(`[Network error]: ${networkError}`) }
                    // }),
        // setContext((_, { headers }) => {
        //     const token = process.env.REACT_APP_GITHUB_TOKEN;
        //     // localStorage.getItem("auth-token");
        //     return {
        //         headers: {
        //             ...headers,
        //             authorization: token ? `Bearer ${token}` : "",
        //         },
        //     };
        // }),
        // link,
        httpLink,
        ]),
    });
