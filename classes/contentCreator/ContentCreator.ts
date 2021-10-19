import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { drinkMenu } from '../../scenes/menuScene/drinks/drinkMenu';
import { foodMenu } from '../../scenes/menuScene/food/foodMenu';
import { getOfferFromMinimalData } from '../../scenes/menuScene/MinimalOfferData';
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

    public deleteCreation(
        name: string,
        deleted:
            | { isAbout: WeServe.impressions; creations: IImpression[] }
            | { isAbout: WeServe.drinks | WeServe.food; creations: Offer[] }
    ): Delete {
        switch (deleted.isAbout) {
            case WeServe.impressions:
                const newImpressions = deleted.creations.filter(
                    (impression) => impression.name !== name
                );
                return {
                    [WeServe.impressions]: newImpressions,
                    isAbout: WeServe.impressions,
                };
            case WeServe.food:
                const newDishes = deleted.creations.filter(
                    (offer) => offer.product.name !== name
                );
                return { [WeServe.food]: newDishes, isAbout: WeServe.food };
            default:
                const newDrinks = deleted.creations.filter(
                    (offer) => offer.product.name !== name
                );
                return { [WeServe.drinks]: newDrinks, isAbout: WeServe.drinks };
        }
    }

    public noNextCreationLeft(
        fitting: StructuredTavernFits,
        creation: Add
    ): boolean {
        switch (creation.isAbout) {
            case WeServe.drinks:
                return !this.getRandomDrink(
                    fitting,
                    creation.category,
                    creation.added
                );
            case WeServe.food:
                return !this.getRandomDish(
                    fitting,
                    creation.category,
                    creation.added
                );

            default:
                return !this.getRandomImpression(
                    fitting,
                    creation.category,
                    creation.added,
                    [],
                    []
                );
        }
    }

    public rerollOneCreation(
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

    public createUserMade(edit: UserMade): Edit {
        switch (edit.isAbout) {
            case WeServe.food:
                const food = getOfferFromMinimalData(edit);
                return { isAbout: WeServe.food, edited: food };
            case WeServe.drinks:
                const drink = getOfferFromMinimalData(edit);
                return { isAbout: WeServe.drinks, edited: drink };
            default:
                const impression: IImpression = {
                    category: edit.category,
                    name: edit.name,
                    patterns: [],
                };
                return { isAbout: WeServe.impressions, edited: impression };
        }
    }

    public addRandomCreation(
        fitting: StructuredTavernFits,
        request: CreationRequest
    ): Add {
        switch (request.isAbout) {
            case WeServe.drinks:
                const newDrink = this.getRandomDrink(
                    fitting,
                    request.category,
                    request.oldAssets
                );
                const extendedDrinks = request.oldAssets.concat(newDrink || []);
                return {
                    new: newDrink,
                    added: extendedDrinks,
                    isAbout: WeServe.drinks,
                    category: request.category,
                };
            case WeServe.food:
                const newDish = this.getRandomDish(
                    fitting,
                    request.category,
                    request.oldAssets
                );
                const extendedDishes = request.oldAssets.concat(newDish || []);
                return {
                    new: newDish,
                    added: extendedDishes,
                    isAbout: WeServe.food,
                    category: request.category,
                };

            default:
                const newImpression = this.getRandomImpression(
                    fitting,
                    request.category,
                    request.oldAssets,
                    request.fullFirstKeys,
                    request.fullSecondKeys,
                    request.mainFilter,
                    request.additionFilter,
                    request.patterns
                );
                const extendedImpressions =
                    request.oldAssets.concat(newImpression);
                return {
                    new: newImpression,
                    added: extendedImpressions,
                    isAbout: WeServe.impressions,
                    category: request.category,
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

    private rerollOneDish(
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
    private rerollOneDrink(
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
    private rerollOneImpression(
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

export type Add =
    | {
          isAbout: WeServe.drinks;
          new?: Offer;
          added: Offer[];
          category: Drinkable;
      }
    | {
          isAbout: WeServe.food;
          category: Eatable;
          added: Offer[];
          new?: Offer;
      }
    | {
          isAbout: WeServe.impressions;
          category: Noticable;
          added: IImpression[];
          new?: IImpression;
      };

export type Edit =
    | { isAbout: WeServe.drinks; edited: Offer }
    | { isAbout: WeServe.food; edited: Offer }
    | { isAbout: WeServe.impressions; edited: IImpression };

export type UserMadeFood = {
    isAbout: WeServe.food;
    category: Eatable;
    name: string;
    priceText: string;
    description: string;
    isUserMade: true;
};
export type UserMadeDrink = {
    isAbout: WeServe.drinks;
    category: Drinkable;
    name: string;
    priceText: string;
    description: string;
    isUserMade: true;
};
type UserMadeImpression = {
    isAbout: WeServe.impressions;
    category: Noticable;
    name: string;
    firstKeys?: AssetKey[];
    secondKeys?: AssetKey[];
    sex?: 'male' | 'female';
    patterns: Pattern[];
    isUserMade: true;
};
export type UserMade = UserMadeDrink | UserMadeImpression | UserMadeFood;
export type Delete =
    | {
          [WeServe.food]: Offer[];
          isAbout: WeServe.food;
      }
    | {
          [WeServe.drinks]: Offer[];
          isAbout: WeServe.drinks;
      }
    | {
          [WeServe.impressions]: IImpression[];
          isAbout: WeServe.impressions;
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
