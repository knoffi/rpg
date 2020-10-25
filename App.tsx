import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import React from "react";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from 'react-native-paper';
import { MenuScene } from "./scenes/MenuScene";
import { NameScene } from "./scenes/NameScene";
import { TitleScene } from "./scenes/TitleScene";

const Stack = createStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    'EnglishGothic': require('./assets/fonts/findPostScriptName1.ttf'),'Breitkopf':require("./assets/fonts/findPostScriptName2.ttf"),
    'blankenburg':require("./assets/fonts/blankenburg.ttf"),'canterbury':require("./assets/fonts/canterbury.ttf"),
    'chomsky':require("./assets/fonts/chomsky.otf"),'strassburg':require("./assets/fonts/strassburg.ttf"),
    'primitive':require("./assets/fonts/primitive.ttf"),'deutschGothic':require("./assets/fonts/deutschGothic.ttf"),
    'deutschZier':require("./assets/fonts/deutschZier.ttf"),'fiddum':require("./assets/fonts/fiddum.ttf"),
    'metalMacabre':require("./assets/fonts/metalMacabre.ttf"),'pau':require("./assets/fonts/pau.ttf"),
    'rapscallion':require("./assets/fonts/rapscallion.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
}

export default App;
