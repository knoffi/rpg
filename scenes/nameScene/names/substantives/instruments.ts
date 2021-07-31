import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
const a = association;
const elegantContinental = {
    misfits: [
        a.poor,
        a.dwarf,
        a.soldier,
        a.barbarian,
        a.halfling,
        a.haven,
        a.desert,
        a.tropical,
    ],
    needs: [a.bard],
};
const ruralEuropean = {
    misfits: [a.rich, a.wealthy, a.desert, a.tropical],
    needs: [a.bard],
};
export const instruments: DescriptionAsset[] = [
    {
        name: 'Harp',
        ...elegantContinental,
        needs: [],
        needsOne: [a.bard, a.elf],
        powerFits: [a.bard, a.elf],
    },
    { name: 'Guitar', ...ruralEuropean, powerFits: [a.bard] },
    { name: 'Fluet', ...ruralEuropean, powerFits: [a.bard] },
    {
        name: 'Drums',
        misfits: ruralEuropean.misfits,
        needsOne: [a.bard, a.soldier],
        powerFits: [a.bard],
    },
    {
        name: 'Trumpet',
        ...ruralEuropean,
        powerFits: [a.bard],
    },
    {
        name: 'Horn',
        needsOne: [a.bard, a.tiefling],
        misfits: ruralEuropean.misfits,
        powerFits: [a.bard, a.tiefling],
    },
    {
        name: 'Fiddle',
        misfits: ruralEuropean.misfits,
        needsOne: [a.bard, a.village, a.tiefling],
        powerFits: [a.bard, a.tiefling],
    },
    {
        name: 'Violin',
        needsOne: [a.bard, a.tiefling],
        incomeRange: [a.wealthy, a.rich],
        powerFits: [a.bard, a.tiefling],
    },
    { name: 'Bell', ...elegantContinental, powerFits: [a.bard] },
    {
        name: 'Bagpipes',
        needsOne: [a.village, a.mountain],
        needs: [a.bard],
        powerFits: [a.bard, a.village],
    },
    {
        name: 'Hurdy Gurdy',
        needsOne: [a.village, a.haven],
        needs: [a.bard],
        powerFits: [a.bard],
    },
    { name: 'Lute', needs: [a.bard] },
    {
        name: 'Lyre',
        ...elegantContinental,
        powerFits: [a.bard],
    },
    {
        name: 'Ocarina',
        needsOne: [a.wizard, a.bard],
        powerFits: [a.bard, a.wizard],
    },
    {
        name: 'Ukulele',
        needsOne: [a.tropical, a.bard],
        misfits: ruralEuropean.misfits,
        powerFits: [a.bard, a.tropical],
    },
    {
        name: 'Banjo',
        needsOne: [a.village, a.bard],
        misfits: ruralEuropean.misfits,
        powerFits: [a.bard, a.village],
    },
    {
        name: 'Xylophone',
        ...elegantContinental,
        powerFits: [a.bard],
    },
];
