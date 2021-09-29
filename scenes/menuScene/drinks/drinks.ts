import {
    Drinkable,
    Eatable,
    TavernProduct,
} from '../../../classes/TavernProduct';
import { beers } from './beer';
import { lemonades } from './lemonades';
import { spirits } from './spirits';
import { wines } from './wines';

interface productExamples {
    category: Drinkable | Eatable;
    examples: TavernProduct[];
}

export const drinkExamples = [
    { category: Drinkable.beer, examples: beers },
    { category: Drinkable.wine, examples: wines },
    { category: Drinkable.spirit, examples: spirits },
    { category: Drinkable.lemonade, examples: lemonades },
] as productExamples[];
