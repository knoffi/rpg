import { expect } from 'chai';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { DescriptionAsset } from '../classes/idea/DescriptionAsset';
import { Idea } from '../classes/idea/Idea';
import { ImpressionIdea } from '../classes/idea/ImpressionIdea';
import { Noticable } from '../classes/idea/Noticable';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { defaultPowerFitConcepts } from '../classes/idea/powerFitConcepts/powerFitConcepts';
import { WeServe } from '../editNavigator/WeServe';
import { Constants } from './Constants';
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
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [Pattern.BARTENDER_UncleBen],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });
        const withWrongPatternBonus = new Idea(
            { name: 'A', patterns: [Pattern.BARTENDER_Kleinfinger] },
            { main: true, contrast: false, harmony: false },
            [[]]
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [Pattern.BARTENDER_UncleBen],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });
        const withPatternBonus = new Idea(
            { name: 'A', patterns: [Pattern.BARTENDER_UncleBen] },
            { main: true, contrast: false, harmony: false },
            [[]]
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [Pattern.BARTENDER_UncleBen],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });

        expect(withPatternBonus).to.be.greaterThan(withoutPatternBonus);
        expect(withPatternBonus).to.be.greaterThan(withWrongPatternBonus);
        expect(withWrongPatternBonus).to.be.eql(withoutPatternBonus);
    });
    it('main pattern bonus with undefined additions', () => {
        const withoutPatternBonus = new Idea(
            { name: 'A' },
            { main: true, contrast: false, harmony: false }
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [Pattern.BARTENDER_UncleBen],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });
        const withWrongPatternBonus = new Idea(
            { name: 'A', patterns: [Pattern.BARTENDER_Kleinfinger] },
            { main: true, contrast: false, harmony: false }
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [Pattern.BARTENDER_UncleBen],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });
        const withPatternBonus = new Idea(
            { name: 'A', patterns: [Pattern.BARTENDER_UncleBen] },
            { main: true, contrast: false, harmony: false }
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [Pattern.BARTENDER_UncleBen],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });

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
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [
                Pattern.BARTENDER_UncleBen,
                Pattern.BARTENDER_UncleBen,
                Pattern.BARTENDER_Kleinfinger,
            ],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });
        const uncleBen = new ImpressionIdea(
            {
                name: 'Very friendly and responsible',
                patterns: [Pattern.BARTENDER_UncleBen],
            },
            [emptyDescriptionAsset],
            Noticable.bartender
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [
                Pattern.BARTENDER_UncleBen,
                Pattern.BARTENDER_UncleBen,
                Pattern.BARTENDER_Kleinfinger,
            ],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });

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
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [Pattern.BARTENDER_UncleBen],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });
        const uncleBen = new ImpressionIdea(
            {
                name: 'Very friendly and responsible',
                patterns: [Pattern.BARTENDER_UncleBen],
            },
            [emptyDescriptionAsset],
            Noticable.bartender
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [Pattern.BARTENDER_UncleBen],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });

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
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            additionIsExcludedByKey: () => false,
            mainIsExcludedByKey: () => false,
            patterns: [
                Pattern.BARTENDER_UncleBen,
                Pattern.BARTENDER_Kleinfinger,
            ],
            isUnwanted: () => false,
            isUnpleasant: () => false,
        });
        const uncleBen = new ImpressionIdea(
            {
                name: 'Very friendly and responsible',
                patterns: [Pattern.BARTENDER_UncleBen],
            },
            [emptyDescriptionAsset],
            Noticable.bartender
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            additionIsExcludedByKey: () => false,
            mainIsExcludedByKey: () => false,
            patterns: [
                Pattern.BARTENDER_UncleBen,
                Pattern.BARTENDER_Kleinfinger,
            ],
            isUnwanted: () => false,
            isUnpleasant: () => false,
        });

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
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [Pattern.BARTENDER_UncleBen],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });
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
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [Pattern.BARTENDER_UncleBen],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });
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
        ).getFitLevelForTavern({
            tavernFits: {},
            isExcludedByName: () => false,
            mainIsExcludedByKey: () => false,
            additionIsExcludedByKey: () => false,
            patterns: [Pattern.BARTENDER_UncleBen],
            isUnpleasant: () => false,
            isUnwanted: () => false,
        });
        expect(uncleBen).to.be.greaterThan(littleFinger);
        expect(littleFinger).to.equal(nobody);
    });
    it('implied patterns by keys', () => {
        const { drink, patternsToAdd } = Constants.forImpliedPatternsByKeys();
        const createdWine = drink.getConcreteDish(
            {},
            0,
            FantasyKeys.unitTest,
            () => false,
            []
        );
        expect(createdWine)
            .to.have.property('impliedPatterns')
            .to.have.property('length')
            .to.be.greaterThan(0, ' FOR impliedPatterns ');
        const redWineOnMenu = createdWine.impliedPatterns[0];
        expect(redWineOnMenu)
            .to.have.property('isAbout')
            .to.eql(WeServe.impressions);
        expect(redWineOnMenu).to.have.property('type').to.eql('Add');
        if (redWineOnMenu.type === 'Add') {
            expect(redWineOnMenu).to.have.property('newPatterns');
            const impliedPatterns = redWineOnMenu.newPatterns;
            expect(impliedPatterns).to.eql(patternsToAdd);
        }
    });
    it('implied patterns by key', () => {
        const { newPatterns, drink } = Constants.forImpliedPatternsByKey();
        const createdWine = drink.getConcreteDish(
            {},
            0,
            FantasyKeys.unitTest,
            () => false,
            []
        );
        expect(createdWine)
            .to.have.property('impliedPatterns')
            .to.have.property('length')
            .to.be.greaterThan(0, ' FOR impliedPatterns ');
        const redWineOnMenu = createdWine.impliedPatterns[0];
        expect(redWineOnMenu)
            .to.have.property('isAbout')
            .to.eql(WeServe.impressions);
        expect(redWineOnMenu).to.have.property('type').to.eql('Add');
        if (redWineOnMenu.type === 'Add') {
            expect(redWineOnMenu).to.have.property('newPatterns');
            const impliedPatterns = redWineOnMenu.newPatterns;
            expect(impliedPatterns).to.eql(newPatterns);
        }
    });
});
