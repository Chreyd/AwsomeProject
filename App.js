import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function App() {
  const obj = [
    { id: 1, name: "stan1", age: 21 },
    { id: 2, name: "stan2", age: 22 },
    { id: 3, name: "stan3", age: 23 },
    { id: 4, name: "stan4", age: 24 },
    { id: 5, name: "stan5", age: 25 },
    { id: 6, name: "stan6", age: 26 },
  ];

  const [family, setFamily] = useState(obj);
  // console.log(family);

  /*   La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
   */
  return (
    <View style={styles.container}>
      {family.map((e) => {
        return (
          <View key={e.id} style={styles.viewList}>
            <Text style={styles.text}>
               Nom : {e.name} | âge: {e.age}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#BFBF",
    paddingVertical: 30,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 4,
    color: "#fff"
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
  viewList:{
    marginTop: 30,
    backgroundColor: "purple",
    padding:19,
    marginHorizontal: 10
  }
});
