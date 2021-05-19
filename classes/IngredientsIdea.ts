import { DescriptionAsset } from './DescriptionAsset';

export type IngredientsIdea = {
    mainIng: DescriptionAsset;
    firstSideDishes?: DescriptionAsset[];
    secondSideDishes?: DescriptionAsset[];
    thirdSideDishes?: DescriptionAsset[];
};
