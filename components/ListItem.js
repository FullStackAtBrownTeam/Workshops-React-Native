import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ListItem(props) {

    // State variable that tracks if this to-do item is marked as done
    const [isDone, setIsDone] = useState(props.isDone ? props.isDone : false);

    const handleDone = () => {
        setIsDone(!isDone);
        props.toggleDone(props.num)
    }

    return(
        <View style={[styles.container, isDone ? styles.isDoneContainer : styles.isNotDoneContainer]}>
            <Text style={[styles.itemText, isDone ? styles.isDoneText : styles.isNotDoneText]}>{props.text}</Text>
            <Button
                onPress={() => handleDone()}
                title={isDone ? "Mark Incomplete" : "Mark Done"}
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
    },
    itemText: {
        marginLeft: '3%',
        marginRight: '3%',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
    },
    isDoneContainer: {
        backgroundColor: '#ffffff'
    },
    isDoneText: {
        color: '#cccccc'
    },
    isNotDoneContainer: {
        backgroundColor: '#e9e9e9'
    },
    isNotDoneText: {
        color: '#000000'
    }
});