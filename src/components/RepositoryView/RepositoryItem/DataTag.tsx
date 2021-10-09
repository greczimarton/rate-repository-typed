import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Theme from "../../../Theme";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10,
    },
    numberText: {
        fontWeight: "700",
    },
});

const DataTag = ({ name, count }: { name: string; count: number }) => {
    const countString: string =
        count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{countString}</Text>
            <Text>{name}</Text>
        </View>
    );
};

export default DataTag;
