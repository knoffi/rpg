import { expect } from 'chai';
import { association } from '../classes/association';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { BEST_FIT_LEVEL } from '../classes/idea/fitCalculator/getFitLevel';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { Constants } from './constants/Constants';
const TEST_LOOPS_AGAINST_RANDOMNESS = 10;
describe('Power fit concepts', () => {
    it('directly chosen powerfit', () => {
        const { impression, powerfitSoldierText } =
            Constants.powerFitModeImpression();
        const fits: StructuredTavernFits = { powerFit: association.soldier };
        const testAgainstRandomness = () => {
            const result = impression.createImpression(
                fits,
                () => false,
                () => false,
                BEST_FIT_LEVEL(0),
                FantasyKeys.unitTest
            );
            expect(result)
                .to.have.property('name')
                .to.equal(powerfitSoldierText);
        };
        const testLoops = new Array(TEST_LOOPS_AGAINST_RANDOMNESS)
            .fill(1)
            .forEach((loop) => testAgainstRandomness());
    });
    it('indirect powerfit by needs', () => {
        const { impression, needsHavenText } =
            Constants.powerFitModeImpression();
        const fits: StructuredTavernFits = {
            powerFit: association.haven,
            land: association.haven,
        };
        const testAgainstRandomness = () => {
            const result = impression.createImpression(
                fits,
                () => false,
                () => false,
                BEST_FIT_LEVEL(0),
                FantasyKeys.unitTest
            );
            expect(result).to.have.property('name').to.equal(needsHavenText);
        };
        const newLocal = 0;
        const testLoops = new Array(TEST_LOOPS_AGAINST_RANDOMNESS)
            .fill(1)
            .forEach((loop) => testAgainstRandomness());
    });
    it('indirect powerfit by needsOne', () => {
        const { impression, needsOneBardText } =
            Constants.powerFitModeImpression();
        const fits: StructuredTavernFits = {
            powerFit: association.bard,
            class: association.bard,
        };
        const testAgainstRandomness = () => {
            const result = impression.createImpression(
                fits,
                () => false,
                () => false,
                BEST_FIT_LEVEL(0),
                FantasyKeys.unitTest
            );
            expect(result).to.have.property('name').to.equal(needsOneBardText);
        };
        const testLoops = new Array(TEST_LOOPS_AGAINST_RANDOMNESS)
            .fill(1)
            .forEach((loop) => testAgainstRandomness());
    });
});
