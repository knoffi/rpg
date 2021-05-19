import { association } from '../../../classes/association';
import { NameIdea } from '../../../classes/NameIdea';
import { artisanJobs, gastronomyJobs, noblesAndTitles } from './jobs';
import { majesticBeasts } from './majesticBeasts';
import { materials } from './material';
import {
    criminalPredatorBeasts,
    honorfulPredatorBeasts,
} from './predatorBeasts';
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
        ]
    ),
    new NameIdea(
        {
            name: 'Exhausted',
            worksForBrothel: true,
        },
        [...noblesAndTitles, ...artisanJobs]
    ),
    new NameIdea(
        {
            name: 'Resting',
            worksForBrothel: true,
        },
        [...noblesAndTitles, ...artisanJobs, ...weapons]
    ),
];

// more ideas: Alluring, Holy, Divine, Virtuous, Rightous, Honorable, Virtuous, Peaceful, Merciful, Rejoicing, Virgin, Decadent, Smiling, Giggling, Singing, Dancing, Joyful, Resting, Fierce, Ferocious, Vigorous Enraged, Vigilant, Glowing, Shining, Glorious, Nonchalant, Dapper, Marmor?, Victorious?, Triumphant?, Roaring, Sinister, Insidious?, Drunken, Spitting, Squint-Eyes, One-Eyed, Gleeful, Spiteful, Malicious, Cursed,  Flaming, Fiery, Infernal, Horned, Macabre, Squinting, Whispering, Silent, Venomous, Wrathful, Patient, Lurking, Slumbering, Decadent, Hungry, Starving, Sleepy, Salty, Fishy, Sailing, Dreaming, Rotten, Savage, Gloomy, Feasting, Dining, Savoring, Chomping, Moaning, Licking, Enticing, Alluring, Moist, Flitrting, Seducing, Spanking, Spreading, Lascivious, Salacious, Hard, Long, Wet, Hammering, Forging, Weaving, Knitting,      Dried Out, Thirsty, Spicy, Silky, Cashmere, Velvet, Exhausted more oriental stuff... ,    Colorful, Fruity, Spicy,  more tropical stuff...

export const nameIdeas: NameIdea[] = [...materials, ...characteristics];
