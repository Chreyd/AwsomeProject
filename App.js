import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Person = (props) => {
  return (
    <View>
      {props.age ? (
        <Text style={styles.text}>
        -  Je suis: {props.name} , j'ai {props.age} ans et je suis un {props.children}
        </Text>
      ) : (
        <Text style={styles.text}>-  Je suis: .{props.name} et je suis un {props.children}</Text>
      )}
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Person name="Roger" age="43" >Animal</Person>
      <Person name="Stan" >Humain</Person>
      <Person name="Steve" age="58" >Humain</Person>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 4,
  },
});
