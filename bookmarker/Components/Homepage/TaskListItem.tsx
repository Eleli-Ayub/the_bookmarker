import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Taskslist_I } from "../../Global/Types";
import { Homepagestyles } from "../../Styles/Homepage";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const TaskListItem = ({ number, text, isDone }: Taskslist_I) => {
  return (
    <TouchableOpacity style={Homepagestyles.taskWrapper}>
      <Text style={Homepagestyles.taskNumberText}>{number}</Text>
      <View style={Homepagestyles.taskCheckbox}>
        {isDone ? (
          <Ionicons
            style={Homepagestyles.taskCheckbox}
            name="ios-checkmark-done-sharp"
            size={20}
            color="green"
          />
        ) : (
          <MaterialIcons
            style={Homepagestyles.taskCheckbox}
            name="remove-done"
            size={20}
            color="red"
          />
        )}
      </View>
      <Text style={Homepagestyles.taskTitleText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TaskListItem;
