import { Noticable } from '../../../classes/idea/Noticable';
import { Pattern } from '../../../classes/idea/Patterns/Pattern';
import { Keys } from '../../../classes/keyHandler/KeyHandler';

export type IImpression = {
    name: string;
    category: Noticable;
    keys: Keys;
    sex?: 'male' | 'female';
    patterns: Pattern[];
};
