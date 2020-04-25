import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Loaging from "../../components/Loading";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
export default function AccountScreen() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login == null) {
    return <Loaging isVisible={true} text="Loading..."></Loaging>;
  }

  if (login) {
    return <UserLogged />;
  } else {
    return <UserGuest />;
  }
}
