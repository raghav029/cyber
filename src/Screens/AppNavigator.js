import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './normal/Splash';
import Parent from './normal/Parent';
import Login from './Login';
import Phone from './SancharSarathi';
import Malacious from './Malacious';
import Encryption from './Encryption';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName="SplashScreen">
         <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Encryption"
          component={Encryption}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Phone"
          component={Phone}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Malacious"
          component={Malacious}
          options={{ headerShown: false }}
        />
         </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})