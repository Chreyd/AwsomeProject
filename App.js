import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  const obj = {
    name: "Frank",
    age: 23,
  };

  const [info, setInfo] = useState(obj);

  /*   const [info, setInfo]=useState({
    name: "Frank",
    age: 23,
  }); */

  const handlePress = () => {
    info.name == "Frank"
      ? setInfo({ name: "Clark", age: 45 })
      : setInfo({ name: "Frank", age: 23 });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Nom : {info.name}</Text>
        <Text>Age : {info.age}</Text>
      </View>
      <Button
        onPress={() => handlePress()}
        title="Cliquez ICI"
        color="red"
        accessibilityLabel="Learn more about this purple button"
        disabled={false}
      />
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
