import { Adjective, association } from "../classes/Adjectives";
import { getProductsLeftAndBannerData } from "../editNavigator/editNavigatorFunctions";
import { getFittingRandom } from "../helpingFunctions/getFittingRandom";
import { misfitMode } from "../helpingFunctions/misfitModes";
import { getMisfits } from "../helpingFunctions/misFitsHandlers";
import { BasePrice } from "../scenes/menuScene/basePrice";
import { Offer } from "../scenes/menuScene/menuEnums";
import { adjectives, substantives } from "../scenes/nameScene/names/nouns";
import { getTavernHistoryInitializer } from "./mainNavigatorFunctions";

export const getRandomStartTavern=()=>{
    const tavernData = getTavernHistoryInitializer();
   
    const fits= getRandomFits();
    const misfits=getMisfits(fits,misfitMode.stricter);
    const basePrice=getRandomBasePrice()
    const drinks= getRandomDrinkOffers(fits,misfits,basePrice);
    const dishes = getRandomFoodOffers(fits,misfits,basePrice)
    tavernData.name =getRandomName(fits,misfits);
    tavernData.fitting = {
        fits: fits,
        misfits: misfits,
    };
    tavernData.drinks = drinks;
    tavernData.dishes =      dishes;
               const bannerData = getProductsLeftAndBannerData(
        {
            fits: fits,
            misfits: misfits,
        },
        drinks,
        dishes
    );
    tavernData.drinksLeft = bannerData.drinksLeft!;
    tavernData.dishesLeft = bannerData.dishesLeft!;
    tavernData.drinkBannerData = bannerData.drinkBannerData!;
    tavernData.foodBannerData = bannerData.foodBannerData!;
    tavernData.prices = basePrice;
    return tavernData;
}

const getRandomFits=()=>{
    return [association.adventurer]
}
const getRandomBasePrice=()=>{
    return {wealthy:50,rich:150,modest:17,poor:6,currency:"Dragon Coins"} as BasePrice
}

const getRandomDrinkOffers=(fits:association[],misfits:association[],basePrice:BasePrice)=>{return [] as Offer[]}
const getRandomFoodOffers=(fits:association[],misfits:association[],basePrice:BasePrice)=>{return [] as Offer[]}
const getRandomName=(fits:association[],misfits:association[])=>{
    const adjective = getFittingRandom(
        adjectives,
        fits,
        misfits,
        []
    ) as Adjective;
    const validSubstantiveChapters = substantives.filter(
            (chapter) => !adjective.badWords.includes(chapter.category)
        );
        const validSubstantives= validSubstantiveChapters.map(
            (chapter) => chapter.substantives
        ).flat();
    const substantive =  getFittingRandom(
            validSubstantives,
            fits,
            misfits,
            []
        );

    return adjective.name + " " + substantive.name}