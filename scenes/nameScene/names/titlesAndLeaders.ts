import { association } from '../../../classes/association';

const a = association;
export const titlesAndLeaders = [
    {
        name: 'Emperor',
        needsOne: [a.rich, a.wealthy],
        misfits: [a.drow],
    },
    { name: 'Empress', needsOne: [a.rich, a.wealthy] },
    { name: 'General', needsOne: [a.rich, a.wealthy], classRange: [a.soldier] },
    { name: 'Marshal', needsOne: [a.rich, a.wealthy], classRange: [a.soldier] },
    { name: 'Admiral', needsOne: [a.rich, a.wealthy], landRange: [a.haven] },
    {
        name: 'King',
        needsOne: [a.rich, a.wealthy],
        misfits: [a.drow],
    },
    { name: 'Queen', needsOne: [a.rich, a.wealthy] },
    {
        name: 'Prince',
        needsOne: [a.rich, a.wealthy],
        needs: [a.knight],
        misfits: [a.drow],
    },
    { name: 'Princess', needsOne: [a.rich, a.wealthy] },
    { name: 'Bishop', needsOne: [a.rich, a.wealthy], classRange: [a.cleric] },
    { name: 'Angel', needsOne: [a.rich, a.wealthy], classRange: [a.cleric] },
    {
        name: 'Arch Duke',
        needsOne: [a.rich, a.wealthy],
        classRange: [a.knight],
    },
    { name: 'Earl', needsOne: [a.rich, a.wealthy], classRange: [a.knight] },
    { name: 'Paladin', needsOne: [a.rich, a.wealthy], classRange: [a.knight] },
    {
        name: 'Spidermother',
        needsOne: [a.rich, a.wealthy],
        needs: [a.drow],
        worksForAssasines: true,
        worksForThiefs: true,
    },
];
