import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import { View, StyleSheet } from "react-native";
import { Repository } from "../../../Types";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        padding: 10,
    },
});

const RepositoryItem = ({ item }: { item: Repository }) => {
    return (
        <View style={styles.container}>
            <FirstRow item={item} />
            <SecondRow item={item} />
        </View>
    );
};

export default RepositoryItem;
