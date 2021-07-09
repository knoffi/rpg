import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';

const a = association;

export const casting: DescriptionAsset[] = [
    { name: 'finishing a drink and then teleporting away' },
    { name: 'secretely practicing a enchantments on random guests' },
    { name: 'magically cheating at a card game' },
    { name: 'smaller than a shoe due to a spell' },
    {
        name: 'is looking astonishingly beautiful but this is just an illusion spell',
    },
];

export const prophecies: DescriptionAsset[] = [
    { name: "getting visions about people's death when touching them" },
    { name: 'telling you that a bad omen is cursing you' },
    { name: 'telling you that a good omen is blessing you' },
];
export const magicalItems: DescriptionAsset[] = [
    { name: 'analyzing a black ring' },
    { name: 'analyzing a black crystal ball' },
    { name: 'analyzing a chalice' },
];

export const magicalSelling: DescriptionAsset[] = [
    { name: 'selling magical beans' },
    { name: 'selling potions which change the sex of a person' },
    { name: 'selling trinkets which look magical but are fake' },
    { name: 'selling gremlins' },
    { name: 'giving away his scroll collection' },
    { name: 'exchanging monster parts for magical potions' },
    { name: 'selling a potion which regrows hear and thickens the beard' },
];

export const magicalQuests: DescriptionAsset[] = [
    {
        name: 'looking for adventurers who bring him a rare plant which only grows in dungeons',
    },
];

export const wizardParty: DescriptionAsset[] = [
    {
        name: 'talking to a mirror out of pure drunkenness',
        incomeRange: [a.poor, a.modest],
    },
    {
        name: 'dancing like a maniac',
    },
    { name: 'stuffing a pipe' },
    {
        name: 'totally drunk and pukes a rainbow',
        incomeRange: [a.poor, a.modest],
    },
    { name: 'dancing with a golem in human form' },
    { name: 'dancing with a genie who does not look amused' },
    { name: 'wears a parfum which is irrestible for most women' },
    { name: 'wears a parfum which is irrestible for most men' },
    {
        name: 'forms a horse with the smoke from a pipe',
        landRange: [a.village],
    },
    {
        name: 'forms a skeleton with the smoke from a pipe',
        landRange: [a.underdark],
    },
    { name: 'forms a ship with the smoke from a pipe', landRange: [a.haven] },
    {
        name: 'forms an elefant with the smoke from a pipe',
        landRange: [a.desert],
    },
    {
        name: 'forms a squirrel with the smoke from a pipe',
        landRange: [a.forest],
    },
    {
        name: 'forms an eagel with the smoke from a pipe',
        landRange: [a.mountain],
    },
    {
        name: 'forms an snake with the smoke from a pipe',
        landRange: [a.tropical],
    },
    {
        name: 'forms an warrior with the smoke from a pipe',
        landRange: [a.city],
    },
];
