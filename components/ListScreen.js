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
        console.log("toggling done for " + num);
        const newItems = this.state.items.map((item, i) => {
            if (i === num) {
                item.isDone = !item.isDone;
            }
            return item;
        });
        console.log(newItems);
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
                <Button
                    onPress={() => this.onToggleShow()}
                    title={this.state.showDoneTitle}
                    style={styles.button}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Add Item"
                    value={this.state.inputText}
                    onChangeText={text => this.setState({ inputText: text })}
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