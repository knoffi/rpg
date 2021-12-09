import { association } from '../../../../../classes/association';
import { DescriptionAsset } from '../../../../../classes/idea/DescriptionAsset';
import { brothelActions } from './brothel';
import { busyScholarClass, magical } from './generic';
import { magicalQuests } from './hiring';
import { warningSociety } from './warning';

const a = association;

const casting: DescriptionAsset[] = [
    { name: 'finishing a drink and then teleporting away' },
    { name: 'finishing a meal and then teleporting away' },
    { name: 'secretely practicing minor enchantments on random guests' },
    { name: 'magically cheating at a card game' },
    { name: 'magically cheating at a card game' },
    { name: 'smaller than a shoe because of a temporary curse' },
    {
        name: 'is looking astonishingly beautiful - but this is just an illusion spell',
    },
];

const prophecies: DescriptionAsset[] = [
    { name: "getting visions about people's death when touching them" },
    { name: 'telling you that a bad omen is cursing you' },
    { name: 'telling you that a good omen is blessing you' },
];
const magicalItems: DescriptionAsset[] = [
    { name: 'analyzing a myterious ring' },
    { name: 'analyzing a myterious crystal ball' },
    { name: 'analyzing a myterious chalice' },
    { name: 'studying a lost tome' },
    { name: 'analyzing a ruby key' },
    {
        name: 'conjuring magical lights which hover over the dance area',
    },
    {
        name: 'summoning a band full of floating instruments',
    },
];

const magicalSelling: DescriptionAsset[] = [
    { name: 'selling magical beans' },
    { name: 'selling potions which change the sex of a person' },
    { name: 'selling love potions which work for 24 hours' },
    { name: 'selling sympathy potions' },
    { name: 'selling sleep potions' },
    { name: 'selling trinkets which look magical but are fake' },
    { name: 'selling gremlins' },
    { name: 'giving away a scroll collection' },
    { name: 'exchanging monster parts for magical potions' },
    { name: 'selling a potion which regrows hear and thickens the beard' },
];

const advertising: DescriptionAsset[] = [
    {
        name: 'advertising the scroll shop of cousin Herry Golderfey',
        raceRange: [a.human],
    },
    {
        name: 'advertising the scroll shop of cousin Margrid Mandaley',
        raceRange: [a.human],
    },
    {
        name: 'advertising the scroll shop of cousin George Hufflestone',
        raceRange: [a.human],
    },
    {
        name: 'advertising the scroll shop of cousin Thomas Tenderfield',
        raceRange: [a.human],
    },
    {
        name: 'advertising the scroll shop of cousin Elizabeth Edenfield',
        raceRange: [a.human],
    },
    {
        name: 'advertising the scroll shop of cousin William Westerfold',
        raceRange: [a.human],
    },
    {
        name: 'advertising the herbal store of cousin Izzy Appletree',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the herbal store of cousin Lily Lighterdale',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the herbal store of cousin Molly Mellowsteen',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the herbal store of cousin Harry Horseshoe',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the herbal store of cousin Larry Lowtree',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the herbal store of cousin Berry Bakerday',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the wand shop of cousin Mr Picklecherry',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the wand shop of cousin Mr Nibblestone',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the wand shop of cousin Mrs Marbleball',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the wand shop of cousin Mrs Hamsterfield',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the wand shop of cousin Ms Wondernut',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the wand shop of cousin Mrs Nubben',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the potion shop of cousin Falfendir',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the potion shop of cousin Melandir',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the potion shop of cousin Enphyra',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the potion shop of cousin Sylana',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the potion shop of cousin Avourel',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the potion shop of cousin Elrenia',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the gem store of cousin Murin',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the gem store of cousin Balron',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the gem store of cousin Thulor',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the gem store of cousin Ingria',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the gem store of cousin Tusnelda',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the gem store of cousin Ingeborg',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the trinket shop of cousin Anubia',
        raceRange: [a.tiefling],
    },
    {
        name: 'advertising the trinket shop of cousin Azazel',
        raceRange: [a.tiefling],
    },
    {
        name: 'advertising the trinket shop of cousin Bhaalia',
        raceRange: [a.tiefling],
    },
    {
        name: 'advertising the trinket shop of cousin Leviathus',
        raceRange: [a.tiefling],
    },
    {
        name: 'advertising the trinket shop of cousin Barbazu',
        raceRange: [a.tiefling],
    },
    {
        name: 'advertising the trinket shop of cousin Diabolius',
        raceRange: [a.tiefling],
    },
];

const wizardParty: DescriptionAsset[] = [
    {
        name: 'talking to a mirror out of pure drunkenness',
        incomeRange: [a.poor, a.modest],
    },
    {
        name: 'dancing like a maniac',
    },
    { name: 'stuffing a giant pipe with friends' },
    {
        name: 'totally drunk and pukes a rainbow',
        incomeRange: [a.poor, a.modest],
    },
    { name: 'dancing with a sexy golem in human form' },
    { name: 'dancing with a sexy genie who does not look amused' },
    { name: 'wearing a parfum which is irrestible for most women' },
    { name: 'wearing a parfum which is irrestible for most men' },
    {
        name: 'inhaling from a pipe and then exhaling a smoke wolve',
        landRange: [a.village],
    },
    {
        name: 'inhaling from a pipe and then exhaling a smoke beholder',
        landRange: [a.underdark],
    },
    {
        name: 'inhaling from a pipe and then exhaling a smoke ship',
        landRange: [a.haven],
    },
    {
        name: 'inhaling from a hookah and then exhaling a smoke pyramid',
        landRange: [a.desert],
    },
    {
        name: 'inhaling from a pipe and then exhaling a smoke rabbit',
        landRange: [a.forest],
    },
    {
        name: 'inhaling from a pipe and then exhaling a smoke eagle',
        landRange: [a.mountain],
    },
    {
        name: 'inhaling from a pipe and then exhaling a smoke snake',
        landRange: [a.tropical],
    },
    {
        name: 'inhaling from a pipe and then exhaling a smoke crown',
        landRange: [a.city],
    },
];
export const wizardClass = [
    ...busyScholarClass,
    ...wizardParty,
    ...magicalItems,
    ...magicalSelling,
    ...magicalQuests,
    ...prophecies,
    ...casting,
    ...warningSociety,
    ...brothelActions,
    ...magical,
];

export const alchemistClass = [
    ...busyScholarClass,
    ...wizardParty,
    ...advertising,
    ...magicalQuests,
    ...magicalSelling,
    ...brothelActions,
];

export const wizardGuest = [
    ...busyScholarClass,
    ...wizardParty,
    { name: 'gazing at a half-naked genie', landRange: [a.forest] },
    { name: 'passing out from smoking a pipe' },
    { name: 'passing out from drinking wine', misfits: [a.desert] },
    { name: 'having a drink contest with a young sorceress' },
    {
        name: 'dancing with a magical broomstick',
    },
    {
        name: 'entertaining a laughing wizard with a card trick',
        landRange: [a.underdark, a.forest],
    },
    {
        name: 'looking for the raven who stole his jewelry',
        landRange: [a.tropical, a.desert],
    },
    {
        name: 'getting carried by an earth elemental',
        landRange: [a.tropical, a.desert],
    },
    ...brothelActions,
];
//TODO: implement servant actions for a wizard tavern
export const wizardSalesman = [...advertising, ...brothelActions];
