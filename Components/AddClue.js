import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Text,
  Modal,
} from "react-native";
import CustomComponent from "./SelectTrack";
import Button from "./Button";
import CancelButton from "./CancelButton";
const AddClueComponent = ({ isVisible, onClose }) => {
  // Animación para el deslizamiento hacia arriba
  const slideAnim = useRef(new Animated.Value(0)).current; // Inicialmente en 0

  React.useEffect(() => {
    // Comenzar la animación cuando el componente es visible
    Animated.timing(slideAnim, {
      toValue: isVisible ? 1 : 0, // El valor final es 1 cuando es visible, o vuelve a 0
      duration: 300, // Duración en milisegundos
      useNativeDriver: true, // Para mejor rendimiento
    }).start();
  }, [isVisible, slideAnim]);

  const slideUpStyle = {
    transform: [
      {
        translateY: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [200, 0], // Deslizar desde fuera de la pantalla
        }),
      },
    ],
  };

  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <Animated.View style={[styles.addClueContainer, slideUpStyle]}>
          <CustomComponent />
          <CancelButton text={"Cancel"} onPress={onClose} />
        </Animated.View>
      </View>
    </Modal>
  );
};

const AddClue = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button text={"ADD CLUE"} onPress={() => setModalVisible(true)} />
      <AddClueComponent
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparente
  },
  addClueContainer: {
    height: 400, // Asumiendo que este es el alto de tu componente
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default AddClue;
