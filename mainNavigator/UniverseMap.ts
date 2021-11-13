import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { Noticable } from '../classes/idea/Noticable';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { Describable } from './TavernData';

export type UniverseMap = Record<Describable, FantasyKeys>;
export type LazyUniverseMap = Record<WeServe, FantasyKeys>;

export const getUniverseMap = (coarseMap: LazyUniverseMap) => {
    const finerMap = DEFAULT_UNIVERSE_MAP;
    allCategories.forEach((category) => {
        finerMap[category] = coarseMap[isAbout(category)];
    });
    return finerMap;
};

const isAbout = (category: Describable) => {
    if (drinkMenu.some((drink) => drink === category)) {
        return WeServe.drinks;
    }
    if (dishMenu.some((dish) => dish === category)) {
        return WeServe.food;
    }
    return WeServe.impressions;
};

const drinkMenu = Object.values(Drinkable);
const dishMenu = Object.values(Eatable);
const noteBook = Object.values(Noticable);
export const allCategories: Describable[] = [
    ...drinkMenu,
    ...dishMenu,
    ...noteBook,
];

export const DEFAULT_UNIVERSE_MAP = Object.values(allCategories).reduce(
    (map, category) => {
        return { ...map, [category]: FantasyKeys.standard };
    },
    {}
) as UniverseMap;
export const DEFAULT_LAZY_UNIVERSE_MAP = Object.values(WeServe).reduce(
    (map, category) => {
        return { ...map, [category]: FantasyKeys.standard };
    },
    {}
) as LazyUniverseMap;
