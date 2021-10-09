import { useState, useEffect } from "react";

const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    const [loading, setLoading] = useState(false);

    const fetchRepositories = async () => {
        setLoading(true);

        const response = await fetch(
            "http://192.168.0.18:5000/api/repositories"
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const json = await response.json();

        setRepositories(json);
        setLoading(false);
    };

    useEffect(() => {
        void fetchRepositories();
    }, []);

    return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
