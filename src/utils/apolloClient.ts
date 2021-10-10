/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";
import AuthStorage from "./authStorage";

const { apollo_uri } = Constants.manifest?.extra;

const httpLink = createHttpLink({
    uri: apollo_uri,
});

const createApolloClient = (authStorage12: AuthStorage) => {
    const authLink = setContext(async (_, { headers }) => {
        try {
            const accessToken = await authStorage12.getAccessToken();
            return {
                headers: {
                    ...headers,
                    authorization: accessToken ? `Bearer ${accessToken}` : "",
                },
            };
        } catch (e) {
            console.log(e);
            return {
                headers,
            };
        }
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;
