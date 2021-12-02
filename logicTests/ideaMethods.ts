import { expect } from 'chai';
import { Idea } from '../classes/idea/Idea';
import { Pattern } from '../classes/idea/Patterns/Pattern';
describe('Idea method tests', () => {
    it('main pattern bonus with empty additions', () => {
        const withoutPatternBonus = new Idea(
            { name: 'A' },
            { main: true, contrast: false, harmony: false },
            [[]]
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen]
        );
        const withWrongPatternBonus = new Idea(
            { name: 'A', patterns: [Pattern.BARTENDER_Kleinfinger] },
            { main: true, contrast: false, harmony: false },
            [[]]
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen]
        );
        const withPatternBonus = new Idea(
            { name: 'A', patterns: [Pattern.BARTENDER_UncleBen] },
            { main: true, contrast: false, harmony: false },
            [[]]
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen]
        );

        expect(withPatternBonus).to.be.greaterThan(withoutPatternBonus);
        expect(withPatternBonus).to.be.greaterThan(withWrongPatternBonus);
        expect(withWrongPatternBonus).to.be.eql(withoutPatternBonus);
    });
    it('main pattern bonus with undefined additions', () => {
        const withoutPatternBonus = new Idea(
            { name: 'A' },
            { main: true, contrast: false, harmony: false }
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen]
        );
        const withWrongPatternBonus = new Idea(
            { name: 'A', patterns: [Pattern.BARTENDER_Kleinfinger] },
            { main: true, contrast: false, harmony: false }
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen]
        );
        const withPatternBonus = new Idea(
            { name: 'A', patterns: [Pattern.BARTENDER_UncleBen] },
            { main: true, contrast: false, harmony: false }
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen]
        );

        expect(withPatternBonus).to.be.greaterThan(withoutPatternBonus);
        expect(withPatternBonus).to.be.greaterThan(withWrongPatternBonus);
        expect(withWrongPatternBonus).to.be.eql(withoutPatternBonus);
    });
});
