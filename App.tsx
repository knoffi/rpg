import { SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import React, { useState } from "react";
import "react-native-gesture-handler";
import { FAB, Provider as PaperProvider } from 'react-native-paper';
import { association } from "./classes/Adjectives";
import { drinkCategory, foodCategory } from './classes/TavernProduct';
import Icon from './components/icons';
import { iconKeys } from "./components/icons/iconKeys";
import { standardBasePrice } from "./examples/priceClasses";
import { getNewRandomDrinkOffer, weServe } from "./helpingFunctions/menuCode";
import { BasePrice, NothingLeftOffer, Offer } from "./helpingFunctions/menuCodeEnums";
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

const getStartMenuMaps=()=>{
  const startDrinksLeft=new Map([]) as Map<drinkCategory|foodCategory,boolean>
  // assuming that every category has additional drinks to add from the start!
  Object.values(drinkCategory).forEach(category=>{startDrinksLeft.set(category as drinkCategory,true)})
  const startDishesLeft=new Map([]) as Map<drinkCategory|foodCategory,boolean>
  // assuming that every category has additional drinks to add from the start!
  Object.values(foodCategory).forEach(category=>{startDishesLeft.set(category as foodCategory,true)})
  return {drinkMap:startDrinksLeft,dishesMap:startDishesLeft}
}

interface tavernData {
  fitting:{fits:association[], misfits:association[]},
  name:string,
  drinks:Offer[],
  dishes:Offer[],
  prices:BasePrice,
  drinksLeft:Map<drinkCategory|foodCategory,boolean>,
  dishesLeft:Map<drinkCategory|foodCategory,boolean>,
}

function MyTabs() {
  const startData = {fitting:{fits:[],misfits:[]},name:"Nameless Tavern",drinks:[],dishes:[],prices:standardBasePrice, drinksLeft:getStartMenuMaps().drinkMap, dishesLeft:getStartMenuMaps().dishesMap} as tavernData
  const [tavernData,setTavernData]= useState(startData)
  const [prevTavernData,setPrevTavernData]= useState(startData)
  const [undoIsLeft, setUndoIsLeft] = useState(false)

  const updateFitting=(fitting:{fits:association[],misfits:association[]}) =>{
    setPrevTavernData(tavernData);
    const newDrinksLeft=new Map([]) as Map<drinkCategory|foodCategory,boolean>;
    Object.values(drinkCategory).forEach(category=>{
      const testDrinkOffer = getNewRandomDrinkOffer(fitting.fits,fitting.misfits,category,tavernData.drinks,weServe.drinks,tavernData.prices);
      if(testDrinkOffer===undefined || testDrinkOffer===NothingLeftOffer){newDrinksLeft.set(category,false);
      } else {newDrinksLeft.set(category,true)}})
    const newDishesLeft=new Map([]) as Map<drinkCategory|foodCategory,boolean>;
    Object.values(foodCategory).forEach(category=>{
      const testFoodOffer = getNewRandomDrinkOffer(fitting.fits,fitting.misfits,category,tavernData.dishes,weServe.food,tavernData.prices);
      if(testFoodOffer===undefined || testFoodOffer===NothingLeftOffer){newDishesLeft.set(category,false)} else {newDishesLeft.set(category,true)}})
    const newTavernData = {fitting:fitting,name:tavernData.name,drinks:tavernData.drinks,dishes:tavernData.dishes,prices:tavernData.prices,drinksLeft:newDrinksLeft,dishesLeft:newDishesLeft}
    setTavernData(newTavernData);
  }
  const updateName=(name:string) =>{
    setPrevTavernData(tavernData);
    const newTavernData = {fitting:tavernData.fitting,name:name,drinks:tavernData.drinks,dishes:tavernData.dishes,prices:tavernData.prices,drinksLeft:tavernData.drinksLeft,dishesLeft:tavernData.dishesLeft}
    setTavernData(newTavernData)
    setUndoIsLeft(true)
  }
  const updateDrinks=(drinks:Offer[]) =>{
    setPrevTavernData(tavernData);
    const newDrinksLeft=new Map([]) as Map<drinkCategory|foodCategory,boolean>;
    Object.values(drinkCategory).forEach(category=>{
      const testDrinkOffer = getNewRandomDrinkOffer(tavernData.fitting.fits,tavernData.fitting.misfits,category,drinks,weServe.drinks,tavernData.prices);
      if(testDrinkOffer===undefined || testDrinkOffer===NothingLeftOffer){newDrinksLeft.set(category,false);
      } else {newDrinksLeft.set(category,true)}})
    const newTavernData = {fitting:tavernData.fitting,name:tavernData.name,drinks:drinks,dishes:tavernData.dishes,prices:tavernData.prices,drinksLeft:newDrinksLeft,dishesLeft:tavernData.dishesLeft}
    setTavernData(newTavernData)
    setUndoIsLeft(true)
  }
  const updateDishes=(dishes:Offer[]) =>{
    setPrevTavernData(tavernData);
    const newDishesLeft=new Map([]) as Map<drinkCategory|foodCategory,boolean>;
    Object.values(foodCategory).forEach(category=>{
      const testFoodOffer = getNewRandomDrinkOffer(tavernData.fitting.fits,tavernData.fitting.misfits,category,dishes,weServe.food,tavernData.prices);
      if(testFoodOffer===undefined || testFoodOffer===NothingLeftOffer){newDishesLeft.set(category,false)} else {newDishesLeft.set(category,true)}})
    const newTavernData = {fitting:tavernData.fitting,name:tavernData.name,drinks:tavernData.drinks,dishes:dishes,prices:tavernData.prices,drinksLeft:tavernData.drinksLeft,dishesLeft:newDishesLeft}
    setTavernData(newTavernData)
    setUndoIsLeft(true)
  }
  const updatePrice=(basePrice:BasePrice) =>{
    setPrevTavernData(tavernData);
    const newTavernData = {fitting:tavernData.fitting,name:tavernData.name,drinks:tavernData.drinks,dishes:tavernData.dishes,prices:basePrice,drinksLeft:tavernData.drinksLeft,dishesLeft:tavernData.dishesLeft}
    setTavernData(newTavernData)
    setUndoIsLeft(true)
  }
 
  const UndoFAB= <FAB icon={props => <SimpleLineIcons name="action-redo" size={24} color="black" />}
  onPress={()=>{setTavernData(prevTavernData);setUndoIsLeft(false)}} disabled={!undoIsLeft} small/>

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
      <Tab.Screen name="Name" children={()=><NameScene name={tavernData.name} updateName={updateName} fitting={tavernData.fitting} updateFitting={(newFits:association[],newMisfits:association[])=>{updateFitting(removeEmptyStrings(newFits,newMisfits))}} undoFAB={UndoFAB}></NameScene>} />
      <Tab.Screen name="Drink" children={()=><MenuScene undoFAB={UndoFAB} fitting={tavernData.fitting} isAbout={weServe.drinks} offers={tavernData.drinks} setOffers={updateDrinks} offersLeft={tavernData.drinksLeft}  basePrice={tavernData.prices}></MenuScene>} />
      <Tab.Screen name="Food" children={()=><MenuScene undoFAB={UndoFAB} fitting={tavernData.fitting} isAbout={weServe.food} offers={tavernData.dishes} setOffers={updateDishes} offersLeft={tavernData.dishesLeft}  basePrice={tavernData.prices}></MenuScene>} />
      <Tab.Screen name="Quest" children={()=><QuestScene  fitting={tavernData.fitting} basePrice={tavernData.prices} setBasePrice={updatePrice} ></QuestScene>} />
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
           <Stack.Screen name="YOU ALL MEET IN A TAVERN!" component={TitleScene} />
           <Stack.Screen name="EDIT TAVERN" component= {MyTabs}/>
          </Stack.Navigator>
        </NavigationContainer>
     </PaperProvider>
    );
  };
}

export default App;
