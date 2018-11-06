import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeContainer from "../screens/HomeContainer";
import SearchContainer from "../screens/SearchContainer";
import AddAssetContainer from "../screens/AddAssetContainer";

const HomeStack = createStackNavigator({
  Home: HomeContainer,
});

HomeStack.navigationOptions = {
  tabBarLabel: "Asset List",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-list"}
    />
  ),
};

const AddAssetStack = createStackNavigator({
  AddAsset: AddAssetContainer,
});

AddAssetStack.navigationOptions = {
  tabBarLabel: "Add Asset",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-add" : "md-add"}
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchContainer,
});

SearchStack.navigationOptions = {
  tabBarLabel: "Barcode Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AddAssetStack,
  SearchStack,
});
