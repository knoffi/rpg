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
import { Keys } from '../classes/keyHandler/KeyHandlingTypes';
import { Drinkable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { Offer } from '../scenes/menuScene/Offer';
import { Constants } from './Constants';

describe('ContentCreator tests', () => {
    const creator = Constants.creator();

    it('construct', () => {
        expect(creator).not.to.be.undefined;
    });
    it('get universeName', () => {
        const name = creator.getUniverseName(Drinkable.beer);
        expect(name).to.equal(FantasyKeys.unitTest);
    });
    it('add by income', () => {
        const foodRequest = Constants.foodRequest();
        const rich: StructuredTavernFits = { income: association.rich };
        const creation = creator.addRandomCreation(rich, foodRequest);

        expect(creation.category === foodRequest.category).to.be.true;
        expect(creation.isAbout === foodRequest.isAbout).to.be.true;
        expect(creation.newCreationAdded).to.be.true;
        expect(creation.added.length).to.equal(1);
        expect(creation.added[0]).has.property('name').to.contain('Steak');
    });
    it('add multiple', () => {
        const request = Constants.foodRequest();
        const empty: StructuredTavernFits = {};
        const firstCreation = creator.addRandomCreation(empty, request);
        const secondRequest = {
            ...request,
            oldAssets: firstCreation.added,
        } as CreationRequest;
        const secondCreation = creator.addRandomCreation(empty, secondRequest);
        const thirdRequest = {
            ...request,
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
        const request = Constants.drinkRequest();
        const empty: StructuredTavernFits = {};
        const creation = creator.addRandomCreation(empty, request);
        const names = (creation.added as Offer[]).map((offer) => offer.name);
        expect(creation)
            .to.have.property('newKeys')
            .to.have.property('main')
            .to.eql([AssetKey.WINE_red]);
        expect(names).to.have.length(1);
        const onlyEntry = names[0];
        expect(onlyEntry).to.be.oneOf(['Gourmonete', 'Ruby Wine']);
    });
    it('add with pattern', () => {
        const impressionRequest = Constants.impressionRequest();
        const empty: StructuredTavernFits = {};
        const creation = creator.addRandomCreation(empty, impressionRequest);
        expect(creation)
            .to.have.property('newPatterns')
            .to.deep.include(Pattern.BARTENDER_UncleBen);
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
        const request = Constants.impressionRequest();
        const fitting = {};
        const checkData: AddCheck = { ...request, added: [] };
        const checkResult = creator.noNextCreationLeft(fitting, checkData);
        expect(checkResult).is.false;
    });
    it('reroll:', () => {
        const request = Constants.rerollRequest();
        const fitting = {};
        expect(request).to.have.property('oldAssets').to.have.length(1);
        const oldAsset = request.oldAssets[0];
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
            request
        );
        expect(reroll).to.have.property('isAbout').to.eql(WeServe.impressions);
        expect(reroll).to.have.property('rerolled').to.have.length(1);
        expect(reroll)
            .to.have.property('oldKeys')
            .to.have.property('main')
            .eql([oldMainKey]);
        expect(reroll).to.have.property('oldPatterns').to.eql([oldPattern]);
        const newAsset = reroll.rerolled[0];
        expect(newAsset).to.have.property('category').to.eql(request.category);
        expect(newAsset).to.have.property('name').to.not.eql(nameForReroll);
    });
    it('multi deletion:', () => {
        const creator = Constants.creator();
        const {
            request,
            leftAfterDelete,
            toDelete,
            keys,
            pattern,
            fullKeysLeft,
            patternsLeft,
        } = Constants.multiDelete();
        const result = creator.multiDelete(toDelete, request, keys, pattern);
        expect(result).to.have.property('isAbout').to.eql(WeServe.impressions);
        expect(result).to.have.property('keys');
        const newFullKeys = result.keys.getFullKeys(result.isAbout);
        expect(newFullKeys).to.eql(fullKeysLeft);
        expect(result).to.have.property('pattern');
        const newPattern = result.pattern.getPatterns(result.isAbout);
        expect(newPattern).to.eql(patternsLeft);
        if (result.isAbout === WeServe.impressions) {
            const namesLeft = result.impression.map(
                (impression) => impression.name
            );
            expect(namesLeft).to.eql(leftAfterDelete);
        }
    });
    it('multi reroll:', () => {
        const creator = Constants.creator();
        const {
            partialRequest,
            toReroll,
            keys,
            pattern,
            unrerolledName,
            addedByReroll,
            containedFullMain,
            containedPattern,
        } = Constants.multiReroll();
        const fits = {};
        const oldFullKeys = keys.getFullKeys(WeServe.food);
        expect(oldFullKeys, 'old full keys')
            .to.have.property('main')
            .to.contain(AssetKey.SMALL_DISH_soup);
        const request = { ...partialRequest, keys, pattern };
        const result = creator.multiReroll(fits, toReroll, request);
        expect(result).to.have.property('isAbout').to.eql(WeServe.food);
        const newNames = (result.rerolled as { name: string }[]).map(
            (offer) => offer.name
        );
        expect(newNames)
            .to.contain(addedByReroll)
            .and.to.contain(unrerolledName);
        expect(result).to.have.property('keys');
        expect(result).to.have.property('pattern');
        const fullKeys: Keys = result.keys.getFullKeys(WeServe.food);
        const newPatterns: Pattern[] = result.pattern.getPatterns(WeServe.food);
        containedFullMain.forEach((mainKey) =>
            expect(fullKeys, 'new full keys')
                .to.have.property('main')
                .to.contain(mainKey)
        );
        containedPattern.forEach((pattern) =>
            expect(newPatterns).to.contain(pattern)
        );
    });
    it('add with implied patterns', () => {
        const creator = Constants.creator();
        const { addRequest, patternsAfterAdd } =
            Constants.forImpliedPatternsByKey();
        const add = creator.addRandomCreation({}, addRequest);
        expect(add).to.have.property('impliedPatterns');
        const { impliedPatterns } = add;
        expect(impliedPatterns).to.have.property('length').to.be.greaterThan(0);
        const patternChange = impliedPatterns[0];
        expect(patternChange).to.have.property('type').to.eql('Add');
        if (patternChange.type === 'Add') {
            const { newPatterns } = patternChange;
            const expectedPatterns = patternsAfterAdd.getPatterns(
                WeServe.impressions
            );
            expect(newPatterns).to.eql(expectedPatterns);
        }
    });
    it('delete with implied patterns', () => {
        const creator = Constants.creator();
        const { addRequest, keysAfterAdd, patternsAfterAdd } =
            Constants.forImpliedPatternsByKey();
        const add = creator.addRandomCreation({}, addRequest);
        expect(add).to.have.property('impliedPatterns');
        const { impliedPatterns } = add;
        expect(impliedPatterns).to.have.property('length').to.be.greaterThan(0);
        expect(add.isAbout).to.eql(WeServe.drinks);
        if (add.isAbout === WeServe.drinks) {
            const toReduce = { ...add, oldAssets: add.added };
            expect(add.added).to.have.length(1);
            const addedName = add.added[0].name;
            const deletion = creator.multiDelete(
                [addedName],
                toReduce,
                keysAfterAdd,
                patternsAfterAdd
            );
            const newPatterns = deletion.pattern.getPatterns(
                WeServe.impressions
            );
            expect(newPatterns).to.have.length(0);
        }
    });
    it('reroll with implied patterns', () => {
        const creator = Constants.creator();
        const fits: StructuredTavernFits = {};
        const { addRequest, rerollRequest } =
            Constants.forImpliedPatternsByKey();
        const add = creator.addRandomCreation({}, addRequest);
        expect(add).to.have.property('impliedPatterns');
        const { impliedPatterns } = add;
        expect(impliedPatterns).to.have.property('length').to.eql(1);
        const addedName = add.added[0].name;
        expect(add.isAbout).to.eql(WeServe.drinks);
        if (add.isAbout === WeServe.drinks) {
            const reroll = creator.multiReroll(
                fits,
                [addedName],
                rerollRequest(add.added)
            );
            const newPatterns = reroll.pattern.getPatterns(WeServe.impressions);
            expect(reroll.rerolled[0], 'Is not a wine with asset key .redWine')
                .to.have.property('impliedPatterns')
                .to.have.length(1);
            expect(
                newPatterns,
                'new Patterns were incorrect:' + JSON.stringify(newPatterns)
            ).to.have.length(1);
        }
    });
});
