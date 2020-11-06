import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { association } from "../classes/Adjectives";
import { drinkCategory, foodCategory } from "../classes/TavernProduct";
import { OfferList } from "../components/DrinkList";
import {
  getDrinkOffers,
  getNewRandomDrinkOffer,
  offersWithOneReroll
} from "../helpingFunctions/menuCode";
import { Offer, startOfferCategories } from "../helpingFunctions/menuCodeEnums";

const menuStyle = StyleSheet.create({
  menuRow: { justifyContent: "flex-start", flexDirection: "row" },
  sceneButton: { justifyContent: "center"},
});

interface MenuProps{fitting:{fits:association[],misfits:association[]},fontFamilyForTitle:string}

export const MenuScene = (props: MenuProps) => {
  const fits = props.fitting.fits;
  const misfits = props.fitting.misfits;
  const [offers, setOffers] = useState(getDrinkOffers(fits, misfits,startOfferCategories));
  const [boughtOffers,setBoughtOffers] =useState([] as Offer[]);

  const deleteOffer=(name:string)=>{
    let newOffers=[] as Offer[];
    offers.forEach(offer=>{if(offer.product.name!==name){newOffers.push(offer)}})
    setOffers(newOffers)
  }
  const rerollOffer=(name:string)=>{
    const newOffers = offersWithOneReroll(
      name,
      offers,
      fits,
      misfits,
  );
    setOffers(newOffers);
  }

  const buyOffer=(name:string)=>{
    let newBoughtOffers = boughtOffers.map(boughtOffer=>{return boughtOffer});
    offers.forEach(offer=>{if(offer.product.name===name){newBoughtOffers.push(offer)}})
    setBoughtOffers(newBoughtOffers)
  }
  const addRandomOffer =(category:drinkCategory|foodCategory)=>{
    let newOffers= [] as Offer[];
    offers.forEach(offer =>{newOffers.push(offer)});
    newOffers.push(getNewRandomDrinkOffer(fits,misfits,category,offers));
    setOffers(newOffers);
  }
  return (
    <ScrollView>
      <OfferList offers={offers} isAboutDrinks={true} addingActions={{randomAdd: addRandomOffer,import:(category:drinkCategory|foodCategory)=>{}}} offerActions={{deleteOffer:deleteOffer,rerollOffer:rerollOffer,shopOffer:buyOffer}} fontFamiliyForTitle={props.fontFamilyForTitle}/>
    </ScrollView>
  );
};
//TODO: test whether offer and drinkMenuCategories have corresponding entries
