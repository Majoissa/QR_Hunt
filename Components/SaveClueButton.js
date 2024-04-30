import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const SaveClueButton = ({ text, onPress, imgSrc }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={imgSrc} style={styles.buttonBackground} />
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
