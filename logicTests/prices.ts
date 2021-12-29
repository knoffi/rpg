import { expect } from 'chai';
import { association } from '../classes/association';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { DishIdea } from '../classes/idea/DishIdea';
import { PriceSetter } from '../classes/idea/PriceSetter';
import { MenuPricing } from '../classes/price/incomeRange';
import { Prices } from '../classes/price/Price';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { standardBasePrice } from '../scenes/menuScene/basePrice';

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
        const dish = new DishIdea(
            { mainIng: { name: 'Spaghetti' } },
            { ['vastly rich']: 5 },
            Eatable.mainDish
        );
        const offer = dish.getConcreteDish(
            { income: association.rich },
            0,
            FantasyKeys.testing
        );
        const expectedPrice = new Prices('standard').getIncomeTable(
            Eatable.mainDish,
            { ['vastly rich']: 5 }
        )[association.rich];
        const lowerBound = DishIdea.lowestPriceByFluctuation(expectedPrice);
        const upperBound = DishIdea.highestPriceByFluctuation(expectedPrice);
        expect(offer).to.have.property('price');
        const createdPrice = offer.price;
        expect(lowerBound).to.be.lessThanOrEqual(createdPrice);
        expect(upperBound).to.be.greaterThanOrEqual(createdPrice);
    });
    it('by partial price for rich, but tavern is poor', () => {
        const dish = new DishIdea(
            { mainIng: { name: 'Spaghetti' } },
            { ['vastly rich']: 5 },
            Eatable.mainDish
        );
        const offer = dish.getConcreteDish(
            { income: association.poor },
            0,
            FantasyKeys.testing
        );
        const expectedPrice = new Prices('standard').getIncomeTable(
            Eatable.mainDish,
            { ['vastly rich']: 5 }
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
        const beerAverageForModest = prices.getIncomeTable(Drinkable.beer, 2)[
            association.modest
        ];
        const wineAverageForModest = prices.getIncomeTable(Drinkable.wine, 2)[
            association.modest
        ];
        const spiritAverageForModest = prices.getIncomeTable(
            Drinkable.spirit,
            2
        )[association.modest];
        const lemonadeAverageForModest = prices.getIncomeTable(
            Drinkable.lemonade,
            2
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
        const crazyPriceSetter: PriceSetter = {
            [association.poor]: 100,
            [association.modest]: 100,
            [association.wealthy]: 10,
            [association.rich]: 10,
        };
        const pricing: MenuPricing = {
            [Drinkable.beer]: crazyPriceSetter,
            [Drinkable.wine]: crazyPriceSetter,
            [Drinkable.spirit]: crazyPriceSetter,
            [Drinkable.lemonade]: crazyPriceSetter,
            [Eatable.mainDish]: crazyPriceSetter,
            [Eatable.sideDish]: crazyPriceSetter,
            [Eatable.dessert]: crazyPriceSetter,
            [Eatable.breakfast]: crazyPriceSetter,
        };
        const prices = new Prices(pricing);
        const modestBeerAverage = prices.getIncomeTable(
            Drinkable.beer,
            'default'
        )[association.modest];
        const expectedAverage = crazyPriceSetter.modest;
        expect(modestBeerAverage).to.equal(expectedAverage);
    });
    it('customized income table by wealthy price setter', () => {
        const crazyPriceSetter: PriceSetter = {
            [association.poor]: 100,
            [association.modest]: 100,
            [association.wealthy]: 10,
            [association.rich]: 10,
        };
        const pricing: MenuPricing = {
            [Drinkable.beer]: crazyPriceSetter,
            [Drinkable.wine]: crazyPriceSetter,
            [Drinkable.spirit]: crazyPriceSetter,
            [Drinkable.lemonade]: crazyPriceSetter,
            [Eatable.mainDish]: crazyPriceSetter,
            [Eatable.sideDish]: crazyPriceSetter,
            [Eatable.dessert]: crazyPriceSetter,
            [Eatable.breakfast]: crazyPriceSetter,
        };
        const prices = new Prices(pricing);
        const wealthyFactor = 2;
        const wealthyPriceSetter = { [association.wealthy]: wealthyFactor };
        const wealthyBeerAverage = prices.getIncomeTable(
            Drinkable.beer,
            wealthyPriceSetter
        )[association.wealthy];
        const expectedAverage = wealthyFactor * crazyPriceSetter.wealthy;
        expect(wealthyBeerAverage).to.equal(expectedAverage);
    });
    it('customized income table by wealthy price setter, but for modest', () => {
        const crazyPriceSetter: PriceSetter = {
            [association.poor]: 100,
            [association.modest]: 100,
            [association.wealthy]: 10,
            [association.rich]: 10,
        };
        const pricing: MenuPricing = {
            [Drinkable.beer]: crazyPriceSetter,
            [Drinkable.wine]: crazyPriceSetter,
            [Drinkable.spirit]: crazyPriceSetter,
            [Drinkable.lemonade]: crazyPriceSetter,
            [Eatable.mainDish]: crazyPriceSetter,
            [Eatable.sideDish]: crazyPriceSetter,
            [Eatable.dessert]: crazyPriceSetter,
            [Eatable.breakfast]: crazyPriceSetter,
        };
        const prices = new Prices(pricing);
        const wealthyFactor = 2;
        const wealthyPriceSetter = { [association.wealthy]: wealthyFactor };
        const modestBeerAverage = prices.getIncomeTable(
            Drinkable.beer,
            wealthyPriceSetter
        )[association.modest];
        const expectedAverage = crazyPriceSetter.modest;
        expect(modestBeerAverage).to.equal(expectedAverage);
    });
});
