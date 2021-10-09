import React from "react";
import { Text, StyleSheet, View } from "react-native";

const LanguageTag = ({ language }: { language: string }) => {
    const styles = StyleSheet.create({
        LanguageTagContainer: {
            backgroundColor: "#0366d6",
            alignSelf: "flex-start",
            padding: 5,
            borderRadius: 5,
        },
        LanguageTagText: {
            color: "#FFFFFF",
        },
    });

    return (
        <View style={styles.LanguageTagContainer}>
            <Text style={styles.LanguageTagText}>{language}</Text>
        </View>
    );
};

export default LanguageTag;
