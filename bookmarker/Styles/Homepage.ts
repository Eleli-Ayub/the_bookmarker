import { StyleSheet } from "react-native";
import { deviceHeight } from "../Global/Constants";

export const Homepagestyles = StyleSheet.create({
    headerWrapper:{
        height: deviceHeight * 0.5,
        backgroundColor: "#D3B2B2",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 15
        
    },
    greetingsText:{
        color: "#6B6868",
        fontFamily: "Inter",
        fontWeight: "100",
        fontSize: 15,
        marginTop: 10
    },
    nameText:{
        marginTop: 40,
        fontSize: 40,
        fontWeight: "800",
    },
    welcomeText:{
        marginTop: 80, 
        fontSize: 20
    },
    dateTime:{
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    dateText:{
        marginRight: 10
    },
    timeText:{},
    myTasksButton:{ 
        marginTop: 60,
        marginRight: 20,
        alignSelf: "flex-end",
        backgroundColor: "#7D7272",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5
    },
    myTasksButtonText:{
        color: "#FFFFFF",
    },

})