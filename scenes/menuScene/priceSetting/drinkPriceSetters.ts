import { PriceSetter } from '../../../classes/idea/PriceSetter';
import { Drinkable } from '../../../classes/TavernProduct';
import { getPriceByFactorFromBasePrice } from './priceSetters';

const BEER_FACTOR = 0.9;
const WINE_FACTOR = 1.1;
const SPIRITS_FACTOR = 1.1;
const SOFT_DRINK_FACTOR = 0.7;
type DrinkPricing = Record<Drinkable, PriceSetter>;
export const drinkPrices: DrinkPricing = {
    [Drinkable.beer]: getPriceByFactorFromBasePrice(BEER_FACTOR),
    [Drinkable.wine]: getPriceByFactorFromBasePrice(WINE_FACTOR),
    [Drinkable.spirit]: getPriceByFactorFromBasePrice(SPIRITS_FACTOR),
    [Drinkable.lemonade]: getPriceByFactorFromBasePrice(SOFT_DRINK_FACTOR),
};
