import { expect } from 'chai';
import { Dismiss } from '../classes/dismissHandler/Dismiss';
import { DismissHandler } from '../classes/dismissHandler/dismissHandler';
import { WeServe } from '../editNavigator/WeServe';

describe('Dismiss Handler', () => {
    it('Add', () => {
        const handler = new DismissHandler();
        const dismiss: Dismiss = { unwanted: ['A'], unpleasant: ['B'] };
        expect(() => handler.add(WeServe.impressions, dismiss)).to.not.throw(
            ''
        );
    });
    it('Get after Add', () => {
        const handler = new DismissHandler();
        const dismiss: Dismiss = { unwanted: ['A', 'A'], unpleasant: ['B'] };
        handler.add(WeServe.impressions, dismiss);
        expect(
            handler.getUnwanted(WeServe.impressions),
            'unwanted'
        ).to.have.lengthOf(2);
        expect(
            handler.getUnpleasant(WeServe.impressions),
            'unpleasant'
        ).to.have.lengthOf(1);
        expect(handler.getUnpleasant(WeServe.drinks)).to.have.lengthOf(0);
        expect(handler.getUnpleasant(WeServe.food)).to.have.lengthOf(0);
        expect(handler.getUnwanted(WeServe.drinks)).to.have.lengthOf(0);
        expect(handler.getUnwanted(WeServe.food)).to.have.lengthOf(0);
    });
    it('Get without Add', () => {
        const handler = new DismissHandler();
        expect(handler.getUnwanted(WeServe.impressions)).to.have.lengthOf(0);
        expect(handler.getUnpleasant(WeServe.impressions)).to.have.lengthOf(0);
        expect(handler.getUnpleasant(WeServe.drinks)).to.have.lengthOf(0);
        expect(handler.getUnpleasant(WeServe.food)).to.have.lengthOf(0);
        expect(handler.getUnwanted(WeServe.impressions)).to.have.lengthOf(0);
        expect(handler.getUnwanted(WeServe.drinks)).to.have.lengthOf(0);
        expect(handler.getUnwanted(WeServe.food)).to.have.lengthOf(0);
    });
    it('Cloning', () => {
        const original = new DismissHandler();
        const clone = original.clone();
        clone.add(WeServe.impressions, {
            unwanted: ['A1', 'A2'],
            unpleasant: ['B'],
        });
        expect(clone.getUnpleasant(WeServe.impressions)).to.have.length(1);
        expect(clone.getUnwanted(WeServe.impressions)).to.have.length(2);
        expect(original.getUnpleasant(WeServe.impressions)).to.have.length(0);
        expect(original.getUnwanted(WeServe.impressions)).to.have.length(0);
    });
});
