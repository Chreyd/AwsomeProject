import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const obj = [
    { id: "1", name: "stan1", age: 21 },
    { id: "2", name: "stan2", age: 22 },
    { id: "3", name: "stan3", age: 23 },
    { id: "4", name: "stan4", age: 24 },
    { id: "5", name: "stan5", age: 25 },
    { id: "6", name: "stan6", age: 26 },
  ];

  const [family, setFamily] = useState(obj);

  const renderItem = ({ item }) => (
    <View style={styles.viewList}>
      <Text style={styles.text}>
        Nom : {item.name} | âge: {item.age}
      </Text>
    </View>
  );

  // au niveau du composant FlatList le chargement des élément qui ne s'affiche pas n'est pass fait tant que le scroll n'a pas été effectué. C'est mieu de l'utiliser pour un meilleur chargement des données
  return (
    <View style={styles.container}>
      <FlatList
        data={family}
        renderItem={renderItem}
        // renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
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
    color: "#fff",
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
  viewList: {
    marginTop: 30,
    backgroundColor: "purple",
    padding: 39,
    marginHorizontal: 10,
  },
});
