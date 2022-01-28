import { DismissHandler } from '../classes/dismissHandler/dismissHandler';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { PatternHandler } from '../classes/patternHandler/PatternHandler';
import { WeServe } from '../editNavigator/WeServe';
import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { ContentTracker } from './ContentTracker';
import { ContentChange, TavernChange } from './TavernChange';
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
    const tracker = buildTracker(tavern);
    return { tavern, tracker };
};

export const buildTracker = (tavern: MinimalTavernData): ContentTracker => {
    return {
        keys: new KeyHandler(tavern),
        pattern: new PatternHandler(tavern),
        dismiss: new DismissHandler(),
    };
};

export const getNewTracker = (change: TavernChange, old: ContentTracker) => {
    // use type assertion so that test framework wont complain
    const newTracker: ContentTracker = {
        keys:
            (change as ContentChange).newKeys || old.keys.multiUpdateClone([]),
        pattern:
            (change as ContentChange).newPattern ||
            old.pattern.multiUpdateClone([]),
        dismiss: (change as ContentChange).newDismiss || old.dismiss.clone(),
    };
    return newTracker;
};
