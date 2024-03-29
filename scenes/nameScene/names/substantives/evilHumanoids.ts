import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
const a = association;
//troll, stone giant, bugbear, hobgoblin, goblin, orc, gnoll, naga, ghoul, goblin, hag, witch
export const evilHumanoids: DescriptionAsset[] = [
    {
        name: 'Troll',
        landRange: [a.village, a.city, a.mountain, a.forest],
        classRange: [a.barbarian, a.bard, a.adventurer],
        incomeRange: [a.wealthy, a.modest],
        powerFits: [a.mountain, a.forest, a.barbarian, a.adventurer],
    },
    {
        name: 'Giant',
        landRange: [a.village, a.city, a.mountain],
        classRange: [a.barbarian, a.bard, a.adventurer],
        incomeRange: [a.wealthy, a.modest, a.rich],
        powerFits: [a.mountain, a.barbarian, a.adventurer, a.bard],
    },
    {
        name: 'Bugbear',
        landRange: [a.village, a.mountain, a.forest],
        classRange: [a.barbarian, a.bard, a.adventurer],
        incomeRange: [a.modest, a.poor],
        powerFits: [a.mountain, a.adventurer],
    },
    {
        name: 'Hobgoblin',
        landRange: [a.village, a.city, a.mountain],
        classRange: [a.barbarian, a.soldier, a.bard, a.adventurer],
        incomeRange: [a.modest, a.poor],
        powerFits: [a.mountain, a.soldier, a.adventurer],
    },
    {
        name: 'Goblin',
        landRange: [a.village, a.city, a.mountain, a.forest],
        classRange: [a.bard, a.adventurer],
        worksForThiefs: true,
        incomeRange: [a.poor, a.modest],
        powerFits: [a.mountain, a.adventurer, a.poor],
    },
    {
        name: 'Orc',
        landRange: [a.village, a.city, a.mountain],
        classRange: [a.barbarian, a.soldier, a.adventurer],
        incomeRange: [a.modest, a.poor],
        worksForAssasines: true,
        powerFits: [a.mountain, a.desert, a.barbarian, a.soldier, a.adventurer],
    },
    {
        name: 'Gnoll',
        landRange: [a.village, a.city, a.mountain, a.forest],
        classRange: [a.barbarian, a.soldier, a.adventurer],
        worksForAssasines: true,
        incomeRange: [a.wealthy, a.modest, a.poor],
        powerFits: [a.mountain, a.barbarian, a.soldier, a.adventurer],
    },
    {
        name: 'Naga',
        landRange: [a.haven, a.mountain, a.forest, a.desert, a.city],
        classRange: [a.wizard, a.soldier, a.adventurer],
        worksForThiefs: true,
        incomeRange: [a.wealthy, a.modest],
        powerFits: [a.mountain, a.desert, a.haven, a.wizard, a.adventurer],
    },
    {
        name: 'Sea Hag',
        needs: [a.haven],
        classRange: [a.bard, a.wizard, a.adventurer],
        incomeRange: [a.wealthy, a.modest, a.poor],
        worksForThiefs: true,
        powerFits: [a.haven, a.wizard, a.adventurer],
    },
    {
        name: 'Hag',
        landRange: [a.forest, a.village, a.city, a.underdark],
        classRange: [a.bard, a.wizard, a.adventurer],
        incomeRange: [a.wealthy, a.modest, a.poor],
        worksForThiefs: true,
        powerFits: [a.forest, a.village, a.wizard, a.adventurer],
    },
    {
        name: 'Witch',
        landRange: [a.forest, a.village, a.city, a.underdark],
        classRange: [a.bard, a.wizard, a.adventurer],
        incomeRange: [a.wealthy, a.modest, a.poor],
        worksForThiefs: true,
        powerFits: [a.forest, a.village, a.wizard, a.adventurer],
    },
];
