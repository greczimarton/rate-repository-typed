import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";

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
    const { repositories } = useRepositories();

    /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return */
    const repositoryNodes = repositories
        ? repositories.edges.map((edge: any) => edge.node)
        : [];
    /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return */

    return (
        <View style={styles.container}>
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={RepositoryItem}
            />
        </View>
    );
};

export default RepositoryList;
