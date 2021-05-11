import { association } from './association';

// TODO: Make ingredientIdea with nounIdea from issue #15
export type IngredientIdea = {
    name: string;
    fitsTo?: association[];
    needs?: association[];
    needsOne?: association[];
    misfits?: association[];
    landRange?: association[];
    incomeRange?: association[];
    classRange?: association[];
    raceRange?: association[];
    specialsRange?: association[];
    worksForBrothel?: boolean;
    worksForAssasines?: boolean;
    worksForThiefs?: boolean;
};

export type IngredientsIdea = {
    mainIng: IngredientIdea;
    firstSideDishes?: IngredientIdea[];
    secondSideDishes?: IngredientIdea[];
    thirdSideDishes?: IngredientIdea[];
};
