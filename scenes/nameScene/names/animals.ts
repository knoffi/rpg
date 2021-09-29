// import { association } from '../../../classes/association';
// import { Substantive, substantiveCategory } from '../../../classes/Substantive';
// import { getDividedProducts, makeProductsFromNecessary } from '../nounDivider';
// const a = association;
// const s = substantiveCategory;

// const dividableAnimals = [
//     new Substantive(
//         'Guinea Fowl',
//         [a.druid, a.knight, a.forest, a.rich],
//         s.animal
//     ),
//     new Substantive(
//         'Partridges',
//         [a.druid, a.knight, a.forest, a.rich],
//         s.animal
//     ),
//     new Substantive('Carriage', [a.knight, a.adventurer, a.rich], s.animal),
//     new Substantive('Troll', [a.adventurer, a.forest, a.barbarian], s.animal),
//     new Substantive('Cockatrice', [a.adventurer, a.desert, a.bard], s.animal),
//     new Substantive('Bugbear', [a.adventurer, a.forest, a.thief], s.animal),
//     new Substantive('Hag', [a.adventurer, a.wizard, a.assasine], s.animal),
//     new Substantive('Giant', [a.adventurer, a.mountain, a.barbarian], s.animal),
//     new Substantive('Goblin', [a.adventurer, a.forest, a.mountain], s.animal),
//     new Substantive(
//         'Imp',
//         [a.adventurer, a.wizard, a.desert, a.assasine],
//         s.animal
//     ),
//     new Substantive('Mermaid', [a.adventurer, a.haven], s.animal),
//     new Substantive('Nymph', [a.adventurer, a.bard], s.animal),
//     new Substantive('Satyr', [a.adventurer, a.bard], s.animal),
//     new Substantive('Gorgon', [a.adventurer, a.wizard, a.wealthy], s.animal),
//     new Substantive(
//         'Wolpertinger',
//         [a.adventurer, a.halfling, a.gnome],
//         s.animal
//     ),
//     new Substantive('Merman', [a.adventurer, a.haven, a.bard], s.animal),
//     new Substantive('Centaur', [a.adventurer, a.wizard, a.barbarian], s.animal),
//     new Substantive('Fiend', [a.tiefling, a.assasine], s.animal),
//     new Substantive('Devil', [a.tiefling, a.thief, a.assasine], s.animal),
//     new Substantive(
//         'Beast',
//         [a.adventurer, a.wizard, a.barbarian, a.druid],
//         s.animal
//     ),
//     new Substantive('Ogre', [a.adventurer, a.barbarian, a.village], s.animal),
// ];
// const prostituteAnimals = {
//     necessary: [a.prostitute],
//     nested: [
//         new Substantive('Mermaid', [a.adventurer, a.haven], s.animal),
//         new Substantive('Nymph', [a.adventurer, a.bard], s.animal),
//         new Substantive('Satyr', [a.adventurer, a.bard], s.animal),

//         new Substantive('Merman', [a.adventurer, a.haven, a.bard], s.animal),
//         new Substantive('Thigh', [], s.animal),
//         new Substantive('Legs', [], s.animal),
//         new Substantive('Bust', [], s.animal),
//         new Substantive('Hole', [], s.animal),
//         new Substantive('Wood', [], s.animal),
//         new Substantive('Shaft', [], s.animal),
//         new Substantive('Prick', [], s.animal),
//         new Substantive('Slit', [], s.animal),
//         new Substantive('Beaver', [], s.animal),
//     ],
// };

// export const animals = getDividedProducts(dividableAnimals).concat(
//     makeProductsFromNecessary(prostituteAnimals)
// );
