import { association } from '../../../classes/association';
import { NameIdea } from '../../../classes/NameIdea';
import { majesticBeasts } from './majesticBeasts';
import { materials } from './material';
import {
    criminalPredatorBeasts,
    honorfulPredatorBeasts,
} from './predatorBeasts';

const a = association;
const characteristics = [
    new NameIdea(
        {
            name: 'Smirking',
            classRange: [a.wizard, a.bard, a.druid],
            misfits: [a.rich],
            worksForThiefs: true,
            worksForAssasines: true,
            worksForBrothel: true,
        },
        [
            ...honorfulPredatorBeasts,
            ...criminalPredatorBeasts,
            ...majesticBeasts,
            { name: 'Hat', needs: [a.wizard] },
            {
                name: 'Wench',
                needs: [a.prostitute],
                misfits: [a.rich, a.wealthy, a.drow],
                worksForBrothel: true,
            },
            {
                name: 'Concubine',
                needs: [a.prostitute],
                incomeRange: [a.rich, a.wealthy],
                misfits: [a.drow],
                worksForBrothel: true,
            },
            {
                name: 'Lust Slave',
                needs: [a.prostitute, a.drow],
                incomeRange: [a.rich, a.wealthy],
                worksForBrothel: true,
            },
            {
                name: 'Squid',
                needs: [a.haven],
                worksForThiefs: true,
                worksForBrothel: true,
            },
            {
                name: 'Shark',
                needs: [a.haven],
                misfits: [a.poor],
                worksForThiefs: true,
                worksForAssasines: true,
            },
        ]
    ),
    new NameIdea(
        {
            name: 'Benevolent',
            incomeRange: [a.wealthy, a.rich],
            misfits: [a.barbarian],
            worksForBrothel: true,
        },
        [
            ...honorfulPredatorBeasts,
            ...criminalPredatorBeasts,
            ...majesticBeasts,
            {
                name: 'Emperor',
                needs: [a.rich, a.wealthy],
                misfits: [a.drow],
            },
            { name: 'Empress', needs: [a.rich, a.wealthy] },
            {
                name: 'King',
                needs: [a.rich, a.wealthy],
                misfits: [a.drow],
            },
            { name: 'Queen', needs: [a.rich, a.wealthy] },
            {
                name: 'Prince',
                needs: [a.rich, a.wealthy],
                misfits: [a.drow],
            },
            { name: 'Princess', needs: [a.rich, a.wealthy] },
        ]
    ),
];

export const nameIdeas = [...materials, ...characteristics];
