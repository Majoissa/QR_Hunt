import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const SaveClueButton = ({ text, onPress, imgSrc }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={imgSrc} style={styles.buttonBackground} />
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Posicionamiento absoluto
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
    zIndex: 10, // Asegura que el componente se muestre sobre otros elementos
    bottom: 0, // Fija el componente en la parte inferior
    left: 0,
    right: 0,
  },
  button: {
    width: 225,
    height: 55,
    borderRadius: 75,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
  },
});


export default SaveClueButton;
