import { DescriptionAsset } from './DescriptionAsset';
import { Idea } from './Idea';
import { StructuredTavernFits } from './StructuredTavernFits';

export class NameIdea extends Idea {
    constructor(
        private adjective: DescriptionAsset,
        private substantives?: DescriptionAsset[],
        private contrastSubstantives?: DescriptionAsset[],
        private reverseNaming = false
    ) {
        super(adjective, [substantives || []], [contrastSubstantives || []]);
    }

    public getConcreteName(
        tavernFits: StructuredTavernFits,
        harmonyChance = 0.9
    ) {
        const substantive = this.chooseSubstantive(tavernFits, harmonyChance);
        const adjective = this.main.name;
        return this.createNameForDisplay(adjective, substantive);
    }

    private chooseSubstantive(
        tavernFits: StructuredTavernFits,
        harmonyChance = 0.9
    ) {
        const fittingHarmony = this.getFittingAssetPart(
            tavernFits,
            this.additions ? this.additions[0] : undefined
        )?.name;
        const fittingContrast = this.getFittingAssetPart(
            tavernFits,
            this.contrastAdditions ? this.contrastAdditions[0] : undefined
        )?.name;

        return Math.random() < harmonyChance && fittingHarmony
            ? fittingHarmony
            : fittingContrast || fittingHarmony;
    }

    public createNameForDisplay(adjective: string, substantive?: string) {
        if (!substantive) {
            return 'Nameless Tavern';
        } else {
            return this.reverseNaming
                ? substantive + ' ' + adjective
                : adjective + ' ' + substantive;
        }
    }
}
