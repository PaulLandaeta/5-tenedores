import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "../../screens/account/Account";
import LoginScreen from "../../screens/account/Login";

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
});

export default AccountScreenStacks;
