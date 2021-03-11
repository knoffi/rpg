import { association } from '../../classes/association';

export const incomeExampleMap = new Map([
    [
        association.poor,
        'day labourer, apprentice, farmhand, peasant maid, retired carpenter, busker',
    ],
    [
        association.modest,
        'cobbler, village priest, maid of a baroness, farmer, city guard',
    ],
    [
        association.wealthy,
        'exceptional tailor, chancellor, trade merchant, famous adventurer, guild master',
    ],
    [
        association.rich,
        'world-known goldsmith, emperor, pirate queen, banking magnate, high priestess, legendary gladiator',
    ],
]);
