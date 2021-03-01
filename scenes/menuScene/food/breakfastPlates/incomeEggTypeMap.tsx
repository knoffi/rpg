import { association } from '../../../../classes/association';

export const incomeEggTypeMap = new Map([
    [
        association.poor,
        ['One Boiled Egg', 'One Scrambled Egg', 'One Fried Egg'],
    ],
    [
        association.worker,
        ['Three Boiled Eggs', 'Three Scrambled Eggs', 'Three Fried Eggs'],
    ],
    [
        association.sophisticated,
        [
            'Boiled Egg (Owl Bear)',
            'Scrambled Egg (Owl Bear)',
            'Fried Egg (Owl Bear)',
            'Boiled Egg (Gryphon)',
            'Scrambled Egg (Gryphon)',
            'Fried Egg (Gryphon)',
            'Eggs Benedict',
            'One Century Egg',
        ],
    ],
    [
        association.rich,
        [
            'Boiled Egg (Dragon)',
            'Scrambled Egg (Dragon)',
            'Fried Egg (Dragon)',
            'Boiled Egg (Cockatrice)',
            'Scrambled Egg (Cockatrice)',
            'Fried Egg (Cockatrice)',
            'Boiled Egg (Basilisk)',
            'Scrambled Egg (Basilisk)',
            'Fried Egg (Basilisk)',
            'Two Millennium Egg',
        ],
    ],
]);
