import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "../../screens/account/Account";
import LoginScreen from "../../screens/account/Login";
import RegisterScreen from "../../screens/account/Register";

export const AccountScreenStacks = createStackNavigator({
  Restaurants: {
    screen: AccountScreen,
    navigationOptions: () => ({
      title: "Account",
    }),
  },
  Logins: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "Login",
    }),
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      title: "Register",
    }),
  },
});

export default AccountScreenStacks;
