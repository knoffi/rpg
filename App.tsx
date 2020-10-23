import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from 'react-native-paper';
import { MenuScene } from "./scenes/MenuScene";
import { NameScene } from "./scenes/NameScene";
import { TitleScene } from "./scenes/TitleScene";

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TitleScene" component={TitleScene} />
        <Stack.Screen name="NameScene" component={NameScene} />
        <Stack.Screen name="MenuScene" component={MenuScene} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
