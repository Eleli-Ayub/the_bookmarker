import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Taskslist_I } from "../../Global/Types";
import { Homepagestyles } from "../../Styles/Homepage";

const TaskListItem = ({ number, text }: Taskslist_I) => {
  return (
    <TouchableOpacity style={Homepagestyles.taskWrapper}>
      <Text style={Homepagestyles.taskNumberText}>{number}</Text>
      <View style={Homepagestyles.taskCheckbox}></View>
      <Text style={Homepagestyles.taskTitleText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TaskListItem;
