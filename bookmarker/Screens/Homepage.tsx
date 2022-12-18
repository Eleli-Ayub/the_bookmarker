import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../Components/Homepage/Header";
import Activityscrollbar from "../Components/Homepage/Activityscrollbar";
import { Homepagestyles } from "../Styles/Homepage";
import Activitylistsection from "../Components/Homepage/Activitylistsection";

const Homepage = () => {
  return (
    <ScrollView style={Homepagestyles.homepageWrapper}>
      <Header />
      <Activityscrollbar />
      <Activitylistsection />
    </ScrollView>
  );
};

export default Homepage;
