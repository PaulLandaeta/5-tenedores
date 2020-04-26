import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import InfoUser from "../../components/account/InfoUser";
import Toast from "react-native-easy-toast";
import Loading from "../../components/Loading";
import AccountOptions from "../../components/account/AccountOptions";
export default function UserLogged() {
  const [userInfo, setUserInfo] = useState({});
  const [reloadData, setReloadData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textLoading, setTextLoading] = useState("");

  const toastRef = useRef();
  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      console.log(user);
      setUserInfo(user.providerData[0]);
    })();
    setReloadData(false);
  }, [reloadData]);
  return (
    <View style={styles.viewUserInfo}>
      <InfoUser
        toastRef={toastRef}
        userInfo={userInfo}
        setReloadData={setReloadData}
        setIsLoading={setIsLoading}
        setTextLoading={setTextLoading}
      />
      <AccountOptions
        userInfo={userInfo}
        setReloadData={setReloadData}
        toastRef={toastRef}
      />
      <Button
        title="Cerrar Session "
        buttonStyle={styles.btnCloseSession}
        titleStyle={styles.btnTitleStyle}
        onPress={() => firebase.auth().signOut()}
      />
      <Toast ref={toastRef} position="center" opacity={0.5}></Toast>
      <Loading text={textLoading} isVisible={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
  btnCloseSession: {
    marginTop: 20,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnTitleStyle: {
    color: "#00a680",
  },
});
