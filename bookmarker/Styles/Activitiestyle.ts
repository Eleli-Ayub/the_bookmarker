import { StyleSheet } from "react-native";
import { deviceWidth } from "../Global/Constants";

export const Activitystyles = StyleSheet.create({
    activityHeaderWrapper:{
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    headerTitle:{
        fontSize: 50,
        fontWeight: "800",
        color: "#000",
        marginTop: -5
       
    },
    headerSubtitle:{
        fontSize: 15,
        fontStyle: "italic"
    },
    headerBtn:{
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#B97A7A",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    headerBtnText:{
        color: "#fff"
    }
})