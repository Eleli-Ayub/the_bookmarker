import { KeyboardTypeOptions } from "react-native";

export interface Inputtype_I{
    keyboard_type?: KeyboardTypeOptions;
    inputvalue: string ;
    placeholder: string;
    setText: (input: string) => void;
}
export interface Scrollbar_I {
    title: String,
    location: String,
    time: String,
    description: String
  }