import { DismissHandler } from '../classes/dismissHandler/dismissHandler';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { PatternHandler } from '../classes/patternHandler/PatternHandler';
import { WeServe } from '../editNavigator/WeServe';
import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { ContentTracker } from './ContentTracker';
import { MinimalTavernData } from './TavernData';
import { UniverseMap } from './UniverseMap';

export const getTavernHistoryInitializer = (universe: UniverseMap) => {
    const tavern: MinimalTavernData = {
        fitting: {},
        name: 'Nameless Tavern',
        [WeServe.drinks]: [],
        [WeServe.food]: [],
        prices: standardBasePrice,
        boughtOffers: [],
        [WeServe.impressions]: [],
        universe,
    };
    const tracker = getTracker(tavern);
    return { tavern, tracker };
};

export const getTracker = (tavern: MinimalTavernData): ContentTracker => {
    return {
        keys: new KeyHandler(tavern),
        pattern: new PatternHandler(tavern),
        dismiss: new DismissHandler(),
    };
};
