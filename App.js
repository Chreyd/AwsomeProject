import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState(" ");
  const [name, setName] = useState();
  const [age, setAge] = useState();

  return (
    <View style={styles.container}>
      <Text>Nom: {name} </Text>
      <TextInput
        style={styles.input}
        // value={text}
        onChangeText={(value) => setName(value)}
        placeholder="indiquez votre nom"
      />
      <Text>Age: {age} </Text>
      <TextInput
        style={styles.input}
        // value={text}
        onChangeText={(value) => setAge(value)}
        placeholder="indiquez votre âge"
        keyboardType='number-pad'
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BFBF",
    paddingVertical: 30,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 4,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "90%",
    borderRadius: 20,
  },
});
