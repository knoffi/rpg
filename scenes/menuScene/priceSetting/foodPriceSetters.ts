import { PriceSetter } from '../../../classes/idea/PriceSetter';
import { Eatable } from '../../../classes/TavernProduct';
import { getPriceByFactorFromBasePrice } from './priceSetters';

const MAIN_DISH_FACTOR = 2.5;
const BREAKFAST_FACTOR = 1.5;
const SIDE_DISH_FACTOR = 0.6;
const DESSERT_FACTOR = 0.8;
type FoodPricing = Record<Eatable, PriceSetter>;
export const foodPrices: FoodPricing = {
    [Eatable.mainDish]: getPriceByFactorFromBasePrice(MAIN_DISH_FACTOR),
    [Eatable.breakfast]: getPriceByFactorFromBasePrice(BREAKFAST_FACTOR),
    [Eatable.sideDish]: getPriceByFactorFromBasePrice(SIDE_DISH_FACTOR),
    [Eatable.dessert]: getPriceByFactorFromBasePrice(DESSERT_FACTOR),
};
