import React from "react";
import { View } from "react-native";
import { List, Text } from "react-native-paper";
import { drinkCategory, foodCategory } from "../classes/TavernProduct";
import { weServe } from "../helpingFunctions/menuCode";
import { Offer } from "../helpingFunctions/menuCodeEnums";
import { nameSplitter } from "../helpingFunctions/nameSplitter";
import { nameSceneStyles } from "../scenes/nameSceneStyles";
import { AddButton, buttonEmphasis, DeleteButton, ImportButton, InfoButton, RerollButton, ShopButton } from "./buttons/generalButtons";

const CHARACTER_MAX_DRINK_NAME= 33;
interface MenuChapter{
  category: drinkCategory | foodCategory;
  offers: Offer[];
}

interface productActions{
  onDelete: ()=> void;
  onReroll: ()=> void;
  onShop: ()=> void;
}
interface addingActions{
  randomAdd:(category:drinkCategory|foodCategory)=>void,
  import:(category:drinkCategory|foodCategory)=>void,
}
interface productActionsByName{
  deleteOffer: (name: string) => void,
  rerollOffer:(name:string)=>void,
  shopOffer:(name:string)=>void
}

const DrinkListItemRight = (props: { actions: productActions, noDrinkToAddLeft:boolean}) => {
  return <View style={{ flexDirection: "row", justifyContent:"space-evenly"}}><RerollButton mode={buttonEmphasis.medium} onPress={props.actions.onReroll} disabled={props.noDrinkToAddLeft}/><ShopButton mode={buttonEmphasis.high} onPress={props.actions.onShop}/><DeleteButton mode={buttonEmphasis.medium} onPress={props.actions.onDelete}/></View>;
};
const DrinkListTopItem = (props: { drinkName:string, infoAction:()=>void}) => {
  const thisDrinkName = props.drinkName
  const infoAction = props.infoAction;
  return <List.Item title="" left={(props)=>{return <View style={{flexDirection:"row", justifyContent:"flex-start"}}><Text style={nameSceneStyles.drinkName}>{nameSplitter(thisDrinkName,CHARACTER_MAX_DRINK_NAME)}</Text><InfoButton onPress={infoAction} padding={0} margin={0}/></View>}}></List.Item>;
};
const DrinkListBottomItem = (props: { price:number, actions: productActions , noDrinkToAddLeft:boolean, currencyName:string }) => {
  const actions = props.actions;
  const thisPrice= props.price;
  const noDrinkToAddLeft=props.noDrinkToAddLeft
  return <List.Item title={"   Price: "+ props.price.toString()+ " " + props.currencyName} titleStyle={nameSceneStyles.drinkPrice} right={(props) => { return <DrinkListItemRight  actions={actions} noDrinkToAddLeft={noDrinkToAddLeft}/>; }}></List.Item>;
};
const DrinkListAccordeon = (props: {drinkCategory: drinkCategory|foodCategory, listOfOffers: Offer[], offerActions:productActionsByName, addingActions: addingActions, noDrinkToAddLeft:boolean, currencyName:string }) => {
  const onRandomAdd=props.addingActions.randomAdd;
  const onImport=props.addingActions.import;
  const thisCategory=props.drinkCategory;
  const noDrinkToAddLeft=props.noDrinkToAddLeft;
  const currencyName = props.currencyName;
  let offerItems = [] as JSX.Element[];
  props.listOfOffers.forEach(
    offerOfList => {
      const name = offerOfList.product.name;
      offerItems.push(
        <DrinkListTopItem drinkName={name} key={name + "-top"} infoAction={()=>{}} ></DrinkListTopItem>
      );
      offerItems.push(
        <DrinkListBottomItem price={offerOfList.price} key={name + "-bottom"} actions={{onDelete: () => {props.offerActions.deleteOffer(name)}, onReroll:()=>{ props.offerActions.rerollOffer(name)}, onShop:()=>{props.offerActions.shopOffer(name)}}} noDrinkToAddLeft={noDrinkToAddLeft}
        currencyName={currencyName}></DrinkListBottomItem>
      )
    }
  );
  return <List.Accordion title={props.drinkCategory} titleStyle={nameSceneStyles.accordeonListTitle}>
    {offerItems}
    <List.Item title="" onPress={() => { }} left={(props)=>{return<View style={{flexDirection:"row"}}><AddButton onPress={()=>{onRandomAdd(thisCategory)}} size={nameSceneStyles.drinkName.fontSize+5} disabled={noDrinkToAddLeft}/><ImportButton onPress={()=>{onImport(thisCategory)}} size={nameSceneStyles.drinkName.fontSize+5} disabled={noDrinkToAddLeft}/></View>}}/>
  </List.Accordion>;

};
export const OfferList = (props:{offers:Offer[],isAbout:weServe,offerActions:productActionsByName,addingActions:addingActions, offersLeftMap:Map<drinkCategory|foodCategory,boolean>,currencyName:string}) => {

  const menu=[] as MenuChapter[];
  let categories = props.isAbout===weServe.drinks? drinkCategory:foodCategory;
  
  Object.values(categories).forEach(category=>{menu.push({category:category as drinkCategory|foodCategory,offers:[]})})
  // Now: menu=[ {"beer", [] }, {"wine", [] }, ... ]

    // to improve perfomance: go to next offer, if old offer was already pushed into a menu chapter (since every offer appears in exactly one chapter)
  props.offers.forEach(
    offer => menu.forEach(
      menuChapter => {
        if(menuChapter.category===offer.product.productCategory){
          menuChapter.offers.push(offer)
        }
      }
    )
  );

  const chapterLists= menu.map(
    chapter=>{
      return <DrinkListAccordeon key={chapter.category} drinkCategory={chapter.category} listOfOffers={chapter.offers} offerActions={props.offerActions} addingActions={{randomAdd:props.addingActions.randomAdd,import:props.addingActions.import}} currencyName={props.currencyName} noDrinkToAddLeft={!props.offersLeftMap.get(chapter.category)!}/>})


  // to improve performance: use a unique state for every drink category. For example, removing a single beer would then be faster because wineList etc. can be skipped.
  // Moreover, we assume that drinks from different categories have different names for this to work and that nothingLeftOffer never gets pushed to offers

  return (
    <List.Section title={props.isAbout.toUpperCase()} titleStyle={nameSceneStyles.title}>
      {chapterLists}
    </List.Section>
  );
};
