import React from "react";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "react-navigation-tabs";
import RestaurantScreenStacks from "./RestaurantStacks";
import TopListScreenStacks from "./TopListsStacks";
import SearchListScreenStacks from "./SearchStacks";
import AccountScreenStacks from "./account/Account";

const NavigationStacks = createBottomTabNavigator(
  {
    Restaurants: {
      screen: RestaurantScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Restaurants",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    TopLists: {
      screen: TopListScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Ranking",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="star-outline"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    SearchList: {
      screen: SearchListScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    AccountList: {
      screen: AccountScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Account",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: "Restaurants",
    order: ["Restaurants", "TopLists", "SearchList", "AccountList"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680",
    },
  }
);

export default createAppContainer(NavigationStacks);
