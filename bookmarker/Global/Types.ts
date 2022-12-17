import { KeyboardTypeOptions } from "react-native";

export interface Inputtype_I{
    keyboard_type?: KeyboardTypeOptions;
    inputvalue: string ;
    placeholder: string;
    setText: (input: string) => void;
}