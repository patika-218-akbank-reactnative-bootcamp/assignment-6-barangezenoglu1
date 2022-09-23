import React from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { firebase } from "@react-native-firebase/auth";

export const Map = () => {
  return (
    <View>
      <MapView style={styles.map}>
        <Marker
          coordinate={{
            latitude: 40.012681,
            longitude: 28.978803,
          }}
        >
          <Image
          style={styles.imageStyle}
            rounded="full"
            source={{ uri: firebase.auth().currentUser.photoURL}}
          />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  imageStyle: {
    width: 20,
    height: 20,
    borderRadius: 10
  }
});
