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
            worksForThiefs: true,
            worksForAssasines: true,
            worksForBrothel: true,
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
        ]
    ),
    new NameIdea(
        {
            name: 'Resting',
        },
        [...noblesAndTitles, ...artisanJobs, ...weapons, ...tools]
    ),
    new NameIdea(
        {
            name: 'Humble',
            misfits: [a.rich],
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
            worksForBrothel: true,
            worksForThiefs: true,
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
            name: 'One-Eyed',
            worksForBrothel: true,
            worksForThiefs: true,
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
];

// more ideas: Holy, Divine, Praying, Virtuous, Rightous, Honorable, Virtuous, Peaceful, Merciful, Rejoicing, Virgin, Decadent, Smiling, Giggling, Singing, Dancing, Joyful, Fierce, Ferocious, Vigorous Enraged, Vigilant, Glowing, Shining, Glorious, Nonchalant, Dapper, Marmor?, Victorious?, Triumphant?, Roaring, Sinister, Insidious?, Drunken, Spitting, Squint-Eyes, One-Eyed, Gleeful, Spiteful, Malicious, Cursed,  Flaming, Fiery, Infernal, Horned, Macabre, Squinting, Whispering, Silent, Venomous, Wrathful, Patient, Lurking,  Decadent, Hungry, Starving, Sleepy, Salty, Fishy, Sailing, Dreaming, Rotten, Filthy, Savage, Gloomy, Feasting, Dining, Savoring, Chomping, Moaning, Moist, Flitrting, Lascivious, Salacious, Hammering, Forging, Weaving, Knitting,      Dried Out, Thirsty, Spicy, Silky, Cashmere, Velvet, Exhausted more oriental stuff... ,    Colorful, Fruity, Spicy,  more tropical stuff...

// Banquett, Spatz, Duck, Goose

export const nameIdeas: NameIdea[] = [
    ...materials,
    ...characteristics,
    ...specialNames,
];
