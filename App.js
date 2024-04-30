import React from "react";
import NewGameScreen from "./Screens/NewGameScreen";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import SelectorGameScreen from "./Screens/SelectorGameScreen";
import CodeOverlay from "./Components/CodeOverlay";
import AddImageClue from "./Screens/AddImageClue";
import AddAudioClue from "./Screens/AddAudioClue";
import AddTextClue from "./Screens/AddTextClue";
import AddGeolocalization from "./Screens/AddGeolocalization";
import GameDescriptionScreen from "./Screens/GameDescriptionScreen";

const Stack = createStackNavigator();

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
        <Stack.Screen
          name="AddGeolocalization"
          component={AddGeolocalization}
        />
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