import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Activityheader from "../Components/Activitiespage/Activityheader";
import ActivityselectBtn from "../Components/Activitiespage/ActivityselectBtn";
import { Activitystyles } from "../Styles/Activitiestyle";
import Footer from "../Components/Footer";
import Activitylistsection from "../Components/Homepage/Activitylistsection";
import Addactivitymodal from "../Components/Activitiespage/Addactivitymodal";
import { TaskStyles } from "../Styles/Tasksstyles";
import { Ionicons } from "@expo/vector-icons";

const Myactivities = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const buttons = ["All", "Soon", "Todo", "Done"];
  return (
    <ScrollView>
      <Activityheader />
      <Addactivitymodal
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
      <View style={Activitystyles.activityWrapper}>
        <View style={Activitystyles.selectBtns}>
          {buttons.map((button) => (
            <ActivityselectBtn text={button} />
          ))}
        </View>
        <Activitylistsection />
        <Footer />
      </View>
    </ScrollView>
  );
};

export default Myactivities;
