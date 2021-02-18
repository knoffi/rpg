import { association } from './Adjectives';

export type IngredientList = { name: string; areas: association[] }[];
export type IngredientsFromIncome = {
    poor: IngredientList;
    modest: IngredientList;
    wealthy: IngredientList;
    rich: IngredientList;
};
export type IngredientStore = {
    side: IngredientsFromIncome;
    main: IngredientsFromIncome;
};
export type garnishPhrases = {
    poor: string[];
    modest: string[];
    wealthy: string[];
    rich: string[];
};
