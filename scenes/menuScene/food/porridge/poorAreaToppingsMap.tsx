import { association } from '../../../../classes/Adjectives';

export const poorAreaToppingsMap = new Map([
    [
        association.village,
        ['Half an Apple', 'a dash of Applesauce', 'Fried Rat'],
    ],
    [association.city, ['Half a Pear', 'a dash of Plum Jam', 'Fried Dove']],
    [association.forest, ['Half an Apple', 'a dash of Honey', 'Fried Mouse']],
    [association.haven, ['Rum', 'two Sardines', 'two Anchovies']],
    [association.tropical, ['Rum', 'one Shrimp', 'half an Orange']],
    [
        association.mountain,
        ['Salt & Pepper', 'a Slice of Goat Cheese', 'two Dates'],
    ],
    [association.desert, ['Salt', 'a Slice of Goat Cheese', 'two Dates']],
    [association.underdark, ['Salt', 'Brandy', 'Fried Rat']],
]);
