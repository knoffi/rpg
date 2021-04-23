import { association } from './association';

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
    worksForBrothel?: boolean;
    worksForThiefs?: boolean;
    worksForAssasines?: boolean;
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
