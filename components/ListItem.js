import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ListItem(props) {

    // State variable that tracks if this to-do item is marked as done
    // TODO: use prop?
    const [isDone, setIsDone] = useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.itemText}>{props.text}</Text>
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
        marginLeft: '5%',
        marginRight: '5%',
    },
    itemText: {
        marginLeft: '3%',
        marginRight: '3%',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap'
    }
});