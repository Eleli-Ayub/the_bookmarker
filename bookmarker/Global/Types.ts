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
  export  interface Activitylistsectiontitle_I{
    callback: () => void,
    text: String
  }
  export interface ActivityListItem_I{
    number: number,
    title: String,
    date: String,
    time: String,
  }
  export interface Taskslist_I{
    number: number,
    text: String,
    isDone: boolean
  }
  export interface Addtaskmodal_I{
    modalVisible: boolean,
    setModalVisible: (modalVisible: boolean) => void
  }
  export interface ActivityselectBtn_I{
    text: String
  }