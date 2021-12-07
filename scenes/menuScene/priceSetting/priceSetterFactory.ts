import { PriceSetter } from '../../../classes/idea/PriceSetter';
import {
    Drinkable,
    Eatable,
    MenuCategory,
} from '../../../classes/TavernProduct';
import { drinkPrices } from './drinkPriceSetters';
import { foodPrices } from './foodPriceSetters';
import {
    adjustPriceSetter,
    getPriceByFactorFromBasePrice,
} from './priceSetters';
const MAIN_DISH_FACTOR = 2.5;
const BREAKFAST_FACTOR = 1.5;
const SIDE_DISH_FACTOR = 0.6;
const DESSERT_FACTOR = 0.8;
const BEER_FACTOR = 0.9;
const WINE_FACTOR = 1.1;
const SPIRITS_FACTOR = 1.2;
const SOFT_DRINK_FACTOR = 0.8;
type FoodPricing = Record<Eatable, PriceSetter>;
type DrinkPricing = Record<Drinkable, PriceSetter>;
type MenuPricing = FoodPricing & DrinkPricing;
export class Prices {
    private static foodPrices: FoodPricing = {
        [Eatable.mainDish]: getPriceByFactorFromBasePrice(MAIN_DISH_FACTOR),
        [Eatable.breakfast]: getPriceByFactorFromBasePrice(BREAKFAST_FACTOR),
        [Eatable.sideDish]: getPriceByFactorFromBasePrice(SIDE_DISH_FACTOR),
        [Eatable.dessert]: getPriceByFactorFromBasePrice(DESSERT_FACTOR),
    };
    private static drinkPrices: DrinkPricing = {
        [Drinkable.beer]: getPriceByFactorFromBasePrice(BEER_FACTOR),
        [Drinkable.wine]: getPriceByFactorFromBasePrice(WINE_FACTOR),
        [Drinkable.spirit]: getPriceByFactorFromBasePrice(SPIRITS_FACTOR),
        [Drinkable.lemonade]: getPriceByFactorFromBasePrice(SOFT_DRINK_FACTOR),
    };
    private static menuPrices: MenuPricing = { ...foodPrices, ...drinkPrices };
    public static getPriceSetter(
        category: MenuCategory,
        factors?: number | Partial<PriceSetter>
    ): PriceSetter {
        return adjustPriceSetter(Prices.menuPrices[category], factors);
    }
}
