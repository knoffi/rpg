import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import { MenuScene } from "./scenes/MenuScene";
import { NameScene } from "./scenes/NameScene";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NameScene" component={NameScene} />
        <Stack.Screen name="MenuScene" component={MenuScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
