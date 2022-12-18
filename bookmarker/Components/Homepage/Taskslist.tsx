import { View, Text } from "react-native";
import React from "react";
import Activitylistsectiontitle from "./Activitylisttitle";
import { Homepagestyles } from "../../Styles/Homepage";
import { Tasks } from "../../Global/Data";
import TaskListItem from "./TaskListItem";

const Taskslist = () => {
  const titles = ["All", "Overdue", "Upcoming", "Done"];
  return (
    <View>
      <Text>Taskslist</Text>
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
      <Text style={Homepagestyles.activitiesTitle}>Tasks</Text>
      <View style={Homepagestyles.tasksWrapper}>
        {Tasks.map((activity, index) => {
          return (
            <TaskListItem
              key={index}
              number={index + 1}
              text={activity.title}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Taskslist;
