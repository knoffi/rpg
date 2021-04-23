import { DescriptionAsset } from './DescriptionIdea';

export type IngredientsIdea = {
    mainIng: DescriptionAsset;
    firstSideDishes?: DescriptionAsset[];
    secondSideDishes?: DescriptionAsset[];
    thirdSideDishes?: DescriptionAsset[];
};
