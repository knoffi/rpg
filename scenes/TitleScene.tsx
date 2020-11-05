import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Divider, List, Paragraph, TextInput, Title } from "react-native-paper";
import { drinkCategory, TavernProduct } from "../classes/TavernProduct";
import { SceneButton } from "../components/SceneButton";
import { beers } from "../examples/beer";
import { lemonades } from "../examples/lemonades";
import { spirits } from "../examples/spirits";
import { wines } from "../examples/wines";
import { nameSceneStyles } from "./nameSceneStyles";

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const TitleButtons=(props:any)=>{return <View><Button>Tavern Editor</Button>
  <Button>Tavern Collection</Button>
  <Button>Tavern Assets</Button>
  <Button>Acknowledgements</Button></View>}

const getNewDrinkList=(drinkList:TavernProduct[],nameOfDeletedDrink:string)=>{
  let newDrinkList=[] as TavernProduct[];
  drinkList.forEach(drink=>{if(drink.name!==nameOfDeletedDrink){newDrinkList.push(drink)}});
  return newDrinkList;
}

const DrinkListItemRight = (props:{price:number,onDelete: ()=>void}) =>{
  return <View style={{flexDirection:"row"}}><Text>{" : " + props.price.toString() + " copper."}</Text><Button onPress={props.onDelete}>DELETE</Button></View>
}
  const DrinkListItem = (props:{drink:TavernProduct, onDelete:()=>void})=>{
    const onDelete= props.onDelete
    const drinkPrice=props.drink.copperPrice;
  return <List.Item title={props.drink.name} right={(props)=>{return <DrinkListItemRight price={drinkPrice} onDelete={onDelete}/>}}></List.Item>
  }

  const DrinkListAccordeon = (props:{drinkCategory:drinkCategory, listOfDrinks:TavernProduct[], deleteDrinkByName:(name:string)=>void})=>{
    let drinkItems = props.listOfDrinks.map(drinkOfList => {return <DrinkListItem drink={drinkOfList} key={drinkOfList.name} onDelete={()=>{props.deleteDrinkByName(drinkOfList.name)}}></DrinkListItem>})
    return <List.Accordion
    title={props.drinkCategory} titleStyle={nameSceneStyles.accordeonListTitle}>
    {drinkItems}
    <List.Item title="Add one more random/from list" onPress={()=>{}} />
  </List.Accordion>

  }



const DrinkList = () => {

  // to improve performance, use a unique state for every drink category. FOr example, removing a single beer would then be faster because wineList etc. can be skipped.
  // Moreover, we assume that drinks from different categories have different names for this to work
  const [drinkListList,setDrinks]=useState([beers,wines,spirits,lemonades]);

  const removeFromDrinkListList=(nameOfDeletedDrink:string)=>{
    const newDrinkListList=[] as TavernProduct[][];
    drinkListList.forEach(drinkList =>{let newDrinkList=[] as TavernProduct[];
    drinkList.forEach(drink=>{if(drink.name!==nameOfDeletedDrink){newDrinkList.push(drink)}});newDrinkListList.push(newDrinkList)});
    setDrinks(newDrinkListList)
  }

  return (
    <List.Section title="Drinks">
      <DrinkListAccordeon drinkCategory={drinkCategory.beer} listOfDrinks={drinkListList[0]} deleteDrinkByName={removeFromDrinkListList}/>
      <DrinkListAccordeon drinkCategory={drinkCategory.wine} listOfDrinks={drinkListList[1]} deleteDrinkByName={removeFromDrinkListList}/>
      <DrinkListAccordeon drinkCategory={drinkCategory.spirit} listOfDrinks={drinkListList[2]} deleteDrinkByName={removeFromDrinkListList}/>
      <DrinkListAccordeon drinkCategory={drinkCategory.lemonade} listOfDrinks={drinkListList[3]} deleteDrinkByName={removeFromDrinkListList}/>
    </List.Section>
  );
};


export const TitleScene = ({ navigation }: any) => {
  
  return (
    <ScrollView>
     <View ><Title>You All Meet In A Tavern</Title>
      <Paragraph>Sir Aiven's Lemonade ... 3 copper</Paragraph>
      <TextInput
        style={{ marginTop: 15 }}
        label="Outlined input"
        mode="outlined"
      />
      <Divider/>
      <TitleButtons/>
      <SceneButton sceneName={"TavernScene"} navigation={navigation} />
      </View>
      <View style={{marginTop:100}}>
      </View>
      <DrinkList></DrinkList>
      </ScrollView>
  );
  }



  

