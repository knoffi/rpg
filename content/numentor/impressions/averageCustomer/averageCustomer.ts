import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { emptyDescriptionAsset } from '../../../../classes/idea/DescriptionAsset';
import { ImpressionIdea } from '../../../../classes/idea/ImpressionIdea';
import { Noticable } from '../../../../classes/idea/Noticable';
import { Pattern } from '../../../../classes/idea/Patterns/Pattern';
const a = association;
export const averageCustomers: ImpressionIdea[] = [
    new ImpressionIdea(
        {
            name: 'Drinking beer',
            raceRange: [a.dwarf, a.human, a.halfling],
            powerFits: [a.dwarf, a.barbarian, a.soldier, a.modest, a.poor],
            worksForBrothel: true,
            worksForAssasines: true,
            patterns: [Pattern.IMPRESSIONS_lager, Pattern.IMPRESSIONS_porter],
            key: AssetKey.AVERAGE_CUSTOMER_drinking,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Frisky behavior & loud laughter',
            raceRange: [a.dwarf, a.human, a.halfling, a.gnome],
            powerFits: [a.dwarf, a.barbarian, a.soldier, a.bard],
            worksForBrothel: true,
            worksForAssasines: true,
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Discussing investments',
            raceRange: [a.human, a.gnome, a.tiefling],
            misfits: [a.poor, a.adventurer, a.barbarian, a.druid],
            powerFits: [
                a.human,
                a.wealthy,
                a.rich,
                a.city,
                a.haven,
                a.tiefling,
            ],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Drinking whisky',
            raceRange: [a.human, a.gnome, a.tiefling],
            misfits: [a.desert, a.tropical],
            worksForAllCriminals: true,
            powerFits: [a.human, a.gnome, a.assasine],
            patterns: [Pattern.IMPRESSIONS_whiskey],
            key: AssetKey.AVERAGE_CUSTOMER_drinking,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Drinking Ale',
            landRange: [a.haven, a.city],
            powerFits: [a.haven],
            worksForAllCriminals: true,
            patterns: [Pattern.IMPRESSIONS_ale],
            key: AssetKey.AVERAGE_CUSTOMER_drinking,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Drinking Rum',
            landRange: [a.haven, a.tropical],
            powerFits: [a.haven, a.tropical],
            worksForAllCriminals: true,
            key: AssetKey.AVERAGE_CUSTOMER_drinking,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Complaining about politics',
            landRange: [a.village, a.city, a.haven],
            misfits: [a.barbarian, a.adventurer, a.druid],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.city, a.haven, a.modest, a.poor],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Complaining about the village major',
            misfits: [a.barbarian, a.adventurer],
            landRange: [a.village],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.modest, a.poor],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Complaining about their work',
            landRange: [a.village, a.city, a.haven],
            misfits: [a.barbarian, a.adventurer, a.druid],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.city, a.haven, a.modest, a.poor, a.village],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Complaining about high taxes',
            landRange: [a.village, a.city, a.haven],
            misfits: [a.barbarian, a.adventurer, a.druid],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.city, a.haven, a.modest, a.poor, a.village],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Complaining about the weather',
            landRange: [a.forest, a.mountain, a.village],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.forest, a.mountain, a.village, a.modest, a.poor],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Complaining about the heat',
            landRange: [a.tropical, a.desert],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.tropical, a.desert, a.modest, a.poor],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Complaining about their food',
            incomeRange: [a.poor],
            worksForBrothel: true,
            powerFits: [a.poor],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Singing and dancing to folk music',
            needsOne: [a.halfling, a.village, a.city],
            incomeRange: [a.modest, a.poor],
            worksForBrothel: true,
            powerFits: [a.modest, a.village, a.bard, a.halfling, a.barbarian],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Giggling and gossiping about others',
            misfits: [a.barbarian, a.adventurer, a.druid],
            raceRange: [a.gnome],
            powerFits: [a.gnome, a.village],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Talking about the newest inventions',
            misfits: [a.barbarian, a.druid],
            raceRange: [a.gnome],
            powerFits: [a.gnome, a.city, a.wizard],
            worksForAssasines: true,
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Gossiping about the local nobles',
            misfits: [a.barbarian, a.druid],
            raceRange: [a.gnome],
            powerFits: [a.gnome, a.bard, a.wealthy, a.rich],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Listening to harp music',
            misfits: [a.barbarian],
            raceRange: [a.elf],
            powerFits: [a.elf, a.wealthy],
            needsOne: [a.elf, a.wealthy],
            worksForBrothel: true,
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Drinking nectar',
            raceRange: [a.elf],
            powerFits: [a.elf, a.wealthy, a.druid],
            worksForBrothel: true,
            key: AssetKey.AVERAGE_CUSTOMER_drinking,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Drinking white wine',
            misfits: [a.desert, a.tropical, a.cleric],
            powerFits: [a.wealthy, a.elf],
            patterns: [Pattern.IMPRESSIONS_whiteWine],
            worksForThiefs: true,
            worksForBrothel: true,
            key: AssetKey.AVERAGE_CUSTOMER_drinking,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Drinking red wine',
            misfits: [a.desert, a.tropical],
            powerFits: [a.drow, a.tiefling, a.wealthy, a.cleric],
            patterns: [Pattern.IMPRESSIONS_redWine],
            worksForThiefs: true,
            worksForBrothel: true,
            key: AssetKey.AVERAGE_CUSTOMER_drinking,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Mistrustful & sinister',
            needsOne: [a.thief, a.assasine, a.drow, a.tiefling],
            powerFits: [a.tiefling, a.drow, a.thief, a.assasine],
            worksForThiefs: true,
            worksForAssasines: true,
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Playing card games',
            raceRange: [a.tiefling, a.human, a.gnome],
            powerFits: [a.tiefling, a.wealthy],
            worksForThiefs: true,
            worksForAssasines: true,
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Drinking brandy',
            raceRange: [a.tiefling],
            powerFits: [a.tiefling, a.wealthy],
            worksForAllCriminals: true,
            key: AssetKey.AVERAGE_CUSTOMER_drinking,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Meeting their family',
            misfits: [a.drow, a.adventurer],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.village, a.halfling, a.modest],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Meeting their friends',
            misfits: [a.drow, a.adventurer],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.village, a.halfling, a.modest],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Drinking mead',
            misfits: [a.desert, a.haven],
            incomeRange: [a.poor, a.modest],
            powerFits: [a.adventurer, a.knight, a.barbarian, a.soldier],
            patterns: [Pattern.IMPRESSIONS_mead],
            worksForAllCriminals: true,
            key: AssetKey.AVERAGE_CUSTOMER_drinking,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Dining with business partners',
            raceRange: [a.human],
            landRange: [a.city, a.haven],
            incomeRange: [a.rich, a.wealthy],
            classRange: [],
            powerFits: [a.rich, a.wealthy, a.human],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Glimpsing at the half-naked servants',
            worksForBrothel: true,
            needs: [a.prostitute],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Discussing the new wanted posters',
            worksForAssasines: true,
            needs: [a.assasine],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Discussing the new missions on the quest board',
            needsOne: [a.adventurer, a.bard],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Polishing their weapons',
            worksForAssasines: true,
            needsOne: [a.assasine, a.drow],
            key: AssetKey.AVERAGE_CUSTOMER_behavior,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
    new ImpressionIdea(
        {
            name: 'Drinking hard booze',
            worksForAssasines: true,
            needsOne: [a.assasine, a.barbarian],
            patterns: [Pattern.IMPRESSIONS_whiskey],
            key: AssetKey.AVERAGE_CUSTOMER_drinking,
        },
        [emptyDescriptionAsset],
        Noticable.averageCustomer
    ),
];
