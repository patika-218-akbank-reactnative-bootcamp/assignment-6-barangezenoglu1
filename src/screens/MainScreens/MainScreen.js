import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Map } from "./Map";

export const MainScreens = () => {
  const loadIcons = (route) => {
    if (route.name === "Home") {
      return <Ionicons name="md-home-outline" size={30} color={"black"} />;
    } else if (route.name === "Search") {
      return <Ionicons name="map-outline" size={30} color={"black"} />;
    } else if (route.name === "Profile") {
      return <Ionicons name="settings-outline" size={30} color={"black"} />;
    }
  };
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: () => loadIcons(route),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Map} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};