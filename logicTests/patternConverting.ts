import { expect } from 'chai';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Drinkable } from '../classes/TavernProduct';
import { PatternConverter } from './../classes/patternConverter/PatternConverter';

describe('pattern converting', () => {
    const drinkPrefixes = Object.values(Drinkable).map((category) =>
        category.toUpperCase()
    );
    const drinkKeys = Object.entries(AssetKey)
        .filter(([key, value]) =>
            drinkPrefixes.some((prefix) => key.includes(prefix))
        )
        .map(([key, value]) => value);

    it('drink keys exist', () => {
        expect(drinkKeys)
            .to.have.property('length')
            .to.be.greaterThanOrEqual(4);
    });
    it('patterns by drink keys exist', () => {
        const converter = new PatternConverter(drinkKeys);
        const patternChanges = converter.getPatterns();
        expect(patternChanges)
            .to.have.property('length')
            .to.be.greaterThanOrEqual(4);
    });
});
