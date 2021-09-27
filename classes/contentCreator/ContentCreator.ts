import { WeServe } from '../../editNavigator/WeServe';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { NothingLeftOffer } from '../../scenes/menuScene/menuEnums';
import { emptyImpression } from '../../scenes/questScene/impressions/emptyImpression';
import { getPrefixExcluder } from '../../scenes/questScene/impressions/getPrefixExcluder';
import { getKeyExcluder } from '../../scenes/questScene/impressions/impressionExcluder/getImpressionExcluder';
import { AssetKey } from '../idea/AssetKey/AssetKey';
import { DishIdea } from '../idea/DishIdea';
import { filterBestIdeas } from '../idea/fitCalculator/filterBestIdea';
import { ImpressionIdea } from '../idea/ImpressionIdea';
import { Noticable } from '../idea/Noticable';
import { Pattern } from '../idea/Patterns/Pattern';
import { StructuredTavernFits } from '../idea/StructuredTavernFits';
import { Drinkable, Eatable } from '../TavernProduct';

export class ContentCreator {
    constructor(
        private noteBook: IImpressionNote[],
        private dishMenu: IDishMenu[],
        private drinkMenu: IDrinkMenu[]
    ) {}

    getRandomImpression(
        fitting: StructuredTavernFits,
        category: Noticable,
        oldNames: string[],
        fullFirstKeys: AssetKey[],
        fullSecondKeys: AssetKey[],
        mainFilter?: number,
        additionFilter?: number,
        patterns?: Pattern[]
    ) {
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
    getRandomDrink(
        fitting: StructuredTavernFits,
        category: Drinkable,
        oldNames: string[]
    ) {
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);

        const chapter = this.drinkMenu.find(
            (chapter) => chapter.category === category
        );

        if (!chapter) {
            console.log('Drink category not found!');
            return NothingLeftOffer.product;
        } else {
            const bestRecipes = filterBestIdeas(
                chapter.drinks,
                fitting,
                isExcludedByName,
                () => false,
                () => false
            );
            if (!bestRecipes) {
                return NothingLeftOffer.product;
            } else {
                const newIdea = getRandomArrayEntry(bestRecipes.ideas);
                const newOffer =
                    newIdea.getConcreteDish(fitting, bestRecipes.level) ||
                    NothingLeftOffer.product;
                return newOffer;
            }
        }
    }
    getRandomDish(
        fitting: StructuredTavernFits,
        category: Eatable,
        oldNames: string[]
    ) {
        const isExcludedByName = getPrefixExcluder(oldNames, WeServe.drinks);

        const chapter = this.dishMenu.find(
            (chapter) => chapter.category === category
        );

        if (!chapter) {
            console.log('Food category not found!');
            return NothingLeftOffer.product;
        } else {
            const bestRecipes = filterBestIdeas(
                chapter.dishes,
                fitting,
                isExcludedByName,
                () => false,
                () => false
            );
            if (!bestRecipes) {
                return NothingLeftOffer.product;
            } else {
                const newIdea = getRandomArrayEntry(bestRecipes.ideas);
                const newOffer =
                    newIdea.getConcreteDish(fitting, bestRecipes.level) ||
                    NothingLeftOffer.product;
                return newOffer;
            }
        }
    }
}

interface IImpressionNote {
    impressions: ImpressionIdea[];
    category: Noticable;
}
interface IDishMenu {
    dishes: DishIdea[];
    category: Eatable;
}
interface IDrinkMenu {
    drinks: DishIdea[];
    category: Drinkable;
}
