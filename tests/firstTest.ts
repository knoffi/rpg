import { expect } from 'chai';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { WeServe } from '../editNavigator/WeServe';
describe('KeyHandler tests', () => {
    const KEY_CHANGE = {
        main: [AssetKey.BARTENDER_knowledge],
        addition: [AssetKey.BARTENDER_opinion, AssetKey.BARTENDER_face],
    };
    const ADD = {
        isAbout: WeServe.impressions,
        type: 'Add' as const,
        newKeys: KEY_CHANGE,
    };
    const DELETE = {
        isAbout: WeServe.impressions,
        type: 'Delete' as const,
        oldKeys: KEY_CHANGE,
    };
    it('default constructing', () => {
        const keys = new KeyHandler('noPreviousContent');
        expect(keys.getFullKeys(WeServe.impressions).main)
            .to.have.property('length')
            .to.equal(0);
    });
    it('adding', () => {
        const keys = new KeyHandler('noPreviousContent');
        keys.update(ADD);

        expect(keys.getFullKeys(WeServe.impressions).main)
            .to.have.property('length')
            .to.equal(1);
        expect(keys.getFullKeys(WeServe.impressions).addition)
            .to.have.property('length')
            .to.equal(2);
        expect(keys.getFullKeys(WeServe.drinks).main).to.be.empty;
    });
    it('double adding', () => {
        const keys = new KeyHandler('noPreviousContent');
        keys.update(ADD);
        keys.update(ADD);
        expect(keys.getFullKeys(WeServe.impressions).main)
            .to.have.property('length')
            .to.equal(1);
        expect(keys.getFullKeys(WeServe.impressions).addition)
            .to.have.property('length')
            .to.equal(2);
        expect(keys.getFullKeys(WeServe.drinks).main).to.be.empty;
    });
    it('deleting', () => {
        const keys = new KeyHandler('noPreviousContent');
        keys.update(ADD);
        keys.update(ADD);
        keys.update(DELETE);
        expect(keys.getFullKeys(WeServe.impressions).main)
            .to.have.property('length')
            .to.equal(1);
        expect(keys.getFullKeys(WeServe.impressions).addition)
            .to.have.property('length')
            .to.equal(2);
        expect(keys.getFullKeys(WeServe.drinks).main).to.be.empty;
    });
});
