import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';
import Header from './Header';
import ListItem from './ListItem'

/**
 * This class component controls and contains our to-do list, including all of the 
 * to-do items that have been added and their current state (done or not done)
 */
class ListScreen extends Component {

    // Counter for generating unique keys for each list item in our app
    // NOTE: This could be a state variable, but since updating it doesn't 
    // require us to re-render the object, we'll keep it as a class variable
    key = 0;

    /**
     * Constructs this component 
     * @param {*} props Any props that were given to build this component
     *                  (none required).
     */
    constructor(props) {
        super(props);
        this.state = {
            items: [], // List of objects {name, isDone} representing to-do items
            inputText: "", // The current text in the input field
            showDone: true, // Toggles if completed tasks should be shown
            showDoneTitle: "Hide Done Tasks" // The text to be shown on the button
        };
    }

    /**
     * Adds the given task to the to-do list
     * @param {*} taskName Name of the task
     */
    addTaskItem(taskName) {

        // If the input field isn't empty
        if (this.state.inputText !== "") {

            // Create object representing the task
            const newTask = {
                name: taskName,
                isDone: false,
                key: this.key
            }
            this.key ++; // Increment our key counter

            // Add the new object to the component state, and reset the inputText field
            this.setState({
                items: this.state.items.concat(newTask), 
                inputText: ""
            });
        }
    }

    /**
     * Toggles the completion status of the task object defined by the given key
     * @param {*} key Key of the to-do object to change
     */
    toggleDone(key) {

        // Toggle the 'isDone' field of the target to-do object
        const newItems = this.state.items.map((item) => {
            if (item.key === key) { item.isDone = !item.isDone; }
            return item;
        });

        // Updates state to re-render the to-do list
        this.setState({items: newItems});
    }

    /**
     * Returns an array of the rendered to-do items
     */
    renderItems() {

        // For each to-do object, create a corresponding ListItem element,
        // passing the right props to the component
        return this.state.items.map((item) => {
            if (this.state.showDone || !item.isDone) {
                return <ListItem 
                    text={item.name} 
                    toggleDone={() => this.toggleDone(item.key)} 
                    isDone={item.isDone} 
                    key={item.key}
                    />
            }
        });
    }

    /**
     * Toggles the showDone state property between true and false,
     * to be called when the "toggle" button is pressed
     */
    onToggleShow() {
        this.setState({showDone: !this.state.showDone})
    }

    /**
     * Renders this component!
     */
    render() {
        return (
            <View style={styles.container}>

                <Header title="To Do List" />

                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Add Item"
                        value={this.state.inputText}
                        onChangeText={text => this.setState({ inputText: text })}
                        onSubmitEditing={() => this.addTaskItem(this.state.inputText)}
                    />
                    <Button
                        onPress={() => this.addTaskItem(this.state.inputText)}
                        title={"Add Task"}
                    />
                </View>

                <Button
                    onPress={() => this.onToggleShow()}
                    title={this.state.showDone? "Hide Done Tasks" : "Show Done Tasks"}
                    style={styles.button}
                />

                <ScrollView style={styles.itemContainer}>
                    {this.renderItems()}
                </ScrollView>

            </View>
        );
    }
}

// The styles used for this component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45
    },
    textInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10
    },
    textInput: {
        flex: 1,
        borderColor: "#cccccc",
        borderWidth: 3,
        paddingVertical: 5,
        paddingHorizontal: 14,
        fontSize: 18,
        color: "#666666",
        margin: 10
    },
    submitButton: {
        marginHorizontal: 5,
    },
    itemContainer: {
        flex: 1,
        flexDirection: "column"
    }
});

export default ListScreen;