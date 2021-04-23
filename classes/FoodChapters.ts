import { DishIdea } from './DishIdea';

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
export type BreakfastChapters = {
    cereals: { weight: number; dishIdeas: DishIdea[] };
    fullPlate: { weight: number; dishIdeas: DishIdea[] };
    mainEgg: { weight: number; dishIdeas: DishIdea[] };
    panCakes: { weight: number; dishIdeas: DishIdea[] };
    mainSweet: { weight: number; dishIdeas: DishIdea[] };
    mainBread: { weight: number; dishIdeas: DishIdea[] };
};
