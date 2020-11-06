import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import React, { useState } from "react";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from 'react-native-paper';
import { association } from "./classes/Adjectives";
import Icon from './components/icons';
import { iconKeys } from "./components/icons/iconKeys";
import { FoodScene } from "./scenes/FoodScene";
import { MenuScene } from "./scenes/MenuScene";
import { NameScene } from "./scenes/NameScene";
import { QuestScene } from "./scenes/QuestScene";
import { TitleScene } from "./scenes/TitleScene";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const removeEmptyStrings=(newFits:association[],newMisfits:association[])=>{
  const filteredFits = newFits.filter(entry => {return entry!==association.empty})
  return {fits:filteredFits,misfits:newMisfits}
}



function MyTabs() {
  const [fitting,updateFitting] = useState({fits:[] as association[],misfits:[] as association[]});
  const [titleFontFamily,setFontFamily] = useState("pau");
  return (
    <Tab.Navigator       tabBarOptions={{
      inactiveBackgroundColor: '#857256', activeBackgroundColor:"#63481F", activeTintColor:"#FFFFFF", inactiveTintColor:"#F4EADB"
    }} screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch(route.name){
          case 'Name':{
            iconName = iconKeys.sign
            break;}
          case 'Drink':{
            iconName = iconKeys.beer
            break;}
          case 'Food':{
            iconName = iconKeys.food
            break;}
          default:{
            iconName= iconKeys.quest
          break;}
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="Name" children={()=><NameScene fitting={fitting} onAssociationPick={(newFits:association[],newMisfits:association[])=>{updateFitting(removeEmptyStrings(newFits,newMisfits))}} ></NameScene>} />
      <Tab.Screen name="Drink" children={()=><MenuScene  fitting={fitting} fontFamilyForTitle={titleFontFamily} ></MenuScene>} />
      <Tab.Screen name="Food" children={()=><FoodScene  fitting={fitting} ></FoodScene>} />
      <Tab.Screen name="Quest" children={()=><QuestScene  fitting={fitting} ></QuestScene>} />
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
    "icons":require("./assets/fonts/icomoon.ttf")
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
