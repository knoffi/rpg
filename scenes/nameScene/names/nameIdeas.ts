import { association } from '../../../classes/association';
import { NameIdea } from '../../../classes/idea/NameIdea';
import { materials } from './material';
import { specialNames } from './specialTavernNames';
import { evilHumanoids } from './substantives/evilHumanoids';
import { fruits, vegetables } from './substantives/fruitsVegetables';
import {
    femaleGenitals,
    maleGenitals,
    sexyParts,
} from './substantives/genitals';
import {
    allJobs,
    artisanJobs,
    brothelJobs,
    gastronomyJobs,
    noblesAndTitles,
} from './substantives/jobs';
import { majesticBeasts } from './substantives/majesticBeasts';
import {
    criminalPredatorBeasts,
    honorfulPredatorBeasts,
} from './substantives/predatorBeasts';
import { preyTinyAnimals } from './substantives/preyTinyAnimals';
import { substantives } from './substantives/substantives';
import { tools } from './substantives/tools';
import { weapons } from './substantives/weapons';

const a = association;
const characteristics = [
    new NameIdea(
        {
            name: 'Smirking',
            classRange: [a.wizard, a.bard, a.druid],
            misfits: [a.rich],
            worksForAllCriminals: true,
        },
        [
            ...honorfulPredatorBeasts,
            ...criminalPredatorBeasts,
            ...majesticBeasts,
            ...allJobs,
            ...vegetables,
            ...evilHumanoids,
            { name: 'Hat', needs: [a.wizard] },
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
        [...noblesAndTitles, ...gastronomyJobs]
    ),
    new NameIdea(
        {
            name: 'Generous',
            incomeRange: [a.wealthy, a.rich],
            worksForBrothel: true,
        },
        [...noblesAndTitles, ...gastronomyJobs]
    ),
    new NameIdea(
        {
            name: 'Thirsty',
            worksForBrothel: true,
        },
        [...noblesAndTitles, ...artisanJobs, ...brothelJobs, ...evilHumanoids]
    ),
    new NameIdea(
        {
            name: 'Hungry',
            worksForBrothel: true,
        },
        [
            ...noblesAndTitles,
            ...artisanJobs,
            ...brothelJobs,
            ...honorfulPredatorBeasts,
            ...majesticBeasts,
            ...evilHumanoids,
        ]
    ),
    new NameIdea(
        {
            name: 'Sleeping',
        },
        [
            ...noblesAndTitles,
            ...artisanJobs,
            ...honorfulPredatorBeasts,
            ...majesticBeasts,
            ...preyTinyAnimals,
            { name: 'Beauty', classRange: [a.bard, a.knight] },
            ...substantives.normalAnimals,
        ]
    ),
    new NameIdea(
        {
            name: 'Slumbering',
        },
        [
            ...noblesAndTitles,
            ...artisanJobs,
            ...honorfulPredatorBeasts,
            ...majesticBeasts,
            ...evilHumanoids,
            ...preyTinyAnimals,
            ...substantives.normalAnimals,
        ]
    ),
    new NameIdea(
        {
            name: 'Resting',
        },
        [
            ...noblesAndTitles,
            ...artisanJobs,
            ...weapons,
            ...tools,
            ...substantives.normalAnimals,
        ]
    ),
    new NameIdea(
        {
            name: 'Humble',
            misfits: [a.rich, a.drow, a.tiefling],
            classRange: [a.cleric, a.knight],
        },
        [...noblesAndTitles, ...artisanJobs]
    ),
    new NameIdea(
        {
            name: 'Decadent',
            incomeRange: [a.rich, a.wealthy],
        },
        [...noblesAndTitles, ...artisanJobs]
    ),
    new NameIdea(
        {
            name: 'Alluring',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.rich, a.wealthy],
        },
        [...brothelJobs, ...sexyParts, ...maleGenitals, ...femaleGenitals]
    ),
    new NameIdea(
        {
            name: 'Spreading',
            needs: [a.prostitute],
            worksForBrothel: true,
        },
        [...brothelJobs]
    ),
    new NameIdea(
        {
            name: 'Enticing',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.rich, a.wealthy],
        },
        [...brothelJobs, ...sexyParts, ...maleGenitals, ...femaleGenitals]
    ),
    new NameIdea(
        {
            name: 'Sinful',
            needs: [a.prostitute],
            worksForBrothel: true,
        },
        [...brothelJobs, ...sexyParts, ...maleGenitals, ...femaleGenitals]
    ),
    new NameIdea(
        {
            name: 'Moaning',
            needs: [a.prostitute],
            worksForBrothel: true,
        },
        [...brothelJobs]
    ),
    new NameIdea(
        {
            name: 'Flirty',
            needs: [a.prostitute],
            worksForBrothel: true,
        },
        [...brothelJobs]
    ),
    new NameIdea(
        {
            name: 'Spanked',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        [...brothelJobs, ...sexyParts]
    ),
    new NameIdea(
        {
            name: 'Lustful',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        [...maleGenitals, ...femaleGenitals, ...brothelJobs]
    ),
    new NameIdea(
        {
            name: 'Seducing',
            needs: [a.prostitute],
            worksForBrothel: true,
        },
        [...brothelJobs]
    ),
    new NameIdea(
        {
            name: 'Thick',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
            misfits: [a.elf],
        },
        [...sexyParts, ...maleGenitals, ...fruits, ...vegetables]
    ),
    new NameIdea(
        {
            name: 'Moist',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
            misfits: [a.elf],
        },
        [...femaleGenitals]
    ),
    new NameIdea(
        {
            name: 'Tight',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
            misfits: [a.elf],
        },
        [...femaleGenitals]
    ),
    new NameIdea(
        {
            name: 'Wet',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
            misfits: [a.elf],
        },
        [...femaleGenitals]
    ),
    new NameIdea(
        {
            name: 'Lubbed',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        [...sexyParts, ...maleGenitals, ...femaleGenitals, ...brothelJobs]
    ),
    new NameIdea(
        {
            name: 'Juicy',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        [...sexyParts, ...femaleGenitals]
    ),
    new NameIdea(
        {
            name: 'Hard',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        [...maleGenitals]
    ),
    new NameIdea(
        {
            name: 'Miserable',
            needs: [a.poor],
        },
        [
            ...substantives.tinyAnimals,
            ...substantives.sexWorkers,
            ...substantives.bistroJobs,
            ...substantives.criminalPredators,
            ...substantives.evilHumanoids,
            ...substantives.artisans,
            ...substantives.honorfulPredators,
        ]
    ),
    new NameIdea(
        {
            name: 'Grumbling',
            needs: [a.poor],
        },
        [
            ...substantives.tinyAnimals,
            ...substantives.sexWorkers,
            ...substantives.bistroJobs,
            ...substantives.criminalPredators,
            ...substantives.evilHumanoids,
            ...substantives.artisans,
            ...substantives.honorfulPredators,
        ]
    ),
    new NameIdea(
        {
            name: 'Filthy',
            worksForBrothel: true,
            needs: [a.poor],
            worksForThiefs: true,
        },
        [
            ...substantives.tinyAnimals,
            ...substantives.sexWorkers,
            ...substantives.bistroJobs,
            ...substantives.criminalPredators,
            ...substantives.evilHumanoids,
            ...substantives.artisans,
            ...substantives.honorfulPredators,
        ]
    ),
    new NameIdea(
        {
            name: 'Squinting',
            worksForAllCriminals: true,
            needsOne: [a.poor, a.thief],
            incomeRange: [a.poor, a.modest],
        },
        [
            ...substantives.tinyAnimals,
            ...substantives.sexWorkers,
            ...substantives.bistroJobs,
            ...substantives.criminalPredators,
            ...substantives.evilHumanoids,
            ...substantives.artisans,
            ...substantives.honorfulPredators,
            ...substantives.normalAnimals,
        ]
    ),
    new NameIdea(
        {
            name: 'One-Eyed',
            worksForAllCriminals: true,
            needsOne: [a.poor, a.thief],
            incomeRange: [a.poor, a.modest],
        },
        [
            ...substantives.tinyAnimals,
            ...substantives.sexWorkers,
            ...substantives.bistroJobs,
            ...substantives.criminalPredators,
            ...substantives.evilHumanoids,
            ...substantives.artisans,
            ...substantives.honorfulPredators,
            ...substantives.normalAnimals,
        ]
    ),
    new NameIdea(
        {
            name: 'Roaring',
            worksForAssasines: true,
            needsOne: [a.barbarian, a.soldier, a.knight, a.adventurer, a.rich],
        },
        [...substantives.evilHumanoids, ...substantives.majesticBeasts]
    ),
    new NameIdea(
        {
            name: 'Growling',
            worksForAssasines: true,
            needsOne: [a.barbarian, a.soldier, a.knight, a.adventurer],
        },
        [...substantives.evilHumanoids, ...substantives.majesticBeasts]
    ),
    new NameIdea(
        {
            name: 'Vigilant',
            needsOne: [a.soldier, a.knight, a.adventurer],
            misfits: [a.rich],
        },
        [...substantives.honorfulPredators]
    ),
    new NameIdea(
        {
            name: 'Patient',
            needsOne: [a.drow, a.thief, a.assasine, a.forest],
        },
        [...substantives.criminalPredators]
    ),
    new NameIdea(
        {
            name: 'Giggling',
            misfits: [a.rich],
        },
        [
            ...substantives.evilHumanoids,
            ...substantives.fruits,
            ...substantives.vegetables,
            ...substantives.tinyAnimals,
            ...substantives.sexWorkers,
            ...substantives.normalAnimals,
        ]
    ),
    new NameIdea(
        {
            name: 'Smiling',
            misfits: [a.rich],
        },
        [
            ...substantives.allJobs,
            ...substantives.tinyAnimals,
            ...substantives.normalAnimals,
        ]
    ),
    new NameIdea(
        {
            name: 'Tipsy',
            misfits: [a.rich, a.wealthy],
        },
        [
            ...substantives.bistroJobs,
            ...substantives.sexWorkers,
            ...substantives.artisans,
            ...substantives.evilHumanoids,
            ...substantives.tinyAnimals,
            ...substantives.criminalPredators,
            ...substantives.honorfulPredators,
            ...substantives.normalAnimals,
        ]
    ),
    new NameIdea(
        {
            name: 'Spitting',
            needsOne: [a.poor, a.thief],
            incomeRange: [a.poor, a.modest],
        },
        [...substantives.allJobs]
    ),
];

// more ideas: Holy, Divine, Praying, Virtuous, Rightous, Honorable, Virtuous, Peaceful, Merciful, Rejoicing, Virgin, Decadent, Singing, Dancing, Joyful, Fierce, Ferocious, Vigorous, Enraged, Glowing, Shining, Glorious, Nonchalant, Dapper, Marmor?, Victorious?, Triumphant?, Sinister, Insidious?, Drunken, Gleeful, Spiteful, Malicious, Cursed,  Flaming, Fiery, Infernal, Horned, Macabre, Squinting, Whispering, Silent, Venomous, Wrathful, Patient, Lurking,  Decadent, Hungry, Starving, Sleepy, Salty, Fishy, Sailing, Dreaming, Rotten, Filthy, Savage, Gloomy, Feasting, Dining, Savoring, Chomping, Moaning, Moist, Flitrting, Lascivious, Salacious, Hammering, Forging, Weaving, Knitting,      Dried Out, Spicy, Silky, Cashmere, Velvet, Exhausted more oriental stuff... ,    Colorful, Fruity, Spicy,  more tropical stuff...

// Banquett, Spatz, Duck, Goose

export const nameIdeas: NameIdea[] = [
    ...materials,
    ...characteristics,
    ...specialNames,
];
