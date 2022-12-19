import { StyleSheet } from "react-native";
import { deviceWidth } from "../Global/Constants";

export const Footerstyles = StyleSheet.create({
   footerWrapper:{
        backgroundColor: "#28292C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        marginTop: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
   },
   footerText:{
        color: "#64748b",
        fontSize: 15,
        marginTop: 20
    },
    rightsText:{
        color: "#a1a1aa",
        fontSize: 15,
        marginTop: 10,
        fontStyle: "italic",
    },
    termsWrapper:{
        marginTop: 15,
        marginBottom: 15
    },
    termsText:{
        color: "#4BE9C3",
        fontSize: 20,
        marginTop: 20,
        textTransform: "uppercase",
    }


})