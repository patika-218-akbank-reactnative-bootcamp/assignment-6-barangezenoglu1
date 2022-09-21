import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { firebase } from "@react-native-firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useGetsyncStorageValue } from "../../hooks/getAsyncStorageValue";
import { setActiveUser } from "../../features/UserSlice/userSlice";

export const Home = () => {
    const dispatch = useDispatch();
    const asyncStorageValue = useGetsyncStorageValue("registeredUser");
    useEffect(() => {
        if (asyncStorageValue?.length > 0) {
          dispatch(setActiveUser(asyncStorageValue));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [asyncStorageValue]);
    return (
        <View><Text>Home</Text></View>
    )
}