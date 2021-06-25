import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/DescriptionAsset';
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
        needsOne: [a.bard, a.elf, a.wealthy],
    },
    { name: 'Guitar', ...ruralEuropean },
    { name: 'Fluet', ...ruralEuropean },
    {
        name: 'Drums',
        misfits: ruralEuropean.misfits,
        needsOne: [a.bard, a.soldier],
    },
    {
        name: 'Trumpet',
        ...ruralEuropean,
    },
    {
        name: 'Horn',
        needsOne: [a.dwarf, a.bard],
        misfits: ruralEuropean.misfits,
    },
    {
        name: 'Fiddle',
        misfits: ruralEuropean.misfits,
        needsOne: [a.bard, a.village, a.tiefling],
    },
    {
        name: 'Violin',
        needsOne: [a.bard, a.tiefling],
        incomeRange: [a.wealthy, a.rich],
    },
    { name: 'Bell', ...elegantContinental },
    { name: 'Bagpipes', needsOne: [a.village, a.mountain], needs: [a.bard] },
    { name: 'Hurdy Gurdy', needsOne: [a.village, a.haven], needs: [a.bard] },
    { name: 'Lute', needs: [a.bard] },
    {
        name: 'Lyre',
        ...elegantContinental,
    },
    { name: 'Ocarina', needsOne: [a.wizard, a.bard] },
    {
        name: 'Ukulele',
        needsOne: [a.tropical, a.bard],
        misfits: ruralEuropean.misfits,
    },
    {
        name: 'Banjo',
        needsOne: [a.village, a.bard],
        misfits: ruralEuropean.misfits,
    },
    {
        name: 'Xylophone',
        ...elegantContinental,
    },
];
