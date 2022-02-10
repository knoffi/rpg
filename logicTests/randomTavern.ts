import { expect } from 'chai';
import { WeServe } from '../editNavigator/WeServe';
import { getRandomStartTavern } from '../mainNavigator/randomTavern/getRandomStartTavern';
import { DEFAULT_UNIVERSE_MAP } from '../mainNavigator/UniverseMap';

describe('Build Random Tavern', () => {
    it('with non-empty properties', () => {
        const randomTavern = getRandomStartTavern(DEFAULT_UNIVERSE_MAP);
        Object.values(WeServe).forEach((isAbout) => {
            expect(randomTavern, 'failed for ' + isAbout)
                .to.have.property(isAbout)
                .to.have.length.greaterThanOrEqual(2);
        });
        expect(randomTavern).to.have.property('fitting');
        expect(randomTavern).to.have.property('boughtOffers');
        expect(randomTavern).to.have.property('name');
        expect(randomTavern).to.have.property('prices');
        expect(randomTavern).to.have.property('universe');
    });
});
