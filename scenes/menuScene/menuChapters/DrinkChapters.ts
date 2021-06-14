import { WeightedChapter } from './WeightedChapter';

export type BeerChapters = {
    ale: WeightedChapter;
    lager: WeightedChapter;
    stout: WeightedChapter;
    wheat: WeightedChapter;
    mix: WeightedChapter;
};
export type WineChapters = {
    white: WeightedChapter;
    red: WeightedChapter;
    cider: WeightedChapter;
    sparkling: WeightedChapter;
    mead: WeightedChapter;
    rose: WeightedChapter;
};
export type SpiritChapters = {
    whisky: WeightedChapter;
    vodka: WeightedChapter;
    liqueur: WeightedChapter;
    rum: WeightedChapter;
    brandy: WeightedChapter;
    gin: WeightedChapter;
    tequilaMezcal: WeightedChapter;
};
export type ColdChapters = {
    lemonade: WeightedChapter;
    juice: WeightedChapter;
    water: WeightedChapter;
    smoothie: WeightedChapter;
};
export type HotChapters = {
    tea: WeightedChapter;
    coffee: WeightedChapter;
    dairy: WeightedChapter;
};

export type DrinkChapters =
    | ColdChapters
    | HotChapters
    | SpiritChapters
    | BeerChapters
    | WineChapters;
