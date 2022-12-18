import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Activitylistsectiontitle_I } from "../../Global/Types";
import { Homepagestyles } from "../../Styles/Homepage";

const Activitylistsectiontitle = ({
  callback,
  text,
}: Activitylistsectiontitle_I) => {
  return (
    <TouchableOpacity
      onPress={callback}
      style={Homepagestyles.ActivitylistsectiontitleBtn}
    >
      <Text style={Homepagestyles.ActivitylistsectiontitleBtnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Activitylistsectiontitle;
