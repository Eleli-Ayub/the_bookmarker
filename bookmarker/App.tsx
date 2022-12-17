import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Auth/Login";
import Register from "./Screens/Auth/Register";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
