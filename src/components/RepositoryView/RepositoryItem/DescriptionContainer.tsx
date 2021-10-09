import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LanguageTag from "./LanguageTag";
import Theme from "../../../Theme";

interface PropType {
    fullName: string;
    description: string;
    language: string;
}

const DescriptionContainer = ({
    fullName,
    description,
    language,
}: PropType) => {
    const styles = StyleSheet.create({
        DescriptionContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: 10,
            flex: 1,
        },
        TextData: {
            fontFamily: Theme.fonts.main,
        },
    });

    return (
        <View style={styles.DescriptionContainer}>
            <Text
                style={{
                    ...styles.TextData,
                    fontWeight: "700",
                }}
            >
                {fullName}
            </Text>
            <Text
                style={{
                    ...styles.TextData,
                    color: Theme.Colors.textSecondary,
                }}
            >
                {description}
            </Text>
            <LanguageTag language={language} />
        </View>
    );
};

export default DescriptionContainer;
