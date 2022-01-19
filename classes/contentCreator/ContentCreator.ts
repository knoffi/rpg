import { ar_kenji } from "../../content/ar'kenji/ar'kenji";
import { dragonik } from '../../content/dragonik/dragonik';
import { numentor } from '../../content/numentor/numentor';
import { UI_TEST_CONTENT } from '../../content/testUI/testing';
import { UNIT_TEST_CONTENT } from '../../content/UNIT_TESTING/testing';
import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getRandomArrayEntry';
import { DeepReadonly } from '../../logicTests/Cloner';
import { Describable } from '../../mainNavigator/TavernData';
import { allCategories, UniverseMap } from '../../mainNavigator/UniverseMap';
import { Offer } from '../../scenes/menuScene/Offer';
import { Demand } from '../../scenes/menuScene/offerList/actionInterfaces';
import { CoverageTest } from '../../scenes/nameScene/contentCoverage/CoverageTest';
import { getPrefixExcluder } from '../../scenes/questScene/impressions/getPrefixExcluder';
import { Impression } from '../../scenes/questScene/impressions/Impression';
import { getKeyExcluder } from '../../scenes/questScene/impressions/impressionExcluder/getImpressionExcluder';
import { association } from '../association';
import { AssetKey } from '../idea/AssetKey/AssetKey';
import { DishIdea } from '../idea/DishIdea';
import { filterBestIdeas } from '../idea/fitCalculator/filterBestIdea';
import {
    BEST_FIT_LEVEL,
    BEST_POWERLESS_FIT_LEVEL,
    BEST_SPECIALS_WEAKLY_LEVEL,
    KEY_REDUNDANCE_WITH_POWERFIT,
    MINIMAL_PASS_FIT_LEVEL,
} from '../idea/fitCalculator/getFitLevel';
import { Idea } from '../idea/Idea';
import { ImpressionIdea } from '../idea/ImpressionIdea';
import { Noticable } from '../idea/Noticable';
import { Pattern } from '../idea/Patterns/Pattern';
import {
    getStructuredFits,
    StructuredTavernFits,
} from '../idea/StructuredTavernFits';
import { KeyHandler } from '../keyHandler/KeyHandler';
import { KeyChange, Keys } from '../keyHandler/KeyHandlingTypes';
import {
    PatternChange,
    PatternHandler,
} from '../patternHandler/PatternHandler';
import { Drinkable, Eatable } from '../TavernProduct';
import { CreationQuality } from './CreationQuality';
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

    public multiDelete(
        names: string[],
        toReduce: ReduceTarget,
        keys: KeyHandler,
        patterns: PatternHandler
    ): Delete {
        //NOTE: keys and patterns might be states of a component
        const clonedKeys = keys.multiUpdateClone([]);
        const clonedPatterns = patterns.multiUpdateClone([]);
        const reduceAnchor: MultiRerollRequest = {
            ...toReduce,
            keys: clonedKeys,
            pattern: clonedPatterns,
        };
        const multiDeletion = names.reduce(
            (prev, cur) => this.replaceAndUpdate(cur, prev, { type: 'Delete' }),
            reduceAnchor
        );
        switch (multiDeletion.isAbout) {
            case WeServe.impressions:
                return {
                    ...multiDeletion,
                    [multiDeletion.isAbout]: multiDeletion.oldAssets,
                };
            case WeServe.drinks:
                return {
                    ...multiDeletion,
                    [multiDeletion.isAbout]: multiDeletion.oldAssets,
                };
            default:
                return {
                    ...multiDeletion,
                    [multiDeletion.isAbout]: multiDeletion.oldAssets,
                };
        }
    }
    private removeAndUpdate(
        toRemove: string,
        toReduce: MultiRerollRequest
    ): MultiRerollRequest {
        const dissolve = this.dissolveCreation(toReduce, toRemove);
        toReduce.keys.update({
            type: 'Delete',
            isAbout: toReduce.isAbout,
            oldKeys: dissolve.keys,
        });
        toReduce.pattern.update({
            type: 'Delete',
            isAbout: toReduce.isAbout,
            oldPatterns: dissolve.patterns,
        });
        toReduce.pattern.multiRevert(dissolve.impliedPatterns);
        switch (dissolve.isAbout) {
            case WeServe.drinks:
                return {
                    ...dissolve,
                    oldAssets: dissolve.reduced,
                    pattern: toReduce.pattern,
                    keys: toReduce.keys,
                };
            case WeServe.food:
                return {
                    ...dissolve,
                    oldAssets: dissolve.reduced,
                    pattern: toReduce.pattern,
                    keys: toReduce.keys,
                };
            default:
                return {
                    ...dissolve,
                    oldAssets: dissolve.reduced,
                    pattern: toReduce.pattern,
                    keys: toReduce.keys,
                };
        }
    }
    private replaceAndUpdate(
        toReplace: string,
        request: MultiRerollRequest,
        action:
            | { type: 'Delete' }
            | {
                  type: 'Reroll';
                  fitting: StructuredTavernFits;
                  unwanted: string[];
                  unpleasant: string[];
              }
    ): MultiRerollRequest {
        const targetRemoved = this.removeAndUpdate(toReplace, request);
        if (action.type === 'Delete') {
            return targetRemoved;
        } else {
            const replacement = this.getRandomCreation(action.fitting, {
                ...targetRemoved,
                unwanted: action.unwanted,
                unpleasant: action.unpleasant,
            });
            const newProfile = this.cloneUpdateProfile(
                replacement,
                targetRemoved
            );
            if (!!replacement.new) {
                switch (replacement.isAbout) {
                    case WeServe.impressions:
                        const newNotes = (
                            request.oldAssets as Impression[]
                        ).map((oldNote) =>
                            oldNote.name === toReplace
                                ? replacement.new!
                                : oldNote
                        );
                        return {
                            ...replacement,
                            ...newProfile,
                            oldAssets: newNotes,
                        };
                    default:
                        const newMenu = (request.oldAssets as Offer[]).map(
                            (oldNote) =>
                                oldNote.name === toReplace
                                    ? replacement.new!
                                    : oldNote
                        );
                        return {
                            ...replacement,
                            ...newProfile,
                            oldAssets: newMenu,
                        };
                }
            } else {
                throw new Error('UndefinedReplacement');
            }
        }
    }
    private dissolveCreation(
        toReduce: ReduceTarget,
        toRemove: string
    ): Dissolve & Demand {
        const indexToRemove = (toReduce.oldAssets as Asset[]).findIndex(
            (asset) => asset.name === toRemove
        );
        if (indexToRemove < 0) {
            const keys: Keys = emptyKeys;
            const patterns: Pattern[] = [];
            const impliedPatterns: PatternChange[] = [];
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
                        impliedPatterns,
                        category: Noticable.bartender,
                    };
                case WeServe.food:
                    return {
                        ...toReduce,
                        reduced: toReduce.oldAssets,
                        keys,
                        patterns,
                        impliedPatterns,
                        category: Eatable.breakfast,
                    };
                default:
                    return {
                        ...toReduce,
                        reduced: toReduce.oldAssets,
                        keys,
                        patterns,
                        impliedPatterns,
                        category: Drinkable.beer,
                    };
            }
        } else {
            const removedEntry = toReduce.oldAssets[indexToRemove];
            const { keys, patterns, impliedPatterns } = removedEntry;
            switch (removedEntry.isAbout) {
                case WeServe.impressions:
                    const reducedImpressions = (
                        toReduce.oldAssets as Impression[]
                    ).filter((asset, index) => index !== indexToRemove);
                    return {
                        ...removedEntry,
                        reduced: reducedImpressions,
                        keys,
                        patterns,
                        impliedPatterns,
                    };
                case WeServe.drinks:
                    const reducedDrinks = (
                        toReduce.oldAssets as Offer[]
                    ).filter((asset, index) => index !== indexToRemove);
                    return {
                        ...removedEntry,
                        reduced: reducedDrinks,
                        keys,
                        patterns,
                        impliedPatterns,
                    };

                default:
                    const reducedDishes = (
                        toReduce.oldAssets as Offer[]
                    ).filter((asset, index) => index !== indexToRemove);
                    return {
                        ...removedEntry,
                        reduced: reducedDishes,
                        keys,
                        patterns,
                        impliedPatterns,
                    };
            }
        }
    }
    private getCreationQuality(fitLevel?: number): CreationQuality {
        if (!fitLevel) {
            return CreationQuality.NONE;
        } else {
            if (fitLevel >= BEST_FIT_LEVEL(0)) {
                return CreationQuality.HIGH;
            } else {
                if (fitLevel >= BEST_POWERLESS_FIT_LEVEL(0)) {
                    return CreationQuality.GOOD;
                } else {
                    if (fitLevel >= KEY_REDUNDANCE_WITH_POWERFIT) {
                        return CreationQuality.AVERAGE;
                    } else {
                        if (fitLevel >= MINIMAL_PASS_FIT_LEVEL) {
                            return CreationQuality.BARELY;
                        } else {
                            return CreationQuality.NONE;
                        }
                    }
                }
            }
        }
    }

    public contentQualityLeft(
        fitting: StructuredTavernFits,
        creation: AddCheck
    ): CreationQuality {
        switch (creation.isAbout) {
            case WeServe.drinks:
                return this.getCreationQuality(
                    this.getRandomDrink(fitting, {
                        ...creation,
                        oldAssets: creation.added,
                        unwanted: [],
                        unpleasant: [],
                    })?.level
                );
            case WeServe.food:
                return this.getCreationQuality(
                    this.getRandomDish(fitting, {
                        ...creation,
                        oldAssets: creation.added,
                        unwanted: [],
                        unpleasant: [],
                    })?.level
                );

            default:
                return this.getCreationQuality(
                    this.getRandomImpression(fitting, {
                        ...creation,
                        oldAssets: creation.added,
                        unwanted: [],
                        unpleasant: [],
                    })?.level
                );
        }
    }
    public multiReroll(
        fitting: StructuredTavernFits,
        rerolledNames: string[],
        request: MultiRerollRequest,
        unwanted: string[],
        unpleasant: string[]
    ): MultiReroll {
        //NOTE: handlers for keys and patterns may come from React state
        const clonedKeys = request.keys.multiUpdateClone([]);
        const clonedPatterns = request.pattern.multiUpdateClone([]);
        const startRequest: MultiRerollRequest = {
            ...request,
            keys: clonedKeys,
            pattern: clonedPatterns,
        };
        const multiReroll = rerolledNames.reduce((prev, cur) => {
            const reroll = this.replaceAndUpdate(cur, prev, {
                type: 'Reroll',
                fitting,
                unwanted,
                unpleasant,
            });
            return reroll;
        }, startRequest);
        return this.convert(multiReroll);
    }
    private convert(request: MultiRerollRequest): MultiReroll {
        switch (request.isAbout) {
            case WeServe.drinks:
                return {
                    ...request,
                    rerolled: request.oldAssets,
                };
            case WeServe.food:
                return {
                    ...request,
                    rerolled: request.oldAssets,
                };

            default:
                return {
                    ...request,
                    rerolled: request.oldAssets,
                };
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
                    impliedPatterns: [],
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
                    impliedPatterns: [],
                };
                return { isAbout: WeServe.drinks, edited: drink };
            default:
                const impression: Impression = {
                    category: edit.category,
                    name: edit.name,
                    patterns: [],
                    impliedPatterns: [],
                    keys: emptyKeys,
                    universe: 'isUserMade',
                    isAbout: WeServe.impressions,
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
            idea.fitsWithoutPatterns(
                { ...fitting, powerFit: undefined },
                () => false,
                undefined,
                undefined,
                undefined,
                undefined,
                BEST_POWERLESS_FIT_LEVEL(0)
            )
        );
        const powerFitFulfillers = regularFulfillers.filter((idea) =>
            idea.fitsWithoutPatterns(
                fitting,
                () => false,
                undefined,
                undefined,
                undefined,
                undefined,
                BEST_SPECIALS_WEAKLY_LEVEL(0)
            )
        );
        return {
            powerFit: powerFitFulfillers.length,
            reulgarFit: regularFulfillers.length,
        };
    }
    private convertToAdd(added: Creation, request: CreationRequest): Add {
        if (added.isAbout !== request.isAbout) {
            throw new Error('NotMatchingCreation');
        } else {
            const newCreationAdded = !!added.new;
            const newProfile = this.cloneUpdateProfile(added, request);
            switch (request.isAbout) {
                case WeServe.impressions:
                    const newNotes = request.oldAssets.concat(
                        (added.new as Impression | undefined) || []
                    );
                    return {
                        ...request,
                        added: newNotes,
                        newCreationAdded,
                        ...newProfile,
                    };
                default:
                    const newMenu = request.oldAssets.concat(
                        (added.new as Offer | undefined) || []
                    );
                    return {
                        ...request,
                        added: newMenu,
                        newCreationAdded,
                        ...newProfile,
                    };
            }
        }
    }
    private cloneUpdateProfile(added: Creation, oldProfil: Profile): Profile {
        if (!added.new) {
            return {
                keys: oldProfil.keys.multiUpdateClone([]),
                pattern: oldProfil.pattern.multiUpdateClone([]),
            };
        } else {
            const keyChanges: KeyChange[] = [
                {
                    type: 'Add',
                    isAbout: added.isAbout,
                    newKeys: added.new.keys,
                },
            ];
            const newKeys = oldProfil.keys.multiUpdateClone(keyChanges);
            const patternChanges: PatternChange[] = [
                {
                    type: 'Add',
                    isAbout: added.isAbout,
                    newPatterns: added.new.patterns,
                },
                ...added.new.impliedPatterns,
            ];
            const newPattern =
                oldProfil.pattern.multiUpdateClone(patternChanges);
            return { keys: newKeys, pattern: newPattern };
        }
    }
    public addRandomCreation(
        fitting: StructuredTavernFits,
        request: CreationRequest
    ): Add {
        const newCreation = this.getRandomCreation(fitting, request);
        return this.convertToAdd(newCreation, request);
    }
    private getRandomCreation(
        fitting: StructuredTavernFits,
        request: CreationRequest
    ): Creation {
        switch (request.isAbout) {
            case WeServe.drinks:
                const newDrink = this.getRandomDrink(fitting, request);
                return {
                    new: newDrink?.new,
                    isAbout: WeServe.drinks as const,
                    category: request.category,
                };
            case WeServe.food:
                const newDish = this.getRandomDish(fitting, request);
                return {
                    new: newDish?.new,
                    isAbout: WeServe.food as const,
                    category: request.category,
                };

            default:
                const newImpression = this.getRandomImpression(
                    fitting,
                    request
                );

                return {
                    new: newImpression?.new,
                    isAbout: WeServe.impressions as const,
                    category: request.category,
                };
        }
    }

    private getRandomImpression(
        tavernFits: StructuredTavernFits,
        request: ImpressionRequest,
        mainFilter?: number,
        additionFilter?: number
    ) {
        const fullKeys = request.keys.getFullKeys(request.isAbout);
        const patterns = request.pattern.getPatterns(request.isAbout);
        const oldNames = request.oldAssets.map((impression) => impression.name);
        const isExcludedByName = getPrefixExcluder(
            oldNames,
            WeServe.impressions
        );
        const isUnwanted = getPrefixExcluder(
            request.unwanted,
            WeServe.impressions
        );
        const isUnpleasant = getPrefixExcluder(
            request.unpleasant,
            WeServe.impressions
        );
        const mainIsExcludedByKey = getKeyExcluder(fullKeys.main);
        const additionIsExcludedByKey = getKeyExcluder(fullKeys.addition);
        const ideas = this.dungeonMaster[request.category];

        const bestNotes = filterBestIdeas({
            ideas,
            tavernFits,
            isExcludedByName,
            mainIsExcludedByKey,
            additionIsExcludedByKey,
            mainFilter,
            additionFilter,
            patterns,
            isUnwanted,
            isUnpleasant,
        });
        if (!bestNotes) {
            return undefined;
        } else {
            const newIdea = getRandomArrayEntry(bestNotes.ideas);
            const newImpression = newIdea?.createImpression(
                tavernFits,
                //additions for impression do not get filtered by name because it seems more realistic
                () => false,
                additionIsExcludedByKey,
                bestNotes.rating.fitLevel,
                this.universe[request.category],
                additionFilter,
                patterns
            );
            return { new: newImpression, level: bestNotes.rating.fitLevel };
        }
    }
    private getRandomDrink(
        tavernFits: StructuredTavernFits,
        request: DrinkRequest
    ) {
        const fullKeys = request.keys.getFullKeys(request.isAbout);
        const oldNames = request.oldAssets.map((drink) => drink.name);
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);
        const isUnwanted = getPrefixExcluder(request.unwanted, WeServe.drinks);
        const isUnpleasant = getPrefixExcluder(
            request.unwanted,
            WeServe.drinks
        );
        const mainIsExcludedByKey = getKeyExcluder(fullKeys.main);
        const additionIsExcludedByKey = getKeyExcluder(fullKeys.addition);
        const patterns = request.pattern.getPatterns(request.isAbout);

        const ideas = this.dungeonMaster[request.category];
        const bestRecipes = filterBestIdeas({
            ideas,
            tavernFits,
            isExcludedByName,
            mainIsExcludedByKey,
            additionIsExcludedByKey,
            patterns,
            isUnwanted,
            isUnpleasant,
        });
        if (!bestRecipes) {
            return undefined;
        } else {
            const newIdea = getRandomArrayEntry(bestRecipes.ideas);
            const newDrink = newIdea?.getConcreteDish(
                tavernFits,
                bestRecipes.rating.fitLevel,
                this.universe[request.category],
                additionIsExcludedByKey,
                patterns
            );
            return { new: newDrink, level: bestRecipes.rating.fitLevel };
        }
    }
    private getRandomDish(
        tavernFits: StructuredTavernFits,
        request: FoodRequest
    ) {
        const fullKeys = request.keys.getFullKeys(request.isAbout);
        const oldNames = request.oldAssets.map((dish) => dish.name);
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);
        const isUnwanted = getPrefixExcluder(request.unwanted, WeServe.drinks);
        const isUnpleasant = getPrefixExcluder(
            request.unpleasant,
            WeServe.drinks
        );
        const mainIsExcludedByKey = getKeyExcluder(fullKeys.main);
        const additionIsExcludedByKey = getKeyExcluder(fullKeys.addition);
        const patterns = request.pattern.getPatterns(request.isAbout);
        const ideas = this.dungeonMaster[request.category];

        const bestRecipes = filterBestIdeas({
            ideas,
            tavernFits,
            isExcludedByName,
            mainIsExcludedByKey,
            additionIsExcludedByKey,
            patterns,
            isUnpleasant,
            isUnwanted,
        });
        if (!bestRecipes) {
            return undefined;
        } else {
            const newIdea = getRandomArrayEntry(bestRecipes.ideas);
            const newDish = newIdea?.getConcreteDish(
                tavernFits,
                bestRecipes.rating.fitLevel,
                this.universe[request.category],
                additionIsExcludedByKey,
                patterns
            );
            return { new: newDish, level: bestRecipes.rating.fitLevel };
        }
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
type FoodBasic = {
    isAbout: WeServe.food;
    category: Eatable;
    oldAssets: Offer[];
};
type DrinkBasic = {
    isAbout: WeServe.drinks;
    category: Drinkable;
    oldAssets: Offer[];
};
type ImpressionBasic = {
    isAbout: WeServe.impressions;
    category: Noticable;
    oldAssets: Impression[];
    mainFilter?: number;
    additionFilter?: number;
};
type Creation =
    | {
          isAbout: WeServe.food;
          category: Eatable;
          new?: Offer;
      }
    | {
          isAbout: WeServe.drinks;
          category: Drinkable;
          new?: Offer;
      }
    | {
          isAbout: WeServe.impressions;
          category: Noticable;
          new?: Impression;
      };
export type Profile = { keys: KeyHandler; pattern: PatternHandler };
type UserDislike = { unwanted: string[]; unpleasant: string[] };
export type FoodRequest = FoodBasic & Profile & UserDislike;
export type DrinkRequest = DrinkBasic & Profile & UserDislike;
export type ImpressionRequest = ImpressionBasic & Profile & UserDislike;
export type CreationRequest = FoodRequest | DrinkRequest | ImpressionRequest;
export type Add = Profile &
    (
        | {
              isAbout: WeServe.drinks;
              newCreationAdded: boolean;
              added: Offer[];
              category: Drinkable;
          }
        | {
              isAbout: WeServe.food;
              newCreationAdded: boolean;
              added: Offer[];
              category: Eatable;
          }
        | {
              isAbout: WeServe.impressions;
              category: Noticable;
              newCreationAdded: boolean;
              added: Impression[];
          }
    );
export type AddCheck = Profile &
    (
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
          }
    );

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
          category: Eatable;
          keys: KeyHandler;
          pattern: PatternHandler;
      }
    | {
          [WeServe.drinks]: Offer[];
          isAbout: WeServe.drinks;
          category: Drinkable;
          keys: KeyHandler;
          pattern: PatternHandler;
      }
    | {
          [WeServe.impressions]: Impression[];
          isAbout: WeServe.impressions;
          category: Noticable;
          keys: KeyHandler;
          pattern: PatternHandler;
      };
export type Reroll =
    | {
          isAbout: WeServe.drinks | WeServe.food;
          rerolled: Offer[];
          newKeys: Keys;
          oldKeys: Keys;
          oldPatterns: Pattern[];
          newPatterns: Pattern[];
          newImpliedPatterns: PatternChange[];
      }
    | {
          isAbout: WeServe.impressions;
          rerolled: Impression[];
          newKeys: Keys;
          oldKeys: Keys;
          oldPatterns: Pattern[];
          newPatterns: Pattern[];
          newImpliedPatterns: PatternChange[];
      };
type Asset = { name: string; keys: Keys; patterns: Pattern[] };
export type ReduceTarget =
    | {
          oldAssets: Impression[];
          isAbout: WeServe.impressions;
          category: Noticable;
      }
    | { oldAssets: Offer[]; isAbout: WeServe.drinks; category: Drinkable }
    | { oldAssets: Offer[]; isAbout: WeServe.food; category: Eatable };
type Dissolve = {
    keys: Keys;
    patterns: Pattern[];
    impliedPatterns: PatternChange[];
} & (
    | { reduced: Impression[]; isAbout: WeServe.impressions }
    | { reduced: Offer[]; isAbout: WeServe.food }
    | { reduced: Offer[]; isAbout: WeServe.drinks }
);
export type MultiRerollRequest = (FoodBasic | DrinkBasic | ImpressionBasic) & {
    keys: KeyHandler;
    pattern: PatternHandler;
};
export type MultiReroll = (
    | { isAbout: WeServe.food; rerolled: Offer[] }
    | { isAbout: WeServe.drinks; rerolled: Offer[] }
    | { isAbout: WeServe.impressions; rerolled: Impression[] }
) & {
    keys: KeyHandler;
    pattern: PatternHandler;
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
