import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { Homepagestyles } from "../../Styles/Homepage";
import { activities } from "../../Global/Data";
import ActivityscrollbarItem from "./ActivityscrollbarItem";

const Activityscrollbar = () => {
  return (
    <View style={Homepagestyles.activityScrollViewWrapper}>
      <View style={Homepagestyles.activityScrollViewTitles}>
        <Text style={Homepagestyles.activityScrollViewTitle}>
          Soon to happen activities
        </Text>
        <TouchableOpacity style={Homepagestyles.viewAllActivityBtn}>
          <Text style={Homepagestyles.viewAllActivityBtnText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {activities.map((activity, index) => (
          <ActivityscrollbarItem
            key={index}
            title={activity.title}
            location={activity.location}
            time={activity.time}
            description={activity.description}
            index={index}
          />
        ))}
      </ScrollView>
      {/* <FlatList
        data={activities}
        renderItem={ActivityscrollbarItem}
        keyExtractor={(item, index) => index.toString()}
      /> */}
    </View>
  );
};

export default Activityscrollbar;
