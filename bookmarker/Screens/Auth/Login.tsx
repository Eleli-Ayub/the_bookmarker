import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { Loginstyles } from "../../Styles/Loginstyle";
import { StatusBar } from "expo-status-bar";
import Inputfield from "../../Components/LoginComponents/Inputfield";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ImageBackground
      style={Loginstyles.imageBg}
      source={require("../../assets/Images/ayub1.jpg")}
    >
      <StatusBar hidden />
      <View style={Loginstyles.loginWrapper}>
        <Text style={Loginstyles.titleText}>Sign-in</Text>
        <Inputfield
          inputvalue={email}
          setText={setEmail}
          placeholder="Email Adress"
        />

        <Inputfield
          inputvalue={password}
          setText={setPassword}
          placeholder="Password"
        />
        <TouchableOpacity style={Loginstyles.loginBtn}>
          <Text style={Loginstyles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={Loginstyles.signupLink}>
            {" "}
            Don't have an account. Sign Up?
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
  );
};

export default Login;
