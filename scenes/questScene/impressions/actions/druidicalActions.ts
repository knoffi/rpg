import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { brothelActions } from './brothelActions';
import { a, lively } from './genericActions';

export const partyHermit: DescriptionAsset[] = [
    ...lively,
    { name: 'inviting you to smoke a pipe with him' },
    { name: 'nursing a young bat', needs: [a.underdark] },
    { name: 'nursing a young bird', misfits: [a.underdark] },
    { name: 'selling herbs and medicine' },
    { name: 'selling dried mushrooms' },
    { name: 'selling love potions which work for 48 hours' },
    { name: 'smoking dried herbs' },
    { name: 'mumbling about a hidden dungeon' },
    { name: 'seeking help' },
    { name: 'giving you an ancient map' },
    { name: 'dancing with some animals' },
    ...brothelActions,
];
export const nymphClass: DescriptionAsset[] = [
    ...lively,
    { name: 'seducing naive customers' },
    { name: 'asking you for a dance' },
    { name: 'searching for heroes to stop the local poachers' },
    { name: 'playing the harp' },
    { name: 'dancing exotically to the flute play' },
    { name: 'cuddling with a rabbit', landRange: [a.forest] },
];
export const druidGuests: DescriptionAsset[] = [
    ...lively,
    { name: 'gazing at a nymph', landRange: [a.forest] },
    { name: 'passes out from smoking herbs' },
    { name: 'passes out from drinking mead', misfits: [a.desert] },
    { name: 'having a drink contest with a satyr', landRange: [a.forest] },
    {
        name: 'bargaining with a bear for some honey',
        landRange: [a.village, a.forest, a.mountain],
    },
    {
        name: 'playing a game with some mushroom people',
        landRange: [a.underdark, a.forest],
    },
    {
        name: 'looking for the monkey who stole his necklace',
        landRange: [a.tropical, a.desert],
    },
    {
        name: 'having an argument with a parrot',
        landRange: [a.tropical, a.desert],
    },
    ...brothelActions,
];
