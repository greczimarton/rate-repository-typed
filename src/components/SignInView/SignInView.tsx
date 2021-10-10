import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Field, Formik, FormikValues } from "formik";
import * as yup from "yup";
import Theme from "../../utils/Theme";
import TextField from "./TextField";
import useSignIn from "../../hooks/useSignIn";
import { AuthorizeInput } from "../../utils/Types";
import { useHistory } from "react-router-native";

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
    const signIn = useSignIn();
    const history = useHistory();

    const formik = {
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (
            values: FormikValues,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            { resetForm }: { resetForm: any }
        ) => {
            const { username, password } = values;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            resetForm({});
            const credentials: AuthorizeInput = {
                username: String(username),
                password: String(password),
            };

            try {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const data = await signIn(credentials);
                console.log(
                    `${username}'s accessToken: ${data.authorize.accessToken}'`
                );
                history.push("/");
            } catch (e) {
                console.log(e);
            }
        },
    };

    return (
        <Formik
            initialValues={formik.initialValues}
            onSubmit={formik.onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => (
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
