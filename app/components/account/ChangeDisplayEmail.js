import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import * as firebase from "firebase";
export default function ChangeDisplayEmail(props) {
  const { displayEmail, setVisibleModal, setReloadData, toastRef } = props;
  const [newEmail, setNewEmail] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateDisplayEmail = () => {
    setError(null);
    if (!newEmail) {
      setError("El email de usuario es obligatorio");
    } else {
      setIsLoading(true);
      const update = {
        email: newEmail,
      };
      firebase
        .auth()
        .currentUser.updateProfile(update)
        .then(() => {
          setIsLoading(false);
          setReloadData(true);
          toastRef.current.show("User updating");
        })
        .catch(() => {
          setError("Error a la hora de actulizar");
          setIsLoading(false);
        });
    }
  };
  return (
    <View style={styles.view}>
      <Input
        placeholder="Correo"
        containerStyle={styles.input}
        defaultValue={displayEmail && displayEmail}
        onChange={(e) => setNewEmail(e.nativeEvent.text)}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#c2c2c2",
        }}
        errorMessage={error}
      />
      <Button
        title="Cambiar Correo"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
        onPress={updateDisplayEmail}
        loading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
});
