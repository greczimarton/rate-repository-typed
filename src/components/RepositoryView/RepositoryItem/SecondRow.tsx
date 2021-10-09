import React from "react";
import { View, StyleSheet } from "react-native";
import { Repository } from "../../../Types";
import DataTag from "./DataTag";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});

const SecondRow = ({ item }: { item: Repository }) => {
    return (
        <View style={styles.container}>
            <DataTag name="Stars" count={item.stargazersCount} />
            <DataTag name="Forks" count={item.forksCount} />
            <DataTag name="Reviews" count={item.reviewCount} />
            <DataTag name="Rating" count={item.ratingAverage} />
        </View>
    );
};

export default SecondRow;
