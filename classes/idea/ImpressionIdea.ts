import { splitMarker } from '../../scenes/menuScene/offerList/nameSplitter/splitMarker';
import { IImpression } from '../../scenes/questScene/impressions/IImpression';
import { emptyKeys } from '../contentCreator/ContentCreator';
import { Keys } from '../keyHandler/KeyHandler';
import { AssetKey } from './AssetKey/AssetKey';
import { DescriptionAsset } from './DescriptionAsset';
import { Idea } from './Idea';
import { Noticable } from './Noticable';
import { Pattern } from './Patterns/Pattern';
import { defaultPowerFitConcepts } from './powerFitConcepts/powerFitConcepts';
import { StructuredTavernFits } from './StructuredTavernFits';
export class ImpressionIdea extends Idea {
    private category: Noticable;
    private displayTextAsFurniture: boolean;
    private reverseDisplay: boolean;
    constructor(
        mainImpression: DescriptionAsset,
        additions: DescriptionAsset[],
        category: Noticable,
        displayTextAsFurniture = false,
        reverseDisplay = false,
        stress = defaultPowerFitConcepts.main,
        patternMode = defaultPowerFitConcepts.main
    ) {
        super(
            mainImpression,
            stress ? stress : defaultPowerFitConcepts.impression,
            [additions],
            undefined,
            patternMode
        );
        this.category = category;
        this.reverseDisplay = reverseDisplay;
        this.displayTextAsFurniture = displayTextAsFurniture;
    }
    public createImpression(
        tavernFits: StructuredTavernFits,
        isExcludedByName: (name: string) => boolean,
        additionIsExcludedByKey: (key: AssetKey) => boolean,
        minimalFitLevel: number,
        additionFilter?: number,
        patterns = [] as Pattern[]
    ) {
        const createdImpression: IImpression = {
            ...this.getNameAndKey(
                tavernFits,
                isExcludedByName,
                additionIsExcludedByKey,
                minimalFitLevel,
                additionFilter,
                patterns
            ),
            category: this.category,
        };
        return createdImpression;
    }

    private getNameAndKey(
        tavernFits: StructuredTavernFits,
        isExcludedByName: (name: string) => boolean,
        isExcludedByKey: (key: AssetKey) => boolean,
        minimalFitLevel: number,
        probabilityFilter?: number,
        patterns = [] as Pattern[]
    ) {
        if (this.additions) {
            const possibleAdditions = this.additions[0];
            const secondDescription = this.getFittingAssetPart(
                tavernFits,
                possibleAdditions,
                isExcludedByName,
                false,
                probabilityFilter,
                isExcludedByKey,
                minimalFitLevel,
                patterns,
                !this.patternMod.harmony
            );
            if (!secondDescription) {
                if (possibleAdditions.length === 0) {
                    console.log(
                        'got no possible additions, I hope this was on purpose for ' +
                            this.main.name
                    );
                } else {
                    console.log(
                        'no fitting, second description was found for ' +
                            this.main.name +
                            ', although it was demanded and there were some additions provided'
                    );
                }
                return {
                    name: this.main.name,
                    keys: {
                        ...emptyKeys,
                        main: ImpressionIdea.getKeyList(this.main),
                    } as Keys,
                    patterns: this.main.patterns || [],
                };
            }
            const firstText = this.reverseDisplay
                ? secondDescription.name
                : this.main.name;
            const secondText = this.reverseDisplay
                ? this.main.name
                : secondDescription.name;
            const createdName = firstText + secondText + splitMarker;
            return {
                name: createdName,
                keys: {
                    main: ImpressionIdea.getKeyList(this.main),
                    addition: ImpressionIdea.getKeyList(secondDescription),
                } as Keys,
                patterns: (this.main.patterns || []).concat(
                    secondDescription.patterns || []
                ),
            };
        } else {
            const defaultNameAndKey = {
                name: this.main.name,
                keys: {
                    ...emptyKeys,
                    main: ImpressionIdea.getKeyList(this.main),
                } as Keys,
                patterns: this.main.patterns || [],
            };
            return defaultNameAndKey;
        }
    }
}
