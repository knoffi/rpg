import { association } from "../classes/Adjectives";
import { drinkCategory, foodCategory } from "../classes/TavernProduct";
import { BasePrice } from "../scenes/menuScene/basePrice";
import { Offer } from "../scenes/menuScene/menuEnums";

export interface updateFunctions {
    forFitting: (fitting:{fits:association[],misfits:association[]})=>void,
    forTavernTemplate:(templateKey: string,
    getMisfits: (fits: association[]) => association[])=>void,
    forName:(name:string)=>void,
    forDrinks:(drinks: Offer[],
        is: {
            add: foodCategory | drinkCategory | undefined;
            delete: foodCategory | drinkCategory | undefined;
        })=>void,
    forDishes: (drinks: Offer[],
    is: {
        add: foodCategory | drinkCategory | undefined;
        delete: foodCategory | drinkCategory | undefined;
    })=>void,
    forPrice:(basePrice: BasePrice)=>void,
    forDrinkBannerVisible : (isVisible: boolean) =>void,
    forFoodBannerVisible : (isVisible: boolean) => void,

}