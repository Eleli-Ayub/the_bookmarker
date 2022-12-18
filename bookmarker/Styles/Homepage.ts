import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../Global/Constants";

export const Homepagestyles = StyleSheet.create({
    homepageWrapper:{
        backgroundColor: "#000",
        flex: 1
    },
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
    activityScrollViewWrapper:{
        marginTop: 40, 
        paddingVertical: 20,
        paddingHorizontal: 15
    },
    activityScrollViewTitles:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30
    },
    activityScrollViewTitle:{
        color: "#FFFFFF",
        fontSize: 18
    },
    viewAllActivityBtn:{
        marginRight: 20,
        backgroundColor: "#BA6F6F",
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 20
    },
    viewAllActivityBtnText:{
        color: "#fff"
    },
    activityItem:{
        backgroundColor: "#524949",
        width: deviceWidth * 0.4, 
        marginRight: 20,
        padding: 5,
        borderRadius: 5
    },
    activityTitleText:{
        color: "#F6CECE",
        fontSize: 20,
        
    },
    activityLocationText:{
        color: "#A07F7F",

    },
    activityTimeText:{
        color: "#A07F7F"
    },
    description:{
        fontSize: 12,
        color: "#FFC2C2"
    },    

})