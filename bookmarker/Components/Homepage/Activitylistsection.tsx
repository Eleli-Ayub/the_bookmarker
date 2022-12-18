import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Activitylistsectiontitle from "./Activitylisttitle";
import { Homepagestyles } from "../../Styles/Homepage";
import { activities } from "../../Global/Data";
import Activitylistitem from "./Activitylistitem";
const Activitylistsection = () => {
  const titles = [
    "Today Activities",
    "This week's activities",
    "This month activities",
  ];
  return (
    <View style={Homepagestyles.activitiesWrapper}>
      <View style={Homepagestyles.activities}>
        {titles.map((title, index) => {
          return (
            <Activitylistsectiontitle
              key={index}
              callback={() => {}}
              text={title}
            />
          );
        })}
      </View>
      <Text style={Homepagestyles.activitiesTitle}>Activities</Text>
      <View style={Homepagestyles.activitiesTitles}>
        <Text style={Homepagestyles.activitiesTitlesTitle}>Title</Text>
        <Text style={Homepagestyles.activitiesTitlesDate}>Date/Time</Text>
      </View>
      <View>
        {activities.map((activity, index) => {
          return (
            <Activitylistitem
              key={index}
              number={index + 1}
              title={activity.title}
              date={activity.date}
              time={activity.time}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Activitylistsection;
