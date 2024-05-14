import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import Navbar from "../Components/Navbar";
import MapView, { Marker } from "react-native-maps";
import UbicationSelector from "../Components/UbicationSelector";
import TitleInput from "../Components/TitleInput";
import DescriptionInput from "../Components/DescriptionInput";
import SaveClueButton from "../Components/SaveClueButton";
import SaveBtn from "../images/Geo_Button.png";
const AddGeolocalization = () => {
  return (
    <ImageBackground
      source={require("../images/Background_Hint_Geo.png")}
      style={styles.background}
    >
      <Navbar title="Pista de geolocalización" />

      <ScrollView style={styles.container}>
        <View style={styles.container2}>
          <UbicationSelector />
          <TitleInput />
          <DescriptionInput />
        </View>
      </ScrollView>
      <SaveClueButton imgSrc={SaveBtn} text="AÑADIR PISTA" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    paddingHorizontal: 20,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddGeolocalization;
