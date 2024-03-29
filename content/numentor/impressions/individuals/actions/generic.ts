import { association } from '../../../../../classes/association';
import { AssetKey } from '../../../../../classes/idea/AssetKey/AssetKey';
import { DescriptionAsset } from '../../../../../classes/idea/DescriptionAsset';
//TODO: test, if f.e. all food/drink options are working for brothel, thief, ... (i.e., if mapping worked correctly)
const a = association;
const sophisticatedGroup = [
    association.elf,
    association.wizard,
    association.knight,
    association.rich,
    association.wealthy,
];
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
        name: 'smoking a hookah',
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
    { name: 'tipsy and frisky', misfits: sophisticatedGroup },
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
    { name: 'doing the accounting', classRange: [] },
];
export const magical: DescriptionAsset[] = [
    {
        misfits: [a.poor],
        classRange: [a.wizard, a.cleric],
        name: 'reading a heavy tome',
    },
    {
        misfits: [a.poor],
        classRange: [a.wizard, a.cleric],
        name: 'examining an old artifact',
    },
    {
        misfits: [a.poor],
        classRange: [a.wizard, a.cleric, a.bard],
        name: 'practicing a spell',
    },
    {
        misfits: [a.poor],
        classRange: [a.wizard, a.cleric],
        name: 'translating an ancient text',
    },
    {
        misfits: [a.poor],
        classRange: [a.wizard, a.cleric],
        name: 'writing a mystical scroll',
    },
    {
        misfits: [a.poor],
        classRange: [a.wizard, a.cleric],
        name: 'examining a mystical scroll',
    },
    {
        misfits: [a.poor],
        classRange: [a.wizard, a.cleric],
        name: 'enchanting an object',
    },
];
export const feasting: DescriptionAsset[] = [
    {
        name: 'drinking wine',
        misfits: [a.rich, a.desert, a.tropical, a.dwarf, a.barbarian],
    },

    {
        name: 'drinking mead',
        misfits: [a.desert, a.tropical, a.haven, a.elf, a.drow, a.tiefling],
        needsone: [
            a.knight,
            a.adventurer,
            a.bard,
            a.modest,
            a.barbarian,
            a.soldier,
            a.assasine,
        ],
    },
    {
        name: 'drinking rum',
        needsone: [a.city, a.haven, a.tropical],
    },
    {
        name: 'drinking beer',
        misfits: [a.desert, a.tropical, a.elf, a.drow, a.haven],
        needsone: [
            a.modest,
            a.dwarf,
            a.human,
            a.barbarian,
            a.knight,
            a.soldier,
            a.assasine,
        ],
    },
    {
        name: 'drinking ale',
        needs: [a.haven],
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
        powerFits: [a.poor],
    },
    {
        name: 'watching you',
        worksForAllCriminals: true,
        powerFits: [a.poor],
    },
    {
        name: 'following you',
        worksForAllCriminals: true,
        powerFits: [a.poor],
    },
    {
        name: 'waiting for someone',
        worksForAllCriminals: true,
        powerFits: [a.poor],
    },
    {
        name: 'eavesdropping a conversation',
        worksForAllCriminals: true,
        powerFits: [a.poor],
    },
    {
        name: 'following you',
        worksForAllCriminals: true,
        powerFits: [a.poor],
    },
].map((asset) => getEnabledForAllCriminals(asset));
//tODO: go more into details, like "Opening a champagne bottle for customers" or "Bringing rum in golden cups" for a.rich,a.wealthy ... or "presenting an expensive bottle of brandy" for a.tiefling
export const servantActions: DescriptionAsset[] = [
    {
        name: 'listening to complains',
        misfits: [a.poor],
        key: AssetKey.INDIVIDUALS_servant,
    },
    { name: 'taking orders from customers', key: AssetKey.INDIVIDUALS_servant },
    {
        name: 'transporting plates full of dishes',
        misfits: [a.poor],
        key: AssetKey.INDIVIDUALS_servant,
    },
    {
        name: 'transporting wine jugs',
        misfits: [a.barbarian, a.dwarf, a.desert],
        key: AssetKey.INDIVIDUALS_servant,
    },
    {
        name: 'transporting drinks',
        misfits: [a.barbarian, a.dwarf, a.desert],
        key: AssetKey.INDIVIDUALS_servant,
    },
    {
        name: 'transporting beer mugs',
        misfits: [a.rich, a.elf, a.drow, a.tiefling, a.desert],
        key: AssetKey.INDIVIDUALS_servant,
    },
    { name: 'chatting with some customers' },
    {
        name: 'getting molested by a guest',
        key: AssetKey.INDIVIDUALS_servant,
        misfits: [a.knight, a.elf, a.cleric],
    },
    {
        name: 'thanking for a generous tip',
        misfits: [a.poor],
        key: AssetKey.INDIVIDUALS_servant,
    },
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
    { name: 'disgusted', misfits: [a.poor] },
];
export const busyUpperClass = [...leisureUpperClass, ...scholar];
export const busyScholarClass = [...leisureUpperClass, ...scholar, ...magical];
export const caritasWork: DescriptionAsset[] = [
    { needs: [a.poor], name: 'feeding the poor' },
    { needs: [a.poor], name: 'distributing soup to the poor' },
    { needs: [a.poor], name: 'handing out second hand cloths' },
    { needs: [a.poor], name: 'doing charity work' },
    { needs: [a.poor], name: 'scolding a drunken father' },
    { needs: [a.poor], name: 'blessing a poor family' },
    { needs: [a.poor], name: 'teaching a group of orphans' },
    { needs: [a.poor], name: 'healing an injured hobo' },
    { needs: [a.poor], name: 'blessing an old widow' },
];
export const machoClass = [
    ...leisureUpperClass,
    ...macho,
    ...general,
    ...veryDrunk,
    { name: 'chatting with a prostitute' },
];
export const childrenClass = [...lively, ...general];
export const teenagerClass = [...lively, ...general, ...servantActions];
