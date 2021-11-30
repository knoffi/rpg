import { expect } from 'chai';
import { association } from '../classes/association';
import {
    AddCheck,
    CreationRequest,
} from '../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Noticable } from '../classes/idea/Noticable';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { Drinkable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { Offer } from '../scenes/menuScene/Offer';
import { Impression } from '../scenes/questScene/impressions/Impression';
import { Constants } from './Constants';

describe('ContentCreator tests', () => {
    //TODO: use own deep cloner in abstracted "Constants" class, then Constants.get("food_request") to get mutable clone
    const foodRequest: CreationRequest = JSON.parse(
        JSON.stringify(Constants.foodRequest)
    );
    const drinkRequest: CreationRequest = JSON.parse(
        JSON.stringify(Constants.drinkRequest)
    );
    const impressionRequest: CreationRequest = JSON.parse(
        JSON.stringify(Constants.impressionRequest)
    );
    const rerollRequest: CreationRequest = JSON.parse(
        JSON.stringify(Constants.rerollRequest)
    );
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
            oldAssets: firstCreation.added,
        } as CreationRequest;
        const secondCreation = creator.addRandomCreation(empty, secondRequest);
        const thirdRequest = {
            ...foodRequest,
            oldAssets: secondCreation.added,
        } as CreationRequest;
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
    it('delete', () => {
        const empty: StructuredTavernFits = {};
        const creation = creator.addRandomCreation(empty, drinkRequest);
        const createdOffers = creation.added as Offer[];
        expect(createdOffers).has.property('length').is.equal(1);

        const firstDrink = createdOffers[0];
        const reducedMenu = creator.deleteCreation(firstDrink.name, {
            isAbout: WeServe.drinks,
            oldAssets: createdOffers,
        });

        expect(reducedMenu)
            .to.have.property('isAbout')
            .to.equal(WeServe.drinks);

        expect(reducedMenu).to.have.property(WeServe.drinks).to.eql([]);
    });
    it('delete with key', () => {
        const empty: StructuredTavernFits = {};
        const creation = creator.addRandomCreation(empty, drinkRequest);
        const createdOffers = creation.added as Offer[];

        expect(createdOffers).has.property('length').is.equal(1);
        const firstDrink = createdOffers[0];

        expect(firstDrink)
            .has.property('keys')
            .has.property('main')
            .has.property('length')
            .is.greaterThanOrEqual(
                1,
                'test useless, no previously added main keys to remove from ' +
                    firstDrink.name
            );
        const addedKeys = firstDrink.keys;
        const reducedMenu = creator.deleteCreation(firstDrink.name, {
            isAbout: WeServe.drinks,
            oldAssets: createdOffers,
        });
        expect(reducedMenu).to.have.property('oldKeys').to.eql(addedKeys);
    });
    it('delete with pattern', () => {
        const empty: StructuredTavernFits = {};
        const creation = creator.addRandomCreation(empty, impressionRequest);
        const createdNotes = creation.added as Impression[];

        expect(createdNotes).has.property('length').is.equal(1);
        const firstNote = createdNotes[0];

        expect(firstNote)
            .has.property('patterns')
            .has.property('length')
            .is.greaterThanOrEqual(
                1,
                'test useless, no previously added patterns to remove from ' +
                    firstNote.name
            );
        const addedPatterns = firstNote.patterns;
        const reducedMenu = creator.deleteCreation(firstNote.name, {
            isAbout: WeServe.impressions,
            oldAssets: createdNotes,
        });
        expect(reducedMenu)
            .to.have.property('oldPatterns')
            .to.eql(addedPatterns);
    });
    it('nothing left: true', () => {
        const fitting = {};
        const checkData: AddCheck = {
            isAbout: WeServe.impressions,
            category: Noticable.someCustomers,
            added: [],
        };
        const checkResult = creator.noNextCreationLeft(fitting, checkData);
        expect(checkResult).is.true;
    });
    it('nothing left: false', () => {
        const fitting = {};
        const checkData: AddCheck = { ...impressionRequest, added: [] };
        const checkResult = creator.noNextCreationLeft(fitting, checkData);
        expect(checkResult).is.false;
    });
    it('reroll:', () => {
        const fitting = {};
        expect(rerollRequest).to.have.property('oldAssets').to.have.length(1);
        const oldAsset = rerollRequest.oldAssets[0];
        const nameForReroll = oldAsset.name;
        expect(oldAsset).to.have.property('patterns').to.have.length(1);
        const oldPattern = oldAsset.patterns[0];
        expect(oldAsset)
            .to.have.property('keys')
            .to.have.property('main')
            .to.have.length(1);
        const oldMainKey = oldAsset.keys.main[0];
        const reroll = creator.rerollOneCreation(
            fitting,
            nameForReroll,
            rerollRequest
        );
        expect(reroll).to.have.property('isAbout').to.eql(WeServe.impressions);
        expect(reroll).to.have.property('oneRerolled').to.have.length(1);
        expect(reroll)
            .to.have.property('oldKeys')
            .to.have.property('main')
            .eql([oldMainKey]);
        expect(reroll).to.have.property('oldPatterns').to.eql([oldPattern]);
        const newAsset = reroll.oneRerolled[0];
        expect(newAsset)
            .to.have.property('category')
            .to.eql(rerollRequest.category);
        expect(newAsset).to.have.property('name').to.not.eql(nameForReroll);
    });
});
