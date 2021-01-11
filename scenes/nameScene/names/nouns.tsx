import { Adjective, association } from '../../../classes/Adjectives';
import { substantiveCategory } from '../../../classes/Substantive';
import { getDividedProducts, makeProductsFromNecessary } from '../nounDivider';
import { animals } from './animals';
import { jobs } from './jobs';
import { persons } from './persons';
import { plants } from './plants';
import { solidObjects } from './solidObjects';

const a = association;
const s = substantiveCategory;

const empty = [] as substantiveCategory[];

const dividableAdjectives = [
    new Adjective('Platinum', [a.dwarf, a.rich, a.nobel], empty),
    new Adjective('Ivory', [a.elf, a.rich, a.sophisticated, a.nobel], empty),
    new Adjective('Sapphire', [a.elf, a.rich, a.nobel], empty),

    new Adjective('Sapphire', [a.dwarf], empty),
    new Adjective('Sapphire', [a.gnome], empty),
    new Adjective('Generous', [a.bard, a.worker], [s.solid]),
    new Adjective('Generous', [a.wizard, a.rich], [s.solid]),
    new Adjective('Elegant', [a.bard, a.sophisticated, a.elf], empty),
    new Adjective('Diamant', [a.gnome, a.rich, a.underdark], empty),
    new Adjective('Diamant', [a.dwarf, a.mountain], empty),
    new Adjective('Golden', [a.rich], empty),
    new Adjective('Golden', [a.dwarf], empty),
    new Adjective('Silver', [a.sophisticated, a.elf, a.cleric], empty),
    new Adjective('Rusty', [a.criminal, a.poor], empty),
    new Adjective('Copper', [a.worker, a.prostitute], empty),
    new Adjective('Steel', [a.worker, a.nobel, a.city, a.dwarf], empty),
    new Adjective('Stone', [a.worker, a.cleric, a.desert], empty),
    new Adjective('Sand', [a.desert, a.tropical], empty),
    new Adjective('Leather', [a.worker, a.criminal, a.village], empty),
    new Adjective('Marble', [a.rich, a.cleric], empty),
    new Adjective('Iron', [a.worker, a.barbarian, a.dwarf], empty),
    new Adjective('Velvet', [a.elf, a.rich, a.prostitute], empty),
    new Adjective('Silky', [a.elf, a.rich, a.prostitute], empty),
    new Adjective('Twill', [a.village, a.halfling, a.worker], empty),
    new Adjective('Weaving', [a.worker, a.human], [s.solid]),
    new Adjective('Knitting', [a.worker, a.halfling], [s.solid]),
    new Adjective('Dreamy', [a.bard, a.elf, a.worker], [s.solid]),
    new Adjective('Extravagant', [a.bard, a.rich, a.dwarf], empty),
    new Adjective('Lousy', [a.criminal, a.poor], empty),
    new Adjective('Starving', [a.poor], [s.solid]),
    new Adjective('Pathetic', [a.poor], empty),
    new Adjective('Rotten', [a.criminal, a.poor], empty),
    new Adjective('Wooden', [a.forest, a.druid, a.barbarian, a.village], empty),
    new Adjective('Not Trustworthy', [a.criminal, a.poor], empty),
    new Adjective('Dubious', [a.criminal], empty),
    new Adjective('Frivolous', [a.criminal], empty),
    new Adjective('Backhanded', [a.criminal], empty),
    new Adjective('Cockeyed', [a.criminal, a.poor], [s.solid]),
    new Adjective('Squint-eyed', [a.criminal, a.poor], [s.solid]),
    new Adjective('Happy', [], empty),
    new Adjective('Laughing', [], empty),
    new Adjective('Whining', [], empty),
    new Adjective('Cheering', [], empty),
    new Adjective('Drinking', [], [s.solid]),

    new Adjective('Thirsty', [], empty),
    new Adjective('Hungry', [a.poor, a.barbarian], empty),

    new Adjective('Sleeping', [a.worker], [s.solid]),
    new Adjective('Slumbering', [a.rich, a.bard, a.sophisticated], [s.solid]),
    new Adjective('Exhausted', [], [s.solid, s.plant]),
    new Adjective('Resting', [], [s.solid, s.plant]),
    new Adjective('Salty', [a.haven], [s.solid]),
    new Adjective('Fishy', [a.haven, a.criminal], [s.solid]),
    new Adjective('Spicy', [a.tropical, a.desert], [s.solid]),
    new Adjective('Fruity', [a.tropical], [s.solid]),
    new Adjective('Spitting', [a.criminal, a.poor], [s.solid]),

    new Adjective('Raging', [a.barbarian], [s.solid]),
    new Adjective('Furious', [a.barbarian], [s.solid]),
    new Adjective('Angry', [a.barbarian, a.poor], [s.solid]),
    new Adjective('Savage', [a.barbarian], [s.solid]),
    new Adjective('Infuriated', [a.barbarian], [s.solid]),
    new Adjective('Irated', [a.barbarian], [s.solid]),
    new Adjective('Ferocious', [a.barbarian], [s.solid]),
    new Adjective('Enraged', [a.barbarian], [s.solid]),
    new Adjective('Rabid', [a.barbarian], [s.solid]),
    new Adjective('Vigorous', [a.barbarian], [s.solid]),
    new Adjective('Fierce', [a.barbarian], [s.solid]),
    new Adjective('Grim', [a.barbarian, a.tiefling, a.evil, a.drow], [s.solid]),
    new Adjective('Wrathful', [a.barbarian, a.drow], [s.solid]),
    new Adjective('Nonchalant', [a.sophisticated, a.city, a.bard], [s.solid]),
    new Adjective(
        'Dapper',
        [a.elf, a.sophisticated, a.rich, a.bard],
        [s.solid]
    ),
    new Adjective(
        'Legendary',
        [a.adventurer, a.wizard, a.cleric, a.bard],
        [s.person]
    ),
    new Adjective(
        'Mysterious',
        [a.adventurer, a.wizard, a.cleric, a.bard, a.desert],
        [s.solid]
    ),
    new Adjective(
        'Mythical',
        [a.adventurer, a.wizard, a.cleric, a.bard, a.desert],
        [s.job, s.person, s.plant]
    ),
    new Adjective(
        'Mystical',
        [a.adventurer, a.wizard, a.cleric, a.bard, a.desert],
        [s.job, s.person]
    ),
    new Adjective(
        'Secret',
        [a.adventurer, a.drow, a.tiefling, a.evil, a.bard],
        [s.job, s.person, s.plant]
    ),
    new Adjective(
        'Breathtaking',
        [a.adventurer, a.gnome, a.bard],
        [s.job, s.person, s.plant, s.animal]
    ),
    new Adjective(
        'Wondrous',
        [a.adventurer, a.gnome, a.bard],
        [s.job, s.person, s.animal]
    ),
    new Adjective(
        'Miraculous',
        [a.adventurer, a.gnome, a.bard],
        [s.job, s.person, s.plant, s.animal]
    ),
    new Adjective(
        'Fantastic',
        [a.adventurer, a.gnome, a.bard],
        [s.job, s.person, s.plant, s.animal]
    ),
    new Adjective('Bizarre', [a.adventurer, a.gnome, a.bard], []),
    new Adjective('Cursed', [a.tiefling, a.evil, a.desert], []),
    new Adjective('Horned', [a.tiefling, a.adventurer], [s.solid]),
    new Adjective('Macabre', [a.tiefling, a.drow], [s.solid, s.plant]),
    new Adjective('Morbid', [a.tiefling, a.drow, a.evil], [s.solid, s.plant]),
    new Adjective('Infernal', [a.tiefling, a.evil], []),
    new Adjective('Hellish', [a.tiefling, a.evil], []),
    new Adjective('Fiery', [a.tiefling, a.evil], []),
    new Adjective('Shady', [a.tiefling, a.evil, a.criminal, a.drow], []),
    new Adjective('Shifty', [a.tiefling, a.evil, a.criminal, a.drow], []),
    new Adjective('Unsavory', [a.tiefling, a.evil, a.criminal, a.drow], []),
    new Adjective('Flaming', [a.tiefling, a.evil, a.barbarian], []),
    new Adjective('Seedy', [a.tiefling, a.evil, a.criminal, a.drow], []),
    new Adjective('Dark', [a.tiefling, a.evil, a.criminal, a.drow], []),
    new Adjective('Sinister', [a.tiefling, a.evil, a.criminal, a.drow], []),
    new Adjective('Gloomy', [a.tiefling, a.evil, a.criminal, a.drow], []),
    new Adjective('Venomous', [a.tropical, a.criminal, a.drow], []),
    new Adjective('Poisonous', [a.tropical, a.evil, a.criminal, a.drow], []),
    new Adjective('Sweaty', [a.desert, a.poor], [s.plant, s.solid]),
    new Adjective('Cashmere', [a.desert, a.rich], [s.person, s.job, s.animal]),
    new Adjective('Melting', [a.desert, a.rich], [s.plant, s.solid]),
    new Adjective('Dried Out', [a.desert], [s.solid]),
    new Adjective('Hammering', [a.dwarf, a.worker], [s.solid]),
    new Adjective('Forging', [a.dwarf, a.worker], [s.solid]),
    new Adjective('Forged', [a.dwarf], [s.animal, s.job]),
    new Adjective('Chopping', [a.dwarf, a.poor], [s.solid]),
    new Adjective('Dining', [a.sophisticated, a.nobel], [s.solid]),
    new Adjective('Feasting', [a.worker, a.village, a.dwarf], [s.solid]),
    new Adjective('Savoring', [a.rich], [s.solid]),
    new Adjective('Feasting', [a.worker, a.village, a.dwarf], [s.solid]),
    new Adjective('Eating', [a.poor, a.village], [s.solid]),
    new Adjective('Munching', [a.poor, a.barbarian], [s.solid]),
    new Adjective('Chomping', [a.druid, a.dwarf, a.poor], [s.solid]),
    new Adjective('Chomping', [a.haven], empty),
];

const prostituteAdjectives = {
    necessary: [a.prostitute],
    nested: [
        new Adjective('Moaning', [a.village], [s.solid]),
        new Adjective('Moaning', [], [s.solid]),
        new Adjective('Licking', [a.village], [s.solid]),
        new Adjective('Licking', [a.tiefling], [s.solid]),
        new Adjective('Licking', [a.worker], [s.solid]),
        new Adjective('Kissing', [a.village], [s.solid]),
        new Adjective('Kissing', [a.elf], [s.solid]),
        new Adjective('Frenching', [a.elf, a.city], [s.solid]),
        new Adjective('Kissing', [a.worker], [s.solid]),
        new Adjective('Salacious', [a.rich, a.sophisticated], [s.solid]),
        new Adjective('Juicy', [a.poor, a.worker], [s.solid]),
        new Adjective('Lascivious', [a.rich], [s.solid]),
        new Adjective('Lascivious', [a.sophisticated], [s.solid]),
        new Adjective('Moist', [a.rich, a.worker], [s.solid]),
        new Adjective('Wet', [a.poor, a.haven, a.worker], [s.solid]),
        new Adjective('Hard', [a.poor, a.worker], empty),
        new Adjective('Corrupting', [a.criminal], [s.solid]),
        new Adjective('Perverting', [], [s.solid]),
        new Adjective('Stimulating', [a.worker], [s.solid]),
        new Adjective('Seducing', [a.worker], [s.solid]),
        new Adjective('Enticing', [a.sophisticated], [s.solid]),
        new Adjective('Alluring', [a.sophisticated, a.rich], [s.solid]),
        new Adjective('Spreading', [a.worker, a.poor], [s.solid]),
        new Adjective('Spanked', [a.worker, a.poor], [s.solid]),
    ],
};

export const adjectives = getDividedProducts(dividableAdjectives).concat(
    makeProductsFromNecessary(prostituteAdjectives)
);

export const substantives = [
    { category: s.animal, substantives: animals },
    { category: s.solid, substantives: solidObjects },
    { category: s.job, substantives: jobs },
    { category: s.plant, substantives: plants },
    { category: s.person, substantives: persons },
];
