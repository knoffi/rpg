import { splitMarker } from '../scenes/menuScene/offerList/nameSplitter/splitMarker';
import { DescriptionAsset } from './DescriptionIdea';
import { Idea } from './Idea';
import { StructuredTavernFits } from './StructuredTavernFits';
export enum Noticable {
    bartender = 'bartender',
    averageCustomer = 'averageCustomers',
    someCustomers = 'someCustomers',
    furniture = 'furniture',
}

export class ImpressionIdea extends Idea {
    private category: Noticable;
    constructor(
        mainImpression: DescriptionAsset,
        additions: DescriptionAsset[],
        category: Noticable
    ) {
        super(mainImpression, [additions]);
        this.category = category;
    }
    public createImpression(
        tavernFits: StructuredTavernFits,
        isExcludedByPrefix: (name: string) => boolean
    ) {
        if (this.additions) {
            const possibleAdditions = this.additions[0];
            const secondDescription = this.getFittingAssetPart(
                tavernFits,
                possibleAdditions,
                isExcludedByPrefix
            );
            if (!secondDescription) {
                console.log(
                    'no fitting, second description was found, although it was demanded'
                );
                return this.main.name;
            }
            return this.category === Noticable.someCustomers
                ? this.main.name + secondDescription.name + splitMarker
                : this.main.name + ' & ' + secondDescription.name + splitMarker;
        } else {
            return this.main.name;
        }
    }
}
