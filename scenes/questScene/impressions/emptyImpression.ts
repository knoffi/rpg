import { Noticable } from '../../../classes/idea/Noticable';
import { IImpression } from './IImpression';

export const emptyImpression: IImpression = {
    name: 'No description of that category left! May the DM have mercy on us all!',
    category: Noticable.bartender,
    patterns: [],
    keys: { ['main']: [], ['addition']: [] },
};
