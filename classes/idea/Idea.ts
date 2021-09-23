import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { AssetKey } from './AssetKey/AssetKey';
import { DescriptionAsset } from './DescriptionAsset';
import {
    BEST_FIT_LEVEL,
    getFitLevel,
    WORST_FIT_LEVEL,
} from './fitCalculator/getFitLevel';
import { sufficesFitLevel } from './fitCalculator/sufficesFitLevel';
import { Pattern } from './Patterns/Pattern';
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

    protected static getKeyList(description: DescriptionAsset) {
        if (!description.keys) {
            return description.key ? [description.key] : [];
        } else {
            return description.key
                ? description.keys.concat(description.key)
                : description.keys;
        }
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
                        BEST_FIT_LEVEL,
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
        minimumFitLevel = BEST_FIT_LEVEL
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
        minimumFitLevel = BEST_FIT_LEVEL
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
        additionIsExcludedByKey?: (key: AssetKey) => boolean,
        patterns?: Pattern[]
    ) {
        const mainFitLevel = getFitLevel(
            tavernFits,
            this.main,
            isExcludedByName,
            this.powerFitConcept.main,
            mainFilter,
            mainIsExcludedByKey,
            patterns
        );
        if (mainFitLevel <= WORST_FIT_LEVEL) {
            return WORST_FIT_LEVEL;
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
                              additionIsExcludedByKey,
                              patterns
                          );
                          return Math.min(lowestRowMax, rowMaxFitLevel);
                      }, BEST_FIT_LEVEL)
                    : WORST_FIT_LEVEL;
                if (mainFitLevel <= lowestHarmonyRowMax) {
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
                                          additionIsExcludedByKey,
                                          patterns
                                      );
                                  return Math.min(lowestRowMax, rowMaxFitLevel);
                              },
                              BEST_FIT_LEVEL
                          )
                        : WORST_FIT_LEVEL;
                    if (mainFitLevel <= lowestContrastRowMax) {
                        return mainFitLevel;
                    } else {
                        //here, mainFitLevel must be higher than both rowMax-values
                        return Math.max(
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
        isExcludedByKey?: (key: AssetKey) => boolean,
        patterns?: Pattern[]
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
                isExcludedByKey,
                patterns
            );
            return Math.max(fitLevel, additionFitLevel);
        }, WORST_FIT_LEVEL);
    }
}
