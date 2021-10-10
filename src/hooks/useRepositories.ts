import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
    });

    return { data, error, loading };
    /* eslint-enable @typescript-eslint/no-unsafe-assignment */
};

export default useRepositories;
