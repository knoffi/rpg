import { DishIdea } from '../../../classes/idea/DishIdea';
import { Drinkable, Eatable } from '../../../classes/TavernProduct';
import { appetizers, desserts, sideDishes } from '../food/dishes';
import {
    BeerChapters,
    ColdChapters,
    HotChapters,
    SpiritChapters,
    WineChapters,
} from '../menuChapters/DrinkChapters';
import { ales } from './beers/ales';
import { lagers } from './beers/lagers';
import { porters } from './beers/porter';
import { redWines } from './wines/redWines';

export const foodExamples = [
    { category: Eatable.dessert, examples: desserts },
    { category: Eatable.sideDish, examples: sideDishes },
    { category: Eatable.appetizer, examples: appetizers },
];

const spiritChapters: SpiritChapters = {
    whisky: { weight: 0, ideas: [] as DishIdea[] },
    vodka: { weight: 0, ideas: [] as DishIdea[] },
    liqueur: { weight: 0, ideas: [] as DishIdea[] },
    rum: { weight: 0, ideas: [] as DishIdea[] },
    brandy: { weight: 0, ideas: [] as DishIdea[] },
    gin: { weight: 0, ideas: [] as DishIdea[] },
    tequilaMezcal: { weight: 0, ideas: [] as DishIdea[] },
};
//coldDrinks
const coldChapters: ColdChapters = {
    lemonade: { weight: 0, ideas: [] as DishIdea[] },
    juice: { weight: 0, ideas: [] as DishIdea[] },
    water: { weight: 0, ideas: [] as DishIdea[] },
    smoothie: { weight: 0, ideas: [] as DishIdea[] },
};
// hotDrinks
const hotChapters: HotChapters = {
    tea: { weight: 0, ideas: [] as DishIdea[] },
    coffee: { weight: 0, ideas: [] as DishIdea[] },
    dairy: { weight: 0, ideas: [] as DishIdea[] },
};
const beerChapters: BeerChapters = {
    ale: { weight: 1, ideas: ales as DishIdea[] },
    lager: { weight: 1, ideas: lagers as DishIdea[] },
    stout: { weight: 1, ideas: porters as DishIdea[] },
    wheat: { weight: 0, ideas: [] as DishIdea[] },
    mix: { weight: 0, ideas: [] as DishIdea[] },
};
const wineChapters: WineChapters = {
    white: { weight: 0, ideas: [] as DishIdea[] },
    red: { weight: 1, ideas: redWines as DishIdea[] },
    cider: { weight: 0, ideas: [] as DishIdea[] },
    sparkling: { weight: 0, ideas: [] as DishIdea[] },
    mead: { weight: 0, ideas: [] as DishIdea[] },
    rose: { weight: 0, ideas: [] as DishIdea[] },
};

export const drinkChapters = [
    { category: Drinkable.beer, chapters: beerChapters },
    { category: Drinkable.wine, chapters: wineChapters },
    // { category: Drinkable.spirit, chapters: spiritChapters },
    // { category: Drinkable.lemonade, chapters: coldChapters },
    //{ category: Drinkable.hot, chapters: hotChapters },
];
