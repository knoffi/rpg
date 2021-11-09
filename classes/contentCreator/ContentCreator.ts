import { ar_kenji } from "../../content/ar'kenji/ar'kenji";
import { dragonik } from '../../content/dragonik/dragonik';
import { numentor } from '../../content/numentor/numentor';
import { UI_TEST_CONTENT } from '../../content/testing/testing';
import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { Offer } from '../../scenes/menuScene/Offer';
import { emptyImpression } from '../../scenes/questScene/impressions/emptyImpression';
import { getPrefixExcluder } from '../../scenes/questScene/impressions/getPrefixExcluder';
import { IImpression } from '../../scenes/questScene/impressions/IImpression';
import { getKeyExcluder } from '../../scenes/questScene/impressions/impressionExcluder/getImpressionExcluder';
import { association } from '../association';
import { AssetKey } from '../idea/AssetKey/AssetKey';
import { DishIdea } from '../idea/DishIdea';
import { filterBestIdeas } from '../idea/fitCalculator/filterBestIdea';
import { ImpressionIdea } from '../idea/ImpressionIdea';
import { Noticable } from '../idea/Noticable';
import { Pattern } from '../idea/Patterns/Pattern';
import { StructuredTavernFits } from '../idea/StructuredTavernFits';
import { Keys } from '../keyHandler/KeyHandler';
import { Drinkable, Eatable } from '../TavernProduct';
import { emptyKeys } from './emptyKeys';
import { FantasyKeys } from './FantasKeys';

export class ContentCreator {
    private static books = [
        { key: FantasyKeys.standard, book: numentor },
        { key: FantasyKeys.testing, book: UI_TEST_CONTENT },
        { key: FantasyKeys.dragonik, book: dragonik },
        { key: FantasyKeys.ar_kenji, book: ar_kenji },
    ];
    public static getNextKey(prevKey: FantasyKeys) {
        const allKeys = Object.values(FantasyKeys);
        const prevIndex = allKeys.findIndex((key) => key === prevKey);
        const nextIndex = (prevIndex + 1) % allKeys.length;
        return allKeys[nextIndex];
    }
    private noteBook: IImpressionNote[];
    private dishMenu: IDishMenu[];
    private drinkMenu: IDrinkMenu[];
    private bookIndex: number;

    constructor(key = FantasyKeys.standard) {
        const universeIndex = ContentCreator.books.findIndex(
            (book) => book.key === key
        );
        const universeFoundByKey = universeIndex >= 0;

        if (!universeFoundByKey) {
            console.log('___FANTASY KEY NOT FOUND FOR CONSTRUCTION___');
        }

        this.bookIndex = universeFoundByKey ? universeIndex : 0;
        const universe = universeFoundByKey
            ? ContentCreator.books[universeIndex].book
            : ContentCreator.books[0].book;
        this.dishMenu = universe.dishes;
        this.drinkMenu = universe.drinks;
        this.noteBook = universe.notes;
    }

    public incrementContent() {
        const newIndex = (this.bookIndex + 1) % ContentCreator.books.length;
        this.bookIndex = newIndex;
        const newUniverse = ContentCreator.books[newIndex].book;
        this.dishMenu = newUniverse.dishes;
        this.drinkMenu = newUniverse.drinks;
        this.noteBook = newUniverse.notes;
    }

    public getUniverseName() {
        return ContentCreator.books[this.bookIndex].key;
    }

    public deleteCreation(
        name: string,
        deleted:
            | { isAbout: WeServe.impressions; creations: IImpression[] }
            | { isAbout: WeServe.drinks | WeServe.food; creations: Offer[] }
    ): Delete {
        switch (deleted.isAbout) {
            case WeServe.impressions:
                const dissolvingResult = this.dissolveImpression(
                    deleted.creations,
                    name
                );
                return {
                    [WeServe.impressions]: dissolvingResult.reducedImpressions,
                    isAbout: WeServe.impressions,
                    oldKeys: dissolvingResult.keys,
                };
            case WeServe.food:
                const newDishes = deleted.creations.filter(
                    (offer) => offer.name !== name
                );
                return { [WeServe.food]: newDishes, isAbout: WeServe.food };
            default:
                const newDrinks = deleted.creations.filter(
                    (offer) => offer.name !== name
                );
                return { [WeServe.drinks]: newDrinks, isAbout: WeServe.drinks };
        }
    }
    private dissolveImpression(impressions: IImpression[], toRemove: string) {
        const indexToRemove = impressions.findIndex(
            (impression) => impression.name === toRemove
        );
        if (indexToRemove < 0) {
            const dissolvedKeys: Keys = emptyKeys;
            return { reducedImpressions: impressions, keys: dissolvedKeys };
        } else {
            const reducedImpressions = impressions
                .slice(0, indexToRemove)
                .concat(impressions.slice(indexToRemove + 1));
            const removedEntry = impressions[indexToRemove];
            const dissolvedKeys: Keys = removedEntry.keys;
            return { reducedImpressions, keys: dissolvedKeys };
        }
    }

    public noNextCreationLeft(
        fitting: StructuredTavernFits,
        creation: AddCheck
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
                const food: Offer = {
                    ...edit,
                    price: parseInt(edit.priceText),
                    income: association.empty,
                };
                return { isAbout: WeServe.food, edited: food };
            case WeServe.drinks:
                const drink: Offer = {
                    ...edit,
                    price: parseInt(edit.priceText),
                    income: association.empty,
                };
                return { isAbout: WeServe.drinks, edited: drink };
            default:
                const impression: IImpression = {
                    category: edit.category,
                    name: edit.name,
                    patterns: [],
                    keys: emptyKeys,
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
                    newCreationAdded: !!newDrink,
                    added: extendedDrinks,
                    isAbout: WeServe.drinks,
                    category: request.category,
                    newKeys: { main: [], addition: [] },
                };
            case WeServe.food:
                const newDish = this.getRandomDish(
                    fitting,
                    request.category,
                    request.oldAssets
                );
                const extendedDishes = request.oldAssets.concat(newDish || []);
                return {
                    newCreationAdded: !!newDish,
                    added: extendedDishes,
                    isAbout: WeServe.food,
                    category: request.category,
                    newKeys: { main: [], addition: [] },
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
                    newCreationAdded: !!newImpression,
                    added: extendedImpressions,
                    isAbout: WeServe.impressions,
                    category: request.category,
                    newKeys: newImpression.keys,
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
            console.log('Impression category not found' + category + '!');
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
        const oldNames = oldDrinks.map((drink) => drink.name);
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);

        const chapter = this.drinkMenu.find(
            (chapter) => chapter.category === category
        );

        if (!chapter) {
            console.log('Drink category not found' + category + '!');
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
                return newDrink;
            }
        }
    }
    private getRandomDish(
        fitting: StructuredTavernFits,
        category: Eatable,
        oldDishes: Offer[]
    ) {
        const oldNames = oldDishes.map((dish) => dish.name);
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);

        const chapter = this.dishMenu.find(
            (chapter) => chapter.category === category
        );

        if (!chapter) {
            console.log('Food category not found' + category + '!');
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
                return newDish;
            }
        }
    }

    private rerollOneDish(
        fitting: StructuredTavernFits,
        rerolledName: string,
        request: FoodRequest,
        addedDish?: Offer
    ): Reroll {
        const newDish =
            addedDish ||
            this.getRandomDish(fitting, request.category, request.oldAssets);
        const rerolledDishes = newDish
            ? request.oldAssets.map((dish) =>
                  dish.name === rerolledName ? newDish : dish
              )
            : request.oldAssets.filter((dish) => dish.name !== rerolledName);
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
            this.getRandomDrink(fitting, request.category, request.oldAssets);
        const rerolledDrinks = newDrink
            ? request.oldAssets.map((drink) =>
                  drink.name === rerolledName ? newDrink : drink
              )
            : request.oldAssets.filter((drink) => drink.name !== rerolledName);
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
        const oldImpression = request.oldAssets.find(
            (impression) => impression.name === rerolledName
        );
        const rerolledImpressions = request.oldAssets.map((impression) =>
            impression.name === rerolledName
                ? newImpression || emptyImpression
                : impression
        );
        const reroll: Reroll = {
            isAbout: WeServe.impressions,
            oneRerolled: rerolledImpressions,
            newKeys: newImpression.keys,
            oldKeys: oldImpression?.keys || emptyKeys,
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
          newCreationAdded: boolean;
          added: Offer[];
          category: Drinkable;
          newKeys: Keys;
      }
    | {
          isAbout: WeServe.food;
          newCreationAdded: boolean;
          category: Eatable;
          added: Offer[];
          newKeys: Keys;
      }
    | {
          isAbout: WeServe.impressions;
          category: Noticable;
          newCreationAdded: boolean;
          added: IImpression[];
          newKeys: Keys;
      };
export type AddCheck =
    | {
          isAbout: WeServe.drinks;
          added: Offer[];
          category: Drinkable;
      }
    | {
          isAbout: WeServe.food;
          added: Offer[];
          category: Eatable;
      }
    | {
          isAbout: WeServe.impressions;
          category: Noticable;
          added: IImpression[];
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
          oldKeys: Keys;
      };
type Reroll =
    | {
          isAbout: WeServe.drinks | WeServe.food;
          oneRerolled: Offer[];
      }
    | {
          isAbout: WeServe.impressions;
          oneRerolled: IImpression[];
          newKeys: Keys;
          oldKeys: Keys;
      };
export interface IImpressionNote {
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
