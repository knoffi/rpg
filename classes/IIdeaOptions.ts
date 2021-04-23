import { DescriptionAsset } from './DescriptionIdea';

export interface IIdeaOptions {
    main: DescriptionAsset;
    additions?: DescriptionAsset[][];
    contrastAdditions?: DescriptionAsset[][];
}
