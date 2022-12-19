import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TaskStyles } from "../../Styles/Tasksstyles";
import { useNavigation } from "@react-navigation/native";

const Tasksheader = () => {
  const navigation = useNavigation();
  return (
    <View style={TaskStyles.Headerwrapper}>
      <Text style={TaskStyles.HeaderTitle}>My Tasks</Text>
      <Text style={TaskStyles.HeaderSubtitle}>View all your tasks here...</Text>
      <TouchableOpacity
        style={TaskStyles.HeaderButton}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={TaskStyles.HeaderButtonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tasksheader;
