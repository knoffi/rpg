import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import React, { useState } from "react";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from 'react-native-paper';
import { association } from "./classes/Adjectives";
import { MenuScene } from "./scenes/MenuScene";
import { NameScene } from "./scenes/NameScene";
import { TitleScene } from "./scenes/TitleScene";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const removeEmptyStrings=(newFits:association[],newMisfits:association[])=>{
  const filteredFits = newFits.filter(entry => {return entry!==association.empty})
  return {fits:filteredFits,misfits:newMisfits}
}


function MyTabs() {
  const [fitting,updateFitting] = useState({fits:[] as association[],misfits:[] as association[]});
  return (
    <Tab.Navigator>
      <Tab.Screen name="NameScene" children={()=><NameScene fitting={fitting} onAssociationPick={(newFits:association[],newMisfits:association[])=>{updateFitting(removeEmptyStrings(newFits,newMisfits))}} ></NameScene>} />
      <Tab.Screen name="MenuScene" children={()=><MenuScene  fitting={fitting} ></MenuScene>} />
    </Tab.Navigator>
  );
}

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
           <Stack.Screen name="TavernScene" component= {MyTabs}/>
          </Stack.Navigator>
        </NavigationContainer>
     </PaperProvider>
    );
  };
}

export default App;
