import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { drinkMenu } from '../../scenes/menuScene/drinks/drinkMenu';
import { foodMenu } from '../../scenes/menuScene/food/foodMenu';
import { NothingLeftOffer, Offer } from '../../scenes/menuScene/Offer';
import { emptyImpression } from '../../scenes/questScene/impressions/emptyImpression';
import { getPrefixExcluder } from '../../scenes/questScene/impressions/getPrefixExcluder';
import { IImpression } from '../../scenes/questScene/impressions/IImpression';
import { impressionChapters } from '../../scenes/questScene/impressions/impressionChapters';
import { getKeyExcluder } from '../../scenes/questScene/impressions/impressionExcluder/getImpressionExcluder';
import { AssetKey } from '../idea/AssetKey/AssetKey';
import { DishIdea } from '../idea/DishIdea';
import { filterBestIdeas } from '../idea/fitCalculator/filterBestIdea';
import { ImpressionIdea } from '../idea/ImpressionIdea';
import { Noticable } from '../idea/Noticable';
import { Pattern } from '../idea/Patterns/Pattern';
import { StructuredTavernFits } from '../idea/StructuredTavernFits';
import { Drinkable, Eatable, TavernProduct } from '../TavernProduct';
import { FantasyKeys } from './FantasKeys';

export class ContentCreator {
    private static books = new Map<FantasyKeys, FantasyBook>([
        [
            FantasyKeys.standard,
            { notes: impressionChapters, drinks: drinkMenu, dishes: foodMenu },
        ],
    ]);
    private noteBook: IImpressionNote[];
    private dishMenu: IDishMenu[];
    private drinkMenu: IDrinkMenu[];

    constructor(key = FantasyKeys.standard) {
        const universe = ContentCreator.books.get(key);
        this.dishMenu = universe?.dishes || foodMenu;
        this.drinkMenu = universe?.drinks || drinkMenu;
        this.noteBook = universe?.notes || impressionChapters;
    }

    public getRandomCreation(
        fitting: StructuredTavernFits,
        request: CreationRequest
    ): Creation {
        switch (request.isAbout) {
            case WeServe.drinks:
                return {
                    new: this.getRandomDrink(
                        fitting,
                        request.category,
                        request.oldAssets
                    ),
                    isAbout: WeServe.drinks,
                };
            case WeServe.food:
                return {
                    new: this.getRandomDish(
                        fitting,
                        request.category,
                        request.oldAssets
                    ),
                    isAbout: WeServe.food,
                };

            default:
                return {
                    new: this.getRandomImpression(
                        fitting,
                        request.category,
                        request.oldAssets,
                        request.fullFirstKeys,
                        request.fullSecondKeys,
                        request.mainFilter,
                        request.additionFilter,
                        request.patterns
                    ),
                    isAbout: WeServe.impressions,
                };
        }
    }

    private getRandomImpression(
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
            return undefined;
        } else {
            const bestRecipes = filterBestIdeas(
                chapter.drinks,
                fitting,
                isExcludedByName,
                () => false,
                () => false
            );
            if (!bestRecipes) {
                return undefined;
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
            return undefined;
        } else {
            const bestRecipes = filterBestIdeas(
                chapter.dishes,
                fitting,
                isExcludedByName,
                () => false,
                () => false
            );
            if (!bestRecipes) {
                return undefined;
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

    private static buildOfferFromProduct(
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
        request: FoodRequest,
        addedDish?: Offer
    ): Reroll {
        const newDish =
            addedDish ||
            this.getRandomDish(fitting, request.category, request.oldAssets) ||
            NothingLeftOffer;
        const rerolledDishes = request.oldAssets.map((dish) =>
            dish.product.name === rerolledName ? newDish : dish
        );
        const reroll: Reroll = {
            isAbout: WeServe.food,
            oneRerolled: rerolledDishes,
        };
        return reroll;
    }
    rerollOneDrink(
        fitting: StructuredTavernFits,
        rerolledName: string,
        request: DrinkRequest,
        addedDrink?: Offer
    ): Reroll {
        const newDrink =
            addedDrink ||
            this.getRandomDrink(fitting, request.category, request.oldAssets) ||
            NothingLeftOffer;
        const rerolledDrinks = request.oldAssets.map((drink) =>
            drink.product.name === rerolledName ? newDrink : drink
        );
        const reroll: Reroll = {
            isAbout: WeServe.drinks,
            oneRerolled: rerolledDrinks,
        };
        return reroll;
    }
    rerollOneImpression(
        fitting: StructuredTavernFits,
        rerolledName: string,
        request: ImpressionRequest
    ): Reroll {
        const newImpression = this.getRandomImpression(
            fitting,
            request.category,
            request.oldAssets,
            request.fullFirstKeys,
            request.fullSecondKeys,
            undefined,
            undefined,
            request.patterns
        );
        const rerolledImpressions = request.oldAssets.map((impression) =>
            impression.name === rerolledName
                ? newImpression || emptyImpression
                : impression
        );
        const reroll: Reroll = {
            isAbout: WeServe.impressions,
            oneRerolled: rerolledImpressions,
        };
        return reroll;
    }

    rerollOneCreation(
        fitting: StructuredTavernFits,
        rerolledName: string,
        request: CreationRequest
    ) {
        switch (request.isAbout) {
            case WeServe.impressions:
                return this.rerollOneImpression(fitting, rerolledName, request);
            case WeServe.food:
                return this.rerollOneDish(fitting, rerolledName, request);
            default:
                return this.rerollOneDrink(fitting, rerolledName, request);
        }
    }
}
export type FoodRequest = {
    isAbout: WeServe.food;
    category: Eatable;
    oldAssets: Offer[];
};
export type DrinkRequest = {
    isAbout: WeServe.drinks;
    category: Drinkable;
    oldAssets: Offer[];
};
export type ImpressionRequest = {
    isAbout: WeServe.impressions;
    category: Noticable;
    oldAssets: IImpression[];
    fullFirstKeys: AssetKey[];
    fullSecondKeys: AssetKey[];
    mainFilter?: number;
    additionFilter?: number;
    patterns?: Pattern[];
};
export type CreationRequest = FoodRequest | DrinkRequest | ImpressionRequest;

type Creation =
    | {
          isAbout: WeServe.drinks | WeServe.food;
          new?: Offer;
      }
    | {
          isAbout: WeServe.impressions;
          new?: IImpression;
      };
type Reroll =
    | {
          isAbout: WeServe.drinks | WeServe.food;
          oneRerolled: Offer[];
      }
    | {
          isAbout: WeServe.impressions;
          oneRerolled: IImpression[];
      };
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

type FantasyBook = {
    notes: IImpressionNote[];
    drinks: IDrinkMenu[];
    dishes: IDishMenu[];
};
