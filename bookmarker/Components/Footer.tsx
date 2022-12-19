import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Loginstyles } from "../Styles/Loginstyle";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { Footerstyles } from "../Styles/Footerstyles";
const Footer = () => {
  return (
    <View style={Footerstyles.footerWrapper}>
      <Text style={[Footerstyles.footerText]}>Made at Eleli Afrika Inc.</Text>
      <Text style={[Footerstyles.footerText]}>For public use</Text>
      <Text style={[Footerstyles.footerText]}>All right reserved</Text>
      <Text style={[Footerstyles.footerText]}>254 719 722 292</Text>
      <Text style={[Footerstyles.footerText]}>Lesosioayub@gmail.com</Text>
      <TouchableOpacity style={[Footerstyles.termsWrapper]}>
        <Text style={[Footerstyles.termsText]}>Terms</Text>
      </TouchableOpacity>
      <View style={Loginstyles.socials}>
        <AntDesign
          style={Loginstyles.icon}
          name="instagram"
          size={30}
          color="#8a3ab9"
        />
        <Entypo
          style={Loginstyles.icon}
          name="facebook"
          size={30}
          color="#87CEEB"
        />

        <FontAwesome
          style={Loginstyles.icon}
          name="twitter-square"
          size={30}
          color="#1DA1F2"
        />
        <FontAwesome5
          style={Loginstyles.icon}
          name="phone-square-alt"
          size={30}
          color="white"
        />
      </View>
      <Text style={Footerstyles.rightsText}>
        eleli africa, allrights reserved
      </Text>
    </View>
  );
};

export default Footer;
