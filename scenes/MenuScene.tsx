import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Banner } from "react-native-paper";
import { association } from "../classes/Adjectives";
import { drinkCategory, foodCategory } from "../classes/TavernProduct";
import { OfferList } from "../components/DrinkList";
import { getRandomArrayEntry } from "../helpingFunctions/getFittingRandom";
import {
  getDrinkOffers,
  getNewRandomDrinkOffer,
  offersWithOneReroll
} from "../helpingFunctions/menuCode";
import { NothingLeftOffer, Offer, startOfferCategories } from "../helpingFunctions/menuCodeEnums";
import { nameSceneStyles } from "./nameSceneStyles";

const drinkCategoryForBannerMap=new Map([[drinkCategory.beer,"beer"],[drinkCategory.spirit,"spirit"],[drinkCategory.lemonade,"lemonade"],[drinkCategory.wine,"wine"]])

const listOfBannerEndings=["Cheers to that!", "What a lovely collection!", "Such vast supply!", "A stock to be proud of!" , "Customers will have trouble deciding on a beverage!", "Every bartenders dream came true!", "Cheerio, my old chum!", "You know how to party!", "Nobody will have to leave your tavern thirsty!", "Wait a second, you even offer my favourite beverage. Could I make a reservation for next friday evening?"]


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
  const [bannerIsVisible, setBannerVisibility]=useState(false);
  const [newestEmptyCategory, setNewestEmptyCategory]=useState(drinkCategory.lemonade as drinkCategory|foodCategory);
  const [bannerEnding, setBannerEnding]=useState(getRandomArrayEntry(listOfBannerEndings));
  const startOffersLeft=new Map([]) as Map<drinkCategory|foodCategory,boolean>
  // assuming that every category has additional drinks to add from the start!
  Object.values(drinkCategory).forEach(category=>{startOffersLeft.set(category,true)})
  const [offersLeft,setOffersLeft] = useState(startOffersLeft)

  const setIsOfferLeft=(changedCategory:drinkCategory|foodCategory, isLeft:boolean)=>{
    let newOffersLeft=new Map([]) as Map<drinkCategory|foodCategory,boolean>
    // assuming that structure of offersLeft is constant, i.e. can be derived from drinkCategory-enum
    Object.values(drinkCategory)
      .forEach(
        category => {
          if(category===changedCategory){
            newOffersLeft.set(category,isLeft)
          }
          else {
            newOffersLeft.set(category,offersLeft.get(category)!)
          }
        }
      )
    setOffersLeft(newOffersLeft);
  }

  const deleteOffer=(name:string)=>{
    let newOffers=[] as Offer[];
    offers.forEach(offer=>{if(offer.product.name!==name){newOffers.push(offer)}else {setIsOfferLeft(offer.product.productCategory,true)}})
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
    const testOffer = getNewRandomDrinkOffer(fits,misfits,category,newOffers);
    if(testOffer.product === NothingLeftOffer.product){
      setNewestEmptyCategory(category)
      setBannerEnding(getRandomArrayEntry(listOfBannerEndings))
      setIsOfferLeft(category,false)
      setBannerVisibility(true)
    }
    setOffers(newOffers);
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
      {"Your tavern offers every fitting "+ drinkCategoryForBannerMap.get(newestEmptyCategory as drinkCategory) +"!\n\n"  + bannerEnding}
    </Banner>
      <OfferList offers={offers} isAboutDrinks={true} addingActions={{randomAdd: addRandomOffer,import:(category:drinkCategory|foodCategory)=>{}}} offerActions={{deleteOffer:deleteOffer,rerollOffer:rerollOffer,shopOffer:buyOffer}} fontFamiliyForTitle={props.fontFamilyForTitle} offersLeftMap={offersLeft}/>
    </ScrollView>
  );
};
//TODO: test whether offer and drinkMenuCategories have corresponding entries
