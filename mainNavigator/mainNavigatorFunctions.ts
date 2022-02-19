import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
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

const offerLine = (offer: Offer, currency: string): string => {
    return (
        '<text>' +
        offer.name +
        '</text>' +
        '<div style="margin-top:10px;margin-bottom:15px">' +
        '<i style="color:orange;">' +
        offer.price +
        ' ' +
        currency +
        '</i></div><br/>'
    );
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
    offerMap: Map<Drinkable | Eatable, Offer[]>,
    currency: string
) => {
    const offers = offerMap.get(category);
    const noOffersForCategory = !offers || offers.length === 0;
    if (noOffersForCategory) {
        return '';
    } else {
        const title =
            '<br/><br/><h2> ' +
            emojis.get(category) +
            emojis.get(category) +
            category +
            emojis.get(category) +
            emojis.get(category) +
            ' </h2><br/>';
        const menu = offers.map((offer) => offerLine(offer, currency)).join('');
        return title + menu;
    }
};

const wrapInBodyTag = (view: string) => {
    return `<body style="text-align: center;">` + view + `</body>`;
};

const constructHTML = (
    tavern: Pick<
        MinimalTavernData,
        'name' | WeServe.drinks | WeServe.food | 'prices'
    >
): string => {
    const headTag =
        '<head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" /></head>';
    const nameTitle =
        '<h1 style="font-size:60px">' +
        tavern.name.toUpperCase() +
        '</h1><br/><br/>';
    const chapterMap = offersByCategory(tavern);
    const foodPage = Object.values(Eatable)
        .map((category) =>
            textForCategory(category, chapterMap, tavern.prices.currency)
        )
        .join('');
    const drinkPage = Object.values(Drinkable)
        .map((category) =>
            textForCategory(category, chapterMap, tavern.prices.currency)
        )
        .join('');
    const body = wrapInBodyTag(nameTitle + foodPage + drinkPage);
    return headTag + body;
};

export const openShare = async (
    tavern: Pick<
        MinimalTavernData,
        'name' | WeServe.drinks | WeServe.food | 'prices'
    >
) => {
    try {
        const { uri } = await Print.printToFileAsync({
            html: constructHTML(tavern),
        });
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    } catch (error) {
        console.log(error);
    }
};

const emojis = new Map<Eatable | Drinkable, string>([
    [Drinkable.wine, ' 🍷 '],
    [Drinkable.beer, ' 🍺 '],
    [Eatable.dessert, ' 🍰 '],
    [Eatable.breakfast, ' 🍞 '],
    [Eatable.mainDish, ' 🍝 '],
    [Eatable.sideDish, ' 🥗 '],
    [Drinkable.lemonade, ' 🥛 '],
    [Drinkable.spirit, ' 🥃 '],
]);
