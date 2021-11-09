import { Noticable } from '../../../classes/idea/Noticable';
import { Impression } from './Impression';

export const emptyImpression: Impression = {
    name: 'No description of that category left! May the DM have mercy on us all!',
    category: Noticable.bartender,
    patterns: [],
    keys: { ['main']: [], ['addition']: [] },
};
