// import { association } from '../../../classes/association';
// import { Substantive, substantiveCategory } from '../../../classes/Substantive';
// import { getDividedProducts, makeProductsFromNecessary } from '../nounDivider';
// const a = association;
// const s = substantiveCategory;
// const dividableJobs = [
//     new Substantive('Tailor', [a.modest, a.city], s.job),
//     new Substantive('Undertaker', [a.modest, a.assasine], s.job),
//     new Substantive('Butcher', [a.modest, a.village, a.barbarian], s.job),
//     new Substantive('Cobbler', [a.modest, a.city], s.job),
//     new Substantive('Carpenter', [a.modest, a.city], s.job),
//     new Substantive('Weaver', [a.modest, a.village, a.city], s.job),
//     new Substantive(
//         'Blacksmith',
//         [a.modest, a.city, a.village, a.dwarf],
//         s.job
//     ),
//     new Substantive('Jeweler', [a.modest, a.rich, a.city, a.dwarf], s.job),
//     new Substantive('Potter', [a.modest, a.city, a.village], s.job),
//     new Substantive('Butcher', [a.modest, a.village, a.dwarf], s.job),
//     new Substantive('Cheese Maker', [a.modest, a.village, a.halfling], s.job),
//     new Substantive('Baker', [a.modest, a.village, a.halfling], s.job),
//     new Substantive('Brewer', [a.modest, a.village, a.dwarf], s.job),
//     new Substantive('Plummer', [a.modest, a.city, a.village, a.poor], s.job),
//     new Substantive(
//         'Miner',
//         [a.modest, a.mountain, a.underdark, a.dwarf],
//         s.job
//     ),
//     new Substantive('Digger', [a.modest, a.underdark, a.dwarf], s.job),
//     new Substantive('Pharao', [a.rich, a.knight, a.human, a.desert], s.job),
//     new Substantive('Sheikh', [a.rich, a.knight, a.human, a.desert], s.job),
//     new Substantive('Sultan', [a.rich, a.knight, a.human, a.desert], s.job),
//     new Substantive('King', [a.rich, a.knight, a.human, a.city], s.job),
//     new Substantive('Emperor', [a.rich, a.assasine, a.human, a.city], s.job),
//     new Substantive(
//         'Vizier',
//         [a.desert, a.cleric, a.wealthy, a.tiefling],
//         s.job
//     ),
//     new Substantive('Priest', [a.cleric, a.wealthy], s.job),
//     new Substantive('Priestess', [a.cleric, a.wealthy], s.job),
//     new Substantive('Doctor', [a.city, a.wealthy, a.halfling], s.job),
//     new Substantive('Lawyer', [a.city, a.wealthy, a.gnome], s.job),
//     new Substantive('Advocate', [a.city, a.wealthy, a.gnome], s.job),
//     new Substantive('Judge', [a.city, a.wealthy, a.human], s.job),
//     new Substantive('Alchemist', [a.city, a.wealthy, a.human], s.job),
//     new Substantive('Chancellor', [a.city, a.wealthy, a.tiefling], s.job),
//     new Substantive('Geologist', [a.city, a.wealthy, a.tiefling], s.job),
//     new Substantive('Astronomer', [a.city, a.wealthy, a.tiefling], s.job),
// ];

// const prostituteJobs = {
//     necessary: [a.prostitute],
//     nested: [
//         new Substantive(
//             'Mistress',
//             [a.underdark, a.drow, a.human, a.city, a.haven, a.modest],
//             s.job
//         ),
//         new Substantive(
//             'Domina',
//             [a.gnome, a.human, a.city, a.wealthy, a.drow],
//             s.job
//         ),
//         new Substantive(
//             'Wench',
//             [a.village, a.halfling, a.haven, a.dwarf, a.poor],
//             s.job
//         ),
//         new Substantive(
//             'Cowgirl',
//             [a.village, a.mountain, a.haven, a.halfling],
//             s.job
//         ),
//         new Substantive(
//             'Milkmaid',
//             [a.village, a.mountain, a.haven, a.halfling],
//             s.job
//         ),
//         new Substantive(
//             'Maiden',
//             [a.bard, a.wealthy, a.knight, a.elf, a.modest],
//             s.job
//         ),
//         new Substantive(
//             'Harlot',
//             [a.city, a.wealthy, a.elf, a.thief, a.poor],
//             s.job
//         ),
//         new Substantive('Strumpet', [a.dwarf, a.wealthy], s.job),
//         new Substantive('Catamite', [a.drow, a.desert, a.city], s.job),
//         new Substantive('Belly Dancer', [a.desert, a.tropical], s.job),
//         new Substantive('Masseuse', [a.desert, a.tropical], s.job),
//         new Substantive('Dancer', [a.desert, a.tropical], s.job),
//         new Substantive('Gigolo', [a.rich, a.drow], s.job),
//         new Substantive('Nurse', [], s.job),
//         new Substantive('Firefighter', [], s.job),
//     ],
// };

// export const jobs = getDividedProducts(dividableJobs).concat(
//     makeProductsFromNecessary(prostituteJobs)
// );
