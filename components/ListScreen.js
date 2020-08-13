import React, { Fragment } from 'react';
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import Header from './Header';
import ListItem from './ListItem'
import { useState, useEffect } from "react";

export default function ListScreen() {
    const [inputText, setText] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = () => {
        console.log(inputText)
    }

    return (
        <View style={styles.container}>
            <Header title="To Do List" />
            <TextInput
                placeholder="Add Item"
                onChangeText={text => setText(text)}
                style={styles.textInput}
                onSubmitEditing={() => onSubmit()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
    },
    textInput: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 3,
        paddingVertical: 5,
        paddingHorizontal: 14,
        fontSize: 18,
        color: "#666666",
        marginBottom: 15
    },
});