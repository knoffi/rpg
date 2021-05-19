// import { Adjective } from '../../../classes/Adjectives';
// import { association } from '../../../classes/association';
// import { substantiveCategory } from '../../../classes/Substantive';
// import { getDividedProducts, makeProductsFromNecessary } from '../nounDivider';
// import { animals } from './animals';
// import { jobs } from './jobs';
// import { persons } from './persons';
// import { plants } from './plants';
// import { solidObjects } from './solidObjects';

// const a = association;
// const s = substantiveCategory;

// const empty = [] as substantiveCategory[];

// const dividableAdjectives = [
//     new Adjective('Platinum', [a.dwarf, a.rich, a.knight], empty),
//     new Adjective('Ivory', [a.elf, a.rich, a.wealthy, a.knight], empty),
//     new Adjective('Sapphire', [a.elf, a.rich, a.knight], empty),

//     new Adjective('Sapphire', [a.dwarf], empty),
//     new Adjective('Sapphire', [a.gnome], empty),
//     new Adjective('Generous', [a.bard, a.modest], [s.solid]),
//     new Adjective('Generous', [a.wizard, a.rich], [s.solid]),
//     new Adjective('Elegant', [a.bard, a.wealthy, a.elf], empty),
//     new Adjective('Diamant', [a.gnome, a.rich, a.underdark], empty),
//     new Adjective('Diamant', [a.dwarf, a.mountain], empty),
//     new Adjective('Golden', [a.rich], empty),
//     new Adjective('Golden', [a.dwarf], empty),
//     new Adjective('Silver', [a.wealthy, a.elf, a.cleric], empty),
//     new Adjective('Rusty', [a.thief, a.poor], empty),
//     new Adjective('Copper', [a.wealthy, a.adventurer], empty),
//     new Adjective('Bronze', [a.modest, a.bard], empty),
//     new Adjective('Tin', [a.modest, a.cleric], empty),
//     new Adjective('Brass', [a.modest, a.wizard], empty),
//     new Adjective('Steel', [a.modest, a.knight, a.city, a.dwarf], empty),
//     new Adjective('Stone', [a.modest, a.cleric, a.desert], empty),
//     new Adjective('Sand', [a.desert, a.tropical], empty),
//     new Adjective('Leather', [a.modest, a.thief, a.village], empty),
//     new Adjective('Marble', [a.rich, a.cleric], empty),
//     new Adjective('Iron', [a.modest, a.barbarian, a.dwarf], empty),
//     new Adjective('Velvet', [a.elf, a.rich, a.prostitute], empty),
//     new Adjective('Silky', [a.elf, a.rich, a.prostitute], empty),
//     new Adjective('Twill', [a.village, a.halfling, a.modest], empty),
//     new Adjective('Weaving', [a.modest, a.human], [s.solid]),
//     new Adjective('Knitting', [a.modest, a.halfling], [s.solid]),
//     new Adjective('Dreamy', [a.bard, a.elf, a.modest], [s.solid]),
//     new Adjective('Extravagant', [a.bard, a.rich, a.dwarf], empty),
//     new Adjective('Lousy', [a.thief, a.poor], empty),
//     new Adjective('Starving', [a.poor], [s.solid]),
//     new Adjective('Pathetic', [a.poor], empty),
//     new Adjective('Rotten', [a.thief, a.poor], empty),
//     new Adjective('Wooden', [a.forest, a.druid, a.barbarian, a.village], empty),
//     new Adjective('Not Trustworthy', [a.thief, a.poor], empty),
//     new Adjective('Dubious', [a.thief], empty),
//     new Adjective('Frivolous', [a.thief], empty),
//     new Adjective('Backhanded', [a.thief], empty),
//     new Adjective('Cockeyed', [a.thief, a.poor], [s.solid]),
//     new Adjective('Squint-eyed', [a.thief, a.poor], [s.solid]),
//     new Adjective('Happy', [], empty),
//     new Adjective('Laughing', [], empty),
//     new Adjective('Whining', [], empty),
//     new Adjective('Cheering', [], empty),
//     new Adjective('Drinking', [], [s.solid])
//     new Adjective('Salty', [a.haven], [s.solid]),
//     new Adjective('Fishy', [a.haven, a.thief], [s.solid]),
//     new Adjective('Spicy', [a.tropical, a.desert], [s.solid]),
//     new Adjective('Fruity', [a.tropical], [s.solid]),
//     new Adjective('Spitting', [a.thief, a.poor], [s.solid]),

//     new Adjective('Raging', [a.barbarian], [s.solid]),
//     new Adjective('Furious', [a.barbarian], [s.solid]),
//     new Adjective('Angry', [a.barbarian, a.poor], [s.solid]),
//     new Adjective('Savage', [a.barbarian], [s.solid]),
//     new Adjective('Infuriated', [a.barbarian], [s.solid]),
//     new Adjective('Irated', [a.barbarian], [s.solid]),
//     new Adjective('Ferocious', [a.barbarian], [s.solid]),
//     new Adjective('Enraged', [a.barbarian], [s.solid]),
//     new Adjective('Rabid', [a.barbarian], [s.solid]),
//     new Adjective('Vigorous', [a.barbarian], [s.solid]),
//     new Adjective('Fierce', [a.barbarian], [s.solid]),
//     new Adjective(
//         'Grim',
//         [a.barbarian, a.tiefling, a.assasine, a.drow],
//         [s.solid]
//     ),
//     new Adjective('Wrathful', [a.barbarian, a.drow], [s.solid]),
//     new Adjective('Nonchalant', [a.wealthy, a.city, a.bard], [s.solid]),
//     new Adjective('Dapper', [a.elf, a.wealthy, a.rich, a.bard], [s.solid]),
//     new Adjective(
//         'Legendary',
//         [a.adventurer, a.wizard, a.cleric, a.bard],
//         [s.person]
//     ),
//     new Adjective(
//         'Mysterious',
//         [a.adventurer, a.wizard, a.cleric, a.bard, a.desert],
//         [s.solid]
//     ),
//     new Adjective(
//         'Mythical',
//         [a.adventurer, a.wizard, a.cleric, a.bard, a.desert],
//         [s.job, s.person, s.plant]
//     ),
//     new Adjective(
//         'Mystical',
//         [a.adventurer, a.wizard, a.cleric, a.bard, a.desert],
//         [s.job, s.person]
//     ),
//     new Adjective(
//         'Secret',
//         [a.adventurer, a.drow, a.tiefling, a.assasine, a.bard],
//         [s.job, s.person, s.plant]
//     ),
//     new Adjective(
//         'Breathtaking',
//         [a.adventurer, a.gnome, a.bard],
//         [s.job, s.person, s.plant, s.animal]
//     ),
//     new Adjective(
//         'Wondrous',
//         [a.adventurer, a.gnome, a.bard],
//         [s.job, s.person, s.animal]
//     ),
//     new Adjective(
//         'Miraculous',
//         [a.adventurer, a.gnome, a.bard],
//         [s.job, s.person, s.plant, s.animal]
//     ),
//     new Adjective(
//         'Fantastic',
//         [a.adventurer, a.gnome, a.bard],
//         [s.job, s.person, s.plant, s.animal]
//     ),
//     new Adjective('Bizarre', [a.adventurer, a.gnome, a.bard], []),
//     new Adjective('Cursed', [a.tiefling, a.assasine, a.desert], []),
//     new Adjective('Horned', [a.tiefling, a.adventurer], [s.solid]),
//     new Adjective('Macabre', [a.tiefling, a.drow], [s.solid, s.plant]),
//     new Adjective(
//         'Morbid',
//         [a.tiefling, a.drow, a.assasine],
//         [s.solid, s.plant]
//     ),
//     new Adjective('Infernal', [a.tiefling, a.assasine], []),
//     new Adjective('Hellish', [a.tiefling, a.assasine], []),
//     new Adjective('Fiery', [a.tiefling, a.assasine], []),
//     new Adjective('Shady', [a.tiefling, a.assasine, a.thief, a.drow], []),
//     new Adjective('Shifty', [a.tiefling, a.assasine, a.thief, a.drow], []),
//     new Adjective('Unsavory', [a.tiefling, a.assasine, a.thief, a.drow], []),
//     new Adjective('Flaming', [a.tiefling, a.assasine, a.barbarian], []),
//     new Adjective('Seedy', [a.tiefling, a.assasine, a.thief, a.drow], []),
//     new Adjective('Dark', [a.tiefling, a.assasine, a.thief, a.drow], []),
//     new Adjective('Sinister', [a.tiefling, a.assasine, a.thief, a.drow], []),
//     new Adjective('Gloomy', [a.tiefling, a.assasine, a.thief, a.drow], []),
//     new Adjective('Venomous', [a.tropical, a.thief, a.drow], []),
//     new Adjective('Poisonous', [a.tropical, a.assasine, a.thief, a.drow], []),
//     new Adjective('Sweaty', [a.desert, a.poor], [s.plant, s.solid]),
//     new Adjective('Cashmere', [a.desert, a.rich], [s.person, s.job, s.animal]),
//     new Adjective('Melting', [a.desert, a.rich], [s.plant, s.solid]),
//     new Adjective('Dried Out', [a.desert], [s.solid]),
//     new Adjective('Hammering', [a.dwarf, a.modest], [s.solid]),
//     new Adjective('Forging', [a.dwarf, a.modest], [s.solid]),
//     new Adjective('Forged', [a.dwarf], [s.animal, s.job]),
//     new Adjective('Chopping', [a.dwarf, a.poor], [s.solid]),
//     new Adjective('Dining', [a.wealthy, a.knight], [s.solid]),
//     new Adjective('Feasting', [a.modest, a.village, a.dwarf], [s.solid]),
//     new Adjective('Savoring', [a.rich], [s.solid]),
//     new Adjective('Feasting', [a.modest, a.village, a.dwarf], [s.solid]),
//     new Adjective('Eating', [a.poor, a.village], [s.solid]),
//     new Adjective('Munching', [a.poor, a.barbarian], [s.solid]),
//     new Adjective('Chomping', [a.druid, a.dwarf, a.poor], [s.solid]),
//     new Adjective('Chomping', [a.haven], empty),
// ];

// const prostituteAdjectives = {
//     necessary: [a.prostitute],
//     nested: [
//         new Adjective('Moaning', [a.village], [s.solid]),
//         new Adjective('Moaning', [], [s.solid]),
//         new Adjective('Licking', [a.village], [s.solid]),
//         new Adjective('Licking', [a.tiefling], [s.solid]),
//         new Adjective('Licking', [a.modest], [s.solid]),
//         new Adjective('Kissing', [a.village], [s.solid]),
//         new Adjective('Kissing', [a.elf], [s.solid]),
//         new Adjective('Frenching', [a.elf, a.city], [s.solid]),
//         new Adjective('Kissing', [a.modest], [s.solid]),
//         new Adjective('Salacious', [a.rich, a.wealthy], [s.solid]),
//         new Adjective('Juicy', [a.poor, a.modest], [s.solid]),
//         new Adjective('Lascivious', [a.rich], [s.solid]),
//         new Adjective('Lascivious', [a.wealthy], [s.solid]),
//         new Adjective('Moist', [a.rich, a.modest], [s.solid]),
//         new Adjective('Wet', [a.poor, a.haven, a.modest], [s.solid]),
//         new Adjective('Hard', [a.poor, a.modest], empty),
//         new Adjective('Corrupting', [a.thief], [s.solid]),
//         new Adjective('Perverting', [], [s.solid]),
//         new Adjective('Stimulating', [a.modest], [s.solid]),
//         new Adjective('Seducing', [a.modest], [s.solid]),
//         new Adjective('Flirting', [a.city], [s.solid]),
//         new Adjective('Enticing', [a.wealthy], [s.solid]),
//         new Adjective('Alluring', [a.wealthy, a.rich], [s.solid]),
//         new Adjective('Spreading', [a.modest, a.poor], [s.solid]),
//         new Adjective('Spanked', [a.modest, a.poor], [s.solid]),
//     ],
// };

// export const adjectives = getDividedProducts(dividableAdjectives).concat(
//     makeProductsFromNecessary(prostituteAdjectives)
// );

// export const substantives = [
//     { category: s.animal, substantives: animals },
//     { category: s.solid, substantives: solidObjects },
//     { category: s.job, substantives: jobs },
//     { category: s.plant, substantives: plants },
//     { category: s.person, substantives: persons },
// ];
