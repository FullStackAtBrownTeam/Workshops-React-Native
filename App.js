import React from 'react';
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import { useState, useEffect } from "react";

export default function App() {
  const [inputText, setText] = useState("");

  return (
    <View style={styles.container}>
      <Header title="To Do List"/>
      <TextInput
        placeholder="Add Item"
        onChangeText={text => setText(text)}
        style={styles.textInput}
      />
      <ScrollView>
        <ListItem text={inputText}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    paddingVertical: 5,
    paddingHorizontal: 14,
    fontSize: 18,
    color: "#666666",
    marginBottom: 15
},
});
