import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function App() {
  const name = "manu";

  const getName = (firstName, secondName, thirdName) => {
    return firstName + " " + secondName + " " + thirdName;
    // return `${firstName} ${secondName} ${thirdName}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>je m'appelle {getName("roger", "stan", "frank")}</Text>
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
