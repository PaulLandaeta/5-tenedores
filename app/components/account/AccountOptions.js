import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ListItem } from "react-native-elements";
import Modal from "../Modal";
import ChangeDisplayEmail from "../account/ChangeDisplayEmail";
import ChangeDisplayName from "../account/ChangeDisplayName";
import ChangeDisplayPassword from "../account/ChangeDisplayPassword";
export default function AccountOptions(props) {
  const { userInfo, toastRef, setReloadData } = props;
  console.log(userInfo);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const menuOptions = [
    {
      title: "Cambiar Nombre y Apellido",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => {
        selectComponent("displayName");
      },
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => {
        selectComponent("displayEmail");
      },
    },
    {
      title: "Cambiar Password",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => {
        selectComponent("displayPassword");
      },
    },
  ];

  const selectComponent = (key) => {
    switch (key) {
      case "displayName":
        console.log("name");
        setRenderComponent(
          <ChangeDisplayName
            displayName={userInfo.displayName}
            setVisibleModal={setIsVisibleModal}
            setReloadData={setReloadData}
            toastRef={toastRef}
          />
        );
        setIsVisibleModal(true);
        break;
      case "displayPassword":
        console.log("password");
        setRenderComponent(
          <ChangeDisplayPassword
            displayEmail={userInfo.email}
            setVisibleModal={setIsVisibleModal}
            setReloadData={setReloadData}
            toastRef={toastRef}
          />
        );
        setIsVisibleModal(true);
        break;
      case "displayEmail":
        console.log("displayEmail");
        setRenderComponent(
          <ChangeDisplayEmail
            displayEmail={userInfo.email}
            setVisibleModal={setIsVisibleModal}
            setReloadData={setReloadData}
            toastRef={toastRef}
          />
        );
        setIsVisibleModal(true);
        break;
      default:
        break;
    }
  };
  return (
    <View>
      {menuOptions.map((menu, index) => (
        <ListItem
          key={index}
          title={menu.title}
          leftIcon={{
            type: menu.iconType,
            name: menu.iconNameLeft,
            color: menu.iconColorLeft,
          }}
          rightIcon={{
            type: menu.iconType,
            name: menu.iconNameRight,
            color: menu.iconColorRight,
          }}
          onPress={menu.onPress}
          containerStyle={styles.menuList}
        />
      ))}
      {renderComponent && (
        <Modal isVisible={isVisibleModal} setIsVisible={setIsVisibleModal}>
          <View>{renderComponent}</View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  menuList: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
});
