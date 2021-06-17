import { getPriceByFactorFromBasePrice } from './priceSetters';

const BEER_FACTOR = 0.9;
const WINE_FACTOR = 1.1;
export const drinkPrices = {
    beer: getPriceByFactorFromBasePrice(BEER_FACTOR),
    wine: getPriceByFactorFromBasePrice(WINE_FACTOR),
};
