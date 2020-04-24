import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";

const SearchListScreenStacks = createStackNavigator({
  TopRestaurants: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "Search",
    }),
  },
});

export default SearchListScreenStacks;
