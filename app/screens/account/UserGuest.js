import React from "react";
import { StyleSheet, Image, ScrollView, View, Text } from "react-native";
import { Button } from "react-native-elements";
export default function UserGuest() {
  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/original.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Consulta tu perfil</Text>
      <Text style={styles.description}>
        Hola no se que texto es esto pero lo voy a agregar ......... hola
      </Text>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.containerStyle}
          title="Ver tu Perfil"
          onPress={() => console.log("TEST")}
        ></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 30,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
  containerStyle: {
    width: "70%",
  },
});
