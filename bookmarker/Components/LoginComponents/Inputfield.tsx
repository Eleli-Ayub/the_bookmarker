import { View, Text, TextInput } from "react-native";
import React from "react";
import { Inputtype_I } from "../../Global/Types";
import { Loginstyles } from "../../Styles/Loginstyle";

const Inputfield = ({
  inputvalue,
  setText,
  keyboard_type,
  placeholder,
}: Inputtype_I) => {
  return (
    <TextInput
      style={Loginstyles.textInput}
      placeholder={placeholder}
      value={inputvalue}
      keyboardType={keyboard_type}
      onChangeText={(newText) => setText(newText)}
    />
  );
};

export default Inputfield;
