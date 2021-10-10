import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FieldProps, useField } from "formik";
import Theme from "../../utils/Theme";

export interface propTypes {
    name: string;
    props: unknown;
}

interface TextProps extends FieldProps {
    placeholder: string;
    secureTextEntry: boolean;
}

const TextField = ({ field, placeholder, secureTextEntry }: TextProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                value={field.value}
                placeholder={placeholder}
                onChangeText={(value) => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </View>
    );
};

export default TextField;
