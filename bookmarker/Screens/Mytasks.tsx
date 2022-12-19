import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Tasksheader from "../Components/Taskspage/Tasksheader";
import Taskslist from "../Components/Homepage/Taskslist";
import Footer from "../Components/Footer";
import { TaskStyles } from "../Styles/Tasksstyles";
import { Ionicons } from "@expo/vector-icons";
import Addtaskmodal from "../Components/Taskspage/Addtaskmodal";

const Mytasks = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <Tasksheader />
      <Addtaskmodal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Ionicons
        onPress={() => {
          setModalVisible(true);
        }}
        style={TaskStyles.addBtn}
        name="add-circle"
        size={50}
        color="black"
      />

      <View style={TaskStyles.Taskswrapper}>
        <Taskslist />
        <Footer />
      </View>
    </ScrollView>
  );
};

export default Mytasks;
