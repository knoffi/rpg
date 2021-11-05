import { getPriceByFactorFromBasePrice } from './priceSetters';

const BEER_FACTOR = 0.9;
const WINE_FACTOR = 1.1;
const SPIRITS_FACTOR = 1.1;
const SOFT_DRINK_FACTOR = 0.7;
export const drinkPrices = {
    beer: getPriceByFactorFromBasePrice(BEER_FACTOR),
    wine: getPriceByFactorFromBasePrice(WINE_FACTOR),
    spirits: getPriceByFactorFromBasePrice(SPIRITS_FACTOR),
    softDrink: getPriceByFactorFromBasePrice(SOFT_DRINK_FACTOR),
};
