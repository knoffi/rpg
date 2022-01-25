import { expect } from 'chai';
import { association } from '../classes/association';
import { CreationRequest } from '../classes/contentCreator/ContentCreator';
import { CreationQuality } from '../classes/contentCreator/CreationQuality';
import { FantasyKeys } from '../classes/contentCreator/FantasKeys';
import { AssetKey } from '../classes/idea/AssetKey/AssetKey';
import { Pattern } from '../classes/idea/Patterns/Pattern';
import { StructuredTavernFits } from '../classes/idea/StructuredTavernFits';
import { Keys } from '../classes/keyHandler/KeyHandlingTypes';
import { Drinkable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { Offer } from '../scenes/menuScene/Offer';
import { Constants } from './constants/Constants';

describe('Content Creator', () => {
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
        expect(creation).to.have.property('keys');
        const newKeys = creation.keys.getFullKeys(WeServe.drinks);
        expect(newKeys)
            .to.have.property('main')
            .to.eql([AssetKey.WINE_mead, AssetKey.WINE_red]);
        expect(names).to.have.length(1);
        const onlyEntry = names[0];
        expect(onlyEntry).to.be.oneOf(['Gourmonete', 'Ruby Wine']);
    });
    it('add with pattern', () => {
        const impressionRequest = Constants.impressionRequest();
        const empty: StructuredTavernFits = {};
        const creation = creator.addRandomCreation(empty, impressionRequest);
        expect(creation).to.have.property('pattern');
        const newPatterns = creation.pattern.getPatterns(creation.isAbout);
        expect(newPatterns).to.deep.include(Pattern.BARTENDER_UncleBen);
    });

    it('quality left: NONE (does not fit)', () => {
        const { check, fits } = Constants.qualityLeft()[CreationQuality.NONE];
        const checkResult = creator.contentQualityLeft(fits, check);
        expect(checkResult).is.eql(CreationQuality.NONE);
    });
    it('quality left: AVERAGE (key duplicate + power fit fulfilled)', () => {
        const { check, fits } =
            Constants.qualityLeft()[CreationQuality.AVERAGE];
        const checkResult = creator.contentQualityLeft(fits, check);
        expect(checkResult).is.eql(CreationQuality.AVERAGE);
    });
    it('quality left: BARELY (key duplicate + power fit unfulfilled)', () => {
        const { check, fits } = Constants.qualityLeft()[CreationQuality.BARELY];
        const checkResult = creator.contentQualityLeft(fits, check);
        expect(checkResult).is.eql(CreationQuality.BARELY);
    });
    it('quality left: HIGH (key fits + power fit fulfilled)', () => {
        const { check, fits } = Constants.qualityLeft()[CreationQuality.HIGH];
        const checkResult = creator.contentQualityLeft(fits, check);
        expect(checkResult).is.eql(CreationQuality.HIGH);
    });
    it('quality left: GOOD (key fits + power fit unfulfilled)', () => {
        const { check, fits } = Constants.qualityLeft()[CreationQuality.GOOD];
        const checkResult = creator.contentQualityLeft(fits, check);
        expect(checkResult).is.eql(CreationQuality.GOOD);
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
        const test = (repeat: number) => {
            const creator = Constants.creator();
            const {
                request,
                toReroll,
                keys,
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
            const result = creator.multiReroll(
                fits,
                toReroll,
                request,
                [],
                toReroll
            );
            expect(result).to.have.property('isAbout').to.eql(WeServe.food);
            const newNames = (result.rerolled as { name: string }[]).map(
                (offer) => offer.name
            );
            expect(newNames, 'FAILED AFTER ' + repeat + ' REPEAT')
                .to.contain(addedByReroll)
                .and.to.contain(unrerolledName);
            expect(result).to.have.property('keys');
            expect(result).to.have.property('pattern');
            const fullKeys: Keys = result.keys.getFullKeys(WeServe.food);
            const newPatterns: Pattern[] = result.pattern.getPatterns(
                WeServe.food
            );
            containedFullMain.forEach((mainKey) =>
                expect(fullKeys, 'new full keys')
                    .to.have.property('main')
                    .to.contain(mainKey)
            );
            containedPattern.forEach((pattern) =>
                expect(newPatterns).to.contain(pattern)
            );
        };
        const repeats = new Array(2)
            .fill(1)
            .forEach((repeat, index) => test(index));
    });
    it('add with implied patterns', () => {
        const creator = Constants.creator();
        const { addRequest, patternsAfterAdd, patternIsAbout } =
            Constants.forImpliedPatternsByKey();
        const add = creator.addRandomCreation({}, addRequest);
        expect(add).to.have.property('pattern');
        const patterns = add.pattern.getPatterns(patternIsAbout);
        const expectedPatterns = patternsAfterAdd.getPatterns(patternIsAbout);
        expect(patterns).to.eql(expectedPatterns);
    });
    it('delete with implied patterns', () => {
        const creator = Constants.creator();
        const { addRequest, keysAfterAdd, patternsAfterAdd, patternIsAbout } =
            Constants.forImpliedPatternsByKey();
        const add = creator.addRandomCreation({}, addRequest);
        const impliedPatterns = add.pattern.getPatterns(patternIsAbout);
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
            const newPatterns = deletion.pattern.getPatterns(patternIsAbout);
            expect(newPatterns).to.have.length(0);
        }
    });
    it('reroll with implied patterns', () => {
        const creator = Constants.creator();
        const fits: StructuredTavernFits = {};
        const { addRequest, rerollRequest, patternIsAbout } =
            Constants.forImpliedPatternsByKey();
        const add = creator.addRandomCreation({}, addRequest);
        const impliedPatterns = add.pattern.getPatterns(patternIsAbout);
        expect(impliedPatterns).to.have.property('length').to.eql(1);
        const addedName = add.added[0].name;
        expect(add.isAbout).to.eql(WeServe.drinks);
        if (add.isAbout === WeServe.drinks) {
            const reroll = creator.multiReroll(
                fits,
                [addedName],
                rerollRequest(add.added),
                [addedName],
                []
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
    it('add with unwanted names', () => {
        const { request, fits, expectedCreation } = Constants.addWithUnwanted();
        const creation = creator.addRandomCreation(fits, request);
        expect(creation).to.have.property('added');
        const assets: { name: string }[] = creation.added;
        const namesAfterAdd = assets.map((asset) => asset.name);
        expect(namesAfterAdd).to.eql([expectedCreation]);
    });
    it('add with unpleasant names', () => {
        const { request, fits, expectedCreation } =
            Constants.addWithUnpleasant();
        const creation = creator.addRandomCreation(fits, request);
        expect(creation).to.have.property('added');
        const assets: { name: string }[] = creation.added;
        const namesAfterAdd = assets.map((asset) => asset.name);
        expect(namesAfterAdd).to.eql([expectedCreation]);
    });
    it('add with unpleasant > unwanted', () => {
        const { request, fits, expectedCreation } =
            Constants.addUnpleasantGreaterUnwanted();
        const creation = creator.addRandomCreation(fits, request);
        expect(creation).to.have.property('added');
        const assets: { name: string }[] = creation.added;
        const namesAfterAdd = assets.map((asset) => asset.name);
        expect(namesAfterAdd).to.eql([expectedCreation]);
    });
});
