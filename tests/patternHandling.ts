import { assert, expect } from 'chai';
import { association } from '../classes/association';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../classes/idea/Noticable';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { PatternHandler } from '../classes/patternHandler/PatternHandler';
import { Drinkable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { Content } from '../mainNavigator/Content';
describe('PatternHandler tests', () => {
    const PATTERNS: Pattern[] = [Pattern.BARTENDER_Kleinfinger];
    const ADD = {
        isAbout: WeServe.impressions,
        type: 'Add' as const,
        newPatterns: PATTERNS,
    };
    const DELETE = {
        isAbout: WeServe.impressions,
        type: 'Delete' as const,
        oldPatterns: PATTERNS,
    };
    it('construct by default', () => {
        const pattern = new PatternHandler('noContent');
        expect(pattern.getPatterns(WeServe.impressions))
            .to.have.property('length')
            .to.equal(0);
    });
    it('construct by content', () => {
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
        const pattern = new PatternHandler(content);
        expect(pattern.getPatterns(WeServe.impressions))
            .to.have.property('length')
            .to.equal(2);
        expect(pattern.getPatterns(WeServe.drinks))
            .to.have.property('length')
            .to.equal(0);
        expect(pattern.getPatterns(WeServe.food))
            .to.have.property('length')
            .to.equal(0);
    });
    it('add', () => {
        const pattern = new PatternHandler('noContent');
        pattern.update(ADD);
        expect(pattern.getPatterns(WeServe.impressions))
            .to.have.property('length')
            .to.equal(1);
    });
    it('add twice', () => {
        const pattern = new PatternHandler('noContent');
        pattern.update(ADD);
        pattern.update(ADD);
        expect(pattern.getPatterns(WeServe.impressions))
            .to.have.property('length')
            .to.equal(2);
    });
    it('delete', () => {
        const pattern = new PatternHandler('noContent');
        pattern.update(ADD);
        pattern.update(DELETE);
        expect(pattern.getPatterns(WeServe.impressions))
            .to.have.property('length')
            .to.equal(0);
    });
    it('delete after double add', () => {
        const pattern = new PatternHandler('noContent');
        pattern.update(ADD);
        pattern.update(ADD);
        pattern.update(DELETE);
        expect(pattern.getPatterns(WeServe.impressions))
            .to.have.property('length')
            .to.equal(1);
    });
    it('delete from empty', () => {
        const pattern = new PatternHandler('noContent');
        assert.throws(() => pattern.update(DELETE), /NotFound/);
    });
});
