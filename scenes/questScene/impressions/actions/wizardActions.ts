import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { brothelActions } from './brothelActions';
import { busyScholarClass } from './genericActions';
import { magicalQuests } from './hiringActions';
import { warningSociety } from './warningActions';

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
        name: 'advertising the scroll shop of a cousin called Herry Golderfey',
        raceRange: [a.human],
    },
    {
        name: 'advertising the scroll shop of a cousin called Margrid Mandaley',
        raceRange: [a.human],
    },
    {
        name: 'advertising the scroll shop of a cousin called George Hufflestone',
        raceRange: [a.human],
    },
    {
        name: 'advertising the scroll shop of a cousin called Thomas Tenderfield',
        raceRange: [a.human],
    },
    {
        name: 'advertising the scroll shop of a cousin called Elizabeth Edenfield',
        raceRange: [a.human],
    },
    {
        name: 'advertising the scroll shop of a cousin called William Westerfold',
        raceRange: [a.human],
    },
    {
        name: 'advertising the herbal store of a cousin called Izzy Appletree',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the herbal store of a cousin called Lily Lighterdale',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the herbal store of a cousin called Molly Mellowsteen',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the herbal store of a cousin called Harry Horseshoe',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the herbal store of a cousin called Larry Lowtree',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the herbal store of a cousin called Berry Bakerday',
        raceRange: [a.halfling],
    },
    {
        name: 'advertising the wand shop of a cousin called Mr Picklecherry',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the wand shop of a cousin called Mr Nibblestone',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the wand shop of a cousin called Mrs Marbleball',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the wand shop of a cousin called Mrs Hamsterfield',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the wand shop of a cousin called Ms Wondernut',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the wand shop of a cousin called Mrs Nubben',
        raceRange: [a.gnome],
    },
    {
        name: 'advertising the potion shop of a cousin called Falfendir',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the potion shop of a cousin called Melandir',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the potion shop of a cousin called Enphyra',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the potion shop of a cousin called Sylana',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the potion shop of a cousin called Avourel',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the potion shop of a cousin called Elrenia',
        raceRange: [a.elf],
    },
    {
        name: 'advertising the gem store of a cousin called Murin',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the gem store of a cousin called Balron',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the gem store of a cousin called Thulor',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the gem store of a cousin called Ingria',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the gem store of a cousin called Tusnelda',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the gem store of a cousin called Ingeborg',
        raceRange: [a.dwarf],
    },
    {
        name: 'advertising the trinket shop of a cousin called Anubia',
        raceRange: [a.tiefling],
    },
    {
        name: 'advertising the trinket shop of a cousin called Azazel',
        raceRange: [a.tiefling],
    },
    {
        name: 'advertising the trinket shop of a cousin called Bhaalia',
        raceRange: [a.tiefling],
    },
    {
        name: 'advertising the trinket shop of a cousin called Leviathus',
        raceRange: [a.tiefling],
    },
    {
        name: 'advertising the trinket shop of a cousin called Barbazu',
        raceRange: [a.tiefling],
    },
    {
        name: 'advertising the trinket shop of a cousin called Diabolius',
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
