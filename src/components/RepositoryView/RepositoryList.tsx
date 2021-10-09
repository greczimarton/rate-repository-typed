import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import useRepositories from "../../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    container: {
        flex: 1,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any */
    const { data } = useRepositories();

    const repositoryNodes = data
        ? data.repositories.edges.map((edge: any) => edge.node)
        : [];

    return (
        <View style={styles.container}>
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={RepositoryItem}
            />
        </View>
    );
    /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any */
};

export default RepositoryList;
