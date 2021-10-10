import React from "react";
import { View, Image, StyleSheet } from "react-native";
import DescriptionContainer from "./DescriptionContainer";
import { Repository } from "../../../utils/Types";

const styles = StyleSheet.create({
    FirstRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    Image: {
        height: 60,
        width: 60,
        borderRadius: 5,
    },
});
const FirstRow = ({ item }: { item: Repository }) => {
    return (
        <View style={styles.FirstRow}>
            <Image source={{ uri: item.ownerAvatarUrl }} style={styles.Image} />
            <DescriptionContainer
                description={item.description}
                fullName={item.fullName}
                language={item.language}
            />
        </View>
    );
};

export default FirstRow;
