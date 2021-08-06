import { association } from '../association';
import { AssetKey } from './AssetKey/AssetKey';

export type DescriptionAsset = {
    name: string;
    fitsTo?: association[];
    needs?: association[];
    misfits?: association[];
    needsOne?: association[];
    incomeRange?: association[];
    landRange?: association[];
    classRange?: association[];
    raceRange?: association[];
    specialsRange?: association[];
    strongNeedsOne?: association[];
    worksForBrothel?: boolean;
    worksForThiefs?: boolean;
    worksForAssasines?: boolean;
    worksForAllCriminals?: boolean;
    priceFactor?: number;
    powerFits?: association[];
    probability?: number;
    key?: AssetKey;
    sex?: 'male' | 'female';
};

export const emptyDescriptionAsset: DescriptionAsset = {
    name: '',
    worksForAllCriminals: true,
};

export const forCriminalsOverwrittenAsset = (asset: DescriptionAsset) => {
    const criminalEnabler: Partial<DescriptionAsset> = {
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    };
    return { ...asset, ...criminalEnabler } as DescriptionAsset;
};
export const getAssetforUndecidedCriminals = (asset: DescriptionAsset) => {
    const criminalEnabler: Partial<DescriptionAsset> = {
        worksForAssasines: true,
        worksForBrothel: true,
        worksForThiefs: true,
    };
    return { ...criminalEnabler, ...asset } as DescriptionAsset;
};
