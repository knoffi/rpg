import { DescriptionAsset } from './DescriptionAsset';

export type DishConcept = {
    mainIng: DescriptionAsset;
    firstSideDishes?: DescriptionAsset[];
    secondSideDishes?: DescriptionAsset[];
    thirdSideDishes?: DescriptionAsset[];
};
