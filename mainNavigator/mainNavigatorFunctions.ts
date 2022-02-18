import { Share } from 'react-native';
import { DismissHandler } from '../classes/dismissHandler/dismissHandler';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { PatternHandler } from '../classes/patternHandler/PatternHandler';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { standardBasePrice } from '../scenes/menuScene/basePrice';
import { Offer } from '../scenes/menuScene/Offer';
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

const offerLine = (offer: Offer): string => {
    return '   ' + offer.name + '  ' + offer.price;
};

const offersByCategory = (
    tavern: Pick<MinimalTavernData, 'name' | WeServe.drinks | WeServe.food>
): Map<Drinkable | Eatable, Offer[]> => {
    const food: [Eatable, Offer[]][] = Object.values(Eatable).map(
        (category) => {
            const foodOfCategory = tavern[WeServe.food].filter(
                (offer) => offer.category === category
            );
            return [category, foodOfCategory];
        }
    );
    const drinks: [Drinkable, Offer[]][] = Object.values(Drinkable).map(
        (category) => {
            const drinksOfCategory = tavern[WeServe.drinks].filter(
                (offer) => offer.category === category
            );
            return [category, drinksOfCategory];
        }
    );
    return new Map<Drinkable | Eatable, Offer[]>([...food, ...drinks]);
};

const textForCategory = (
    category: Drinkable | Eatable,
    offerMap: Map<Drinkable | Eatable, Offer[]>
) => {
    const offers = offerMap.get(category);
    const noOffersForCategory = !offers || offers.length === 0;
    if (noOffersForCategory) {
        return '';
    } else {
        const title = '\n\n' + category.toUpperCase() + '\n\n';
        const menu = offers.reduce(
            (prev, cur) => prev + offerLine(cur) + '\n',
            ''
        );
        return title + menu;
    }
};

const constructMessage = (
    tavern: Pick<MinimalTavernData, 'name' | WeServe.drinks | WeServe.food>
): string => {
    const greeting = '*| ' + tavern.name + ' |*\n\n\n';
    const chapterMap = offersByCategory(tavern);
    const foodTitle = '*FOOD*';
    const foodPage =
        foodTitle +
        Object.values(Eatable).reduce(
            (text, category) => text + textForCategory(category, chapterMap),
            ''
        ) +
        '\n';
    const drinkTitle = '*DRINKS*';
    const drinkPage =
        drinkTitle +
        Object.values(Drinkable).reduce(
            (text, category) => text + textForCategory(category, chapterMap),
            ''
        ) +
        '\n';
    return greeting + foodPage + drinkPage;
};

export const openShare = async (
    tavern: Pick<MinimalTavernData, 'name' | WeServe.drinks | WeServe.food>
) => {
    try {
        const message = constructMessage(tavern);
        const result = await Share.share({
            message,
        });
    } catch (error) {
        console.log(error);
    }
};
