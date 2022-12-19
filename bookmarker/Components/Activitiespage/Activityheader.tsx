import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Activitystyles } from "../../Styles/Activitiestyle";
import { useNavigation } from "@react-navigation/native";

const Activityheader = () => {
  const navigation = useNavigation();
  return (
    <View style={Activitystyles.activityHeaderWrapper}>
      <Text style={Activitystyles.headerTitle}>My </Text>
      <Text style={Activitystyles.headerTitle}>Activities</Text>
      <Text style={Activitystyles.headerSubtitle}>
        View all your activities here...
      </Text>
      <TouchableOpacity
        style={Activitystyles.headerBtn}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={Activitystyles.headerBtnText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Activityheader;
