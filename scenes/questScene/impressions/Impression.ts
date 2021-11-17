import { FantasyKeys } from '../../../classes/contentCreator/FantasKeys';
import { Noticable } from '../../../classes/idea/Noticable';
import { Pattern } from '../../../classes/idea/Patterns/Pattern';
import { Keys } from '../../../classes/keyHandler/EMPTY_KEY_COUNT_ROW';

export type Impression = {
    name: string;
    category: Noticable;
    keys: Keys;
    sex?: 'male' | 'female';
    patterns: Pattern[];
    universe: FantasyKeys | 'isUserMade';
};
