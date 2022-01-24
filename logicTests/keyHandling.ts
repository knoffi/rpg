import { assert, expect } from 'chai';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { WeServe } from '../editNavigator/WeServe';
import { Constants } from './constants/Constants';
describe('KeyHandler tests', () => {
    it('construct by default', () => {
        const keys = new KeyHandler('noPreviousContent');
        expect(keys.getFullKeys(WeServe.impressions))
            .to.have.property('main')
            .to.have.property('length')
            .to.equal(0);
    });
    it('construct from content', () => {
        const { content } = Constants.content();
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
        const ADD = Constants.keyAdd();
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
    it('add twice', () => {
        const ADD = Constants.keyAdd();
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
        const ADD = Constants.keyAdd();
        const DELETE = Constants.keyDelete();
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
        const ADD = Constants.keyAdd();
        const DELETE = Constants.keyDelete();
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
        const ADD = Constants.keyAdd();
        const DELETE = Constants.keyDelete();
        const keys = new KeyHandler('noPreviousContent');
        keys.update(ADD);
        keys.update(DELETE);
        assert.throws(() => keys.update(DELETE), /negative/i);
    });
});
