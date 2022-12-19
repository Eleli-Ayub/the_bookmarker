import { View, Text } from "react-native";
import React from "react";
import Activitylistsectiontitle from "./Activitylisttitle";
import { Homepagestyles } from "../../Styles/Homepage";
import { Tasks } from "../../Global/Data";
import TaskListItem from "./TaskListItem";

const Taskslist = () => {
  const titles = ["All Tasks", "Not Done", "Done Tasks"];
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
        {Tasks.map((task, index) => {
          return (
            <TaskListItem
              key={index}
              number={index + 1}
              text={task.title}
              isDone={task.idDone}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Taskslist;
