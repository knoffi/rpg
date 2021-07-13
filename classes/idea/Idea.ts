import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import {
    association,
    isClassAssociation,
    isIncomeAssociation,
    isLandAssociation,
    isRaceAssociation,
    isSpecialAssociation,
} from '../association';
import { AssetKey } from './AssetKey/AssetKey';
import { DescriptionAsset } from './DescriptionAsset';
import { StructuredTavernFits } from './StructuredTavernFits';

export class Idea {
    constructor(
        protected main: DescriptionAsset,
        protected additions?: DescriptionAsset[][],
        protected contrastAdditions?: DescriptionAsset[][],
        protected powerFitConcept?: {
            main: boolean;
            harmony: boolean;
            contrast: boolean;
        }
    ) {}

    public countFittingChoices(
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix?: (name: string) => boolean,
        applyPowerFit?: boolean
    ) {
        const fittingHarmoniesAmount = this.additions
            ? this.countFittingIdeaConstellations(
                  this.additions,
                  tavernFits,
                  isExcludedByPrefix,
                  applyPowerFit
              )
            : 0;
        const fittingContrastAmount = this.contrastAdditions
            ? this.countFittingIdeaConstellations(
                  this.contrastAdditions,
                  tavernFits,
                  isExcludedByPrefix,
                  applyPowerFit
              )
            : 0;
        return fittingHarmoniesAmount + fittingContrastAmount;
    }

    private countFittingIdeaConstellations(
        additions: DescriptionAsset[][],
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix?: (name: string) => boolean,
        applyPowerFit?: boolean
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
                        isExcludedByPrefix,
                        applyPowerFit
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
        isExcluded?: (name: string, key?: AssetKey) => boolean,
        applyPowerFit?: boolean,
        probabilityFilter?: number
    ) {
        if (additionChoices) {
            const fittingAssetParts = additionChoices.filter((addition) =>
                this.assetFitsToTavern(
                    tavernFits,
                    addition,
                    isExcluded,
                    applyPowerFit,
                    probabilityFilter
                )
            );
            return getRandomArrayEntry(fittingAssetParts);
        } else {
            return undefined;
        }
    }

    private assetFitsToTavern(
        tavernFits: StructuredTavernFits,
        asset: DescriptionAsset,
        isExcluded?: (name: string, key?: AssetKey) => boolean,
        applyPowerFit?: boolean,
        probabilityFilter?: number
    ) {
        const filteredByProbability =
            asset.probability &&
            probabilityFilter &&
            probabilityFilter > asset.probability;
        if (filteredByProbability) {
            return false;
        }
        const assetIsRedundant = isExcluded
            ? isExcluded(asset.name, asset.key)
            : false;
        if (assetIsRedundant) {
            return false;
        }

        const tavernFitsArray = Object.values(tavernFits).filter(
            (entry) => entry
        ) as association[];
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
        const ownedPowerFits = asset.powerFits || [];
        //TODO: test if this still works, changed in first issue of #54
        const needsOne = asset.needsOne || [];
        const necessaritiesFulfilled = necessarities.every((necessaryFit) =>
            tavernFitsArray.includes(necessaryFit)
        );
        const noMisfitsInTavern = misfits.every(
            (misfit) => !tavernFitsArray.includes(misfit)
        );
        const needsOneFulfilled =
            needsOne.length === 0
                ? true
                : needsOne.some((replacableNecessarity) =>
                      tavernFitsArray.includes(replacableNecessarity)
                  );

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
        const powerFitFulfilled = tavernFits.powerFit
            ? !applyPowerFit ||
              this.powerFitCheck(
                  tavernFits.powerFit,
                  necessarities,
                  needsOne,
                  ownedPowerFits,
                  asset.worksForAssasines,
                  asset.worksForThiefs,
                  asset.worksForBrothel,
                  asset.worksForAllCriminals
              )
            : true;
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
            noMisfitsInTavern &&
            strongNeedsOneFulfilled &&
            powerFitFulfilled;
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
            if (isRaceAssociation(need) && structuredFits.race) {
                return structuredFits.race === need;
            }
            if (isClassAssociation(need) && structuredFits.class) {
                return structuredFits.class === need;
            }
            if (isIncomeAssociation(need) && structuredFits.income) {
                return structuredFits.income === need;
            }
            if (isLandAssociation(need) && structuredFits.land) {
                return structuredFits.land === need;
            }
            if (isSpecialAssociation(need) && structuredFits.special) {
                return structuredFits.special === need;
            }
            return true;
        });
        return needsOneCondition && impliedRangeCondition;
    }

    private powerFitCheck(
        powerFit: association,
        needs: association[],
        needsOne: association[],
        ownedPowerFits?: association[],
        worksForAssasines?: boolean,
        worksForThiefs?: boolean,
        worksForBrothel?: boolean,
        worksForAllCriminals?: boolean
    ) {
        if (
            powerFit === association.thief &&
            (worksForAllCriminals || worksForThiefs)
        ) {
            return true;
        }
        if (
            powerFit === association.assasine &&
            (worksForAllCriminals || worksForAssasines)
        ) {
            return true;
        }
        if (
            powerFit === association.prostitute &&
            (worksForAllCriminals || worksForBrothel)
        ) {
            return true;
        }
        return (
            (ownedPowerFits || []).includes(powerFit) ||
            needs.includes(powerFit) ||
            needsOne.includes(powerFit)
        );
    }

    public fitsToTavern(
        tavernFits: StructuredTavernFits,
        isExcluded?: (
            name: string,
            keyData?: { describes: 'main' | 'addition'; key: AssetKey }
        ) => boolean,
        mainFilter?: number,
        additionFilter?: number
    ) {
        const getAssetExcluder = (describes: 'main' | 'addition') =>
            !isExcluded
                ? () => false
                : (name: string, key?: AssetKey) => {
                      const keyData = key ? { describes, key } : undefined;
                      return isExcluded(name, keyData);
                  };
        const mainFitsToTavern = this.assetFitsToTavern(
            tavernFits,
            this.main,
            getAssetExcluder('main'),
            this.powerFitConcept ? this.powerFitConcept.main : undefined,
            mainFilter
        );
        if (!mainFitsToTavern) {
            return false;
        } else {
            if (!this.additions && !this.contrastAdditions) {
                return true;
            } else {
                const someHarmonySubstantiveFits = this.additions
                    ? this.additions.every((additionCollection) =>
                          additionCollection.some((addition) =>
                              this.assetFitsToTavern(
                                  tavernFits,
                                  addition,
                                  getAssetExcluder('addition'),
                                  this.powerFitConcept
                                      ? this.powerFitConcept.harmony
                                      : undefined,
                                  additionFilter
                              )
                          )
                      )
                    : false;
                if (someHarmonySubstantiveFits) {
                    return true;
                }
                const someConstrastSubstantiveFits = this.contrastAdditions
                    ? this.contrastAdditions.every((additionCollection) =>
                          additionCollection.some((addition) =>
                              this.assetFitsToTavern(
                                  tavernFits,
                                  addition,
                                  getAssetExcluder('addition'),
                                  this.powerFitConcept
                                      ? this.powerFitConcept.contrast
                                      : undefined,
                                  additionFilter
                              )
                          )
                      )
                    : false;
                return someConstrastSubstantiveFits;
            }
        }
    }
}
