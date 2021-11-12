import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { Noticable } from '../classes/idea/Noticable';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { Describable } from './TavernData';

export type UniverseMap = Record<Describable, FantasyKeys>;

//TODO: test for default universe map
export const DEFAULT_UNIVERSE_MAP = Object.values(
    Noticable || Drinkable || Eatable
).reduce((map, category) => {
    return { ...map, [category]: FantasyKeys.standard };
}, {}) as UniverseMap;
