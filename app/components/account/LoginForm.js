import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Input, Button } from "react-native-elements";
import * as firebase from "firebase";
import { validateEmail } from "../../utils/Validation";
import { withNavigation } from "react-navigation";
function LoginForm(props) {
  const { toastRef, navigation } = props;
  console.log(toastRef);
  const [useEmail, setUseEmail] = useState("");
  const [usePassword, setPasswordEmail] = useState("");
  const login = () => {
    if (validateEmail(useEmail)) {
      firebase
        .auth()
        .signInWithEmailAndPassword(useEmail, usePassword)
        .then(() => {
          console.log("holaa login");
          toastRef.current.show("Login Successfully");
          navigation.navigate("Restaurants");
        })
        .catch(() => {
          console.log("Error");
          toastRef.current.show("error to login");
        });
    } else {
      toastRef.current.show("error email");
    }
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
        onChange={(e) => setUseEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Password"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
        onChange={(e) => setPasswordEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Button
        title="Iniciar Sesion"
        buttonStyle={styles.btnForm}
        containerStyle={styles.btnContainer}
        onPress={() => login()}
      />
    </View>
  );
}

export default withNavigation(LoginForm);
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  iconRight: {
    color: "#c1c1c1",
  },
  btnForm: {
    backgroundColor: "#00a680",
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
});
