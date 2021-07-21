import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { AssetKey } from './AssetKey/AssetKey';
import { DescriptionAsset } from './DescriptionAsset';
import { FitLevel } from './fitCalculator/FitLevel';
import {
    getMaxFitLevel,
    getMinFitLevel,
} from './fitCalculator/fitLevelComparing';
import { getFitLevel } from './fitCalculator/getFitLevel';
import { sufficesFitLevel } from './fitCalculator/sufficesFitLevel';
import { PowerFitConcept } from './powerFitConcepts/PowerFitConcept';
import { StructuredTavernFits } from './StructuredTavernFits';

export class Idea {
    constructor(
        protected main: DescriptionAsset,
        protected powerFitConcept: PowerFitConcept,
        protected additions?: DescriptionAsset[][],
        protected contrastAdditions?: DescriptionAsset[][]
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
                    sufficesFitLevel(
                        FitLevel.high,
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
        isExcludedyName?: (name: string) => boolean,
        applyPowerFit?: boolean,
        probabilityFilter?: number,
        isExcludedByKey?: (key: AssetKey) => boolean,
        minimumFitLevel = FitLevel.high
    ) {
        if (additionChoices) {
            const fittingAssetParts = additionChoices.filter((addition) =>
                sufficesFitLevel(
                    minimumFitLevel,
                    tavernFits,
                    addition,
                    isExcludedyName,
                    applyPowerFit,
                    probabilityFilter,
                    isExcludedByKey
                )
            );
            return getRandomArrayEntry(fittingAssetParts);
        } else {
            return undefined;
        }
    }

    public fitsToTavern(
        tavernFits: StructuredTavernFits,
        isExcludedByName: (name: string) => boolean,
        mainFilter?: number,
        additionFilter?: number,
        mainIsExcludedByKey?: (key: AssetKey) => boolean,
        additionIsExcludedByKey?: (key: AssetKey) => boolean,
        minimumFitLevel = FitLevel.high
    ) {
        const mainFitsToTavern = sufficesFitLevel(
            minimumFitLevel,
            tavernFits,
            this.main,
            isExcludedByName,
            this.powerFitConcept.main,
            mainFilter,
            mainIsExcludedByKey
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
                              sufficesFitLevel(
                                  minimumFitLevel,
                                  tavernFits,
                                  addition,
                                  isExcludedByName,
                                  this.powerFitConcept.harmony,

                                  additionFilter,
                                  additionIsExcludedByKey
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
                              sufficesFitLevel(
                                  minimumFitLevel,
                                  tavernFits,
                                  addition,
                                  isExcludedByName,
                                  this.powerFitConcept.contrast,
                                  additionFilter,
                                  additionIsExcludedByKey
                              )
                          )
                      )
                    : false;
                return someConstrastSubstantiveFits;
            }
        }
    }
    public getFitLevelForTavern(
        tavernFits: StructuredTavernFits,
        isExcludedByName: (name: string) => boolean,
        mainFilter?: number,
        additionFilter?: number,
        mainIsExcludedByKey?: (key: AssetKey) => boolean,
        additionIsExcludedByKey?: (key: AssetKey) => boolean
    ) {
        const mainFitLevel = getFitLevel(
            tavernFits,
            this.main,
            isExcludedByName,
            this.powerFitConcept.main,
            mainFilter,
            mainIsExcludedByKey
        );
        if (mainFitLevel === FitLevel.bad) {
            return FitLevel.bad;
        } else {
            if (!this.additions && !this.contrastAdditions) {
                return mainFitLevel;
            } else {
                const lowestHarmonyRowMax = this.additions
                    ? this.additions.reduce((lowestRowMax, additionRow) => {
                          const rowMaxFitLevel = this.getBestFitFromAdditions(
                              tavernFits,
                              additionRow,
                              isExcludedByName,
                              'harmony',
                              additionFilter,
                              additionIsExcludedByKey
                          );
                          return getMinFitLevel(lowestRowMax, rowMaxFitLevel);
                      }, FitLevel.high)
                    : FitLevel.bad;
                if (
                    getMinFitLevel(mainFitLevel, lowestHarmonyRowMax) ===
                    mainFitLevel
                ) {
                    return mainFitLevel;
                } else {
                    const lowestContrastRowMax = this.contrastAdditions
                        ? this.contrastAdditions.reduce(
                              (lowestRowMax, additionRow) => {
                                  const rowMaxFitLevel =
                                      this.getBestFitFromAdditions(
                                          tavernFits,
                                          additionRow,
                                          isExcludedByName,
                                          'contrast',
                                          additionFilter,
                                          additionIsExcludedByKey
                                      );
                                  return getMinFitLevel(
                                      lowestRowMax,
                                      rowMaxFitLevel
                                  );
                              },
                              FitLevel.high
                          )
                        : FitLevel.bad;
                    if (
                        getMinFitLevel(mainFitLevel, lowestContrastRowMax) ===
                        mainFitLevel
                    ) {
                        return mainFitLevel;
                    } else {
                        //here, mainFitLevel must be higher than both rowMax-values
                        return getMaxFitLevel(
                            lowestContrastRowMax,
                            lowestHarmonyRowMax
                        );
                    }
                }
            }
        }
    }
    private getBestFitFromAdditions(
        tavernFits: StructuredTavernFits,
        additions: DescriptionAsset[],
        isExcludedByName: (name: string) => boolean,
        isFor: 'harmony' | 'contrast',
        additionFilter?: number,
        isExcludedByKey?: (key: AssetKey) => boolean
    ) {
        return additions.reduce((fitLevel, addition) => {
            const additionFitLevel = getFitLevel(
                tavernFits,
                addition,
                isExcludedByName,
                isFor === 'harmony'
                    ? this.powerFitConcept.harmony
                    : this.powerFitConcept.contrast,
                additionFilter,
                isExcludedByKey
            );
            return getMaxFitLevel(fitLevel, additionFitLevel);
        }, FitLevel.bad);
    }
}
