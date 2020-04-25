import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "../../screens/account/Account";

export const AccountScreenStacks = createStackNavigator({
  Restaurants: {
    screen: AccountScreen,
    navigationOptions: () => ({
      title: "Account",
    }),
  },
});

export default AccountScreenStacks;
