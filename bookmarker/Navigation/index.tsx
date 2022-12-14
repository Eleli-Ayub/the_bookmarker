import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Auth/Login";
import Register from "../Screens/Auth/Register";
import { StatusBar } from "expo-status-bar";
import Homepage from "../Screens/Homepage";
import Mytasks from "../Screens/Mytasks";
import Myactivities from "../Screens/Myactivities";

const index = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Homepage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tasks"
        component={Mytasks}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Activities"
        component={Myactivities}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default index;
