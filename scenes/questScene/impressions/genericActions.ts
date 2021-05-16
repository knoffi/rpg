import { association, sophisticatedGroup } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/DescriptionIdea';
//tODO: test, if f.e. all food/drink options are working for brothel, thief, ... (i.e., if mapping worked correctly)
const a = association;
const getEnabledForAllCriminals = (asset: DescriptionAsset) => {
    return {
        ...asset,
        worksForAllCriminals: true,
    } as DescriptionAsset;
};
const macho: DescriptionAsset[] = [
    {
        classRange: [a.barbarian, a.soldier],
        name: 'provoking other guests',
        worksForAllCriminals: true,
        misfits: sophisticatedGroup,
    },
    {
        classRange: [a.barbarian, a.bard, a.adventurer, a.soldier, a.knight],
        name: 'bragging',
        worksForAllCriminals: true,
        misfits: sophisticatedGroup,
    },
    {
        classRange: [a.barbarian, a.bard, a.adventurer, a.soldier, a.knight],
        name: 'posing',
        worksForAllCriminals: true,
    },
    { name: 'loudly complaining' },
    {
        name: 'babbling',
        misfits: sophisticatedGroup,
        worksForAllCriminals: true,
    },
    { name: 'story telling', worksForAssasines: true, worksForBrothel: true },
];
export const lively: DescriptionAsset[] = [
    { name: 'dancing', worksForBrothel: true },
    { name: 'flirting', worksForBrothel: true },
    { name: 'betting', worksForAssasines: true, worksForThiefs: true },
    { name: 'searching for a dance partner', worksForBrothel: true },
    {
        name: 'gambling',
        worksForAllCriminals: true,
    },
    {
        name: 'smoking a pipe',
        misfits: [a.desert],
        worksForAllCriminals: true,
    },
    {
        needs: [a.desert],
        name: 'smoking a shisa',
        worksForAllCriminals: true,
    },
    { name: 'singing' },
    { name: 'story telling', worksForAssasines: true, worksForBrothel: true },
];
const veryDrunk: DescriptionAsset[] = [
    { name: 'yelling', misfits: sophisticatedGroup },
    { name: 'shouting', misfits: sophisticatedGroup },
    {
        name: 'vomitting',
        misfits: sophisticatedGroup,
        worksForAllCriminals: true,
    },
    {
        name: 'unconscious',
        misfits: sophisticatedGroup,
        worksForAllCriminals: true,
    },
    { name: 'slurring', misfits: sophisticatedGroup },
    {
        name: 'totally drunk',
        misfits: sophisticatedGroup,
        worksForAllCriminals: true,
    },
];
const scholar: DescriptionAsset[] = [
    { name: 'disgusted' },
    { classRange: [a.wizard, a.cleric], name: 'reading a book' },
    { name: 'reading a letter' },
    { name: 'writing a letter' },
    { name: 'reading a scroll' },
    { name: 'writing a scroll' },
    { name: 'reading a parchment roll' },
    { name: 'writing a parchment roll' },
    { name: 'writing a book' },
    { name: 'doing the accounting' },
];
export const magical: DescriptionAsset[] = [
    { classRange: [a.wizard, a.cleric], name: 'reading a heavy tome' },
    { classRange: [a.wizard, a.cleric], name: 'examining an old artifact' },
    { classRange: [a.wizard, a.cleric, a.bard], name: 'practicing a spell' },
    {
        classRange: [a.wizard, a.cleric],
        name: 'concentrating on a research paper',
    },
    { classRange: [a.wizard, a.cleric], name: 'writing a mystical scroll' },
    { classRange: [a.wizard, a.cleric], name: 'examining a mystical scroll' },
    { classRange: [a.wizard, a.cleric], name: 'enchanting an object' },
];
export const feasting: DescriptionAsset[] = [
    {
        name: 'drinking red wine',
        misfits: [a.rich, a.desert, a.tropical, a.dwarf, a.barbarian],
    },
    {
        name: 'drinking white wine',
        misfits: [a.rich, a.desert, a.tropical, a.dwarf, a.barbarian],
    },
    {
        name: 'drinking mead',
        misfits: [
            a.desert,
            a.tropical,
            a.wizard,
            a.haven,
            a.elf,
            a.drow,
            a.tiefling,
        ],
    },
    {
        name: 'drinking rum',
        landRange: [a.city, a.haven, a.tropical],
    },
    {
        name: 'drinking beer',
        misfits: [a.rich, a.desert, a.tropical, a.elf, a.drow],
    },
    {
        name: 'drinking champagne',
        misfits: [a.desert, a.tropical],
    },
    {
        name: 'savoring a decadent meal',
        misfits: [a.poor, a.modest],
    },
    {
        name: 'holding a banquette',
        misfits: [a.poor, a.modest],
    },
    {
        name: 'pronouncing a toast',
        misfits: [a.poor, a.modest, a.desert],
    },
].map((asset) => getEnabledForAllCriminals(asset));
export const spying: DescriptionAsset[] = [
    {
        name: 'watching some guests',
        worksForAllCriminals: true,
    },
    {
        name: 'watching you',
        worksForAllCriminals: true,
    },
    {
        name: 'following you',
        worksForAllCriminals: true,
    },
    {
        name: 'waiting for someone',
        worksForAllCriminals: true,
    },
    {
        name: 'eavesdropping a conversation',
        worksForAllCriminals: true,
    },
    {
        name: 'following you',
        worksForAllCriminals: true,
    },
].map((asset) => getEnabledForAllCriminals(asset));
//tODO: go more into details, like "Opening a champagne bottle for customers" or "Bringing rum in golden cups" for a.rich,a.wealthy ... or "presenting an expensive bottle of brandy" for a.tiefling
export const servantActions: DescriptionAsset[] = [
    { name: 'listening to complains', misfits: [a.poor] },
    { name: 'taking orders from customers' },
    { name: 'transporting plates full of dishes', misfits: [a.poor] },
    { name: 'transporting wine jugs', misfits: [a.barbarian, a.dwarf] },
    {
        name: 'transporting beer mugs',
        misfits: [a.rich, a.elf, a.drow, a.tiefling],
    },
    { name: 'chatting with some customers' },
    { name: 'thanking for a generous tip', misfits: [a.poor] },
].map((asset) => getEnabledForAllCriminals(asset));
export const general: DescriptionAsset[] = [
    { classRange: [a.thief], name: 'whispering' },
    { name: 'grumbling' },
    { name: 'searching' },
    { name: 'looking at you!' },
    { name: 'looking into your eyes!' },
    { name: 'spying' },
    { name: 'bargaining', misfits: [a.rich, a.knight, a.wealthy] },
].map((asset) => getEnabledForAllCriminals(asset));

export const leisureUpperClass = [
    ...feasting,
    ...lively,
    { name: 'disgusted' },
];
export const busyUpperClass = [...leisureUpperClass, ...scholar];
export const busyScholarClass = [...leisureUpperClass, ...scholar, ...magical];
export const machoClass = [
    ...leisureUpperClass,
    ...macho,
    ...general,
    ...veryDrunk,
    { name: 'chatting with a prostitute' },
];
export const childrenClass = [...lively, ...general];
