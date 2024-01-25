import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        // onPress={onPressLearnMore}
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
