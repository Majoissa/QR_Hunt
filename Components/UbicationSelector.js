import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Feather from "react-native-vector-icons/Feather";

const UbicationSelector = () => {
  const [region, setRegion] = useState({
    latitude: -12.046374,
    longitude: -77.042793,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
  const [marker, setMarker] = useState(null);

  const handleUserLocation = () => {
    const newMarker = {
      latitude: region.latitude,
      longitude: region.longitude,
    };
    setMarker(newMarker);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Geolocalización:</Text>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={region}
          onRegionChangeComplete={setRegion}
        >
          {marker && <Marker coordinate={marker} />}
        </MapView>
        <View style={styles.crosshair}>
          <Feather name="crosshair" size={30} color="black" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleUserLocation}>
          <Text style={styles.buttonText}>Localización del usuario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    paddingBottom: 30,
  },
  mapContainer: {
    height: 200,
    overflow: "hidden",
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  header: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    paddingBottom: 15,
  },
  crosshair: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -15 }, { translateY: -15 }],
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    flexDirection: "row",
    alignSelf: "flex-start",
    shadowColor: "#8A4B38",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#8A4B38",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default UbicationSelector;
