import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Homepagestyles } from "../../Styles/Homepage";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    setCurrentDate(date + "/" + month + "/" + year);
    setCurrentTime(hours + ":" + min);
  });
  return (
    <View style={Homepagestyles.headerWrapper}>
      <Text style={Homepagestyles.greetingsText}>Good afternoon</Text>
      <Text style={Homepagestyles.nameText}>Mr. Eleli</Text>
      <Text style={Homepagestyles.welcomeText}>Welcome Back</Text>
      <View style={Homepagestyles.dateTime}>
        <Text style={Homepagestyles.dateText}>{currentDate}</Text>
        <Text style={Homepagestyles.timeText}>{currentTime}</Text>
      </View>
      <TouchableOpacity
        style={Homepagestyles.myTasksButton}
        onPress={() => {
          navigation.navigate("Tasks");
        }}
      >
        <Text style={Homepagestyles.myTasksButtonText}>My Tasks</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
