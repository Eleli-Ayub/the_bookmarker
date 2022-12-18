import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Homepagestyles } from "../../Styles/Homepage";

const Gototasks = () => {
  return (
    <TouchableOpacity style={Homepagestyles.gotoTasksBtn}>
      <Text>Go To My Tasks</Text>
    </TouchableOpacity>
  );
};

export default Gototasks;
