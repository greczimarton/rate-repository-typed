import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ErrorMessage, Field, FieldProps, FormikProps, useField } from "formik";
import Theme from "../../Theme";

export interface propTypes {
    name: string;
    props: unknown;
}

interface TextProps extends FieldProps {
    placeholder: string;
    secureTextEntry: boolean;
}

const TextField = ({ field, placeholder, secureTextEntry }: TextProps) => {
    const [_field, meta, helpers] = useField(field.name);

    const showError = meta.touched && meta.error;

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
        },
        errorText: {
            marginTop: 5,
            color: "#d73a4a",
        },
        input: {
            height: 40,
            margin: 5,
            borderWidth: 1,
            padding: 10,
            borderColor: showError ? "#d73a4a" : Theme.Colors.primary,
            backgroundColor: "#FFFFFF",
            fontSize: 18,
            borderRadius: 6,
        },
    });

    return (
        <View>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={styles.input}
                value={field.value}
                placeholder={placeholder}
                onChangeText={(value) => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </View>
    );
};
// <>
//     <TextInput
//         onChangeText={(value) => helpers.setValue(value)}
//         onBlur={() => helpers.setTouched(true)}
//         value={field.value}
//         error={showError}
//         {...props}
//     />
//     {showError && <Text style={styles.errorText}>{meta.error}</Text>}
// </>

export default TextField;
