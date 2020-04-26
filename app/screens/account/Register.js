import React, { useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../components/account/registerForm";
import Toast from "react-native-easy-toast";
export default function RegisterScreen() {
  const toastRef = useRef();
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/5tenedores.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <RegisterForm toastRef={toastRef}/>
      </View>
      <Toast ref={toastRef} position="center" opacity={0.5}></Toast>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 20,
    marginLeft: 20,
  },
});
