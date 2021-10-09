import React from "react";
import { Pressable, Text, View } from "react-native";
import TextField from "./TextField";

const SignInForm = () => {
    return (
        <View>
            <TextField name="username" placeholder="UserName"/>
            <TextField name="password" placeholder="UserName"/>
            <Pressable>
                <Text>Sign In</Text>
            </Pressable>
        </View>
    );
};

export default SignInForm;
