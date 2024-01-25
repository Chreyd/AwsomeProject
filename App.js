import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function App() {

  const [name, setName]=useState("Stan");

  const handlePress = ()=>{

    name=="Stan"?(setName('Pat')) : (setName('Stan')) ;



    // if (name=="Stan") {
    //   setName('Pat');
    // } else {
    //   setName('Stan')
    // }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text> Son nom est {name}</Text>
      </View>
      <Button
        onPress={handlePress}
        // onPress={()=>setName('pat')}
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
