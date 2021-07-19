import { DescriptionAsset } from './DescriptionAsset';
import { FitLevel } from './fitCalculator/FitLevel';
import { Idea } from './Idea';
import { PowerFitConcept } from './powerFitConcepts/PowerFitConcept';
import { defaultPowerFitConcepts } from './powerFitConcepts/powerFitConcepts';
import { StructuredTavernFits } from './StructuredTavernFits';

const DEFAULT_HARMONY_CHANCE = 0.9;
export class NameIdea extends Idea {
    constructor(
        private adjective: DescriptionAsset,
        private substantives?: DescriptionAsset[],
        private contrastSubstantives?: DescriptionAsset[],
        private reverseNaming = false,
        private stress?: PowerFitConcept
    ) {
        super(
            adjective,
            stress
                ? stress
                : substantives || contrastSubstantives
                ? defaultPowerFitConcepts.nameWithAdditions
                : defaultPowerFitConcepts.nameWithoutAdditions,
            substantives ? [substantives] : undefined,
            contrastSubstantives ? [contrastSubstantives] : undefined
        );
    }

    public getConcreteName(
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix: (name: string) => boolean,
        minimumFitLevel: FitLevel,
        additionFilter?: number
    ) {
        const substantive = this.chooseSubstantive(
            tavernFits,
            isExcludedByPrefix,
            minimumFitLevel,
            additionFilter
        );
        const adjective = this.main.name;
        return this.fuseNameForDisplay(adjective, substantive);
    }

    private chooseSubstantive(
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix: (name: string) => boolean,
        minimumFitLevel: FitLevel,
        additionFilter?: number,
        harmonyChance = DEFAULT_HARMONY_CHANCE
    ) {
        console.log(minimumFitLevel);
        const fittingHarmony = this.getFittingAssetPart(
            tavernFits,
            this.additions ? this.additions[0] : undefined,
            isExcludedByPrefix,
            true,
            additionFilter,
            undefined,
            minimumFitLevel
        )?.name;
        const fittingContrast = this.getFittingAssetPart(
            tavernFits,
            this.contrastAdditions ? this.contrastAdditions[0] : undefined,
            isExcludedByPrefix,
            true,
            additionFilter,
            undefined,
            minimumFitLevel
        )?.name;

        return Math.random() < harmonyChance && fittingHarmony
            ? fittingHarmony
            : fittingContrast || fittingHarmony;
    }

    private fuseNameForDisplay(
        adjective: string,
        substantive?: string
    ): string {
        if (!this.substantives && !this.contrastAdditions) {
            return this.main.name;
        }
        if (!substantive) {
            console.log(this.main.name);
            return 'Nameless Tavern';
        } else {
            return this.reverseNaming
                ? substantive + ' ' + adjective
                : adjective + ' ' + substantive;
        }
    }
}

const test = new NameIdea({ name: 'test' }, [], [], false);
