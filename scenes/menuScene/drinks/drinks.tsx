import {
    drinkCategory,
    foodCategory,
    TavernProduct,
} from '../../../classes/TavernProduct';
import { beers } from './beer';
import { lemonades } from './lemonades';
import { spirits } from './spirits';
import { wines } from './wines';

interface productExamples {
    category: drinkCategory | foodCategory;
    examples: TavernProduct[];
}

export const drinkExamples = [
    { category: drinkCategory.beer, examples: beers },
    { category: drinkCategory.wine, examples: wines },
    { category: drinkCategory.spirit, examples: spirits },
    { category: drinkCategory.lemonade, examples: lemonades },
] as productExamples[];
