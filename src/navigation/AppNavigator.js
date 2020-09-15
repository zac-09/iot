import React from "react";
import { createAppContainer } from "react-navigation";

import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import Colors from "./../constants/colors";
import ChartScreen from "./../screens/chart/ChartScreen";
import HomeScreen from "../screens/home/HomeScreen";
import SwitchScreen from "./../screens/switch/SwitchScreen";
import { Ionicons } from "@expo/vector-icons";
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.accent : "",
  },
  headerTitleStyle: {
    //   fontFamily: "nunito-bold",
    // color: Colors.primary,
  },
  headerBackTitleStyle: {
    //   fontFamily: "lato",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.accent,
};
const homeNavigator = createStackNavigator(
  {
    home: HomeScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-home" size={23} color="#fff" />
      ),
    },
  }
);
const switchNavigator = createStackNavigator(
  {
    switch: SwitchScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-switch" size={23} color="#fff" />
      ),
    },
  }
);
const chartNavigator = createStackNavigator(
  {
    chart: ChartScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-pie" size={23} color="#fff" />
      ),
    },
  }
);

const AppNavigator = createDrawerNavigator(
  {
    home: homeNavigator,
    graphs: chartNavigator,
    switch: switchNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
      inactiveLabelStyle: {
        color: "#fff",
      },
    },
    defaultNavigationOptions: {
      header: null,
    },
    drawerBackgroundColor: "rgba(16,29,44,0.8)",
  }
);

export default createAppContainer(AppNavigator);
