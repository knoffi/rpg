import { expect } from 'chai';
import { association } from '../classes/association';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { DBValidator } from '../classes/database/Validator/DBValidator';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../classes/idea/Noticable';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { Offer } from '../scenes/menuScene/Offer';
import { Impression } from '../scenes/questScene/impressions/Impression';
import { MinimalTavernData } from './../mainNavigator/TavernData';
import { Constants } from './constants/Constants';
const wrap = (data: any, keyToRemove?: string) => {
    if (typeof data !== 'object') {
        throw Error('WrapperNeedsObject');
    }
    const dataCopyWithRemove = !keyToRemove
        ? data
        : Object.keys(data).reduce((prev, key) => {
              const toAdd = key === keyToRemove ? {} : { [key]: data[key] };
              return { ...prev, ...toAdd };
          }, {});
    return { title: 'for testing', data: dataCopyWithRemove };
};
describe('DB validation', () => {
    const validator = new DBValidator();
    it('incomplete tavern', () => {
        const incomplete: Partial<MinimalTavernData> = {
            food: [],
            drink: [],
            impression: [],
        };
        const json = JSON.stringify(wrap(incomplete));
        const construction = validator.parse(json, 'tavern');
        expect(construction).to.be.undefined;
    });
    it('unpure tavern', () => {
        const unusedKey = 'evilPollution';
        const unpure: MinimalTavernData & { [unusedKey]: string } = {
            food: [],
            drink: [],
            impression: [],
            boughtOffers: [],
            fitting: { powerFit: association.adventurer },
            prices: {
                'vastly rich': 10,
                currency: 'gold',
                modest: 10,
                poor: 10,
                wealthy: 10,
            },
            name: 'Evil Tavern',
            universe: Constants.universe,
            [unusedKey]: 'evil code is evil',
        };
        const json = JSON.stringify(wrap(unpure));
        const construction = validator.parse(json, 'tavern');
        expect(construction).to.eql(wrap(unpure, unusedKey));
    });
    it('pure tavern', () => {
        const pure: MinimalTavernData = {
            food: [],
            drink: [],
            impression: [],
            boughtOffers: [],
            fitting: { powerFit: association.adventurer },
            prices: {
                'vastly rich': 10,
                currency: 'gold',
                modest: 10,
                poor: 10,
                wealthy: 10,
            },
            name: 'Evil Tavern',
            universe: Constants.universe,
        };
        const json = JSON.stringify(wrap(pure));
        const construction = validator.parse(json, 'tavern');
        expect(construction).to.eql(wrap(pure));
    });
    it('incomplete dish', () => {
        const incomplete: Partial<Offer> = {
            category: Eatable.dessert,
            isAbout: WeServe.food,
            name: 'Tasty stuff',
        };
        const json = JSON.stringify(wrap(incomplete));
        const construction = validator.parse(json, WeServe.food);
        expect(construction).to.be.undefined;
    });
    it('unpure dish', () => {
        const unusedKey = 'evilPollution';
        const unpure: Offer & { [unusedKey]: string } = {
            name: 'Tomatoe Soup',
            category: Eatable.sideDish,
            isAbout: WeServe.food,
            description: 'Super tasty',
            impliedPatterns: [],
            income: association.rich,
            isUserMade: true,
            keys: { main: [AssetKey.SMALL_DISH_soup], addition: [] },
            patterns: [Pattern.BARTENDER_UncleBen],
            price: 15,
            universe: FantasyKeys.testing,

            [unusedKey]: 'evil code is evil',
        };
        const json = JSON.stringify(wrap(unpure));
        const construction = validator.parse(json, WeServe.food);
        expect(construction).to.eql(wrap(unpure, unusedKey));
    });
    it('pure dish', () => {
        const pure: Offer = {
            name: 'Tomatoe Soup',
            category: Eatable.sideDish,
            isAbout: WeServe.food,
            description: 'Super tasty',
            impliedPatterns: [],
            income: association.rich,
            isUserMade: true,
            keys: { main: [AssetKey.SMALL_DISH_soup], addition: [] },
            patterns: [Pattern.BARTENDER_UncleBen],
            price: 15,
            universe: FantasyKeys.testing,
        };
        const json = JSON.stringify(wrap(pure));
        const construction = validator.parse(json, WeServe.food);
        expect(construction).to.eql(wrap(pure));
    });
    it('incomplete drink', () => {
        const incomplete: Partial<Offer> = {
            category: Drinkable.lemonade,
            isAbout: WeServe.drinks,
            name: 'Water',
        };
        const json = JSON.stringify(wrap(incomplete));
        const construction = validator.parse(json, WeServe.drinks);
        expect(construction).to.be.undefined;
    });
    it('unpure drink', () => {
        const unusedKey = 'evilPollution';
        const unpure: Offer & { [unusedKey]: string } = {
            name: 'Tomatoe Juice',
            category: Drinkable.lemonade,
            isAbout: WeServe.drinks,
            description: 'Super tasty',
            impliedPatterns: [],
            income: association.modest,
            isUserMade: false,
            keys: { main: [], addition: [AssetKey.plotTwist] },
            patterns: [],
            price: 15,
            universe: FantasyKeys.testing,

            [unusedKey]: 'evil code is evil',
        };
        const json = JSON.stringify(wrap(unpure));
        const construction = validator.parse(json, WeServe.drinks);
        expect(construction).to.eql(wrap(unpure, unusedKey));
    });
    it('pure drink', () => {
        const pure: Offer = {
            name: 'Tomatoe Juice',
            category: Drinkable.lemonade,
            isAbout: WeServe.drinks,
            description: 'Super tasty',
            impliedPatterns: [],
            income: association.modest,
            isUserMade: false,
            keys: { main: [], addition: [AssetKey.plotTwist] },
            patterns: [],
            price: 15,
            universe: FantasyKeys.testing,
        };
        const json = JSON.stringify(wrap(pure));
        const construction = validator.parse(json, WeServe.drinks);
        expect(construction).to.eql(wrap(pure));
    });
    it('incomplete impresion', () => {
        const incomplete: Partial<Impression> = {
            category: Noticable.furniture,
            name: 'Giant tables',
            isAbout: WeServe.impressions,
        };
        const json = JSON.stringify(wrap(incomplete));
        const construction = validator.parse(json, WeServe.impressions);
        expect(construction).to.be.undefined;
    });
    it('unpure impression', () => {
        const unusedKey = 'neverNeverNEVERUsed';
        const unpure: Impression & { [unusedKey]: number } = {
            category: Noticable.someCustomers,
            isAbout: WeServe.impressions,
            name: 'A blind man lies drunk in a corner',
            keys: { main: [], addition: [] },
            impliedPatterns: [],
            patterns: [],
            universe: FantasyKeys.standard,
            [unusedKey]: 21, // 21 is only half true,
        };
        const json = JSON.stringify(wrap(unpure));
        const construction = validator.parse(json, WeServe.impressions);
        expect(construction).to.eql(wrap(unpure, unusedKey));
    });
    it('pure minimal impression', () => {
        const pure: Impression = {
            category: Noticable.someCustomers,
            isAbout: WeServe.impressions,
            name: 'A blind man lies drunk in a corner',
            keys: { main: [], addition: [] },
            impliedPatterns: [],
            patterns: [],
            universe: FantasyKeys.standard,
        };
        const json = JSON.stringify(wrap(pure));
        const construction = validator.parse(json, WeServe.impressions);
        expect(construction).to.eql(wrap(pure));
    });
    it('pure full impression', () => {
        const pure: Impression = {
            category: Noticable.bartender,
            isAbout: WeServe.impressions,
            name: 'She is a mighty warrior',
            keys: { main: [], addition: [] },
            impliedPatterns: [],
            patterns: [],
            universe: FantasyKeys.standard,
            sex: 'female',
        };
        const json = JSON.stringify(wrap(pure));
        const construction = validator.parse(json, WeServe.impressions);
        expect(construction).to.eql(wrap(pure));
    });
});
