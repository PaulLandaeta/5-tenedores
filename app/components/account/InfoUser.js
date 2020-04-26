import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as imagePicker from "expo-image-picker";
import { Avatar } from "react-native-elements";

export default function infoUser(props) {
  const {
    userInfo: { uid, displayName, email, photoURL },
    setReloadData,
    toastRef,
    setIsLoading,
    setTextLoading,
  } = props;
  const changeAvatar = async () => {
    const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const resultPermissionCamera =
      resultPermission.permissions.cameraRoll.status;
    console.log(resultPermissionCamera);
    const result = await imagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (result.cancelled) {
      console.log("has cancelado");
      toastRef.current.show("se ha cancelado");
    } else {
      uploadImage(result.uri, uid).then(() => {
        console.log("imagen subida");
        updateImage(uid);
      });
    }
  };

  const uploadImage = async (uri, nameImage) => {
    setTextLoading("Actualizando Avatar");
    setIsLoading(true);
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase.storage().ref().child(`avatar/${nameImage}`);

    return ref.put(blob);
  };

  const updateImage = (uid, nameImage) => {
    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(async (result) => {
        const update = {
          photoURL: result,
        };
        await firebase.auth().currentUser.updateProfile(update);
        setReloadData(true);
        setIsLoading(false);
      })
      .catch(() => {
        console.log("error");
        toastRef.current.show("se ha cancelado");
      });
  };
  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        onEditPress={changeAvatar}
        containerStyle={styles.userInfoAvatar}
        source={{
          uri: photoURL
            ? photoURL
            : "https://api.adorable.io/avatars/285/abott@adorable.png",
        }}
      />
      <View>
        <Text style={styles.displayName}>
          {" "}
          {displayName ? displayName : "Anonimo"}
        </Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    marginTop: 20,
    marginBottom: 20,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  displayName: {},
});
