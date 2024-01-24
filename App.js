import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Person = (props) => {
  return (
    <View>
      {props.age ? (
        <Text>
          Je suis: {props.name} et j'ai {props.age} ans
        </Text>
      ) : (
        <Text>Je suis: .{props.name}</Text>
      )}
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Person name="Roger" age="43" />
      <Person name="Stan" />
      <Person name="VAR" age="58" />
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
    fontSize: 30,
  },
});
