import { expect } from 'chai';
import { association } from '../classes/association';
import { DBValidator } from '../classes/database/Validator/DBValidator';
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
        const construction = validator.construct(json, 'tavern');
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
        const construction = validator.construct(json, 'tavern');
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
        const construction = validator.construct(json, 'tavern');
        expect(construction).to.eql(wrap(pure));
    });
});
