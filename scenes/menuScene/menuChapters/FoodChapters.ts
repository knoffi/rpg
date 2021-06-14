import { WeightedChapter } from './WeightedChapter';

export type MainDishChapters = {
    pasta: WeightedChapter;
    beefRoast: WeightedChapter;
    sausage: WeightedChapter;
    porkRoast: WeightedChapter;
    chickenRoast: WeightedChapter;
    vegetarian: WeightedChapter;
    fish: WeightedChapter;
    steak: WeightedChapter;
    stew: WeightedChapter;
};
export type BreakfastChapters = {
    cereals: WeightedChapter;
    fullPlate: WeightedChapter;
    mainEgg: WeightedChapter;
    panCakes: WeightedChapter;
    mainSweet: WeightedChapter;
    mainBread: WeightedChapter;
};

export type FoodChapters = BreakfastChapters | MainDishChapters;
