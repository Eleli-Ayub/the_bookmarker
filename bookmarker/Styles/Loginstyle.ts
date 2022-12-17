import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../Global/Constants";

export const Loginstyles = StyleSheet.create({
    imageBg: {
        height: deviceHeight,
        width: deviceWidth
    },
    loginWrapper:{
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: "rgba(0,0,4,0.6)",
        justifyContent: "center",
        alignItems: "center"
    },
    titleText:{
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 50
    },
    registerTitleText:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 0
    },
    textInput:{
        borderBottomWidth: 1,
        width: deviceWidth * 0.7,
        borderBottomColor: "#fff",
        margin: 10,
        padding: 10,
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
    },
    loginBtn:{
        backgroundColor: "#4BE9C3",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        margin: 10
    },
    loginBtnText:{
        color: "#000",
        fontSize: 18,
    },
    signupLink:{
        marginTop: 10,
        color: "#6F8EDF",
        marginBottom: 60
    },
    socials:{
        flexDirection: "row",
        justifyContent: "center",
    },
    icon:{
        marginRight: 10
    }
})