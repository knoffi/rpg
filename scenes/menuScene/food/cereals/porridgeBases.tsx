import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/DescriptionIdea';
const a = association;

export const poorBases: DescriptionAsset[] = [
    {
        name: ' (Grey Oat)',
        incomeRange: [a.poor],
        landRange: [a.village, a.city, a.forest, a.haven],
    },
    {
        name: ' (Millet)',
        incomeRange: [a.poor],
        landRange: [a.mountain, a.desert, a.underdark],
    },
    { name: ' (Rice)', incomeRange: [a.poor], landRange: [a.tropical] },
];

export const workerBases: DescriptionAsset[] = [
    {
        name: ' (Brown Oat)',
        landRange: [a.village],
        incomeRange: [a.modest],
    },
    {
        name: ' (Oat)',
        landRange: [a.city, a.haven],
        incomeRange: [a.modest],
    },
    {
        name: ' (Wild Oat)',
        landRange: [a.forest],
        incomeRange: [a.modest],
    },
    {
        name: ' (Buckwheat)',
        landRange: [a.village],
        incomeRange: [a.modest],
    },
    {
        name: ' (Millet)',
        landRange: [a.desert, a.mountain],
        incomeRange: [a.modest],
    },
    {
        name: ' (Maize)',
        landRange: [a.tropical],
        incomeRange: [a.modest],
    },
    {
        name: ' (Rice)',
        landRange: [a.tropical],
        incomeRange: [a.modest],
    },
    {
        name: ' (Dark Oat)',
        landRange: [a.underdark],
        incomeRange: [a.modest],
    },
];

export const wealthyBases: DescriptionAsset[] = [
    {
        name: ' (Ivory Oat)',
        landRange: [a.city, a.haven, a.forest, a.village],
        incomeRange: [a.wealthy],
    },
    { name: ' (Midnight Oat)', needs: [a.underdark], incomeRange: [a.wealthy] },
    { name: ' (Silver Oat)', incomeRange: [a.wealthy] },
    {
        name: ' (Copper Millet)',
        landRange: [a.desert, a.mountain],
        incomeRange: [a.wealthy],
    },
    {
        name: ' (Moonshine Rice)',
        landRange: [a.tropical, a.haven],
        incomeRange: [a.wealthy],
    },
];
