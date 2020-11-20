import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Banner } from "react-native-paper";
import { association } from "../classes/Adjectives";
import { drinkCategory, foodCategory } from "../classes/TavernProduct";
import { OfferList } from "../components/DrinkList";
import { getRandomArrayEntry } from "../helpingFunctions/getFittingRandom";
import {
  getNewRandomDrinkOffer,
  offersWithOneReroll,
  weServe
} from "../helpingFunctions/menuCode";
import { BasePrice, NothingLeftOffer, Offer } from "../helpingFunctions/menuCodeEnums";
import { nameSceneStyles } from "./nameSceneStyles";


const drinkBannerEndings=["Cheers to that!", "What a lovely collection!", "Such vast supply!", "A stock to be proud of!" , "Customers will have trouble deciding on a beverage!", "Every bartenders dream came true!", "Cheerio, my old chum!", "You know how to party!", "Nobody will have to leave your tavern thirsty!", "Wait a second, you even offer my favourite beverage. Could I make a reservation for next friday evening?"]

const foodBannerEndings=["Dig in!", "Bon appetite!", "Such a skilful cook!","Such a gastronomic variety!", "A menu to be proud of!" , "Customers will have trouble deciding on a dish!", "Every gourmets dream came true!", "Have a nice meal!", "You know how to throw a banquette!", "Nobody will have to leave your tavern hungry!", "Wait a second, you even offer my favourite dish. Could I make a reservation for next friday?"]

const serviceBannerEndings=["Wait a second, I could use one of those. Do you open on Saturdays?","Interesting services. Do your customers need to make a reservation? I am asking for a friend of mine..."]

const mapOfBannerEndings=new Map([[weServe.drinks, drinkBannerEndings], [weServe.food,foodBannerEndings],[weServe.service,serviceBannerEndings]])


const menuStyle = StyleSheet.create({
  menuRow: { justifyContent: "flex-start", flexDirection: "row" },
  sceneButton: { justifyContent: "center"},
});

interface MenuProps{fitting:{fits:association[],misfits:association[]},isAbout:weServe,offers:Offer[], setOffers:(offers:Offer[])=>void,undoFAB:JSX.Element,offersLeft:Map<drinkCategory|foodCategory,boolean>,basePrice:BasePrice}

export const MenuScene = (props: MenuProps) => {
  const fits = props.fitting.fits;
  const misfits = props.fitting.misfits;
  let servedCategory = props.isAbout===weServe.drinks? drinkCategory :foodCategory;
  //why?
  const [boughtOffers,setBoughtOffers] =useState([] as Offer[]);
  const [bannerIsVisible, setBannerVisibility]=useState(false);
  const [newestEmptyCategory, setNewestEmptyCategory]=useState(drinkCategory.lemonade as drinkCategory|foodCategory);
  const [bannerEnding, setBannerEnding]=useState(getRandomArrayEntry(mapOfBannerEndings.get(props.isAbout)!));

  

  const deleteOffer=(name:string)=>{
    let newOffers=[] as Offer[];
    props.offers.forEach(offer=>{if(offer.product.name!==name){newOffers.push(offer)}})
    props.setOffers(newOffers)
  }
  const rerollOffer=(name:string)=>{
    const newOffers = offersWithOneReroll(
      name,
      props.offers,
      fits,
      misfits,
      props.isAbout,
      props.basePrice
  );
    props.setOffers(newOffers);
  }

  const buyOffer=(name:string)=>{
    let newBoughtOffers = boughtOffers.map(boughtOffer=>{return boughtOffer});
    props.offers.forEach(offer=>{if(offer.product.name===name){newBoughtOffers.push(offer)}})
    setBoughtOffers(newBoughtOffers)
  }
  const addRandomOffer =(category:drinkCategory|foodCategory)=>{
    let newOffers= [] as Offer[];
    props.offers.forEach(offer =>{newOffers.push(offer)});
    newOffers.push(getNewRandomDrinkOffer(fits,misfits,category,props.offers,props.isAbout,props.basePrice));
    const testOffer = getNewRandomDrinkOffer(fits,misfits,category,newOffers,props.isAbout,props.basePrice);
    if(testOffer.product === NothingLeftOffer.product){
      setNewestEmptyCategory(category)
      setBannerEnding(getRandomArrayEntry(mapOfBannerEndings.get(props.isAbout)!))
      setBannerVisibility(true)
    }
    props.setOffers(newOffers);
  }

  return (
    <ScrollView style={{backgroundColor:nameSceneStyles.backgroundContainer.backgroundColor}}>
      <Banner
      visible={bannerIsVisible}
      actions={[
        {
          label: 'Got it',
          onPress: () => {
            setBannerVisibility(false);
          },
        },
      ]}>
      {"Your tavern offers every fitting "+ newestEmptyCategory.toLowerCase() +"!\n\n"  + bannerEnding}
    </Banner>
      <OfferList offers={props.offers} isAbout={props.isAbout} addingActions={{randomAdd: addRandomOffer,import:(category:drinkCategory|foodCategory)=>{}}} offerActions={{deleteOffer:deleteOffer,rerollOffer:rerollOffer,shopOffer:buyOffer}} offersLeftMap={props.offersLeft} currencyName={props.basePrice.currency}/>
      {props.undoFAB}
    </ScrollView>
  );
};
//TODO: test whether offer and drinkMenuCategories have corresponding entries
