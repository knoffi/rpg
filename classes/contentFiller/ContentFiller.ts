import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getRandomArrayEntry';
import { Content } from '../../mainNavigator/Content';
import { convertAdd } from '../../mainNavigator/convertAdd';
import { getTavernHistoryInitializer } from '../../mainNavigator/mainNavigatorFunctions';
import { iconicFittings } from '../../mainNavigator/randomTavern/iconicFittings';
import { Describable, MinimalTavernData } from '../../mainNavigator/TavernData';
import { UniverseMap } from '../../mainNavigator/UniverseMap';
import { BasePrice, standardBasePrice } from '../../scenes/menuScene/basePrice';
import { Offer } from '../../scenes/menuScene/Offer';
import { Demand } from '../../scenes/menuScene/offerList/actionInterfaces';
import { getRandomName } from '../../scenes/nameScene/getRandomName';
import { Impression } from '../../scenes/questScene/impressions/Impression';
import {
    association,
    AssociationTypes,
    getAssociationsOfType,
} from '../association';
import {
    Add,
    ContentCreator,
    CreationRequest,
} from '../contentCreator/ContentCreator';
import { Noticable } from '../idea/Noticable';
import {
    getStructuredFits,
    StructuredTavernFits,
} from '../idea/StructuredTavernFits';
import { KeyHandler } from '../keyHandler/KeyHandler';
import { PatternHandler } from '../patternHandler/PatternHandler';
import { Drinkable, Eatable } from '../TavernProduct';
const CHANCE_FOR_ICONIC_FITTING = 0.8;
const CHANCE_FOR_SPECIAL_FIT = 0.2;
const CHANCE_FOR_ORDINARY_FIT = 0.625;
const BARTENDER_NOTES = 4;
const MAX_IDEA = 3;
const MAX_PRICE_DERIVATION = 0.3;
type ContentSum = {
    content: (Offer | Impression)[];
    keys: KeyHandler;
    patterns: PatternHandler;
};
type Page = (
    | { isAbout: WeServe.drinks; category: Drinkable; content: Offer[] }
    | { isAbout: WeServe.food; category: Eatable; content: Offer[] }
    | {
          isAbout: WeServe.impressions;
          category: Noticable;
          content: Impression[];
      }
) & { newKeys: KeyHandler; newPattern: PatternHandler };
export class ContentFiller {
    private universe: UniverseMap;
    private creator: ContentCreator;
    private sizes: ChapterSize;
    constructor(universe: UniverseMap) {
        this.universe = universe;
        this.creator = new ContentCreator(universe);
        this.sizes = new ChapterSize();
    }

    public getRandomTavern = (): MinimalTavernData => {
        const defaultTavern = getTavernHistoryInitializer(this.universe).tavern;
        const fitting = this.getRandomStructuredFits();
        const prices = this.getRandomBasePrice();
        const name = this.getRandomName(fitting);
        //TODO: use PatternHandler to get better content
        const content = this.randomContent(fitting);

        return { ...defaultTavern, name, prices, fitting, ...content };
    };

    private getRandomFits() {
        const fitsWithEmptyFits = Object.values(AssociationTypes).map(
            (type) => {
                const chanceToAddFit =
                    type === AssociationTypes.special
                        ? CHANCE_FOR_SPECIAL_FIT
                        : CHANCE_FOR_ORDINARY_FIT;
                return Math.random() < chanceToAddFit
                    ? //NOTE: fail fast is prefered here
                      getRandomArrayEntry(getAssociationsOfType(type))!
                    : association.empty;
            }
        );
        return fitsWithEmptyFits.filter((fit) => fit !== association.empty);
    }

    private getRandomPowerFit(
        fitting: StructuredTavernFits
    ): association | undefined {
        const fits = Object.values(fitting)
            .map((fit) => fit || association.empty)
            .filter((fit) => fit !== association.empty && fit);
        if (fits.length === 0) {
            return undefined;
        }
        return getRandomArrayEntry(fits);
    }

    private getRandomStructuredFits(): StructuredTavernFits {
        const fitting =
            Math.random() < CHANCE_FOR_ICONIC_FITTING
                ? //NOTE: fail fast is prefered here
                  getRandomArrayEntry(iconicFittings)!
                : getStructuredFits(this.getRandomFits());
        fitting.powerFit = this.getRandomPowerFit(fitting);
        return fitting;
    }
    private getRandomBasePrice() {
        const randomFactor = 1 + (2 * Math.random() - 1) * MAX_PRICE_DERIVATION;
        return {
            [association.wealthy]: Math.floor(
                randomFactor * standardBasePrice[association.wealthy]
            ),
            [association.rich]: Math.floor(
                randomFactor * standardBasePrice[association.rich]
            ),
            [association.modest]: Math.floor(
                randomFactor * standardBasePrice[association.modest]
            ),
            [association.poor]: Math.floor(
                randomFactor * standardBasePrice[association.poor]
            ),
            currency: 'copper',
        } as BasePrice;
    }

    public randomChapter(
        fits: StructuredTavernFits,
        isAbout: WeServe,
        keys: KeyHandler,
        pattern: PatternHandler
    ):
        | ({ chapter: Pick<Content, WeServe.drinks> } & {
              isAbout: WeServe.drinks;
          })
        | ({ chapter: Pick<Content, WeServe.food> } & { isAbout: WeServe.food })
        | ({ chapter: Pick<Content, WeServe.impressions> } & {
              isAbout: WeServe.impressions;
          }) {
        switch (isAbout) {
            case WeServe.drinks:
                const drinks = Object.values(Drinkable).flatMap(
                    (category) =>
                        this.randomPage(
                            fits,
                            { isAbout, category },
                            keys,
                            pattern
                        ).content as Offer[]
                );
                return { chapter: { [isAbout]: drinks }, isAbout };
            case WeServe.food:
                const food = Object.values(Eatable).flatMap(
                    (category) =>
                        this.randomPage(
                            fits,
                            { isAbout, category },
                            keys,
                            pattern
                        ).content as Offer[]
                );
                return { chapter: { [isAbout]: food }, isAbout };
            default:
                const impressions = Object.values(Noticable).flatMap(
                    (category) =>
                        this.randomPage(
                            fits,
                            { isAbout, category },
                            keys,
                            pattern
                        ).content as Impression[]
                );
                return { chapter: { [isAbout]: impressions }, isAbout };
        }
    }

    public randomPage(
        fits: StructuredTavernFits,
        demand: Demand,
        keys: KeyHandler,
        patterns: PatternHandler
    ): Page {
        const contentSum: ContentSum = {
            content: [],
            keys: keys.multiUpdateClone([]),
            patterns: patterns.multiUpdateClone([]),
        };
        const page = this.fillCategory(
            fits,
            demand,
            this.creator,
            contentSum
        ).content;
        switch (demand.isAbout) {
            case WeServe.drinks:
                return {
                    content: page as Offer[],
                    ...demand,
                    newKeys: contentSum.keys,
                    newPattern: contentSum.patterns,
                };
            case WeServe.food:
                return {
                    content: page as Offer[],
                    ...demand,
                    newKeys: contentSum.keys,
                    newPattern: contentSum.patterns,
                };

            default:
                return {
                    content: page as Impression[],
                    ...demand,
                    newKeys: contentSum.keys,
                    newPattern: contentSum.patterns,
                };
        }
    }

    public randomContent(fits: StructuredTavernFits): Content {
        // evolves keyHandler from category, to category, from WeServe to WeServe, THUS keyHandler needs to be mutable
        const keyHandler = new KeyHandler('noPreviousContent');
        const patternHandler = new PatternHandler('noContent');
        const drinks = Object.values(Drinkable).reduce(
            (contentSum, category) =>
                this.fillCategory(
                    fits,
                    {
                        isAbout: WeServe.drinks,
                        category,
                    },
                    this.creator,
                    contentSum
                ),
            {
                content: [],
                keys: keyHandler,
                patterns: patternHandler,
            } as ContentSum
        ).content as Offer[];
        const food = Object.values(Eatable).reduce(
            (contentSum, category) =>
                this.fillCategory(
                    fits,
                    {
                        isAbout: WeServe.food,
                        category,
                    },
                    this.creator,
                    contentSum
                ),
            {
                content: [],
                keys: keyHandler,
                patterns: patternHandler,
            } as ContentSum
        ).content as Offer[];
        const impressions = Object.values(Noticable).reduce(
            (contentSum, category) =>
                this.fillCategory(
                    fits,
                    {
                        isAbout: WeServe.impressions,
                        category,
                    },
                    this.creator,
                    contentSum
                ),
            {
                content: [],
                keys: keyHandler,
                patterns: patternHandler,
            } as ContentSum
        ).content as Impression[];
        return {
            [WeServe.drinks]: drinks,
            [WeServe.food]: food,
            [WeServe.impressions]: impressions,
        };
    }

    private getRandomName(fits: StructuredTavernFits) {
        const probabilityForNameFilter = Math.random();
        const newName = getRandomName(
            fits,
            [],
            probabilityForNameFilter,
            probabilityForNameFilter
        );
        return newName;
    }
    private fillCategory(
        fits: StructuredTavernFits,
        demand: Demand,
        creator: ContentCreator,
        collection: ContentSum
    ): ContentSum {
        const contentLength = this.sizes.roll(demand.category);
        const startAdd: Add = {
            ...demand,
            added: [],
            newCreationAdded: false,
            keys: collection.keys,
            pattern: collection.patterns,
        };
        const startRequest = convertAdd(startAdd);
        const newContent = this.getContentArray(
            fits,
            contentLength,
            startRequest,
            collection.keys,
            collection.patterns,
            creator
        ).added;
        return {
            ...collection,
            content: [...collection.content, ...newContent],
        };
    }

    private getContentArray(
        fits: StructuredTavernFits,
        length: number,
        request: CreationRequest,
        keys: KeyHandler,
        patterns: PatternHandler,
        creator: ContentCreator
    ): Add {
        if (request.oldAssets.length + 1 >= length) {
            return creator.addRandomCreation(fits, request);
        } else {
            const add = creator.addRandomCreation(fits, request);
            if (!add.newCreationAdded) {
                return add;
            }
            const newRequest = convertAdd(add);
            return this.getContentArray(
                fits,
                length,
                newRequest,
                keys,
                patterns,
                creator
            );
        }
    }
}

export class ChapterSize {
    public static readonly MAX = 4;
    public static readonly MIN = 1;
    public static readonly MINIMAL_CONTENT_PROBABILITY = 0.1;
    constructor() {}
    public roll(category: Describable): number {
        if (category === Noticable.bartender) {
            return BARTENDER_NOTES;
        } else {
            const randomNumber = Math.random();

            const lambda =
                (randomNumber - ChapterSize.MINIMAL_CONTENT_PROBABILITY) /
                (1 - ChapterSize.MINIMAL_CONTENT_PROBABILITY);
            const convexSum =
                ChapterSize.MAX * lambda + ChapterSize.MIN * (1 - lambda);
            return Math.round(convexSum);
        }
    }
    public static meanValueRoll(): number {
        const sizeRange = ChapterSize.MAX - ChapterSize.MIN + 1;
        const meanFactor = 1 / sizeRange;
        const possibleSizes = new Array(ChapterSize.MAX - ChapterSize.MIN + 1)
            .fill(0)
            .map((undefined, index) => index + ChapterSize.MIN);
        return possibleSizes.reduce(
            (meanSum, size) =>
                meanSum +
                size *
                    (size === ChapterSize.MAX || size === ChapterSize.MIN
                        ? meanFactor / 2
                        : meanFactor)
        );
    }
}
