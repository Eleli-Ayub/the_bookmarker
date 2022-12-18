import { View, Text } from "react-native";
import React from "react";
import { Scrollbar_I } from "../../Global/Types";
import { Homepagestyles } from "../../Styles/Homepage";
import { EvilIcons, Foundation } from "@expo/vector-icons";

const ActivityscrollbarItem = ({
  title,
  location,
  time,
  description,
}: Scrollbar_I) => {
  return (
    <View style={Homepagestyles.activityItem}>
      <Text style={Homepagestyles.activityTitleText}>{title}</Text>
      <Text style={Homepagestyles.activityLocationText}>
        <EvilIcons name="location" size={18} color="black" />
        {location}
      </Text>
      <Text style={Homepagestyles.activityTimeText}>
        <EvilIcons name="clock" size={20} color="black" />
        {time}
      </Text>
      <Text style={Homepagestyles.description}>{description}</Text>
    </View>
  );
};

export default ActivityscrollbarItem;
