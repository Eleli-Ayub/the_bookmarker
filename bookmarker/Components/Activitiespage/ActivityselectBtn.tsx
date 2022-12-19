import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ActivityselectBtn_I } from "../../Global/Types";
import { Activitystyles } from "../../Styles/Activitiestyle";

const ActivityselectBtn = ({ text }: ActivityselectBtn_I) => {
  return (
    <TouchableOpacity style={Activitystyles.selectBtn}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default ActivityselectBtn;
