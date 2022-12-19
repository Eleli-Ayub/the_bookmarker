import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../Global/Constants";

export const Modalstyles = StyleSheet.create({
    addModalWrapper:{
      width: deviceWidth * 0.9,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 50,
      alignSelf: "center",
      marginTop: deviceHeight * 0.15,
      paddingVertical: 20
      
    },
    addTitle:{
      fontWeight: "bold",
      fontSize: 30,
      marginBottom: 20
    },
    input:{
      borderBottomWidth: 2,
      borderBottomColor: "#fff",
      textAlign: "center",
      paddingHorizontal: 20,
      width: deviceWidth * 0.7,
      marginBottom: 20
    },
    actionBtns:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: deviceWidth * 0.6,

    },
    actionBtnText: {
      color: "#fff",
      fontSize: 12,
      textAlign: "center",
    },
    actionBtn:{
      width: deviceWidth * 0.20,
      borderRadius: 15, 
      paddingVertical: 5,
      paddingHorizontal: 10
    },
    addActionBtn:{
      backgroundColor: "#0E5B49"
    },
    cancelActionBtn:{
      backgroundColor: "#8C1F10"
    }
  });