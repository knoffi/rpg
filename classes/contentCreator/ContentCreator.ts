import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { NothingLeftOffer, Offer } from '../../scenes/menuScene/Offer';
import { emptyImpression } from '../../scenes/questScene/impressions/emptyImpression';
import { getPrefixExcluder } from '../../scenes/questScene/impressions/getPrefixExcluder';
import { IImpression } from '../../scenes/questScene/impressions/IImpression';
import { getKeyExcluder } from '../../scenes/questScene/impressions/impressionExcluder/getImpressionExcluder';
import { AssetKey } from '../idea/AssetKey/AssetKey';
import { DishIdea } from '../idea/DishIdea';
import { filterBestIdeas } from '../idea/fitCalculator/filterBestIdea';
import { ImpressionIdea } from '../idea/ImpressionIdea';
import { Noticable } from '../idea/Noticable';
import { Pattern } from '../idea/Patterns/Pattern';
import { StructuredTavernFits } from '../idea/StructuredTavernFits';
import { Drinkable, Eatable, TavernProduct } from '../TavernProduct';

export class ContentCreator {
    constructor(
        private noteBook: IImpressionNote[],
        private dishMenu: IDishMenu[],
        private drinkMenu: IDrinkMenu[]
    ) {}

    getRandomImpression(
        fitting: StructuredTavernFits,
        category: Noticable,
        oldImpressions: IImpression[],
        fullFirstKeys: AssetKey[],
        fullSecondKeys: AssetKey[],
        mainFilter?: number,
        additionFilter?: number,
        patterns?: Pattern[]
    ) {
        const oldNames = oldImpressions.map((impression) => impression.name);
        const isExcludedByName = getPrefixExcluder(
            oldNames,
            WeServe.impressions
        );
        const mainIsExcludedByKey = getKeyExcluder(fullFirstKeys);
        const additionIsExcludedByKey = getKeyExcluder(fullSecondKeys);
        const chapter = this.noteBook.find(
            (chapter) => chapter.category === category
        );
        if (!chapter) {
            console.log('Impression category not found!');
            return emptyImpression;
        } else {
            const bestNotes = filterBestIdeas(
                chapter.impressions,
                fitting,
                isExcludedByName,
                mainIsExcludedByKey,
                additionIsExcludedByKey,
                mainFilter,
                additionFilter,
                patterns
            );
            if (!bestNotes) {
                return emptyImpression;
            } else {
                const newIdea = getRandomArrayEntry(bestNotes.ideas);
                const newImpression =
                    newIdea.createImpression(
                        fitting,
                        //additions for impression do not get filtered by name because it seems more realistic
                        () => false,
                        additionIsExcludedByKey,
                        bestNotes.level,
                        additionFilter,
                        patterns
                    ) || emptyImpression;
                return newImpression;
            }
        }
    }
    private getRandomDrink(
        fitting: StructuredTavernFits,
        category: Drinkable,
        oldDrinks: Offer[]
    ) {
        const oldNames = oldDrinks.map((drink) => drink.product.name);
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);

        const chapter = this.drinkMenu.find(
            (chapter) => chapter.category === category
        );

        if (!chapter) {
            console.log('Drink category not found!');
            return NothingLeftOffer;
        } else {
            const bestRecipes = filterBestIdeas(
                chapter.drinks,
                fitting,
                isExcludedByName,
                () => false,
                () => false
            );
            if (!bestRecipes) {
                return NothingLeftOffer;
            } else {
                const newIdea = getRandomArrayEntry(bestRecipes.ideas);
                const newDrink = newIdea.getConcreteDish(
                    fitting,
                    bestRecipes.level
                );
                return ContentCreator.buildOfferFromProduct(newDrink, category);
            }
        }
    }
    private getRandomDish(
        fitting: StructuredTavernFits,
        category: Eatable,
        oldDishes: Offer[]
    ) {
        const oldNames = oldDishes.map((dish) => dish.product.name);
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);

        const chapter = this.dishMenu.find(
            (chapter) => chapter.category === category
        );

        if (!chapter) {
            console.log('Food category not found!');
            return NothingLeftOffer;
        } else {
            const bestRecipes = filterBestIdeas(
                chapter.dishes,
                fitting,
                isExcludedByName,
                () => false,
                () => false
            );
            if (!bestRecipes) {
                return NothingLeftOffer;
            } else {
                const newIdea = getRandomArrayEntry(bestRecipes.ideas);
                const newDish = newIdea.getConcreteDish(
                    fitting,
                    bestRecipes.level
                );
                return ContentCreator.buildOfferFromProduct(newDish, category);
            }
        }
    }

    getRandomMenuItem(
        fitting: StructuredTavernFits,
        demand:
            | { category: Eatable; isAboutFood: true }
            | { category: Drinkable; isAboutFood: false },
        oldMenuItems: Offer[]
    ) {
        if (demand.isAboutFood) {
            return this.getRandomDish(fitting, demand.category, oldMenuItems);
        } else {
            return this.getRandomDrink(fitting, demand.category, oldMenuItems);
        }
    }
    static buildOfferFromProduct(
        product: TavernProduct,
        category: Drinkable | Eatable
    ) {
        const copperPrice = product.copperPrice;
        //TODO: is the resetCategory still necessary?
        product.resetCategory(category);
        return { product: product, price: copperPrice } as Offer;
    }

    rerollOneDish(
        fitting: StructuredTavernFits,
        rerolledName: string,
        dishes: Offer[],
        addedDish?: Offer
    ) {
        const category =
            dishes.find((dish) => dish.product.name === rerolledName)?.product
                .category || Eatable.dessert;
        const newDish =
            addedDish ||
            this.getRandomDish(fitting, category as Eatable, dishes);
        const rerolledDishes = dishes.map((dish) =>
            dish.product.name === rerolledName ? newDish : dish
        );
        return rerolledDishes;
    }
    rerollOneDrink(
        fitting: StructuredTavernFits,
        rerolledName: string,
        drinks: Offer[],
        addedDrink?: Offer
    ) {
        const category =
            drinks.find((drink) => drink.product.name === rerolledName)?.product
                .category || Drinkable.beer;
        const newDrink =
            addedDrink ||
            this.getRandomDrink(fitting, category as Drinkable, drinks);
        const rerolledDrinks = drinks.map((drink) =>
            drink.product.name === rerolledName ? newDrink : drink
        );
        return rerolledDrinks;
    }
    rerollOneImpression(
        fitting: StructuredTavernFits,
        rerolledName: string,
        impressions: IImpression[],
        category: Noticable,
        fullFirstKeys: AssetKey[],
        fullSecondKeys: AssetKey[],
        patterns: Pattern[]
    ) {
        const newImpression = this.getRandomImpression(
            fitting,
            category,
            impressions,
            fullFirstKeys,
            fullSecondKeys,
            undefined,
            undefined,
            patterns
        );
        const rerolledImpressions = impressions.map((impression) =>
            impression.name === rerolledName ? newImpression : impression
        );
        return rerolledImpressions;
    }
}

interface IImpressionNote {
    impressions: ImpressionIdea[];
    category: Noticable;
}
export interface IDishMenu {
    dishes: DishIdea[];
    category: Eatable;
}
export interface IDrinkMenu {
    drinks: DishIdea[];
    category: Drinkable;
}
