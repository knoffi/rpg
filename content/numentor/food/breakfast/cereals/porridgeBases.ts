import { association } from '../../../../../classes/association';
import { DescriptionAsset } from '../../../../../classes/idea/DescriptionAsset';
const a = association;

export const poorBases: DescriptionAsset[] = [
    {
        name: 'Cereals (Grey Oat) in Hot Milk',
        incomeRange: [a.poor],
        landRange: [a.village, a.city, a.forest, a.haven],
    },
    {
        name: 'Cereals (Millet)',
        incomeRange: [a.poor],
        landRange: [a.mountain, a.desert, a.underdark],
    },
    { name: 'Cereals (Rice)', incomeRange: [a.poor], landRange: [a.tropical] },
];

export const workerBases: DescriptionAsset[] = [
    {
        name: 'Cereals (Brown Oat) in Hot Milk',
        landRange: [a.village],
        incomeRange: [a.modest],
    },
    {
        name: 'Cereals (Oat) in Hot Milk',
        landRange: [a.city, a.haven],
        incomeRange: [a.modest],
    },
    {
        name: 'Cereals (Wild Oat) in Hot Milk',
        landRange: [a.forest],
        incomeRange: [a.modest],
    },
    {
        name: 'Cereals (Buckwheat) in Hot Milk',
        landRange: [a.village],
        incomeRange: [a.modest],
    },
    {
        name: 'Cereals (Millet) in Hot Milk',
        landRange: [a.desert, a.mountain],
        incomeRange: [a.modest],
    },
    {
        name: 'Cereals (Maize) in Hot Milk',
        landRange: [a.tropical],
        incomeRange: [a.modest],
    },
    {
        name: 'Cereals (Rice) in Hot Milk',
        landRange: [a.tropical],
        incomeRange: [a.modest],
    },
    {
        name: 'Cereals (Dark Oat) in Hot Milk',
        landRange: [a.underdark],
        incomeRange: [a.modest],
    },
];

export const wealthyBases: DescriptionAsset[] = [
    {
        name: 'Cereals (Ivory Oat) in Hot Milk',
        landRange: [a.city, a.haven, a.forest, a.village],
        incomeRange: [a.wealthy],
    },
    {
        name: 'Cereals (Midnight Oat) in Hot Milk',
        needs: [a.underdark],
        incomeRange: [a.wealthy],
    },
    { name: 'Cereals (Silver Oat) in Hot Milk', incomeRange: [a.wealthy] },
    {
        name: 'Cereals (Copper Millet) in Hot Milk',
        landRange: [a.desert, a.mountain],
        incomeRange: [a.wealthy],
    },
    {
        name: 'Cereals (Silky Rice) in Hot Milk',
        landRange: [a.tropical, a.haven],
        incomeRange: [a.wealthy],
    },
];
