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
    activities:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 40,
    },
    activitiesTitle:{
        color: "#fff",
        fontSize: 15,
        fontStyle: "italic",
        marginTop: 20,
        marginLeft: 15
    },
    ActivitylistsectiontitleBtn:{
        backgroundColor: "#6B6868",
        borderRadius: 15
    },
    ActivitylistsectiontitleBtnText:{
        color: "#FFF",
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
   
    activityListTitle:{
        color: "#FFF",
        fontSize: 15,
    },
    activitiesTitles:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#6B6868"
    },
    activitiesTitlesTitle:{
        color: "#fff",
        fontStyle: "italic",
        fontSize: 12,
        marginLeft:10
    },
    activitiesTitlesDate:{
        color: "#fff",
        marginRight: 20,
        fontStyle: "italic",
        fontSize: 12
    },
    activityListItemWrapper:{
        borderBottomWidth: 1,
        borderBottomColor: "#414040",
        marginHorizontal:15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
    },
    activityListIndexnumber:{
        color:"#fff"
    },
    activityListItemText:{
        color: "#F6E5E5",
        fontStyle: "italic",
        marginLeft: 20
    },
    activityTimes:{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",
    },
    activityListDate:{
        color: "#F6E5E5",
        fontStyle: "italic",
    },
    activityListTime:{
        color: "#F6E5E5",
        fontStyle: "italic",
        marginLeft: 10,
    },
    gotoTasksBtn:{
        height: deviceHeight * 0.05,
        width: deviceWidth * 0.4,
        backgroundColor: "#D9D9D9",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 60,
    },
    tasksWrapper:{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 10
    },
    taskWrapper:{
        width: deviceWidth * 0.42,
        display: "flex",
        flexDirection: "row",
        padding: 5,
        marginVertical: 10 
    },
    taskNumberText:{
        color: "#fff",
        fontSize: 12,
        marginRight: 20
    },
    taskCheckbox:{   
        height: 20,
        width: 20,
        // borderColor: "#fff",
        // borderWidth: 1,
        marginRight:10
    },
    taskTitleText:{
        color: "#fff",
        fontSize: 12,
        fontStyle: "italic"
    },

})