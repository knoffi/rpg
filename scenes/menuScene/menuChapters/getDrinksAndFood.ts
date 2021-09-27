import { DishIdea } from '../../../classes/idea/DishIdea';
import { filterBestIdeas } from '../../../classes/idea/fitCalculator/filterBestIdea';
import { StructuredTavernFits } from '../../../classes/idea/StructuredTavernFits';
import { TavernProduct } from '../../../classes/TavernProduct';
import { getRandomArrayEntry } from '../../../helpingFunctions/getFittingRandom';
import { NothingLeftOffer } from '../menuEnums';
import { DrinkChapters } from './DrinkChapters';
import { FoodChapters, SideDishChapters } from './FoodChapters';

export const predecideDishes = (
    bookChapters: FoodChapters | DrinkChapters | SideDishChapters,
    fitting: StructuredTavernFits,
    isExcludedByPrefix: (name: string) => boolean
) => {
    const chapters = Object.values(bookChapters);
    const filteredChapters = chapters.filter((chapter) =>
        chapter.ideas.some((dishIdea) =>
            dishIdea.fitsToMenu(fitting, isExcludedByPrefix)
        )
    );

    if (filteredChapters.length === 0) {
        return NothingLeftOffer.product;
    } else {
        //TODO: Extract and generalize the predeciding for breakfastChapters, dessertChapters... etc.
        const chapterWeights = filteredChapters.map(
            (chapter) => chapter.weight
        );
        const totalWeight = chapterWeights.reduce((sum, cur) => sum + cur, 0);
        if (totalWeight === 0) {
            console.log(
                'total weight of chapter was 0. I can not work with this crap!'
            );
        }

        const randomWeightedIndex = Math.floor(Math.random() * totalWeight);
        const negativPredecidedIndex = chapterWeights.reduce(
            (sumWeightIndex, currWeight, index) => {
                const desiredIndexPassed = sumWeightIndex <= 0 && index > 0;
                if (desiredIndexPassed) {
                    return sumWeightIndex;
                }
                const nowAtDesiredIndex =
                    sumWeightIndex + currWeight > randomWeightedIndex;
                if (!nowAtDesiredIndex) {
                    return sumWeightIndex + currWeight;
                } else {
                    return -index;
                }
            },
            0
        );
        const predecidedChapter =
            filteredChapters[-negativPredecidedIndex].ideas;
        const newTavernProduct = getRandomTavernProduct(
            fitting,
            predecidedChapter,
            isExcludedByPrefix
        );
        return newTavernProduct;
    }
};

const getRandomTavernProduct = (
    fitting: StructuredTavernFits,
    dishes: DishIdea[],
    isExcludedByPrefix: (name: string) => boolean
): TavernProduct => {
    const bestDishes = filterBestIdeas(
        dishes,
        fitting,
        isExcludedByPrefix,
        () => false,
        () => false
    );
    if (!bestDishes) {
        console.log('no dish reached low fit level');
        return NothingLeftOffer.product;
    } else {
        const newIdea = getRandomArrayEntry(bestDishes.ideas);
        const newTavernProduct = newIdea.getConcreteDish(
            fitting,
            bestDishes.level
        );
        return newTavernProduct;
    }
};
