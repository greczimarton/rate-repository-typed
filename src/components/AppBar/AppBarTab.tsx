import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Link, Redirect } from "react-router-native";
import Theme from "../../Theme";

const styles = StyleSheet.create({
    text: {
        ...Theme.Heading,
        paddingLeft: 10,
    },
});

interface PropTypes {
    text: string;
    to: string;
}

const AppBarTab = ({ text, to }: PropTypes) => {
    return (
        <Link to={`/${to}`}>
            <Text style={styles.text}>{text}</Text>
        </Link>
    );
};

export default AppBarTab;
