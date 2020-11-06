import React from "react";
import { View } from "react-native";
import { List, Text } from "react-native-paper";
import { drinkCategory, foodCategory } from "../classes/TavernProduct";
import { Offer } from "../helpingFunctions/menuCodeEnums";
import { nameSceneStyles } from "../scenes/nameSceneStyles";
import { AddButton, buttonEmphasis, DeleteButton, ImportButton, InfoButton, RerollButton, ShopButton } from "./buttons/generalButtons";

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
  return <List.Item title="" left={(props)=>{return <View style={{flexDirection:"row", justifyContent:"flex-start"}}><Text style={nameSceneStyles.drinkName}>{thisDrinkName}</Text><InfoButton onPress={infoAction}/></View>}}></List.Item>;
};
const DrinkListBottomItem = (props: { price:number, actions: productActions , noDrinkToAddLeft:boolean }) => {
  const actions = props.actions;
  const thisPrice= props.price;
  const noDrinkToAddLeft=props.noDrinkToAddLeft
  return <List.Item title={"   Price: "+ props.price.toString()+ " copper."} titleStyle={nameSceneStyles.drinkPrice} right={(props) => { return <DrinkListItemRight  actions={actions} noDrinkToAddLeft={noDrinkToAddLeft}/>; }}></List.Item>;
};
const DrinkListAccordeon = (props: { drinkCategory: drinkCategory|foodCategory, listOfOffers: Offer[], offerActions:productActionsByName, addingActions: addingActions, noDrinkToAddLeft:boolean }) => {
  const onRandomAdd=props.addingActions.randomAdd;
  const onImport=props.addingActions.import;
  const thisCategory=props.drinkCategory
  const noDrinkToAddLeft=props.noDrinkToAddLeft
  let offerItems = [] as JSX.Element[];
  props.listOfOffers.forEach(
    offerOfList => {
      const name = offerOfList.product.name;
      offerItems.push(
        <DrinkListTopItem drinkName={name} key={name + "-top"} infoAction={()=>{}} ></DrinkListTopItem>
      );
      offerItems.push(
        <DrinkListBottomItem price={offerOfList.price} key={name + "-bottom"} actions={{onDelete: () => {props.offerActions.deleteOffer(name)}, onReroll:()=>{ props.offerActions.rerollOffer(name)}, onShop:()=>{props.offerActions.shopOffer(name)}}} noDrinkToAddLeft={noDrinkToAddLeft}></DrinkListBottomItem>
      )
    }
  );
  return <List.Accordion title={props.drinkCategory} titleStyle={nameSceneStyles.accordeonListTitle}>
    {offerItems}
    <List.Item title="" onPress={() => { }} left={(props)=>{return<View style={{flexDirection:"row"}}><AddButton onPress={()=>{onRandomAdd(thisCategory)}} size={nameSceneStyles.drinkName.fontSize+5} disabled={noDrinkToAddLeft}/><ImportButton onPress={()=>{onImport(thisCategory)}} size={nameSceneStyles.drinkName.fontSize+5} disabled={noDrinkToAddLeft}/></View>}}/>
  </List.Accordion>;

};
export const OfferList = (props:{offers:Offer[],isAboutDrinks:boolean,offerActions:productActionsByName,addingActions:addingActions,fontFamiliyForTitle:string, offersLeftMap:Map<drinkCategory|foodCategory,boolean>}) => {
  const menu=[] as MenuChapter[];
  const categories = props.isAboutDrinks? drinkCategory: foodCategory;
  Object.values(categories).forEach(category=>{menu.push({category:category,offers:[]})})
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
      return <DrinkListAccordeon key={chapter.category} drinkCategory={chapter.category} listOfOffers={chapter.offers} offerActions={props.offerActions} addingActions={{randomAdd:props.addingActions.randomAdd,import:props.addingActions.import}} noDrinkToAddLeft={!props.offersLeftMap.get(chapter.category)!}/>})


  // to improve performance: use a unique state for every drink category. For example, removing a single beer would then be faster because wineList etc. can be skipped.
  // Moreover, we assume that drinks from different categories have different names for this to work and that nothingLeftOffer never gets pushed to offers

  return (
    <List.Section title="Drinks" titleStyle={{justifyContent:"center",fontSize:60,fontFamily:props.fontFamiliyForTitle}}>
      {chapterLists}
    </List.Section>
  );
};
