import { AssetStressMode } from './assetStressMode';
import { DescriptionAsset } from './DescriptionAsset';
import { Idea } from './Idea';
import { StructuredTavernFits } from './StructuredTavernFits';

const DEFAULT_HARMONY_CHANCE = 0.9;
export class NameIdea extends Idea {
    constructor(
        private adjective: DescriptionAsset,
        private substantives?: DescriptionAsset[],
        private contrastSubstantives?: DescriptionAsset[],
        private reverseNaming = false,
        private stress = AssetStressMode.harmony
    ) {
        super(
            adjective,
            substantives ? [substantives] : undefined,
            contrastSubstantives ? [contrastSubstantives] : undefined,
            {
                main: substantives ? stress === AssetStressMode.main : true,
                harmony: substantives
                    ? stress === AssetStressMode.harmony
                    : false,
                contrast: substantives
                    ? stress === AssetStressMode.contrast
                    : true,
            }
        );
    }

    public getConcreteName(
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix: (name: string) => boolean
    ) {
        const substantive = this.chooseSubstantive(
            tavernFits,
            isExcludedByPrefix
        );
        const adjective = this.main.name;
        return this.fuseNameForDisplay(adjective, substantive);
    }

    private chooseSubstantive(
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix: (name: string) => boolean,
        harmonyChance = DEFAULT_HARMONY_CHANCE
    ) {
        const fittingHarmony = this.getFittingAssetPart(
            tavernFits,
            this.additions ? this.additions[0] : undefined,
            isExcludedByPrefix,
            true
        )?.name;
        const fittingContrast = this.getFittingAssetPart(
            tavernFits,
            this.contrastAdditions ? this.contrastAdditions[0] : undefined,
            isExcludedByPrefix,
            true
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
            return 'Nameless Tavern';
        } else {
            return this.reverseNaming
                ? substantive + ' ' + adjective
                : adjective + ' ' + substantive;
        }
    }
}

const test = new NameIdea({ name: 'test' }, [], [], false);
