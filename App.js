import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Loading from "./Loading";
export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Ejecutando useEffect");
    console.log("Loading es ", isLoading);
  }, [isLoading]);

  console.log(isLoading);
  console.log(setIsLoading);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {isLoading === true && <Loading />}
      <Button title="Solid Button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
