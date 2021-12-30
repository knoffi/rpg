import { association } from '../../../../classes/association';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import {
    groupWarriorActions,
    grownWarriorActions,
    warriorActions,
} from './actions/warrior';
const a = association;
export const soldierIndividuals: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Two soldiers are ',
            misfits: [a.haven],
            incomeRange: [a.modest],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...groupWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of archers is ',
            misfits: [a.haven],
            incomeRange: [a.modest],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...groupWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of war veterans is ',
            incomeRange: [a.modest, a.wealthy],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...groupWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of sword fighters is ',
            misfits: [a.haven],
            incomeRange: [a.modest],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...groupWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A group of navy soldiers is ',
            needs: [a.haven],
            incomeRange: [a.modest],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...groupWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A young-looking recruit is ',
            misfits: [a.haven],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...warriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A young-looking navy recruit is ',
            needs: [a.haven],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...warriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A grey-haired, experienced soldier is ',
            misfits: [a.haven],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
            worksForAssasines: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A grey-haired, experienced sailor is ',
            needs: [a.haven],
            incomeRange: [a.modest, a.poor],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A navy admiral is ',
            needs: [a.haven],
            incomeRange: [a.rich, a.wealthy],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A navy captain is ',
            needs: [a.haven],
            incomeRange: [a.wealthy],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An army marshal is ',
            misfits: [a.haven],
            incomeRange: [a.wealthy, a.rich],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'An army lieutnant is ',
            misfits: [a.haven],
            incomeRange: [a.wealthy],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A cavalry soldier is ',
            misfits: [a.haven],
            incomeRange: [a.modest, a.wealthy],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers
    ),
    new ImpressionIdea(
        {
            name: 'A man with many military decorations is ',
            misfits: [a.haven],
            incomeRange: [a.wealthy, a.rich],
            powerFits: [a.soldier],
            classRange: [a.soldier],
            worksForBrothel: true,
        },
        [...grownWarriorActions],
        Noticable.someCustomers
    ),
];
