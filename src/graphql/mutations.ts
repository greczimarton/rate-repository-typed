import { gql } from "@apollo/client";

export const AUTHORIZE_SIGNIN = gql`
    mutation Authorize_SignIn($credentials: AuthorizeInput) {
        authorize(credentials: $credentials) {
            accessToken
        }
    }
`;
