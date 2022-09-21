import React from "react";
import { Text, View } from "react-native";
import { firebase } from "@react-native-firebase/auth";

export const Home = () => {
    const user = firebase.auth().currentUser;
    return (
        <View><Text>Home</Text></View>
    )
}