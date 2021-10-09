import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import Theme from "../../Theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Theme.Colors.appBarBg,
        // ...
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab text="Sign In" to="signIn" />
                <AppBarTab text="Repositories" to="/" />
            </ScrollView>
        </View>
    );
};

export default AppBar;
