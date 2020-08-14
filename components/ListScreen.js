import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';
import Header from './Header';
import ListItem from './ListItem'

class ListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isDone: [],
            inputText: null,
            showDone: true,
            showDoneTitle: "Hide Done",
            key: 0,
        };
    }

    addTaskItem(taskName) {
        if (this.state.inputText !== "") {
            let isDoneUpdate = this.state.isDone;
            isDoneUpdate.push(false);
            this.setState({
                isDone: isDoneUpdate,
                items: this.state.items.concat(
                    <ListItem text={taskName} toggleDone={(num) => this.toggleDone(num)} isDone={false} key={this.state.key} num={this.state.key} />
                ),
                inputText: "",
                key: this.state.key + 1
            });
        }
    }

    toggleDone(num) {
        let isDoneUpdate = this.state.isDone
        isDoneUpdate[num] = isDoneUpdate[num] ? false : true;
        this.setState({ isDone: isDoneUpdate })
    }

    renderItems() {
        let items = this.state.items;
        let isDone = this.state.isDone;
        let shortenedList = [];
        if (!this.state.showDone) {
            items.forEach(function (item, index) {
                if (!isDone[index]) { shortenedList.push(item) }
            });
            return shortenedList;
        }
        return this.state.items;
    }

    onButtonPress() {
        this.setState({showDone: !this.state.showDone})
        if (this.state.showDone) {
            this.setState({showDoneTitle: "Show Done"})
        } else {
            this.setState({showDoneTitle: "Hide Done"})
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Header title="To Do List" />
                <Button
                    onPress={() => this.onButtonPress()}
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