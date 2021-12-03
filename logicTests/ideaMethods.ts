import { expect } from 'chai';
import { DescriptionAsset } from '../classes/idea/DescriptionAsset';
import { Idea } from '../classes/idea/Idea';
import { ImpressionIdea } from '../classes/idea/ImpressionIdea';
import { Noticable } from '../classes/idea/Noticable';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { defaultPowerFitConcepts } from '../classes/idea/powerFitConcepts/powerFitConcepts';
const emptyDescriptionAsset: DescriptionAsset = {
    name: '',
    worksForAllCriminals: true,
};
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
    it('pattern bonus with multiple patterns', () => {
        const littleFinger = new ImpressionIdea(
            {
                name: 'Knows a secret way into the royal castle',
                patterns: [Pattern.BARTENDER_Kleinfinger],
            },
            [emptyDescriptionAsset],
            Noticable.bartender
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [
                Pattern.BARTENDER_UncleBen,
                Pattern.BARTENDER_UncleBen,
                Pattern.BARTENDER_Kleinfinger,
            ]
        );
        const uncleBen = new ImpressionIdea(
            {
                name: 'Very friendly and responsible',
                patterns: [Pattern.BARTENDER_UncleBen],
            },
            [emptyDescriptionAsset],
            Noticable.bartender
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [
                Pattern.BARTENDER_UncleBen,
                Pattern.BARTENDER_UncleBen,
                Pattern.BARTENDER_Kleinfinger,
            ]
        );

        expect(uncleBen).to.be.greaterThan(littleFinger);
    });
    it('pattern bonus for impressions', () => {
        const littleFinger = new ImpressionIdea(
            {
                name: 'Knows a secret way into the royal castle',
                patterns: [Pattern.BARTENDER_Kleinfinger],
            },
            [emptyDescriptionAsset],
            Noticable.bartender
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen]
        );
        const uncleBen = new ImpressionIdea(
            {
                name: 'Very friendly and responsible',
                patterns: [Pattern.BARTENDER_UncleBen],
            },
            [emptyDescriptionAsset],
            Noticable.bartender
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen]
        );

        expect(uncleBen).to.be.greaterThan(littleFinger);
    });
    it('pattern bonus for equlibirium case', () => {
        const littleFinger = new ImpressionIdea(
            {
                name: 'Knows a secret way into the royal castle',
                patterns: [Pattern.BARTENDER_Kleinfinger],
            },
            [emptyDescriptionAsset],
            Noticable.bartender
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen, Pattern.BARTENDER_Kleinfinger]
        );
        const uncleBen = new ImpressionIdea(
            {
                name: 'Very friendly and responsible',
                patterns: [Pattern.BARTENDER_UncleBen],
            },
            [emptyDescriptionAsset],
            Noticable.bartender
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen, Pattern.BARTENDER_Kleinfinger]
        );

        expect(uncleBen).to.equal(littleFinger);
    });
    it('pattern bonus for addition', () => {
        const uncleBen = new ImpressionIdea(
            {
                name: '',
            },
            [{ name: 'UB', patterns: [Pattern.BARTENDER_UncleBen] }],
            Noticable.bartender,
            undefined,
            undefined,
            undefined,
            defaultPowerFitConcepts.harmony
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen]
        );
        const littleFinger = new ImpressionIdea(
            {
                name: '',
            },
            [{ name: 'LF', patterns: [Pattern.BARTENDER_Kleinfinger] }],
            Noticable.bartender,
            undefined,
            undefined,
            undefined,
            defaultPowerFitConcepts.harmony
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen]
        );
        const nobody = new ImpressionIdea(
            {
                name: '',
            },
            [{ name: 'NB', patterns: [] }],
            Noticable.bartender,
            undefined,
            undefined,
            undefined,
            defaultPowerFitConcepts.harmony
        ).getFitLevelForTavern(
            {},
            () => false,
            undefined,
            undefined,
            () => false,
            () => false,
            [Pattern.BARTENDER_UncleBen]
        );
        expect(uncleBen).to.be.greaterThan(littleFinger);
        expect(littleFinger).to.equal(nobody);
    });
});
