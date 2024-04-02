import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import FletxaNegra from "../images/FletxaNegra.png";

const GoBackArrow = () => {
    const navigation = useNavigation();
    return (
        <View style={{height: 34}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={FletxaNegra} style={styles.image}></Image>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 20,
        width: 26,
    }
});

export default GoBackArrow;
