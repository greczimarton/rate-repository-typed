import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";
import RepositoryList from "./RepositoryView/RepositoryList";
import AppBar from "./AppBar";
import SignInView from "./SignInView/SignInView";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: "#e1e4e8",
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Route path="/signIn" exact>
                    <SignInView />
                </Route>
                <Route path="/signOut" exact>
                    <SignInView />
                </Route>
                <Redirect to="" />
            </Switch>
        </View>
    );
};

export default Main;
