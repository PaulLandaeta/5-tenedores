import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validation";
import { withNavigation } from "react-navigation";
import * as firebase from "firebase";
import Loading from "../Loading";
function RegisterForm(props) {
  const { toastRef, navigation } = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [useLoading, setUseLoading] = useState(false);

  const register = async () => {
    setUseLoading(true);
    if (!email || !password || !repeatPassword) {
      console.log("todos los campos son requeridos");
      toastRef.current.show("todos los campos son obligatorios");
    }
    if (!validateEmail(email)) {
      console.log("el email no es correcto");
      toastRef.current.show("el email no es valido");
    } else if (password != repeatPassword) {
      console.log("los password no son iguales");
      toastRef.current.show("los passwords no son iguales");
    } else {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log("ususario creado");
          navigation.navigate("Restaurants");
        })
        .catch((e) => {
          console.log("error", e);
          toastRef.current.show("Error al crear la cuenta");
        });
    }
    setUseLoading(false);
  };
  return (
    <View style={styles.formContainer} behavior="padding" enabled>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
            onChange={() => console.log("press password")}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Input
        placeholder="Repetir Contraseña"
        password={true}
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={(e) => setRepeatPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={() => register()}
      />
      <Loading text="Creando cuenta" isVisible={useLoading} />
    </View>
  );
}

export default withNavigation(RegisterForm);

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  iconRight: {
    color: "#c1c1c1",
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
});
