import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import { association } from './association';
import { DescriptionAsset } from './DescriptionIdea';
import { StructuredTavernFits } from './StructuredTavernFits';

export class Idea {
    constructor(
        protected main: DescriptionAsset,
        protected additions?: DescriptionAsset[][],
        protected contrastAdditions?: DescriptionAsset[][]
    ) {}

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
        const additionsWereGiven = this.additions || this.contrastAdditions;
        if (!additionsWereGiven) {
            return true;
        }
        if (this.additions) {
            const someHarmonySubstantiveFitsToTavern = this.additions.every(
                (additionCollection) =>
                    additionCollection.some((addition) =>
                        this.assetFitsToTavern(tavernFits, addition)
                    )
            );
            if (someHarmonySubstantiveFitsToTavern) {
                return true;
            }
        }
        if (this.contrastAdditions) {
            const someContrastSubstantiveFitsToTavern =
                this.contrastAdditions.every((additionCollection) =>
                    additionCollection.some((addition) =>
                        this.assetFitsToTavern(tavernFits, addition)
                    )
                );
            if (someContrastSubstantiveFitsToTavern) {
                return true;
            }
        }
        return false;
    }

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
                return asset.worksForBrothel ? nonSpecialCondition : false;
            case association.thief:
                return asset.worksForThiefs ? nonSpecialCondition : false;
            case association.assasine:
                return asset.worksForAssasines ? nonSpecialCondition : false;

            default:
                return nonSpecialCondition;
        }
    }
}
