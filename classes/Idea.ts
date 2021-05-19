import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import {
    association,
    isClassAssociation,
    isIncomeAssociation,
    isLandAssociation,
    isRaceAssociation,
    isSpecialAssociation,
} from './association';
import { DescriptionAsset } from './DescriptionAsset';
import { StructuredTavernFits } from './StructuredTavernFits';

export class Idea {
    constructor(
        protected main: DescriptionAsset,
        protected additions?: DescriptionAsset[][],
        protected contrastAdditions?: DescriptionAsset[][]
    ) {}

    public countFittingChoices(
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix?: (name: string) => boolean
    ) {
        const fittingHarmoniesAmount = this.additions
            ? this.countFittingIdeaConstellations(
                  this.additions,
                  tavernFits,
                  isExcludedByPrefix
              )
            : 0;
        const fittingContrastAmount = this.contrastAdditions
            ? this.countFittingIdeaConstellations(
                  this.contrastAdditions,
                  tavernFits,
                  isExcludedByPrefix
              )
            : 0;
        return fittingHarmoniesAmount + fittingContrastAmount;
    }

    private countFittingIdeaConstellations(
        additions: DescriptionAsset[][],
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix?: (name: string) => boolean
    ) {
        if (additions.length === 0 || additions === [[]]) {
            return 0;
        }
        const countsOfFittingAdditions = additions.map(
            (additionCollection) =>
                additionCollection.filter((addition) =>
                    this.assetFitsToTavern(
                        tavernFits,
                        addition,
                        isExcludedByPrefix
                    )
                ).length
        );
        const fittingHarmonyNumber = countsOfFittingAdditions.reduce(
            (prod, cur) => prod * cur,
            1
        );
        return fittingHarmonyNumber;
    }

    protected getFittingAssetPart(
        tavernFits: StructuredTavernFits,
        additionChoices?: DescriptionAsset[],
        isExcludedByPrefix?: (name: string) => boolean,
        ignoreCriminalRestrictions?: boolean
    ) {
        if (additionChoices) {
            const fittingAssetParts = additionChoices.filter((addition) =>
                this.assetFitsToTavern(tavernFits, addition, isExcludedByPrefix)
            );
            return getRandomArrayEntry(fittingAssetParts);
        } else {
            return undefined;
        }
    }

    private assetFitsToTavern(
        tavernFits: StructuredTavernFits,
        asset: DescriptionAsset,
        isExcludedByPrefix?: (name: string) => boolean
    ) {
        const assetIsRedundant = isExcludedByPrefix
            ? isExcludedByPrefix(asset.name)
            : false;
        if (assetIsRedundant) {
            return false;
        }

        const tavernFitsArray = Object.values(tavernFits).filter(
            (entry) => entry
        ) as association[];
        //TODO: Do I really want to be so generous if tavern fits are empty?
        if (
            tavernFitsArray.length === 0 &&
            !asset.worksForBrothel &&
            !asset.worksForThiefs &&
            !asset.worksForAssasines
        ) {
            return true;
        }
        const necessarities = asset.needs || [];
        const misfits = asset.misfits || [];
        const needsOne = asset.needsOne;
        const necessaritiesFulfilled = necessarities.every((necessaryFit) =>
            tavernFitsArray.includes(necessaryFit)
        );
        const noMisfitsInTavern = misfits.every(
            (misfit) => !tavernFitsArray.includes(misfit)
        );

        const needsOneFulfilled = needsOne
            ? needsOne.some((replacableNecessarity) =>
                  tavernFitsArray.includes(replacableNecessarity)
              )
            : true;

        const assetContainsTavernFits = asset.fitsTo
            ? tavernFitsArray.every(
                  (fit) =>
                      fit === association.empty ||
                      necessarities.includes(fit) ||
                      asset.fitsTo!.includes(fit)
              )
            : true;
        const strongNeedsOneFulfilled = this.strongNeedsOneCheck(
            tavernFitsArray,
            tavernFits,
            asset.strongNeedsOne
        );
        const incomeIsFitting =
            !tavernFits.income ||
            !asset.incomeRange ||
            asset.incomeRange.includes(tavernFits.income);
        const landIsFitting =
            !tavernFits.land ||
            !asset.landRange ||
            asset.landRange.includes(tavernFits.land);
        const classIsFitting =
            !tavernFits.class ||
            !asset.classRange ||
            asset.classRange.includes(tavernFits.class);
        const raceIsFitting =
            !tavernFits.race ||
            !asset.raceRange ||
            asset.raceRange.includes(tavernFits.race);
        const specialIsFitting =
            !tavernFits.special ||
            !asset.specialsRange ||
            asset.specialsRange.includes(tavernFits.special);
        const nonSpecialCondition =
            assetContainsTavernFits &&
            necessaritiesFulfilled &&
            needsOneFulfilled &&
            incomeIsFitting &&
            landIsFitting &&
            classIsFitting &&
            raceIsFitting &&
            specialIsFitting &&
            noMisfitsInTavern;
        switch (tavernFits.special) {
            case association.prostitute:
                return asset.worksForBrothel || asset.worksForAllCriminals
                    ? nonSpecialCondition
                    : false;
            case association.thief:
                return asset.worksForThiefs || asset.worksForAllCriminals
                    ? nonSpecialCondition
                    : false;
            case association.assasine:
                return asset.worksForAssasines || asset.worksForAllCriminals
                    ? nonSpecialCondition
                    : false;

            default:
                return nonSpecialCondition;
        }
    }
    private strongNeedsOneCheck(
        tavernFits: association[],
        structuredFits: StructuredTavernFits,
        strongNeedsOne?: association[]
    ) {
        if (!strongNeedsOne) {
            return true;
        }
        const needsOneCondition = strongNeedsOne.some((need) =>
            tavernFits.includes(need)
        );
        const impliedRangeCondition = strongNeedsOne.every((need) => {
            if (isRaceAssociation(need)) {
                return !structuredFits.race || structuredFits.race === need;
            }
            if (isClassAssociation(need)) {
                return !structuredFits.class || structuredFits.class === need;
            }
            if (isIncomeAssociation(need)) {
                return !structuredFits.income || structuredFits.income === need;
            }
            if (isLandAssociation(need)) {
                return !structuredFits.land || structuredFits.land === need;
            }
            if (isSpecialAssociation(need)) {
                return (
                    !structuredFits.special || structuredFits.special === need
                );
            }
            return true;
        });
        return needsOneCondition && impliedRangeCondition;
    }

    public fitsToTavern(
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix?: (name: string) => boolean
    ) {
        const mainFitsToTavern = this.assetFitsToTavern(
            tavernFits,
            this.main,
            isExcludedByPrefix
        );
        if (!mainFitsToTavern) {
            return false;
        }
        if (!this.additions && !this.contrastAdditions && mainFitsToTavern) {
            return true;
        }
        const someHarmonySubstantiveFits = this.additions
            ? this.additions.every((additionCollection) =>
                  additionCollection.some((addition) =>
                      this.assetFitsToTavern(tavernFits, addition)
                  )
              )
            : false;
        if (someHarmonySubstantiveFits) {
            return true;
        }
        const someConstrastSubstantiveFits = this.contrastAdditions
            ? this.contrastAdditions.every((additionCollection) =>
                  additionCollection.some((addition) =>
                      this.assetFitsToTavern(tavernFits, addition)
                  )
              )
            : false;
        return someConstrastSubstantiveFits;
    }
}
