import { association } from './association';

export type NounIdea = {
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
