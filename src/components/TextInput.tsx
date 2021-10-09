import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

interface propTypes {
    style?: any;
    onChangeText: any;
    onBlur: any;
    value: any;
}

const TextInput = ({ style, onChangeText, onBlur, value }: propTypes) => {
    const textInputStyle = [style];
    return (
        <NativeTextInput
            style={textInputStyle}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
        />
    );
};

export default TextInput;
