import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Loginstyles } from "../../Styles/Loginstyle";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Inputfield from "../../Components/LoginComponents/Inputfield";
const Register = () => {
  const navigation = useNavigation();
  const [firstName, setFirstname] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, SEtPassword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");

  return (
    <ScrollView>
      <ImageBackground
        style={Loginstyles.imageBg}
        source={require("../../assets/Images/ayub1.jpg")}
      >
        <StatusBar hidden />
        <View style={Loginstyles.loginWrapper}>
          <Text style={Loginstyles.registerTitleText}>Sign-Up</Text>

          <Inputfield
            inputvalue={firstName}
            setText={setFirstname}
            placeholder="Email FirstName"
          />

          <Inputfield
            inputvalue={lastName}
            setText={setLastName}
            placeholder="Enter Lastname"
          />
          <Inputfield
            inputvalue={email}
            setText={setEmail}
            placeholder="Enter email Adress"
          />

          <Inputfield
            inputvalue={phoneNumber}
            setText={setPhoneNumber}
            placeholder="Enter phone number"
          />
          <Inputfield
            inputvalue={email}
            setText={setEmail}
            placeholder="Email Adress"
          />
          <Inputfield
            inputvalue={password}
            setText={SEtPassword}
            placeholder="Enter Password"
          />
          <Inputfield
            inputvalue={confirmPassword}
            setText={setconfirmPassword}
            placeholder="Confirm Password"
          />

          <TouchableOpacity style={Loginstyles.loginBtn}>
            <Text style={Loginstyles.loginBtnText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={Loginstyles.signupLink}>
              {" "}
              Already have an account. Sign in?
            </Text>
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
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Register;
