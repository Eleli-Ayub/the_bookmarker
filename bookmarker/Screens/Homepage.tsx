import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../Components/Homepage/Header";
import Activityscrollbar from "../Components/Homepage/Activityscrollbar";
import { Homepagestyles } from "../Styles/Homepage";
import Activitylistsection from "../Components/Homepage/Activitylistsection";
import Gototasks from "../Components/Homepage/Gototasks";
import Taskslist from "../Components/Homepage/Taskslist";
import Footer from "../Components/Footer";

const Homepage = () => {
  return (
    <ScrollView style={Homepagestyles.homepageWrapper}>
      <Header />
      <Activityscrollbar />
      <Activitylistsection />
      <Gototasks />
      <Taskslist />
      <Footer />
    </ScrollView>
  );
};

export default Homepage;
