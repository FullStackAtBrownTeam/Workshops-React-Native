import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';
import Header from './Header';
import ListItem from './ListItem'
import { useState, useEffect } from "react";

class ListScreen extends Component {
    // const [inputText, setText] = useState("");
    // const [items, setItems] = useState([]);

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            inputText: null,
            showDone: true
        };
    }

    setText(text) {
        this.setState({
            inputText: text
        });
    }

    addTaskItem(taskName) {
        if (this.state.inputText !== "") {
            this.setState({
                items: this.state.items.concat(
                    <ListItem text={taskName} isDone={false} />
                ),
                inputText: ""
            });
        }
    }

    toggleShowDone() {
        this.setState({
            showDone: this.state.showDone
        });
    }

    renderItems() {
        let items = this.state.items;
        if (this.state.hideDone) {
            items = items.filter(item => {
                console.log(item.state);
                item.state.isDone
            });
        }
        return this.state.items;
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title="To Do List" />
                {/* <Button 
                    onPress={() => this.toggleShowDone()}
                    title="Toggle Show Done"
                /> */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Add Item"
                    value={this.state.inputText}
                    onChangeText={text => this.setText(text)}
                    onSubmitEditing={() => this.addTaskItem(this.state.inputText)}
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
    textInput: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#cccccc",
        borderWidth: 3,
        paddingVertical: 5,
        paddingHorizontal: 14,
        fontSize: 18,
        color: "#666666",
        margin: 10
    },
    itemContainer: {
        flex: 1,
        flexDirection: "column"
        // justifyContent: "flex-start"
    }
});

export default ListScreen;