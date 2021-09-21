import { splitMarker } from '../../scenes/menuScene/offerList/nameSplitter/splitMarker';
import { IImpression } from '../../scenes/questScene/impressions/IImpression';
import { AssetKey } from './AssetKey/AssetKey';
import { DescriptionAsset } from './DescriptionAsset';
import { FitLevel } from './fitCalculator/FitLevel';
import { Idea } from './Idea';
import { Noticable } from './Noticable';
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
        stress = defaultPowerFitConcepts.main
    ) {
        super(
            mainImpression,
            stress ? stress : defaultPowerFitConcepts.impression,
            [additions],
            undefined
        );
        this.category = category;
        this.reverseDisplay = reverseDisplay;
        this.displayTextAsFurniture = displayTextAsFurniture;
    }
    public createImpression(
        tavernFits: StructuredTavernFits,
        isExcludedByName: (name: string) => boolean,
        additionIsExcludedByKey: (key: AssetKey) => boolean,
        minimalFitLevel: FitLevel,
        additionFilter?: number
    ) {
        const createdImpression: IImpression = {
            ...this.getNameAndKey(
                tavernFits,
                isExcludedByName,
                additionIsExcludedByKey,
                minimalFitLevel,
                additionFilter
            ),
            category: this.category,
        };
        return createdImpression;
    }

    private getNameAndKey(
        tavernFits: StructuredTavernFits,
        isExcludedByName: (name: string) => boolean,
        isExcludedByKey: (key: AssetKey) => boolean,
        minimalFitLevel: FitLevel,
        probabilityFilter?: number
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
                minimalFitLevel
            );
            if (!secondDescription) {
                if (possibleAdditions.length === 0) {
                    console.log(
                        'got no possible additions, I hope this was on purpose for ' +
                            this.main.name
                    );
                } else {
                    console.log(
                        'no fitting, second description was found, although it was demanded and there were some additions provided'
                    );
                }
                return {
                    name: this.main.name,
                    firstKeys: this.main.key ? [this.main.key] : [],
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
                firstKeys: this.main.key ? [this.main.key] : [],
                secondKeys: secondDescription.key
                    ? [secondDescription.key]
                    : [],
            };
        } else {
            const defaultNameAndKey = {
                name: this.main.name,
                firstKeys: this.main.key ? [this.main.key] : [],
            };
            return defaultNameAndKey;
        }
    }
}
