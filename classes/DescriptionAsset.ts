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
    //strongNeedsOne is great for a needsOne with fits from different "catagories", f.e. [a.dwarf,a.modest]. But for [a.desert,a.mountain], strongNeedsOne and needsOne coincide
    strongNeedsOne?: association[];
    worksForBrothel?: boolean;
    worksForThiefs?: boolean;
    worksForAssasines?: boolean;
    worksForAllCriminals?: boolean;
};

export const emptyDescriptionAsset = {
    name: '',
    worksForAssasines: true,
    worksForBrothel: true,
    worksForThiefs: true,
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
