import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ActivityListItem_I } from "../../Global/Types";
import { Homepagestyles } from "../../Styles/Homepage";

const Activitylistitem = ({
  number,
  title,
  date,
  time,
}: ActivityListItem_I) => {
  return (
    <TouchableOpacity style={Homepagestyles.activityListItemWrapper}>
      <Text style={Homepagestyles.activityListIndexnumber}>{number}.</Text>
      <Text style={Homepagestyles.activityListItemText}>{title}</Text>
      <View style={Homepagestyles.activityTimes}>
        <Text style={Homepagestyles.activityListDate}>{date}</Text>
        <Text style={Homepagestyles.activityListTime}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Activitylistitem;
