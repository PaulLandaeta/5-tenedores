import React, { useRef } from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import LoginForm from "../../components/account/LoginForm";
import Toast from "react-native-easy-toast";
import LoginFacebook from "../../components/account/LoginFacebook";

export default function LoginScreen(props) {
  const { navigation } = props;
  const toastRef = useRef();

  return (
    <ScrollView>
      <Image
        source={require("../../../assets/5tenedores.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount navigation={navigation}></CreateAccount>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewContainer}>
        <LoginFacebook />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.5}></Toast>
    </ScrollView>
  );
}

function CreateAccount(props) {
  const { navigation } = props;
  return (
    <Text>
      Aun no te registraste?
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("Register")}
      >
        {" "}
        Registrate
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },
});
