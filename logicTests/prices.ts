import { expect } from 'chai';
import { association } from '../classes/association';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { DishIdea } from '../classes/idea/DishIdea';
import { Prices } from '../classes/price/Price';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { Constants } from './Constants';

describe('Prices:', () => {
    it('price fluctuation bounds', () => {
        const baseValue = 30;
        const average =
            (DishIdea.highestPriceByFluctuation(baseValue) +
                DishIdea.lowestPriceByFluctuation(baseValue)) /
            2;
        expect(baseValue).to.equal(average);
    });
    it('by default', () => {
        const dish = new DishIdea(
            { mainIng: { name: 'Spaghetti' } },
            'default',
            Eatable.mainDish
        );
        const offer = dish.getConcreteDish(
            { income: association.modest },
            0,
            FantasyKeys.testing
        );
        const expectedPrice = new Prices('standard').getIncomeTable(
            Eatable.mainDish,
            'default'
        )[association.modest];
        const lowerBound = DishIdea.lowestPriceByFluctuation(expectedPrice);
        const upperBound = DishIdea.highestPriceByFluctuation(expectedPrice);
        expect(offer).to.have.property('price');
        const createdPrice = offer.price;
        expect(lowerBound).to.be.lessThanOrEqual(createdPrice);
        expect(upperBound).to.be.greaterThanOrEqual(createdPrice);
    });
    it('by factor', () => {
        const dish = new DishIdea(
            { mainIng: { name: 'Spaghetti' } },
            3,
            Eatable.mainDish
        );
        const offer = dish.getConcreteDish(
            { income: association.wealthy },
            0,
            FantasyKeys.testing
        );
        const expectedPrice = new Prices('standard').getIncomeTable(
            Eatable.mainDish,
            3
        )[association.wealthy];
        const lowerBound = DishIdea.lowestPriceByFluctuation(expectedPrice);
        const upperBound = DishIdea.highestPriceByFluctuation(expectedPrice);
        expect(offer).to.have.property('price');
        const createdPrice = offer.price;
        expect(lowerBound).to.be.lessThanOrEqual(createdPrice);
        expect(upperBound).to.be.greaterThanOrEqual(createdPrice);
    });
    it('by partial price setter', () => {
        const richPriceSetter = { ['vastly rich']: 5 };
        const dish = new DishIdea(
            { mainIng: { name: 'Spaghetti' } },
            richPriceSetter,
            Eatable.mainDish
        );
        const offer = dish.getConcreteDish(
            { income: association.rich },
            0,
            FantasyKeys.testing
        );
        const expectedPrice = new Prices('standard').getIncomeTable(
            Eatable.mainDish,
            richPriceSetter
        )[association.rich];
        const lowerBound = DishIdea.lowestPriceByFluctuation(expectedPrice);
        const upperBound = DishIdea.highestPriceByFluctuation(expectedPrice);
        expect(offer).to.have.property('price');
        const createdPrice = offer.price;
        expect(lowerBound).to.be.lessThanOrEqual(createdPrice);
        expect(upperBound).to.be.greaterThanOrEqual(createdPrice);
    });
    it('by partial price for rich, but tavern is poor', () => {
        const richPriceSetter = { ['vastly rich']: 5 };
        const dish = new DishIdea(
            { mainIng: { name: 'Spaghetti' } },
            richPriceSetter,
            Eatable.mainDish
        );
        const offer = dish.getConcreteDish(
            { income: association.poor },
            0,
            FantasyKeys.testing
        );
        const expectedPrice = new Prices('standard').getIncomeTable(
            Eatable.mainDish,
            richPriceSetter
        )[association.poor];
        const lowerBound = DishIdea.lowestPriceByFluctuation(expectedPrice);
        const upperBound = DishIdea.highestPriceByFluctuation(expectedPrice);
        expect(offer).to.have.property('price');
        const createdPrice = offer.price;
        expect(lowerBound).to.be.lessThanOrEqual(createdPrice);
        expect(upperBound).to.be.greaterThanOrEqual(createdPrice);
    });
    it('standard income table by default values', () => {
        const prices = new Prices('standard');
        const beerAverageForModest = prices.getIncomeTable(
            Drinkable.beer,
            'default'
        )[association.modest];
        const wineAverageForModest = prices.getIncomeTable(
            Drinkable.wine,
            'default'
        )[association.modest];
        const spiritAverageForModest = prices.getIncomeTable(
            Drinkable.spirit,
            'default'
        )[association.modest];
        const lemonadeAverageForModest = prices.getIncomeTable(
            Drinkable.lemonade,
            'default'
        )[association.modest];
        const modestDrinkAverage =
            (beerAverageForModest +
                wineAverageForModest +
                spiritAverageForModest +
                lemonadeAverageForModest) /
            4;
        const expectedAverage = standardBasePrice.modest;
        expect(Math.round(modestDrinkAverage)).to.equal(expectedAverage);
    });
    it('standard income table by factor', () => {
        const prices = new Prices('standard');
        const factor = 2;
        const beerAverageForModest = prices.getIncomeTable(
            Drinkable.beer,
            factor
        )[association.modest];
        const wineAverageForModest = prices.getIncomeTable(
            Drinkable.wine,
            factor
        )[association.modest];
        const spiritAverageForModest = prices.getIncomeTable(
            Drinkable.spirit,
            factor
        )[association.modest];
        const lemonadeAverageForModest = prices.getIncomeTable(
            Drinkable.lemonade,
            factor
        )[association.modest];
        const modestDrinkAverage =
            (beerAverageForModest +
                wineAverageForModest +
                spiritAverageForModest +
                lemonadeAverageForModest) /
            4;
        const expectedAverage = factor * standardBasePrice.modest;
        expect(Math.round(modestDrinkAverage)).to.equal(expectedAverage);
    });
    it('standard income table by modest price setter', () => {
        const prices = new Prices('standard');
        const modestPriceSetter = { [association.modest]: 2 };
        const beerAverageForModest = prices.getIncomeTable(
            Drinkable.beer,
            modestPriceSetter
        )[association.modest];
        const wineAverageForModest = prices.getIncomeTable(
            Drinkable.wine,
            modestPriceSetter
        )[association.modest];
        const spiritAverageForModest = prices.getIncomeTable(
            Drinkable.spirit,
            modestPriceSetter
        )[association.modest];
        const lemonadeAverageForModest = prices.getIncomeTable(
            Drinkable.lemonade,
            modestPriceSetter
        )[association.modest];
        const modestDrinkAverage =
            (beerAverageForModest +
                wineAverageForModest +
                spiritAverageForModest +
                lemonadeAverageForModest) /
            4;
        const expectedAverage = 2 * standardBasePrice.modest;
        expect(Math.round(modestDrinkAverage)).to.equal(expectedAverage);
    });
    it('standard income table by wealthy price setter, but for modest', () => {
        const prices = new Prices('standard');
        const wealthyPriceSetter = { [association.wealthy]: 2 };
        const beerAverageForModest = prices.getIncomeTable(
            Drinkable.beer,
            wealthyPriceSetter
        )[association.modest];
        const wineAverageForModest = prices.getIncomeTable(
            Drinkable.wine,
            wealthyPriceSetter
        )[association.modest];
        const spiritAverageForModest = prices.getIncomeTable(
            Drinkable.spirit,
            wealthyPriceSetter
        )[association.modest];
        const lemonadeAverageForModest = prices.getIncomeTable(
            Drinkable.lemonade,
            wealthyPriceSetter
        )[association.modest];
        const modestDrinkAverage =
            (beerAverageForModest +
                wineAverageForModest +
                spiritAverageForModest +
                lemonadeAverageForModest) /
            4;
        const expectedAverage = standardBasePrice.modest;
        expect(Math.round(modestDrinkAverage)).to.equal(expectedAverage);
    });
    it('customized income table by default values', () => {
        const pricing = Constants.priceTable();
        const category = Drinkable.beer;
        const income = association.modest;
        const prices = new Prices(pricing);
        const modestPrice = prices.getIncomeTable(Drinkable.beer, 'default')[
            association.modest
        ];
        const expectedValue = pricing[category][income];
        expect(modestPrice).to.equal(expectedValue);
    });
    it('customized income table by wealthy price setter', () => {
        const pricing = Constants.priceTable();
        const category = Drinkable.lemonade;
        const income = association.wealthy;
        const prices = new Prices(pricing);
        const wealthyFactor = 2;
        const wealthyPriceSetter = { [income]: wealthyFactor };
        const wealthyPrice = prices.getIncomeTable(
            category,
            wealthyPriceSetter
        )[income];
        const expectedValue = wealthyFactor * pricing[category][income];
        expect(wealthyPrice).to.equal(expectedValue);
    });
    it('customized income table by wealthy price setter, but for modest', () => {
        const pricing = Constants.priceTable();
        const category = Eatable.breakfast;
        const income = association.modest;
        const prices = new Prices(pricing);
        const wealthyFactor = 2;
        const wealthyPriceSetter = { [association.wealthy]: wealthyFactor };
        const modestPrice = prices.getIncomeTable(category, wealthyPriceSetter)[
            income
        ];
        const expectedValue = pricing[category][income];
        expect(modestPrice).to.equal(expectedValue);
    });
});
