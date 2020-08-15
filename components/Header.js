import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * A simple functional component that renders a title
 * @param {*} props Any props that were given to build this component.
 */
export default function Header(props) {

    // Renders a single Text component in a View component
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
    },
    text: {
        fontSize: 30,
        paddingTop: 20,
        paddingBottom: 20
    }
});