import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useGetsyncStorageValue } from "../../hooks/getAsyncStorageValue";
import { setActiveUser } from "../../features/UserSlice/userSlice";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import storage from "@react-native-firebase/storage";
import { CustomButton } from "../../components/CustomButton";

export const Home = () => {
  const dispatch = useDispatch();
  const themeColors = useSelector((state) => state.theme);
  const asyncStorageValue = useGetsyncStorageValue("registeredUser");
  const [isUploading, setIsUploading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [downloadURL, setDownloadURL] = useState();
  const [uploadTask, setUploadTask] = useState();
  const [uploadTaskSnapshot, setUploadTaskSnapshot] = useState({});
  const onMediaSelect = async (media) => {
    if (!media.didCancel) {
      setIsUploading(true);
      const ref = storage().ref(media.assets[0].fileName);
      const task = ref.putFile(media.assets[0].uri);
      setUploadTask(task);
      task.on("state_changed", (taskSnapShot) => {
        setUploadTaskSnapshot(taskSnapShot);
      });

      task.then(async () => {
        const downloadURL = await ref.getDownloadURL();
        setDownloadURL(downloadURL);
        setIsUploading(false);
        setUploadTaskSnapshot({});
      });
    }
  };
  const handleTakePhoto = () => {
    launchCamera({ mediaType: "photo" }, onMediaSelect);
  };
  const handleSelectPhoto = () => {
    launchImageLibrary({ mediaType: "image" }, onMediaSelect);
  };
  useEffect(() => {
    if (asyncStorageValue?.length > 0) {
      dispatch(setActiveUser(asyncStorageValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncStorageValue]);
  return (
    <View style={styles.container(themeColors)}>
      <CustomButton
        title={"Select from library"}
        buttonContainerStyle={styles.buttons(themeColors)}
        buttonTextStyle={styles.buttonTexts(themeColors)}
        onPress={handleSelectPhoto}
      />
      <CustomButton
        title={"Take a picture"}
        buttonContainerStyle={styles.buttons(themeColors)}
        buttonTextStyle={styles.buttonTexts(themeColors)}
        onPress={handleTakePhoto}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: function (mode) {
    return {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: mode.theme.white,
    };
  },
  buttons: function (mode) {
    return {
      marginTop: 20,
      height: 250,
      width: 250,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      backgroundColor: mode.theme.black,
    };
  },
  buttonTexts: function (mode) {
    return {
      fontSize: 20,
      fontWeight: "bold",
      color: mode.theme.white,
    };
  },
});
