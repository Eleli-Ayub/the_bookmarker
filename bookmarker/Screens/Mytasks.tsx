import { View, Text, ScrollView } from "react-native";
import React from "react";
import Tasksheader from "../Components/Taskspage/Tasksheader";
import Taskslist from "../Components/Homepage/Taskslist";
import Footer from "../Components/Footer";
import { TaskStyles } from "../Styles/Tasksstyles";

const Mytasks = () => {
  return (
    <ScrollView>
      <Tasksheader />
      <View style={TaskStyles.Taskswrapper}>
        <Taskslist />
        <Footer />
      </View>
    </ScrollView>
  );
};

export default Mytasks;
