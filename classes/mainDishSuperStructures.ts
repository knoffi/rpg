import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import { association } from './association';
import { DishIdea } from './DishIdea';
import { TavernProduct } from './TavernProduct';

export type IngredientList = {
    name: string;
    areas: association[];
    sauces?: string[];
}[];
export type IngredientsFromIncome = {
    poor: IngredientList;
    modest: IngredientList;
    wealthy: IngredientList;
    rich: IngredientList;
};
export type IngredientStore = {
    carbs: IngredientsFromIncome;
    greens: IngredientsFromIncome;
    main: IngredientsFromIncome;
};

export type IngredientsIdea = {
    mainIng: { name: string; fitRange: association[] };
    firstSideDishes?: { name: string; fitRange: association[] }[];
    secondSideDishes?: { name: string; fitRange: association[] }[];
    thirdSideDishes?: { name: string; fitRange: association[] }[];
};

export type MainDishChapters = {
    pasta: { weight: number; dishIdeas: DishIdea[] };
    beefRoast: { weight: number; dishIdeas: DishIdea[] };
    sausage: { weight: number; dishIdeas: DishIdea[] };
    porkRoast: { weight: number; dishIdeas: DishIdea[] };
    chickenRoast: { weight: number; dishIdeas: DishIdea[] };
    vegetarian: { weight: number; dishIdeas: DishIdea[] };
    fish: { weight: number; dishIdeas: DishIdea[] };
    steak: { weight: number; dishIdeas: DishIdea[] };
    stew: { weight: number; dishIdeas: DishIdea[] };
};

export const predecideDishes = (
    bookChapters: MainDishChapters,
    fits: association[],
    isExcludedByPrefix: (name: string) => boolean
) => {
    // are we copying here every dish possibility? or just objects with references?
    const chapters = Object.values(bookChapters);
    const filteredChapters = chapters.filter((chapter) =>
        chapter.dishIdeas.some((dishIdea) =>
            dishIdea.satisfiesTavernFits(fits, isExcludedByPrefix)
        )
    );

    if (filteredChapters.length === 0) {
        return [] as TavernProduct[];
    } else {
        const chapterWeights = filteredChapters.map(
            (chapter) => chapter.weight
        );
        const totalWeight = chapterWeights.reduce((sum, cur) => sum + cur, 0);
        const randomWeightedIndex = Math.floor(Math.random() * totalWeight);
        const negativPredecidedIndex = chapterWeights.reduce(
            (sumWeightIndex, currWeight, index) => {
                const desiredIndexPassed =
                    sumWeightIndex + currWeight >= randomWeightedIndex;
                if (!desiredIndexPassed) {
                    return sumWeightIndex + currWeight;
                } else {
                    const justArrivedAtMaximum = sumWeightIndex >= 0;
                    if (justArrivedAtMaximum) {
                        return -index;
                    } else {
                        return sumWeightIndex;
                    }
                }
            },
            0
        );
        const predecidedChapter =
            filteredChapters[-negativPredecidedIndex].dishIdeas;
        const fittingDishIdeas = predecidedChapter.filter((dishIdea) =>
            dishIdea.satisfiesTavernFits(fits, isExcludedByPrefix)
        );
        if (!predecideDishes) {
            console.log('they can be undefined!');
        }
        if (predecideDishes.length === 0) {
            console.log('they can be empty!');
        }
        const predecidedDishIdea = getRandomArrayEntry(
            fittingDishIdeas
        ) as DishIdea;
        console.log(fits);
        return predecidedDishIdea.getDishesForTavern(fits, isExcludedByPrefix);
    }
};
