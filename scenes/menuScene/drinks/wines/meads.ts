import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
import { drinkPrices } from '../../priceSetting/drinkPriceSetters';
import { adjustPriceSetter } from '../../priceSetting/priceSetters';
const a = association;
const MEAD_FACTOR = 1;
const MEAD_WINE_PRICE_SETTER = adjustPriceSetter(drinkPrices.wine, MEAD_FACTOR);
export const meads: DishIdea[] = [
    new DishIdea(
        { mainIng: { name: 'Grizzly Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: "Hog's Mead" } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Bumble Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Blackberry Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Strawberry Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Blueberry Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Raspberry Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Amber Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Apple Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Oaken Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Hazel Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Squirrel Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Green Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Sparrow Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Currant Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Elderberry Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Goldberry Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Golden Rose Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Ginger Mead' } },
        //tastes loike gingerbread? with cinamon, cloves, anis etc. : )
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Rhubarb Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'White Owl Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Grey Owl Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Hellberry Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Spitfire Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Infernal Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Black Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Gentian Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Dire Wolve Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Cinnamon Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Red Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Fairy Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Ivory Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Silver Mead' } },
        // the taste of Dwarvish expertise. Can't touch this!
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Marble Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Coal Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Quartz Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Fungus Mead' } },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Hammer Mead' } },
        // the taste of Dwarvish expertise. Can't touch this!
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        { mainIng: { name: 'Broadsword Mead' } },
        // the taste of Dwarvish expertise. Can't touch this!
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
];
