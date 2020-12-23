import { a } from './breakfastPlates';

export const incomeEggTypeMap = new Map([
    [a.poor, ['One Boiled Egg', 'One Scrambled Egg', 'One Fried Egg']],
    [
        a.worker,
        ['hree Boiled Eggs', 'Three Scrambled Eggs', 'Three Fried Eggs'],
    ],
    [
        a.sophisticated,
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
        a.rich,
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
