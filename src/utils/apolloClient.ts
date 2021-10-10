import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";

const httpLink = createHttpLink({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    uri: Constants.manifest?.extra.apollo_uri,
});

const createApolloClient = () => {
    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;
