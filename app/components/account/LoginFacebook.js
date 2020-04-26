import React from "react";
import { SocialIcon } from "react-native-elements";

export default function LoginFacebook() {
  const login = () => {
    console.log("login facebook");
  };
  return (
    <SocialIcon
      title="Iniciar session con Facebook"
      button
      type="facebook"
      onPress={() => login()}
    ></SocialIcon>
  );
}
