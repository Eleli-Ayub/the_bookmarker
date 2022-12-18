import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../Components/Homepage/Header";
import Activityscrollbar from "../Components/Homepage/Activityscrollbar";
import { Homepagestyles } from "../Styles/Homepage";

const Homepage = () => {
  return (
    <SafeAreaView style={Homepagestyles.homepageWrapper}>
      <Header />
      <Activityscrollbar />
    </SafeAreaView>
  );
};

export default Homepage;
