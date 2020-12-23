import { a } from './porridge';

export const workerAreaToppingMap = new Map([
    [
        a.village,
        [
            'Apple',
            'Plum',
            'Walnuts',
            'Raisins',
            'Pears',
            'Cherries',
            'Strawberries',
        ],
    ],
    [
        a.city,
        [
            'Applesauce',
            'Plum',
            'Walnuts',
            'Raisins',
            'Pear Marmalade',
            'Pickled Cherries',
        ],
    ],
    [a.forest, ['Honey', 'Raspberries', 'Blackberries', 'Apple']],
    [
        a.mountain,
        [
            'Honey',
            'Raspberries',
            'Blackberries',
            'Elderberries',
            'Goat Cheese',
            'Mushrooms',
        ],
    ],
    [
        a.haven,
        [
            'Pickled Cherries',
            'Banana',
            'Pickled Herring',
            'Rum Raisins',
            'Sugar',
        ],
    ],
    [a.desert, ['Honey', 'Goat Cheese', 'dates', 'Cinnamon & Sugar']],
    [a.tropical, ['Banana', 'Peach', 'Papaya', 'Mango', 'Pineapple']],
    [a.underdark, ['Midnightberries', 'Earth Apple', 'Mule Bacon']],
]);
