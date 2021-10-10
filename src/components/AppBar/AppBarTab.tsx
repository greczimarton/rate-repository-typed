import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";
import Theme from "../../utils/Theme";

const styles = StyleSheet.create({
    text: {
        ...Theme.Heading,
        paddingLeft: 10,
    },
});

interface PropTypes {
    text: string;
    to: string;
    onPress?: () => void;
}

const AppBarTab = ({ text, to, onPress }: PropTypes) => {
    if (onPress) {
        return (
            <Pressable onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        );
    } else {
        return (
            <Link to={`/${to}`}>
                <Text style={styles.text}>{text}</Text>
            </Link>
        );
    }
};

export default AppBarTab;
