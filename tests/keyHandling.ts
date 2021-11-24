import { assert, expect } from 'chai';
import { association } from '../classes/association';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../classes/idea/Noticable';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { Drinkable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { Content } from '../mainNavigator/Content';
describe('KeyHandler tests', () => {
    const KEY_CHANGE = {
        main: [AssetKey.BARTENDER_knowledge],
        addition: [AssetKey.BARTENDER_opinion, AssetKey.BARTENDER_face],
    };
    const ADD = {
        isAbout: WeServe.impressions,
        type: 'Add' as const,
        newKeys: KEY_CHANGE,
    };
    const DELETE = {
        isAbout: WeServe.impressions,
        type: 'Delete' as const,
        oldKeys: KEY_CHANGE,
    };
    it('construct by default', () => {
        const keys = new KeyHandler('noPreviousContent');
        expect(keys.getFullKeys(WeServe.impressions))
            .to.have.property('main')
            .to.have.property('length')
            .to.equal(0);
    });
    it('construct from content', () => {
        const content: Content = {
            food: [],
            drink: [
                {
                    name: 'Red Wine',
                    isAbout: WeServe.drinks,
                    isUserMade: true,
                    income: association.poor,
                    category: Drinkable.wine,
                    price: 10,
                    description: '',
                    patterns: [],
                    keys: {
                        main: [],
                        addition: [AssetKey.WINE_red],
                    },
                    universe: 'isUserMade',
                },
            ],
            impression: [
                {
                    name: 'Uncle Ben',
                    category: Noticable.bartender,
                    universe: 'isUserMade',
                    patterns: [Pattern.BARTENDER_UncleBen],
                    keys: { main: [AssetKey.BARTENDER_charisma], addition: [] },
                },
                {
                    name: 'Talks about power and responsibility',
                    category: Noticable.bartender,
                    universe: 'isUserMade',
                    patterns: [Pattern.BARTENDER_UncleBen],
                    keys: { main: [AssetKey.BARTENDER_actions], addition: [] },
                },
            ],
        };
        const keys = new KeyHandler(content);
        expect(keys.getFullKeys(WeServe.impressions))
            .to.have.property('main')
            .to.have.property('length')
            .to.equal(2);
        expect(keys.getFullKeys(WeServe.drinks))
            .to.have.property('addition')
            .to.have.property('length')
            .to.equal(1);
        expect(keys.getFullKeys(WeServe.food))
            .to.have.property('main')
            .to.have.property('length')
            .to.equal(0);
    });
    it('add', () => {
        const keys = new KeyHandler('noPreviousContent');
        keys.update(ADD);

        expect(keys.getFullKeys(WeServe.impressions))
            .to.have.property('main')
            .to.have.property('length')
            .to.equal(1);
        expect(keys.getFullKeys(WeServe.impressions))
            .to.have.property('addition')
            .to.have.property('length')
            .to.equal(2);
        expect(keys.getFullKeys(WeServe.drinks)).to.have.property('main').to.be
            .empty;
    });
    it('double add', () => {
        const keys = new KeyHandler('noPreviousContent');
        keys.update(ADD);
        keys.update(ADD);
        expect(keys.getFullKeys(WeServe.impressions))
            .to.have.property('main')
            .to.have.property('length')
            .to.equal(1);
        expect(keys.getFullKeys(WeServe.impressions))
            .to.have.property('addition')
            .to.have.property('length')
            .to.equal(2);
        expect(keys.getFullKeys(WeServe.drinks)).to.have.property('main').to.be
            .empty;
    });
    it('delete after double add', () => {
        const keys = new KeyHandler('noPreviousContent');
        keys.update(ADD);
        keys.update(ADD);
        keys.update(DELETE);
        expect(keys.getFullKeys(WeServe.impressions))
            .to.have.property('main')
            .to.have.property('length')
            .to.equal(1);
        expect(keys.getFullKeys(WeServe.impressions))
            .to.have.property('addition')
            .to.have.property('length')
            .to.equal(2);
        expect(keys.getFullKeys(WeServe.drinks)).to.have.property('main').to.be
            .empty;
    });
    it('delete', () => {
        const keys = new KeyHandler('noPreviousContent');
        keys.update(ADD);
        keys.update(DELETE);
        expect(keys.getFullKeys(WeServe.impressions))
            .to.have.property('main')
            .to.have.property('length')
            .to.equal(0);
        expect(keys.getFullKeys(WeServe.impressions))
            .to.have.property('addition')
            .to.have.property('length')
            .to.equal(0);
        expect(keys.getFullKeys(WeServe.drinks)).to.have.property('main').to.be
            .empty;
    });
    it('delete twice after one add', () => {
        const keys = new KeyHandler('noPreviousContent');
        keys.update(ADD);
        keys.update(DELETE);
        assert.throws(() => keys.update(DELETE), /negative/);
    });
});
