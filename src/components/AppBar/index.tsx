import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import { AUTHORIZED_USER } from "../../graphql/queries";
import { useApolloClient, useQuery } from "@apollo/client";
import useAuthStorage from "../../hooks/useAuthStorage";
import Theme from "../../utils/Theme";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Theme.Colors.appBarBg,
        display: "flex",
        flexDirection: "row",
    },
    userNameText: {
        ...Theme.Heading,
        flex: 1,
    },
});

const AppBar = () => {
    const authorizedUser = useQuery(AUTHORIZED_USER);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const signOut = async () => {
        await authStorage.removeAccessToken();
        void apolloClient.resetStore();
    };
    const userIsLoggedIn =
        authorizedUser != null &&
        authorizedUser.data != null &&
        authorizedUser.data.authorizedUser != null;
    console.log(authorizedUser.data);

    if (userIsLoggedIn) {
        return (
            <View style={styles.container}>
                <ScrollView horizontal>
                    <AppBarTab text="Repositories" to="/" />
                    <AppBarTab
                        text="Sign Out"
                        to="signOut"
                        onPress={() => {
                            void signOut();
                        }}
                    />
                </ScrollView>
                <Text style={styles.userNameText}>
                    {authorizedUser.data.authorizedUser.username}
                </Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <ScrollView horizontal>
                    <AppBarTab text="Sign In" to="signIn" />
                    <AppBarTab text="Repositories" to="/" />
                </ScrollView>
            </View>
        );
    }
};

export default AppBar;
