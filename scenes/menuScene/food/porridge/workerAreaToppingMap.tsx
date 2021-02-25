import { association } from '../../../../classes/association';

export const workerAreaToppingMap = new Map([
    [
        association.village,
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
        association.city,
        [
            'Applesauce',
            'Plum',
            'Walnuts',
            'Raisins',
            'Pear Marmalade',
            'Pickled Cherries',
        ],
    ],
    [association.forest, ['Honey', 'Raspberries', 'Blackberries', 'Apple']],
    [
        association.mountain,
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
        association.haven,
        [
            'Pickled Cherries',
            'Banana',
            'Pickled Herring',
            'Rum Raisins',
            'Sugar',
        ],
    ],
    [association.desert, ['Honey', 'Goat Cheese', 'dates', 'Cinnamon & Sugar']],
    [association.tropical, ['Banana', 'Peach', 'Papaya', 'Mango', 'Pineapple']],
    [association.underdark, ['Midnightberries', 'Earth Apple', 'Mule Bacon']],
]);
