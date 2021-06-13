import { splitMarker } from '../scenes/menuScene/offerList/nameSplitter/splitMarker';
import { DescriptionAsset } from './DescriptionAsset';
import { Idea } from './Idea';
import { StructuredTavernFits } from './StructuredTavernFits';
export enum Noticable {
    bartender = 'The Bartender',
    averageCustomer = 'Average Customers',
    someCustomers = 'Individual Guests',
    furniture = 'The Furniture',
}

export class ImpressionIdea extends Idea {
    private category: Noticable;
    private displayTextAsFurniture: boolean;
    private reverseDisplay: boolean;
    constructor(
        mainImpression: DescriptionAsset,
        additions: DescriptionAsset[],
        category: Noticable,
        displayTextAsFurniture?: boolean,
        reverseDisplay = false
    ) {
        super(mainImpression, [additions]);
        this.category = category;
        this.reverseDisplay = reverseDisplay;
        this.displayTextAsFurniture = displayTextAsFurniture || false;
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
                return this.main.name;
            }
            const firstText = this.reverseDisplay
                ? this.main.name
                : secondDescription.name;
            const secondText = this.reverseDisplay
                ? secondDescription
                : this.main.name;
            return this.category === Noticable.bartender &&
                !this.displayTextAsFurniture
                ? firstText + ' & ' + secondText + splitMarker
                : firstText + secondText + splitMarker;
        } else {
            return this.main.name;
        }
    }
}
