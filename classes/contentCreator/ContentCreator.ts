import { DeepReadonly } from 'ts-essentials';
import { ar_kenji } from "../../content/ar'kenji/ar'kenji";
import { dragonik } from '../../content/dragonik/dragonik';
import { numentor } from '../../content/numentor/numentor';
import { UI_TEST_CONTENT } from '../../content/testUI/testing';
import { UNIT_TEST_CONTENT } from '../../content/UNIT_TESTING/testing';
import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { Describable } from '../../mainNavigator/TavernData';
import { allCategories, UniverseMap } from '../../mainNavigator/UniverseMap';
import { Offer } from '../../scenes/menuScene/Offer';
import { CoverageTest } from '../../scenes/nameScene/contentCoverage/CoverageTest';
import { getPrefixExcluder } from '../../scenes/questScene/impressions/getPrefixExcluder';
import { Impression } from '../../scenes/questScene/impressions/Impression';
import { getKeyExcluder } from '../../scenes/questScene/impressions/impressionExcluder/getImpressionExcluder';
import { association } from '../association';
import { AssetKey } from '../idea/AssetKey/AssetKey';
import { DishIdea } from '../idea/DishIdea';
import { filterBestIdeas } from '../idea/fitCalculator/filterBestIdea';
import { BEST_FIT_LEVEL } from '../idea/fitCalculator/getFitLevel';
import { Idea } from '../idea/Idea';
import { ImpressionIdea } from '../idea/ImpressionIdea';
import { Noticable } from '../idea/Noticable';
import { Pattern } from '../idea/Patterns/Pattern';
import {
    getStructuredFits,
    StructuredTavernFits,
} from '../idea/StructuredTavernFits';
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
        { key: FantasyKeys.unitTest, book: UNIT_TEST_CONTENT },
    ];
    public static getNextKey(prevKey: FantasyKeys) {
        const allKeys = Object.values(FantasyKeys);
        const prevIndex = allKeys.findIndex((key) => key === prevKey);
        const nextIndex = (prevIndex + 1) % allKeys.length;
        return allKeys[nextIndex];
    }

    private dungeonMaster: DungeonMaster;
    private universe: UniverseMap;

    constructor(universe: DeepReadonly<UniverseMap>) {
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
            {}
        ) as DungeonMaster;
        this.universe = universe;
    }

    public getUniverseName(category: Describable) {
        return this.universe[category];
    }

    public deleteCreation(name: string, toReduce: ReduceTarget): Delete {
        const dissolve = this.dissolveCreation(toReduce, name);
        switch (dissolve.isAbout) {
            case WeServe.impressions:
                return {
                    ...dissolve,
                    impression: dissolve.reduced,
                    oldKeys: dissolve.keys,
                    oldPatterns: dissolve.patterns,
                };
            case WeServe.drinks:
                return {
                    ...dissolve,
                    drink: dissolve.reduced,
                    oldKeys: dissolve.keys,
                    oldPatterns: dissolve.patterns,
                };
            default:
                return {
                    ...dissolve,
                    food: dissolve.reduced,
                    oldKeys: dissolve.keys,
                    oldPatterns: dissolve.patterns,
                };
        }
    }
    private dissolveCreation(
        toReduce: ReduceTarget,
        toRemove: string
    ): Dissolve {
        const indexToRemove = (toReduce.oldAssets as Asset[]).findIndex(
            (asset) => asset.name === toRemove
        );
        if (indexToRemove < 0) {
            const keys: Keys = emptyKeys;
            const patterns: Pattern[] = [];
            console.log(
                '___COULD NOT FIND CREATION TO REMOVE: ' + toRemove + '___'
            );
            switch (toReduce.isAbout) {
                case WeServe.impressions:
                    return {
                        ...toReduce,
                        reduced: toReduce.oldAssets,
                        keys,
                        patterns,
                    };
                case WeServe.food:
                    return {
                        ...toReduce,
                        reduced: toReduce.oldAssets,
                        keys,
                        patterns,
                    };
                default:
                    return {
                        ...toReduce,
                        reduced: toReduce.oldAssets,
                        keys,
                        patterns,
                    };
            }
        } else {
            const removedEntry = toReduce.oldAssets[indexToRemove];

            const keys: Keys = removedEntry.keys;
            const patterns: Pattern[] = removedEntry.patterns;
            switch (toReduce.isAbout) {
                case WeServe.impressions:
                    const reducedImpressions = toReduce.oldAssets.filter(
                        (asset, index) => index !== indexToRemove
                    );
                    return {
                        ...toReduce,
                        reduced: reducedImpressions,
                        keys,
                        patterns,
                    };
                case WeServe.drinks:
                    const reducedDrinks = toReduce.oldAssets.filter(
                        (asset, index) => index !== indexToRemove
                    );
                    return {
                        ...toReduce,
                        reduced: reducedDrinks,
                        keys,
                        patterns,
                    };

                default:
                    const reducedDishes = toReduce.oldAssets.filter(
                        (asset, index) => index !== indexToRemove
                    );
                    return {
                        ...toReduce,
                        reduced: reducedDishes,
                        keys,
                        patterns,
                    };
            }
        }
    }

    public noNextCreationLeft(
        fitting: StructuredTavernFits,
        creation: AddCheck
    ): boolean {
        switch (creation.isAbout) {
            case WeServe.drinks:
                return !this.getRandomDrink(fitting, {
                    ...creation,
                    oldAssets: creation.added,
                    fullFirstKeys: [],
                    fullSecondKeys: [],
                });
            case WeServe.food:
                return !this.getRandomDish(fitting, {
                    ...creation,
                    oldAssets: creation.added,
                    fullFirstKeys: [],
                    fullSecondKeys: [],
                });

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
                    keys: emptyKeys,
                    patterns: [],
                };
                return { isAbout: WeServe.food, edited: food };
            case WeServe.drinks:
                const drink: Offer = {
                    ...edit,
                    price: parseInt(edit.priceText),
                    income: association.empty,
                    universe: 'isUserMade',
                    keys: emptyKeys,
                    patterns: [],
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

    public testCoverage(category: Describable): CoverageTest {
        const reducer = this.getCoverageReducer(category);
        const minimizationAnchor: CoverageTest = {
            category,
            fewestPowerfits: { fits: [], value: BEST_FIT_LEVEL() },
            fewestRegularFits: { fits: [], value: BEST_FIT_LEVEL() },
        };
        return Object.values(association).reduce(reducer, minimizationAnchor);
    }
    private getCoverageReducer(category: Describable) {
        return (prev: CoverageTest, newFit: association): CoverageTest => {
            if (newFit === association.empty) {
                return prev;
            }
            const testCounting = this.testFittingCoverage(
                this.getPowerFitting(newFit),
                category
            );
            const powerFitTest: Pick<CoverageTest, 'fewestPowerfits'> =
                testCounting.powerFit < prev.fewestPowerfits.value
                    ? {
                          fewestPowerfits: {
                              value: testCounting.powerFit,
                              fits: [newFit],
                          },
                      }
                    : testCounting.powerFit === prev.fewestPowerfits.value
                    ? {
                          fewestPowerfits: {
                              value: testCounting.powerFit,
                              fits: [...prev.fewestPowerfits.fits, newFit],
                          },
                      }
                    : { fewestPowerfits: prev.fewestPowerfits };
            const regularTest: Pick<CoverageTest, 'fewestRegularFits'> =
                testCounting.reulgarFit < prev.fewestRegularFits.value
                    ? {
                          fewestRegularFits: {
                              value: testCounting.reulgarFit,
                              fits: [newFit],
                          },
                      }
                    : testCounting.reulgarFit === prev.fewestRegularFits.value
                    ? {
                          fewestRegularFits: {
                              value: testCounting.reulgarFit,
                              fits: [...prev.fewestRegularFits.fits, newFit],
                          },
                      }
                    : { fewestRegularFits: prev.fewestRegularFits };
            return { ...prev, ...powerFitTest, ...regularTest };
        };
    }
    private getPowerFitting(fit: association) {
        const fitting = getStructuredFits([fit]);
        fitting.powerFit = fit;
        return fitting;
    }
    private testFittingCoverage(
        fitting: StructuredTavernFits,
        category: Describable
    ) {
        const regularFulfillers = (
            this.dungeonMaster[category] as Idea[]
        ).filter((idea) =>
            idea.fitsToTavern(
                { ...fitting, powerFit: undefined },
                () => false,
                undefined,
                undefined,
                undefined,
                undefined,
                1003
            )
        );
        const powerFitFulfillers = regularFulfillers.filter((idea) =>
            idea.fitsToTavern(
                fitting,
                () => false,
                undefined,
                undefined,
                undefined,
                undefined,
                1101
            )
        );
        const regularFitCount = (this.dungeonMaster[category] as Idea[]).filter(
            (idea) =>
                idea.fitsToTavern(
                    { ...fitting, powerFit: undefined },
                    () => false,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    1003
                )
        ).length;
        return {
            powerFit: powerFitFulfillers.length,
            reulgarFit: regularFulfillers.length,
        };
    }

    public addRandomCreation(
        fitting: StructuredTavernFits,
        request: CreationRequest
    ): Add {
        switch (request.isAbout) {
            case WeServe.drinks:
                const newDrink = this.getRandomDrink(fitting, request);
                const extendedDrinks = request.oldAssets.concat(newDrink || []);
                return {
                    newCreationAdded: !!newDrink,
                    added: extendedDrinks,
                    isAbout: WeServe.drinks,
                    category: request.category,
                    newKeys: newDrink?.keys || emptyKeys,
                    newPatterns: [],
                };
            case WeServe.food:
                const newDish = this.getRandomDish(fitting, request);
                const extendedDishes = request.oldAssets.concat(newDish || []);
                return {
                    newCreationAdded: !!newDish,
                    added: extendedDishes,
                    isAbout: WeServe.food,
                    category: request.category,
                    newKeys: newDish?.keys || emptyKeys,
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
        request: DrinkRequest
    ) {
        const oldNames = request.oldAssets.map((drink) => drink.name);
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);

        const ideas = this.dungeonMaster[request.category];
        const bestRecipes = filterBestIdeas(
            ideas,
            fitting,
            isExcludedByName,
            getKeyExcluder(request.fullFirstKeys),
            getKeyExcluder(request.fullSecondKeys)
        );
        if (!bestRecipes) {
            return undefined;
        } else {
            const newIdea = getRandomArrayEntry(bestRecipes.ideas);
            const newDrink = newIdea.getConcreteDish(
                fitting,
                bestRecipes.level,
                this.universe[request.category]
            );
            return newDrink;
        }
    }
    private getRandomDish(fitting: StructuredTavernFits, request: FoodRequest) {
        const oldNames = request.oldAssets.map((dish) => dish.name);
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);

        const ideas = this.dungeonMaster[request.category];

        const bestRecipes = filterBestIdeas(
            ideas,
            fitting,
            isExcludedByName,
            getKeyExcluder(request.fullFirstKeys),
            getKeyExcluder(request.fullSecondKeys)
        );
        if (!bestRecipes) {
            return undefined;
        } else {
            const newIdea = getRandomArrayEntry(bestRecipes.ideas);
            const newDish = newIdea.getConcreteDish(
                fitting,
                bestRecipes.level,
                this.universe[request.category]
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
        const newDish = addedDish || this.getRandomDish(fitting, request);
        const oldDish = request.oldAssets.find(
            (dish) => dish.name === rerolledName
        );
        const rerolledDishes = newDish
            ? request.oldAssets.map((dish) =>
                  dish.name === rerolledName ? newDish : dish
              )
            : request.oldAssets.filter((dish) => dish.name !== rerolledName);
        const reroll: Reroll = {
            isAbout: WeServe.food,
            oneRerolled: rerolledDishes,
            oldKeys: oldDish?.keys || emptyKeys,
            newKeys: newDish?.keys || emptyKeys,
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
        const newDrink = addedDrink || this.getRandomDrink(fitting, request);
        const oldDrink = request.oldAssets.find(
            (drink) => drink.name === rerolledName
        );
        const rerolledDrinks = newDrink
            ? request.oldAssets.map((drink) =>
                  drink.name === rerolledName ? newDrink : drink
              )
            : request.oldAssets.filter((drink) => drink.name !== rerolledName);
        const reroll: Reroll = {
            isAbout: WeServe.drinks,
            oneRerolled: rerolledDrinks,
            oldKeys: oldDrink?.keys || emptyKeys,
            newKeys: newDrink?.keys || emptyKeys,
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
    fullFirstKeys: AssetKey[];
    fullSecondKeys: AssetKey[];
};
export type DrinkRequest = {
    isAbout: WeServe.drinks;
    category: Drinkable;
    oldAssets: Offer[];
    fullFirstKeys: AssetKey[];
    fullSecondKeys: AssetKey[];
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
type Asset = { name: string; keys: Keys; patterns: Pattern[] };
type ReduceTarget =
    | { oldAssets: Impression[]; isAbout: WeServe.impressions }
    | { oldAssets: Offer[]; isAbout: WeServe.drinks }
    | { oldAssets: Offer[]; isAbout: WeServe.food };
type Dissolve = { keys: Keys; patterns: Pattern[] } & (
    | { reduced: Impression[]; isAbout: WeServe.impressions }
    | { reduced: Offer[]; isAbout: WeServe.food }
    | { reduced: Offer[]; isAbout: WeServe.drinks }
);
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
