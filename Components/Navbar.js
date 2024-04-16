import React from "react";
import {Dimensions} from "react-native";
import {View, Text, StyleSheet} from "react-native";
import GoBackArrow from "./GoBackArrow";
import {useNavigation} from "@react-navigation/native";

const Navbar = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.navbar}>
            <GoBackArrow/>
            <Text style={styles.text}>{props.title}</Text>
            <View style={styles.shadow}></View>
        </View>
    );
};

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    navbar: {
        color: "white",
        justifyContent: "flex-end",
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 15,
        position: "absolute",
        paddingTop: 47,
        top: 0,
        width: screenWidth,
        zIndex: 99999
    },
    text: {
        color: "#ffb708",
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        position: "absolute",
        bottom: "70%",
    },
    shadow: {
        color: "black",
        backgroundColor: "black",
        width: screenWidth,
        alignSelf: "center",
        zIndex: -1,
        opacity: 0.3,
        justifyContent: "flex-start",
        position: "absolute",
        paddingBottom: "2%",
    },
});

export default Navbar;
