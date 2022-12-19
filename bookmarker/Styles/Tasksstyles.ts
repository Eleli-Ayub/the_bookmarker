import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../Global/Constants";

export const TaskStyles =  StyleSheet.create({
    Taskswrapper:{
        backgroundColor: "#000",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
      
    },
    Headerwrapper:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingVertical: 50,
        paddingHorizontal: 30
        
    },
    HeaderTitle:{
        fontSize: 50,
        fontWeight: "800",
        marginBottom: 15
    },
    HeaderSubtitle:{
        fontStyle: "italic",
        fontSize: 15,
        marginBottom: 20
    },
    HeaderButton:{
        alignSelf: "flex-end",
        backgroundColor: "#B97A7A",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
    },
    HeaderButtonText:{
        color: "#ddd"
    },
    addBtn:{
        alignSelf: "center"
    }
})