import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHORIZE_SIGNIN } from "../graphql/mutations";
import { AuthorizeInput } from "../utils/Types";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [authorizeSignIn] = useMutation(AUTHORIZE_SIGNIN);

    const signIn = async ({ username, password }: AuthorizeInput) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data } = await authorizeSignIn({
            variables: { credentials: { username, password } },
        });

        await authStorage.setAccessToken(data.authorize.accessToken);
        void apolloClient.resetStore();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return data;
    };

    return signIn;
};

export default useSignIn;
