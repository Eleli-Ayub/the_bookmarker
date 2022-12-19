import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Homepagestyles } from "../../Styles/Homepage";
import { useNavigation } from "@react-navigation/native";

const Gototasks = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={Homepagestyles.gotoTasksBtn}
      onPress={() => {
        navigation.navigate("Tasks");
      }}
    >
      <Text>Go To My Tasks</Text>
    </TouchableOpacity>
  );
};

export default Gototasks;
