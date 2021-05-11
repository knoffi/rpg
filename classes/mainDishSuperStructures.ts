import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import { NothingLeftOffer } from '../scenes/menuScene/menuEnums';
import { association } from './association';
import {
    BreakfastChapters,
    DessertChapters,
    MainDishChapters,
} from './FoodChapters';
import { getStructuredFits } from './StructuredTavernFits';

export const predecideDishes = (
    bookChapters: MainDishChapters | BreakfastChapters | DessertChapters,
    fits: association[],
    isExcludedByPrefix: (name: string) => boolean
) => {
    const structuredTavernFits = getStructuredFits(fits);
    // are we copying here every dish possibility? or just objects with references?
    const chapters = Object.values(bookChapters);
    const filteredChapters = chapters.filter((chapter) =>
        chapter.dishIdeas.some((dishIdea) =>
            dishIdea.fitsToMenu(structuredTavernFits, isExcludedByPrefix)
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
            filteredChapters[-negativPredecidedIndex].dishIdeas;
        const fittingDishIdeas = predecidedChapter.filter((dishIdea) =>
            dishIdea.fitsToMenu(structuredTavernFits, isExcludedByPrefix)
        );
        if (!predecideDishes) {
            console.log('predecided dishes can be undefined!');
        }
        if (predecideDishes.length === 0) {
            console.log('predecided dishes can be empty!');
        }
        const predecidedDishIdea = getRandomArrayEntry(fittingDishIdeas);
        return predecidedDishIdea.getConcreteDish(
            structuredTavernFits,
            isExcludedByPrefix
        );
    }
};
