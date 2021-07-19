import { association } from '../../../classes/association';
import { NameIdea } from '../../../classes/idea/NameIdea';
import { fruits, vegetables } from './fruitsVegetables';
import { femaleGenitals, maleGenitals, sexyParts } from './genitals';
import { artisanJobs, gastronomyJobs, noblesAndTitles } from './jobs';
import { majesticBeasts } from './majesticBeasts';
import { materials } from './material';
import {
    criminalPredatorBeasts,
    honorfulPredatorBeasts,
} from './predatorBeasts';
import { preyTinyAnimals } from './preyTinyAnimals';
import { specialNames } from './specialTavernNames';
import { tools } from './tools';
import { weapons } from './weapons';

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
            ...artisanJobs,
            ...gastronomyJobs,
            ...noblesAndTitles,
            ...vegetables,
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
        [...noblesAndTitles, ...artisanJobs]
    ),
    new NameIdea(
        {
            name: 'Hungry',
            worksForBrothel: true,
        },
        [
            ...noblesAndTitles,
            ...artisanJobs,
            ...honorfulPredatorBeasts,
            ...majesticBeasts,
        ]
    ),
    new NameIdea(
        {
            name: 'Sleeping',
            worksForBrothel: true,
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
            worksForBrothel: true,
        },
        [
            ...noblesAndTitles,
            ...artisanJobs,
            ...honorfulPredatorBeasts,
            ...majesticBeasts,
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
        [...artisanJobs, ...sexyParts, ...maleGenitals, ...femaleGenitals]
    ),
    new NameIdea(
        {
            name: 'Spreading',
            needs: [a.prostitute],
            worksForBrothel: true,
        },
        [...artisanJobs]
    ),
    new NameIdea(
        {
            name: 'Enticing',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.rich, a.wealthy],
        },
        [...artisanJobs, ...sexyParts, ...maleGenitals, ...femaleGenitals]
    ),
    new NameIdea(
        {
            name: 'Sinful',
            needs: [a.prostitute],
            worksForBrothel: true,
        },
        [...artisanJobs, ...sexyParts, ...maleGenitals, ...femaleGenitals]
    ),
    new NameIdea(
        {
            name: 'Moaning',
            needs: [a.prostitute],
            worksForBrothel: true,
        },
        [...artisanJobs]
    ),
    new NameIdea(
        {
            name: 'Flirty',
            needs: [a.prostitute],
            worksForBrothel: true,
        },
        [...artisanJobs]
    ),
    new NameIdea(
        {
            name: 'Spanked',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        [...artisanJobs, ...sexyParts]
    ),
    new NameIdea(
        {
            name: 'Lustful',
            needs: [a.prostitute],
            worksForBrothel: true,
            incomeRange: [a.poor, a.modest],
        },
        [...maleGenitals, ...femaleGenitals]
    ),
    new NameIdea(
        {
            name: 'Seducing',
            needs: [a.prostitute],
            worksForBrothel: true,
        },
        [...artisanJobs]
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
        [...sexyParts, ...maleGenitals, ...femaleGenitals]
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
];

// more ideas: Holy, Divine, Virtuous, Rightous, Honorable, Virtuous, Peaceful, Merciful, Rejoicing, Virgin, Decadent, Smiling, Giggling, Singing, Dancing, Joyful, Fierce, Ferocious, Vigorous Enraged, Vigilant, Glowing, Shining, Glorious, Nonchalant, Dapper, Marmor?, Victorious?, Triumphant?, Roaring, Sinister, Insidious?, Drunken, Spitting, Squint-Eyes, One-Eyed, Gleeful, Spiteful, Malicious, Cursed,  Flaming, Fiery, Infernal, Horned, Macabre, Squinting, Whispering, Silent, Venomous, Wrathful, Patient, Lurking,  Decadent, Hungry, Starving, Sleepy, Salty, Fishy, Sailing, Dreaming, Rotten, Savage, Gloomy, Feasting, Dining, Savoring, Chomping, Moaning, Moist, Flitrting, Lascivious, Salacious, Hammering, Forging, Weaving, Knitting,      Dried Out, Thirsty, Spicy, Silky, Cashmere, Velvet, Exhausted more oriental stuff... ,    Colorful, Fruity, Spicy,  more tropical stuff...

// Banquett, Spatz, Duck, Goose

export const nameIdeas: NameIdea[] = [
    ...materials,
    ...characteristics,
    ...specialNames,
];
