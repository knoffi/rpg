import { expect } from 'chai';
import { association } from '../classes/association';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { Drinkable } from '../classes/TavernProduct';
import { Offer } from '../scenes/menuScene/Offer';
import { Constants } from './Constants';
describe('ContentCreator tests', () => {
    const foodRequest = Constants.foodRequest;
    const drinkRequest = Constants.drinkRequest;
    const impressionRequest = Constants.impressionRequest;
    const creator = Constants.creator;
    it('construct', () => {
        expect(creator).not.to.be.undefined;
    });
    it('get universeName', () => {
        const name = creator.getUniverseName(Drinkable.beer);
        expect(name).to.equal(FantasyKeys.unitTest);
    });
    it('add by income', () => {
        const rich: StructuredTavernFits = { income: association.rich };
        const creation = creator.addRandomCreation(rich, foodRequest);

        expect(creation.category === foodRequest.category).to.be.true;
        expect(creation.isAbout === foodRequest.isAbout).to.be.true;
        expect(creation.newCreationAdded).to.be.true;
        expect(creation.added.length).to.equal(1);
        expect(creation.added[0]).has.property('name').to.contain('Steak');
    });
    it('add multiple', () => {
        const empty: StructuredTavernFits = {};
        const firstCreation = creator.addRandomCreation(empty, foodRequest);
        const secondRequest = {
            ...foodRequest,
            oldAssets: firstCreation.added as Offer[],
        };
        const secondCreation = creator.addRandomCreation(empty, secondRequest);
        const thirdRequest = {
            ...foodRequest,
            oldAssets: secondCreation.added as Offer[],
        };
        const thirdCreation = creator.addRandomCreation(empty, thirdRequest);
        const offerNames = (thirdCreation.added as Offer[]).map(
            (offer) => offer.name
        );

        expect(secondCreation.newCreationAdded).to.be.true;
        expect(thirdCreation.newCreationAdded).to.be.false;
        expect(secondCreation.added).to.eql(thirdCreation.added);
        expect(offerNames).to.have.members([
            'Chauteaubriand Steak',
            'Roast Pork',
        ]);
    });
    it('add with key', () => {
        const empty: StructuredTavernFits = {};
        const creation = creator.addRandomCreation(empty, drinkRequest);
        const names = (creation.added as Offer[]).map((offer) => offer.name);
        expect(creation)
            .to.have.property('newKeys')
            .to.have.property('main')
            .to.eql([AssetKey.WINE_red]);
        expect(names).to.eql(['Gourmonete']);
    });
    it('add with pattern', () => {
        const empty: StructuredTavernFits = {};
        const creation = creator.addRandomCreation(empty, impressionRequest);
        expect(creation)
            .to.have.property('newPatterns')
            .to.deep.include(Pattern.BARTENDER_UncleBen);
    });
});
