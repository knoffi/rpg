import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import {
    association,
    incomeAssociations,
    landAssociations,
} from './association';
import { DishIdea } from './DishIdea';
import { TavernProduct } from './TavernProduct';

export type IngredientList = {
    name: string;
    areas: association[];
    sauces?: string[];
}[];
//TODO: remove with next refactor
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
export type DessertChapters = {
    iceCream: { weight: number; dishIdeas: DishIdea[] };
    fruity: { weight: number; dishIdeas: DishIdea[] };
    chocolate: { weight: number; dishIdeas: DishIdea[] };
    cake: { weight: number; dishIdeas: DishIdea[] };
    pastries: { weight: number; dishIdeas: DishIdea[] };
    pudding: { weight: number; dishIdeas: DishIdea[] };
    candy: { weight: number; dishIdeas: DishIdea[] };
    nutty: { weight: number; dishIdeas: DishIdea[] };
};

export const predecideDishes = (
    bookChapters: MainDishChapters|DessertChapters,
    fits: association[],
    isExcludedByPrefix: (name: string) => boolean
) => {
    const incomeAreaFits = fits.filter(
        (fit) =>
            landAssociations.includes(fit) || incomeAssociations.includes(fit)
    );
    // are we copying here every dish possibility? or just objects with references?
    const chapters = Object.values(bookChapters);
    const filteredChapters = chapters.filter((chapter) =>
        chapter.dishIdeas.some((dishIdea) =>
            dishIdea.satisfiesIncomeAreaFits(incomeAreaFits, isExcludedByPrefix)
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
            dishIdea.satisfiesIncomeAreaFits(incomeAreaFits, isExcludedByPrefix)
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
        const result = predecidedDishIdea.getDishesForTavern(
            incomeAreaFits,
            isExcludedByPrefix
        );
        return result;
    }
};
