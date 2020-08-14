import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';
import Header from './Header';
import ListItem from './ListItem'

class ListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            inputText: "",
            showDone: true,
            showDoneTitle: "Hide Done Tasks"
        };
    }

    addTaskItem(taskName) {
        if (this.state.inputText !== "") {
            const newTask = {
                name: taskName,
                isDone: false
            }
            this.setState({
                items: this.state.items.concat(newTask),
                inputText: ""
            });
        }
    }

    toggleDone(num) {
        const newItems = this.state.items.map((item, i) => {
            if (i === num) { item.isDone = !item.isDone; }
            return item;
        });
        this.setState({items: newItems});
    }

    renderItems() {
        return this.state.items.map((item, i) => {
            if (this.state.showDone || !item.isDone) {
                return <ListItem 
                    text={item.name} 
                    toggleDone={() => this.toggleDone(i)} 
                    isDone={item.isDone} 
                    key={i}
                    />
            }
        });
    }

    onToggleShow() {
        this.setState({showDone: !this.state.showDone})
        if (this.state.showDone) {
            this.setState({showDoneTitle: "Show Done Tasks"})
        } else {
            this.setState({showDoneTitle: "Hide Done Tasks"})
        }

    }

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
                        title="Add Task"
                    />
                </View>
                <Button
                    onPress={() => this.onToggleShow()}
                    title={this.state.showDoneTitle}
                    style={styles.button}
                />
                <ScrollView style={styles.itemContainer}>
                    {this.renderItems()}
                </ScrollView>
            </View>
        );
    }
}

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