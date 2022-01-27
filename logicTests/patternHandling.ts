import { assert, expect } from 'chai';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import {
    PatternChange,
    PatternHandler,
} from '../classes/patternHandler/PatternHandler';
import { WeServe } from '../editNavigator/WeServe';
import { Constants } from './constants/Constants';
describe('PatternHandler tests', () => {
    it('construct by default', () => {
        const pattern = new PatternHandler('noContent');
        expect(pattern.getPatterns(WeServe.impressions))
            .to.have.property('length')
            .to.equal(0);
    });
    it('construct by content', () => {
        const { content, resultingPatterns } = Constants.content();
        const patterns = new PatternHandler(content);
        const test = (isAbout: WeServe) => {
            expect(patterns.getPatterns(isAbout)).to.eql(
                resultingPatterns[isAbout]
            );
        };
        Object.values(WeServe).forEach((isAbout) => test(isAbout));
    });
    it('add', () => {
        const ADD = Constants.patternAdd();
        const pattern = new PatternHandler('noContent');
        pattern.update(ADD);
        expect(pattern.getPatterns(ADD.isAbout))
            .to.have.property('length')
            .to.equal(1);
    });
    it('add twice', () => {
        const ADD = Constants.patternAdd();
        const pattern = new PatternHandler('noContent');
        pattern.update(ADD);
        pattern.update(ADD);
        expect(pattern.getPatterns(ADD.isAbout))
            .to.have.property('length')
            .to.equal(2);
    });
    it('delete', () => {
        const ADD = Constants.patternAdd();
        const DELETE = Constants.patternDelete();
        const pattern = new PatternHandler('noContent');
        pattern.update(ADD);
        pattern.update(DELETE);
        expect(ADD.isAbout).to.eql(DELETE.isAbout);
        expect(pattern.getPatterns(ADD.isAbout))
            .to.have.property('length')
            .to.equal(0);
    });
    it('delete after double add', () => {
        const ADD = Constants.patternAdd();
        const DELETE = Constants.patternDelete();
        const pattern = new PatternHandler('noContent');
        pattern.update(ADD);
        pattern.update(ADD);
        pattern.update(DELETE);
        expect(ADD.isAbout).to.eql(DELETE.isAbout);
        expect(pattern.getPatterns(ADD.isAbout))
            .to.have.property('length')
            .to.equal(1);
    });
    it('delete from empty', () => {
        const DELETE = Constants.patternDelete();
        const pattern = new PatternHandler('noContent');
        assert.throws(() => pattern.update(DELETE), /not found/i);
    });
    it('revert deletion', () => {
        const ADD = Constants.patternAdd();
        const DELETE = Constants.patternDelete();
        const pattern = new PatternHandler('noContent');
        pattern.update(ADD);
        pattern.update(DELETE);
        pattern.multiRevert([DELETE]);
        expect(ADD.isAbout).to.eql(DELETE.isAbout);
        expect(pattern.getPatterns(ADD.isAbout))
            .to.have.property('length')
            .to.equal(1);
    });
    it('revert adding', () => {
        const ADD = Constants.patternAdd();
        const pattern = new PatternHandler('noContent');
        pattern.update(ADD);
        pattern.update(ADD);
        pattern.multiRevert([ADD, ADD]);
        expect(pattern.getPatterns(ADD.isAbout))
            .to.have.property('length')
            .to.equal(0);
    });
    it('multi update clone', () => {
        const original = new PatternHandler('noContent');
        const change: PatternChange = {
            type: 'Add',
            newPatterns: [Pattern.BARTENDER_UncleBen],
            isAbout: WeServe.impressions,
        };
        const clone = original.multiUpdateClone([change]);
        expect(
            original.getPatterns(WeServe.impressions),
            'original is not supposed to change! table needs deeper copy!'
        ).to.have.length(0);
        expect(clone.getPatterns(WeServe.impressions)).to.have.length(1);
    });
});
