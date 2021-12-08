import { standardBasePrice } from '../../scenes/menuScene/basePrice';
import { PriceSetter } from '../idea/PriceSetter';
import { Drinkable, Eatable, MenuCategory } from '../TavernProduct';
import {
    DrinkPricing,
    FoodPricing,
    Income,
    incomeRange,
    MenuPricing,
} from './incomeRange';
const MAIN_DISH_FACTOR = 2.5;
const BREAKFAST_FACTOR = 1.5;
const SIDE_DISH_FACTOR = 0.6;
const DESSERT_FACTOR = 0.8;
const BEER_FACTOR = 0.9;
const WINE_FACTOR = 1.1;
const SPIRITS_FACTOR = 1.2;
const SOFT_DRINK_FACTOR = 0.8;

export class Prices {
    private prices: MenuPricing;
    constructor(pricing: MenuPricing | 'standard') {
        this.prices = pricing === 'standard' ? Prices.default : pricing;
    }
    public getIncomeTable(
        category: MenuCategory,
        factors?: number | Partial<PriceSetter>
    ): PriceSetter {
        return Prices.multiplyPriceSetter(this.prices[category], factors);
    }
    private static multiplyPriceSetter(
        priceSetter: Readonly<PriceSetter>,
        factors?: number | Partial<PriceSetter>
    ): PriceSetter {
        const newPrices = { ...priceSetter };
        incomeRange.forEach((income) => {
            const factor = this.extractFactor(income, factors);
            newPrices[income] = Prices.multiplyPrice(
                priceSetter[income],
                factor
            );
        });
        return newPrices;
    }
    private static extractFactor(
        income: Income,
        factors?: number | Partial<PriceSetter>
    ): number | undefined {
        return !factors || typeof factors === 'number'
            ? factors
            : factors[income];
    }
    private static multiplyPrice(price: number, factor = 1): number {
        const adjustedPrice = Math.floor(price * factor);
        return adjustedPrice > 0 ? adjustedPrice : 1;
    }
    private static buildByDefault(factor: number) {
        return Prices.multiplyPriceSetter(standardBasePrice, factor);
    }
    static foodDefault: FoodPricing = {
        [Eatable.mainDish]: Prices.buildByDefault(MAIN_DISH_FACTOR),
        [Eatable.breakfast]: Prices.buildByDefault(BREAKFAST_FACTOR),
        [Eatable.sideDish]: Prices.buildByDefault(SIDE_DISH_FACTOR),
        [Eatable.dessert]: Prices.buildByDefault(DESSERT_FACTOR),
    };

    static drinkDefault: DrinkPricing = {
        [Drinkable.beer]: Prices.buildByDefault(BEER_FACTOR),
        [Drinkable.wine]: Prices.buildByDefault(WINE_FACTOR),
        [Drinkable.spirit]: Prices.buildByDefault(SPIRITS_FACTOR),
        [Drinkable.lemonade]: Prices.buildByDefault(SOFT_DRINK_FACTOR),
    };
    static default: MenuPricing = {
        ...Prices.foodDefault,
        ...Prices.drinkDefault,
    };
}
