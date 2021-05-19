import { DescriptionAsset } from './DescriptionAsset';

export interface IIdeaOptions {
    main: DescriptionAsset;
    additions?: DescriptionAsset[][];
    contrastAdditions?: DescriptionAsset[][];
}
