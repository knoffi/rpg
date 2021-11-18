import { ar_kenji } from "../../content/ar'kenji/ar'kenji";
import { dragonik } from '../../content/dragonik/dragonik';
import { numentor } from '../../content/numentor/numentor';
import { UI_TEST_CONTENT } from '../../content/testing/testing';
import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { Describable } from '../../mainNavigator/TavernData';
import { allCategories, UniverseMap } from '../../mainNavigator/UniverseMap';
import { Offer } from '../../scenes/menuScene/Offer';
import { getPrefixExcluder } from '../../scenes/questScene/impressions/getPrefixExcluder';
import { Impression } from '../../scenes/questScene/impressions/Impression';
import { getKeyExcluder } from '../../scenes/questScene/impressions/impressionExcluder/getImpressionExcluder';
import { association } from '../association';
import { AssetKey } from '../idea/AssetKey/AssetKey';
import { DishIdea } from '../idea/DishIdea';
import { filterBestIdeas } from '../idea/fitCalculator/filterBestIdea';
import { ImpressionIdea } from '../idea/ImpressionIdea';
import { Noticable } from '../idea/Noticable';
import { Pattern } from '../idea/Patterns/Pattern';
import { StructuredTavernFits } from '../idea/StructuredTavernFits';
import { Keys } from '../keyHandler/KeyHandlingTypes';
import { Drinkable, Eatable } from '../TavernProduct';
import { emptyKeys } from './emptyKeys';
import { FantasyKeys } from './FantasKeys';

type Cook = Record<Eatable, DishIdea[]>;
type Bartender = Record<Drinkable, DishIdea[]>;
type Author = Record<Noticable, ImpressionIdea[]>;
type DungeonMaster = Cook & Bartender & Author;

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

    private dungeonMaster: DungeonMaster;
    private universe: UniverseMap;

    constructor(universe: UniverseMap) {
        // TODO: I am ashamed of this piece of code
        this.dungeonMaster = Object.values(allCategories).reduce(
            (object, category) => {
                return {
                    ...object,
                    [category]: ContentCreator.getIdeas(
                        universe[category],
                        category
                    ),
                };
            },
            {} as DungeonMaster
        );
        this.universe = universe;
    }

    public getUniverseName(category: Describable) {
        return this.universe[category];
    }

    public deleteCreation(
        name: string,
        deleted:
            | { isAbout: WeServe.impressions; creations: Impression[] }
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
                    oldPatterns: dissolvingResult.patterns,
                };
            case WeServe.food:
                const newDishes = deleted.creations.filter(
                    (offer) => offer.name !== name
                );
                return {
                    [WeServe.food]: newDishes,
                    isAbout: WeServe.food,
                    oldKeys: emptyKeys,
                    oldPatterns: [],
                };
            default:
                const newDrinks = deleted.creations.filter(
                    (offer) => offer.name !== name
                );
                return {
                    [WeServe.drinks]: newDrinks,
                    isAbout: WeServe.drinks,
                    oldKeys: emptyKeys,
                    oldPatterns: [],
                };
        }
    }
    private dissolveImpression(impressions: Impression[], toRemove: string) {
        const indexToRemove = impressions.findIndex(
            (impression) => impression.name === toRemove
        );
        if (indexToRemove < 0) {
            const dissolvedKeys: Keys = emptyKeys;
            const dissolvedPatterns: Pattern[] = [];
            console.log(
                '___COULD NOT FIND CREATION TO REMOVE: ' + toRemove + '___'
            );
            return {
                reducedImpressions: impressions,
                keys: dissolvedKeys,
                patterns: dissolvedPatterns,
            };
        } else {
            const reducedImpressions = impressions
                .slice(0, indexToRemove)
                .concat(impressions.slice(indexToRemove + 1));
            const removedEntry = impressions[indexToRemove];

            const dissolvedKeys: Keys = removedEntry.keys;
            const dissolvedPatterns: Pattern[] = removedEntry.patterns;

            return {
                reducedImpressions,
                keys: dissolvedKeys,
                patterns: dissolvedPatterns,
            };
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
                    universe: 'isUserMade',
                };
                return { isAbout: WeServe.food, edited: food };
            case WeServe.drinks:
                const drink: Offer = {
                    ...edit,
                    price: parseInt(edit.priceText),
                    income: association.empty,
                    universe: 'isUserMade',
                };
                return { isAbout: WeServe.drinks, edited: drink };
            default:
                const impression: Impression = {
                    category: edit.category,
                    name: edit.name,
                    patterns: [],
                    keys: emptyKeys,
                    universe: 'isUserMade',
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
                    newPatterns: [],
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
                    newPatterns: [],
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
                const extendedImpressions = request.oldAssets.concat(
                    newImpression || []
                );

                return {
                    newCreationAdded: !!newImpression,
                    added: extendedImpressions,
                    isAbout: WeServe.impressions,
                    category: request.category,
                    newKeys: newImpression?.keys || emptyKeys,
                    newPatterns: newImpression?.patterns || [],
                };
        }
    }

    private getRandomImpression(
        fitting: StructuredTavernFits,
        category: Noticable,
        oldImpressions: Impression[],
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
        const ideas = this.dungeonMaster[category];

        const bestNotes = filterBestIdeas(
            ideas,
            fitting,
            isExcludedByName,
            mainIsExcludedByKey,
            additionIsExcludedByKey,
            mainFilter,
            additionFilter,
            patterns
        );
        if (!bestNotes) {
            return undefined;
        } else {
            const newIdea = getRandomArrayEntry(bestNotes.ideas);
            const newImpression = newIdea.createImpression(
                fitting,
                //additions for impression do not get filtered by name because it seems more realistic
                () => false,
                additionIsExcludedByKey,
                bestNotes.level,
                this.universe[category],
                additionFilter,
                patterns
            );
            return newImpression;
        }
    }
    private getRandomDrink(
        fitting: StructuredTavernFits,
        category: Drinkable,
        oldDrinks: Offer[]
    ) {
        const oldNames = oldDrinks.map((drink) => drink.name);
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);

        const ideas = this.dungeonMaster[category];
        const bestRecipes = filterBestIdeas(
            ideas,
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
                bestRecipes.level,
                this.universe[category]
            );
            return newDrink;
        }
    }
    private getRandomDish(
        fitting: StructuredTavernFits,
        category: Eatable,
        oldDishes: Offer[]
    ) {
        const oldNames = oldDishes.map((dish) => dish.name);
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);

        const ideas = this.dungeonMaster[category];

        const bestRecipes = filterBestIdeas(
            ideas,
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
                bestRecipes.level,
                this.universe[category]
            );
            return newDish;
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
            oldKeys: emptyKeys,
            newKeys: emptyKeys,
            oldPatterns: [],
            newPatterns: [],
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
            oldKeys: emptyKeys,
            newKeys: emptyKeys,
            oldPatterns: [],
            newPatterns: [],
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
        const rerolledImpressions = newImpression
            ? request.oldAssets.map((impression) =>
                  impression.name === rerolledName ? newImpression : impression
              )
            : request.oldAssets.filter(
                  (impression) => impression.name !== rerolledName
              );
        const reroll: Reroll = {
            isAbout: WeServe.impressions,
            oneRerolled: rerolledImpressions,
            newKeys: newImpression?.keys || emptyKeys,
            oldKeys: oldImpression?.keys || emptyKeys,
            oldPatterns: oldImpression?.patterns || [],
            newPatterns: newImpression?.patterns || [],
        };
        return reroll;
    }

    private static getIdeas(universeKey: FantasyKeys, category: Describable) {
        const universe = ContentCreator.books.find(
            (book) => book.key === universeKey
        );
        const book = universe ? universe.book : ContentCreator.books[0].book;
        const ideas = Object.values(book)
            .flat()
            .filter((chapter) => chapter.category === category)
            .map((chapter) => chapter.ideas)
            .flat();
        return ideas;
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
    oldAssets: Impression[];
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
          newPatterns: Pattern[];
      }
    | {
          isAbout: WeServe.food;
          newCreationAdded: boolean;
          added: Offer[];
          category: Eatable;
          newKeys: Keys;
          newPatterns: Pattern[];
      }
    | {
          isAbout: WeServe.impressions;
          category: Noticable;
          newCreationAdded: boolean;
          added: Impression[];
          newKeys: Keys;
          newPatterns: Pattern[];
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
          added: Impression[];
      };

export type Edit =
    | { isAbout: WeServe.drinks; edited: Offer }
    | { isAbout: WeServe.food; edited: Offer }
    | { isAbout: WeServe.impressions; edited: Impression };

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
export type UserMadeImpression = {
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
          oldKeys: Keys;
          oldPatterns: Pattern[];
      }
    | {
          [WeServe.drinks]: Offer[];
          isAbout: WeServe.drinks;
          oldKeys: Keys;
          oldPatterns: Pattern[];
      }
    | {
          [WeServe.impressions]: Impression[];
          isAbout: WeServe.impressions;
          oldKeys: Keys;
          oldPatterns: Pattern[];
      };
export type Reroll =
    | {
          isAbout: WeServe.drinks | WeServe.food;
          oneRerolled: Offer[];
          newKeys: Keys;
          oldKeys: Keys;
          oldPatterns: Pattern[];
          newPatterns: Pattern[];
      }
    | {
          isAbout: WeServe.impressions;
          oneRerolled: Impression[];
          newKeys: Keys;
          oldKeys: Keys;
          oldPatterns: Pattern[];
          newPatterns: Pattern[];
      };
export interface ImpressionNote {
    ideas: ImpressionIdea[];
    category: Noticable;
}
export interface IDishMenu {
    ideas: DishIdea[];
    category: Eatable;
}
export interface IDrinkMenu {
    ideas: DishIdea[];
    category: Drinkable;
}
