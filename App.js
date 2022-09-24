import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { MainScreens } from './src/screens/MainScreens/MainScreen';
import { SignIn } from './src/screens/SignIn';
import { SignUp } from './src/screens/SignUp';
import {store} from './src/store/index'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="MainScreens" component={MainScreens} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
