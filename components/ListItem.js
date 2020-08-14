import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ListItem(props) {

    // State variable that tracks if this to-do item is marked as done
    const [isDone, setIsDone] = useState(props.isDone? props.isDone : false);

    return(
        <View style={[styles.container, isDone? styles.isDoneContainer : undefined]}>
            <Text style={[styles.itemText, isDone? styles.isDoneText : undefined]}>{props.text}</Text>
            <Button
                onPress={() => setIsDone(!isDone)}
                title={isDone? "Mark Undone" : "Mark Done"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '2%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '3%',
        paddingBottom: '3%',

        backgroundColor: '#e9e9e9'
    },
    itemText: {
        marginLeft: '3%',
        marginRight: '3%',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',

        color: '#000000'
    },
    isDoneContainer: {
        backgroundColor: '#ffffff'
    },
    isDoneText: {
        color: '#cccccc'
    }
});