import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Field, Formik, FormikValues } from "formik";
import * as yup from "yup";
import Theme from "../../Theme";
import TextField from "./TextField";

const formik = {
    initialValues: {
        username: "",
        password: "",
    },
    onSubmit: (values: FormikValues, { resetForm }: { resetForm: any }) => {
        resetForm({});
        console.log("values", values);
    },
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderColor: Theme.Colors.primary,
        backgroundColor: "#FFFFFF",
        fontSize: 18,
        borderRadius: 6,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    },
    signInButton: {
        backgroundColor: Theme.Colors.primary,
        borderColor: Theme.Colors.primary,
        borderWidth: 1,
        margin: 5,
        padding: 10,
        borderRadius: 6,
    },
    signInText: {
        color: "#FFFFFF",
        alignSelf: "center",
        fontSize: 18,
    },
});

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

const SignInView = () => {
    fetch("https://my-api.com/get-end-point");
    return (
        <Formik
            initialValues={formik.initialValues}
            onSubmit={formik.onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, values }) => (
                <View style={styles.container}>
                    <Field
                        label="Username"
                        placeholder="Username"
                        name="username"
                        component={TextField}
                    />
                    <Field
                        label="Password"
                        placeholder="Password"
                        name="password"
                        secureTextEntry
                        component={TextField}
                    />
                    <Pressable
                        style={styles.signInButton}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.signInText}>Sign In</Text>
                    </Pressable>
                </View>
            )}
        </Formik>
    );
};

export default SignInView;
