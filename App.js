import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import SelectorGameScreen from "./Screens/SelectorGameScreen";
import CodeOverlay from "./Components/CodeOverlay";
import AddImageClue from "./Screens/AddImageClue";
import AddAudioClue from "./Screens/AddAudioClue";
import AddTextClue from "./Screens/AddTextClue";
import AddGeolocalization from "./Screens/AddGeolocalization";
import GameDescriptionScreen from "./Screens/GameDescriptionScreen";
import ClueImageScreenComponent from "./Screens/ClueImageScreen"; 
import ClueLocationScreenComponent from "./Screens/ClueLocationScreen";
import ClueSoundScreenComponent from "./Screens/ClueSoundScreen";
import ClueTextScreenComponent from "./Screens/ClueTextScreen";
import NewGameScreen from "./Screens/NewGameScreen";

const Stack = createStackNavigator();

const ClueImageScreen1 = () => <ClueImageScreenComponent currentStep={1} />;
const ClueLocationScreen2 = () => <ClueLocationScreenComponent currentStep={2} />;
const ClueSoundScreen3 = () => <ClueSoundScreenComponent currentStep={3} />;
const ClueTextScreen4 = () => <ClueTextScreenComponent currentStep={4} />;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyGames" component={SelectorGameScreen} />
        <Stack.Screen name="NewGame" component={NewGameScreen} />
        <Stack.Screen name="GameDescriptionScreen" component={GameDescriptionScreen} />
        <Stack.Screen name="Overlay" component={CodeOverlay} />
        <Stack.Screen name="AddImageClue" component={AddImageClue} />
        <Stack.Screen name="AddAudioClue" component={AddAudioClue} />
        <Stack.Screen name="AddTextClue" component={AddTextClue} />
        <Stack.Screen name="AddGeolocalization" component={AddGeolocalization} />
        <Stack.Screen name="ClueImageScreen1" component={ClueImageScreen1} />
        <Stack.Screen name="ClueLocationScreen2" component={ClueLocationScreen2} />
        <Stack.Screen name="ClueSoundScreen3" component={ClueSoundScreen3} />
        <Stack.Screen name="ClueTextScreen4" component={ClueTextScreen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
