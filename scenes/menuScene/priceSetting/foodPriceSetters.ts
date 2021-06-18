import { getPriceByFactorFromBasePrice } from './priceSetters';

const MAIN_DISH_FACTOR = 2.5;
const BREAKFAST_FACTOR = 1.5;
export const foodPrices = {
    mainDish: getPriceByFactorFromBasePrice(MAIN_DISH_FACTOR),
    breakfast: getPriceByFactorFromBasePrice(BREAKFAST_FACTOR),
};
