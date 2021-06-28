import { AssetStressMode } from './assetStressMode';
import { DescriptionAsset } from './DescriptionAsset';
import { Idea } from './Idea';
import { StructuredTavernFits } from './StructuredTavernFits';

const DEFAULT_HARMONY_CHANCE = 0.9;
export class NameIdea extends Idea {
    constructor(
        private adjective: DescriptionAsset,
        private substantives = [] as DescriptionAsset[],
        private contrastSubstantives = [] as DescriptionAsset[],
        private reverseNaming = false,
        private stress = AssetStressMode.harmony
    ) {
        super(adjective, [substantives], [contrastSubstantives], {
            main: stress === AssetStressMode.main,
            harmony: stress === AssetStressMode.harmony,
            contrast: stress === AssetStressMode.contrast,
        });
    }

    public getConcreteName(
        tavernFits: StructuredTavernFits,
        oldNameParts: string[]
    ) {
        const substantive = this.chooseSubstantive(tavernFits, oldNameParts);
        const adjective = this.main.name;
        return this.fuseNameForDisplay(adjective, substantive);
    }

    private chooseSubstantive(
        tavernFits: StructuredTavernFits,
        oldNameParts: string[],
        harmonyChance = DEFAULT_HARMONY_CHANCE
    ) {
        const isExcludedByPrefix = (name: string) => {
            return oldNameParts.some(
                (namePart) => namePart.slice(0, 5) === name.slice(0, 5)
            );
        };
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

    private fuseNameForDisplay(adjective: string, substantive?: string) {
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
