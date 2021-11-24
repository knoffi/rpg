import { assert, expect } from 'chai';
import { PatternHandler } from '../classes/patternHandler/PatternHandler';
import { WeServe } from '../editNavigator/WeServe';
import { Constants } from './Constants';
describe('PatternHandler tests', () => {
    const ADD = Constants.patternAdd;
    const DELETE = Constants.patternDelete;

    it('construct by default', () => {
        const pattern = new PatternHandler('noContent');
        expect(pattern.getPatterns(WeServe.impressions))
            .to.have.property('length')
            .to.equal(0);
    });
    it('construct by content', () => {
        const content = Constants.content;
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
