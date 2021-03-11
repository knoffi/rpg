import { getRandomArrayEntry } from '../helpingFunctions/getFittingRandom';
import { association } from './association';
import { NounIdea } from './NounIdea';

export type StructuredTavernFits = {
    income?: association;
    land?: association;
    race?: association;
    class?: association;
    special?: association;
};

export class NameIdea {
    constructor(
        private adjective: NounIdea,
        private harmonySubstantives?: NounIdea[],
        private contrastSubstantives?: NounIdea[],
        private reverseNaming = false
    ) {}

    public calculatePossibleNames(tavernFits: StructuredTavernFits) {
        const fittingHarmonyNumber = (
            this.harmonySubstantives || []
        ).filter((substantive) =>
            this.nounFitsToTavern(tavernFits, substantive)
        ).length;
        const fittingContrastNumber = (
            this.contrastSubstantives || []
        ).filter((substantive) =>
            this.nounFitsToTavern(tavernFits, substantive)
        ).length;
        return fittingHarmonyNumber + fittingContrastNumber;
    }

    public getName(tavernFits: StructuredTavernFits, harmonyChance = 0.9) {
        if (Math.random() < harmonyChance) {
            const fittingHarmony = this.getFittingHarmonySubstantive(
                tavernFits
            );
            return fittingHarmony
                ? fittingHarmony
                : this.getFittingContrastSubstantive(tavernFits);
        } else {
            const fittingContrast = this.getFittingContrastSubstantive(
                tavernFits
            );
            return fittingContrast
                ? fittingContrast
                : this.getFittingHarmonySubstantive(tavernFits);
        }
    }

    private getFittingHarmonySubstantive(tavernFits: StructuredTavernFits) {
        const fittingHarmonies = this.harmonySubstantives?.filter(
            (substantive) => this.nounFitsToTavern(tavernFits, substantive)
        );
        const fittingHarmonyExists =
            fittingHarmonies && fittingHarmonies.length > 0;
        if (fittingHarmonyExists) {
            return this.getNameForDisplay(
                this.adjective.name,
                getRandomArrayEntry(fittingHarmonies!).name
            );
        }
    }

    private getNameForDisplay(adjective: string, substantive: string) {
        return this.reverseNaming
            ? substantive + ' ' + adjective
            : adjective + ' ' + substantive;
    }

    private getFittingContrastSubstantive(tavernFits: StructuredTavernFits) {
        const fittingContrasts = this.contrastSubstantives?.filter(
            (substantive) => this.nounFitsToTavern(tavernFits, substantive)
        );
        const fittingContrastExists =
            fittingContrasts && fittingContrasts.length > 0;
        if (fittingContrastExists)
            return this.getNameForDisplay(
                this.adjective.name,
                getRandomArrayEntry(fittingContrasts!).name
            );
    }

    private nounFitsToTavern(tavernFits: StructuredTavernFits, noun: NounIdea) {
        const tavernFitsArray = Object.values(tavernFits).filter(
            (entry) => entry
        ) as association[];
        if (
            tavernFitsArray.length === 0 &&
            !noun.worksForBrothel &&
            !noun.worksForThiefs &&
            !noun.worksForAssasines
        ) {
            return true;
        }
        const necessarities = noun.needs || [];
        const misfits = noun.misfits || [];
        const needsOne = noun.needsOne;
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

        const nounContainsTavernFits = noun.fitsTo
            ? tavernFitsArray.every(
                  (fit) =>
                      fit === association.empty ||
                      necessarities.includes(fit) ||
                      noun.fitsTo!.includes(fit)
              )
            : true;

        const incomeIsFitting =
            !tavernFits.income ||
            !noun.incomeRange ||
            noun.incomeRange.includes(tavernFits.income);
        const landIsFitting =
            !tavernFits.land ||
            !noun.landRange ||
            noun.landRange.includes(tavernFits.land);
        const classIsFitting =
            !tavernFits.class ||
            !noun.classRange ||
            noun.classRange.includes(tavernFits.class);
        const raceIsFitting =
            !tavernFits.race ||
            !noun.raceRange ||
            noun.raceRange.includes(tavernFits.race);
        const specialIsFitting =
            !tavernFits.special ||
            !noun.specialsRange ||
            noun.specialsRange.includes(tavernFits.special);
        const nonSpecialCondition =
            nounContainsTavernFits &&
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
                return noun.worksForBrothel ? nonSpecialCondition : false;
            case association.criminal:
                return noun.worksForThiefs ? nonSpecialCondition : false;
            case association.evil:
                return noun.worksForAssasines ? nonSpecialCondition : false;

            default:
                return nonSpecialCondition;
        }
    }

    public fitsToTavern(tavernFits: StructuredTavernFits) {
        const adjectiveFitsToTavern = this.nounFitsToTavern(
            tavernFits,
            this.adjective
        );
        if (!adjectiveFitsToTavern) {
            return false;
        }
        const harmonySubstantives = this.harmonySubstantives || [];
        const someHarmonySubstantiveFitsToTavern = harmonySubstantives.some(
            (substantive) => this.nounFitsToTavern(tavernFits, substantive)
        );
        if (someHarmonySubstantiveFitsToTavern) {
            return true;
        } else {
            const contrastSubstantives = this.contrastSubstantives || [];
            const someConstrastSubstantiveFitsToTavern = contrastSubstantives.some(
                (substantive) => this.nounFitsToTavern(tavernFits, substantive)
            );
            return someConstrastSubstantiveFitsToTavern;
        }
    }
}
