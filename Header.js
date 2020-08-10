import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        backgroundColor: "#A0522D",
        height: 50,
    },
    text: {
        color: "white",
        fontSize: 30,
        paddingTop: 10,
    }
});