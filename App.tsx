import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import { NameScene } from "./NameScene";
import { TavernMenuText } from "./TavernMenu";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TavernMenu" component={TavernMenuText} />
        <Stack.Screen name="NameScene" component={NameScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
