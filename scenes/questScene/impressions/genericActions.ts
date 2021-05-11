import { association, sophisticatedGroup } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/DescriptionIdea';
//TODO: Test, if f.e. all food/drink options are working for brothel, thief, ... (i.e., if mapping worked correctly)
const a = association;
const getEnabledForAllCriminals = (asset: DescriptionAsset) => {
    return {
        ...asset,
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    } as DescriptionAsset;
};
const macho: DescriptionAsset[] = [
    {
        classRange: [a.barbarian, a.soldier],
        name: 'Provoking other Guests',
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
        misfits: sophisticatedGroup,
    },
    {
        classRange: [a.barbarian, a.bard, a.adventurer, a.soldier, a.knight],
        name: 'Bragging',
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
        misfits: sophisticatedGroup,
    },
    {
        classRange: [a.barbarian, a.bard, a.adventurer, a.soldier, a.knight],
        name: 'Posing',
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    { name: 'Loudly Complaining' },
    {
        name: 'Babbling',
        misfits: sophisticatedGroup,
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    { name: 'Story Telling', worksForAssasines: true, worksForBrothel: true },
];
export const lively: DescriptionAsset[] = [
    { name: 'Dancing', worksForBrothel: true },
    { name: 'Flirting', worksForBrothel: true },
    { name: 'Betting', worksForAssasines: true, worksForThiefs: true },
    { name: 'Searching for a Dance Partner', worksForBrothel: true },
    {
        name: 'Gambling',
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        name: 'Smoking a Pipe',
        misfits: [a.desert],
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        needs: [a.desert],
        name: 'Smoking a Shisa',
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    { name: 'Singing' },
    { name: 'Story Telling', worksForAssasines: true, worksForBrothel: true },
];
const veryDrunk: DescriptionAsset[] = [
    { name: 'Yelling', misfits: sophisticatedGroup },
    { name: 'Shouting', misfits: sophisticatedGroup },
    {
        name: 'Vomitting',
        misfits: sophisticatedGroup,
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        name: 'Unconscious',
        misfits: sophisticatedGroup,
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    { name: 'Slurring', misfits: sophisticatedGroup },
    {
        name: 'Totally Drunk',
        misfits: sophisticatedGroup,
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
];
const scholar: DescriptionAsset[] = [
    { name: 'Disgusted' },
    { classRange: [a.wizard, a.cleric], name: 'Reading a Book' },
    { name: 'Reading a Letter' },
    { name: 'Writing a Letter' },
    { name: 'Reading a Scroll' },
    { name: 'Writing a Scroll' },
    { name: 'Reading a Parchment Roll' },
    { name: 'Writing a Parchment Roll' },
    { name: 'Writing a Book' },
    { name: 'Doing the Accounting' },
];
export const magical: DescriptionAsset[] = [
    { classRange: [a.wizard, a.cleric], name: 'Reading a Heavy Tome' },
    { classRange: [a.wizard, a.cleric], name: 'Examining an Old Artifact' },
    { classRange: [a.wizard, a.cleric, a.bard], name: 'Practicing a Spell' },
    {
        classRange: [a.wizard, a.cleric],
        name: 'Concentrating on a Research Paper',
    },
    { classRange: [a.wizard, a.cleric], name: 'Writing a Mystical Scroll' },
    { classRange: [a.wizard, a.cleric], name: 'Examining a Mystical Scroll' },
    { classRange: [a.wizard, a.cleric], name: 'Enchanting an Object' },
];
export const feasting: DescriptionAsset[] = [
    {
        name: 'Drinking Red Wine',
        misfits: [a.rich, a.desert, a.tropical, a.dwarf, a.barbarian],
    },
    {
        name: 'Drinking White Wine',
        misfits: [a.rich, a.desert, a.tropical, a.dwarf, a.barbarian],
    },
    {
        name: 'Drinking Mead',
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
        name: 'Drinking Rum',
        landRange: [a.city, a.haven, a.tropical],
    },
    {
        name: 'Drinking Beer',
        misfits: [a.rich, a.desert, a.tropical, a.elf, a.drow],
    },
    {
        name: 'Drinking Champagne',
        misfits: [a.desert, a.tropical],
    },
    {
        name: 'Savoring a Decadent Meal',
        misfits: [a.poor, a.modest],
    },
    {
        name: 'Holding a Banquette',
        misfits: [a.poor, a.modest],
    },
    {
        name: 'Pronouncing a Toast',
        misfits: [a.poor, a.modest, a.desert],
    },
].map((asset) => getEnabledForAllCriminals(asset));
export const spying: DescriptionAsset[] = [
    {
        name: 'Watching some Guests',
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        name: 'Watching You',
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        name: 'Following You',
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        name: 'Waiting for Someone',
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        name: 'Eavesdropping a Conversation',
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
    {
        name: 'Following You',
        worksForAssasines: true,
        worksForThiefs: true,
        worksForBrothel: true,
    },
].map((asset) => getEnabledForAllCriminals(asset));
//TODO: go more into details, like "Opening a Champagne Bottle for Customers" or "Bringing Rum in Golden Cups" for a.rich,a.wealthy ... or "Presenting an Expensive Bottle of Brandy" for a.tiefling
export const servantActions: DescriptionAsset[] = [
    { name: 'Listening to Complains', misfits: [a.poor] },
    { name: 'Taking Orders from Customers' },
    { name: 'Transporting Plates full of Dishes', misfits: [a.poor] },
    { name: 'Transporting Wine Jugs', misfits: [a.barbarian, a.dwarf] },
    {
        name: 'Transporting Beer Mugs',
        misfits: [a.rich, a.elf, a.drow, a.tiefling],
    },
    { name: 'Chatting with some Customers' },
    { name: 'Thanking for a Generous Tip', misfits: [a.poor] },
].map((asset) => getEnabledForAllCriminals(asset));
export const general: DescriptionAsset[] = [
    { classRange: [a.thief], name: 'Whispering' },
    { name: 'Grumbling' },
    { name: 'Searching' },
    { name: 'Looking at You!' },
    { name: 'Looking into Your Eyes!' },
    { name: 'Spying' },
    { name: 'Bargaining', misfits: [a.rich, a.knight, a.wealthy] },
].map((asset) => getEnabledForAllCriminals(asset));

export const leisureUpperClass = [
    ...feasting,
    ...lively,
    { name: 'Disgusted' },
];
export const busyUpperClass = [...leisureUpperClass, ...scholar];
export const busyScholarClass = [...leisureUpperClass, ...scholar, ...magical];
export const machoClass = [
    ...leisureUpperClass,
    ...macho,
    ...general,
    ...veryDrunk,
    { name: 'Chatting with a Prostitute' },
];
export const childrenClass = [...lively, ...general];
