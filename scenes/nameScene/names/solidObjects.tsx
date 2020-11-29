import { association } from '../../../classes/Adjectives';
import { Substantive, substantiveCategory } from '../../../classes/Substantive';
import { getDividedProducts, makeProductsFromNecessary } from '../nounDivider';
const a = association;
const s = substantiveCategory;
const dividableSolidObjects = [
    new Substantive('Wheel', [a.adventurer, a.worker, a.city], s.solid),

    new Substantive('Axe', [a.barbarian, a.dwarf, a.dragonborn], s.solid),
    new Substantive('Longsword', [a.nobel, a.elf, a.adventurer], s.solid),
    new Substantive(
        'Quarterstaff',
        [a.wizard, a.elf, a.cleric, a.druid],
        s.solid
    ),
    new Substantive('Wand', [a.wizard, a.cleric, a.druid], s.solid),
    new Substantive('Composite Bow', [a.nobel, a.barbarian, a.human], s.solid),
    new Substantive('Long Bow', [a.elf, a.forest, a.dragonborn], s.solid),
    new Substantive('Short Bow', [a.city, a.halfling, a.dragonborn], s.solid),
    new Substantive('Slingshot', [a.gnome, a.halfling, a.village], s.solid),
    new Substantive('Hammer', [a.barbarian, a.dwarf, a.cleric], s.solid),
    new Substantive('Spear', [a.elf, a.dragonborn], s.solid),
    new Substantive(
        'Shield',
        [a.nobel, a.dwarf, a.cleric, a.dragonborn, a.human],
        s.solid
    ),
    new Substantive('Lance', [a.nobel, a.human], s.solid),
    new Substantive('Helmet', [a.nobel, a.elf, a.dwarf, a.cleric], s.solid),
    new Substantive(
        'Flail',
        [a.nobel, a.barbarian, a.dwarf, a.cleric],
        s.solid
    ),
    new Substantive('Claymore', [a.nobel, a.barbarian, a.cleric], s.solid),
    new Substantive('Mace', [a.barbarian, a.cleric], s.solid),
    new Substantive('Robe', [a.wizard, a.elf, a.cleric, a.druid], s.solid),
    new Substantive('Chain Mail', [a.nobel, a.cleric, a.dragonborn], s.solid),
    new Substantive('Cross Bow', [a.dwarf, a.cleric, a.drow], s.solid),
    new Substantive('Scepter', [a.wizard, a.cleric, a.druid], s.solid),
    new Substantive('Dagger', [a.criminal, a.dragonborn, a.drow], s.solid),
    new Substantive('Knife', [a.halfling, a.criminal, a.drow], s.solid),
    new Substantive('Saber', [a.haven, a.criminal], s.solid),
    new Substantive('Harpune', [a.haven, a.gnome], s.solid),
    new Substantive('Net', [a.haven, a.poor], s.solid),
    new Substantive('Cutlass', [a.haven, a.criminal], s.solid),
    new Substantive('Trident', [a.haven, a.sophisticated], s.solid),
    new Substantive(
        'Sextant',
        [a.haven, a.sophisticated, a.adventurer],
        s.solid
    ),
    new Substantive('Anker', [a.haven, a.worker], s.solid),
    new Substantive('Steering Wheel', [a.haven, a.worker], s.solid),
    new Substantive('Cannon', [a.haven], s.solid),
    new Substantive('Rapier', [a.haven, a.bard, a.dragonborn], s.solid),
    new Substantive('Bell', [a.cleric, a.city], s.solid),
    new Substantive('Candle', [a.cleric, a.wizard], s.solid),
    new Substantive('Scroll', [a.cleric, a.wizard], s.solid),
    new Substantive('Temple', [a.cleric, a.druid], s.solid),
    new Substantive('Altar', [a.cleric, a.druid], s.solid),
    new Substantive('Relic', [a.cleric, a.wizard], s.solid),
    new Substantive('Censer', [a.cleric], s.solid),
    new Substantive('Offertory', [a.cleric], s.solid),
    new Substantive('Goblet', [a.wizard, a.cleric], s.solid),
    new Substantive('Chalice', [a.wizard, a.cleric, a.rich, a.desert], s.solid),
    new Substantive('Tome', [a.wizard, a.cleric], s.solid),
    new Substantive('Grail', [a.wizard, a.cleric, a.nobel], s.solid),
    new Substantive('Saddle', [a.bard, a.nobel], s.solid),
    new Substantive('Banner', [a.nobel, a.human], s.solid),
    new Substantive('Horseshoe', [a.nobel, a.dwarf], s.solid),
    new Substantive('Saddle', [a.nobel, a.human], s.solid),
    new Substantive('Tower', [a.nobel, a.human], s.solid),
    new Substantive('Catapult', [a.nobel, a.gnome, a.barbarian], s.solid),
    new Substantive('Trebuchet', [a.nobel, a.dwarf], s.solid),
    new Substantive('Ram', [a.barbarian, a.dwarf], s.solid),
    new Substantive('Ballista', [a.elf, a.dragonborn], s.solid),
    new Substantive('Gauntlet', [a.nobel, a.human], s.solid),
    new Substantive('Bridle', [a.nobel, a.human], s.solid),
    new Substantive('Nest', [a.druid, a.forest, a.mountain], s.solid),
    new Substantive('Door', [], s.solid),
    new Substantive('Gate', [], s.solid),
    new Substantive('Wall', [], s.solid),
    new Substantive('Turban', [a.desert], s.solid),
    new Substantive('Caravan', [a.desert], s.solid),
    new Substantive('Sand', [a.desert], s.solid),
    new Substantive('Carpet', [a.desert], s.solid),
    new Substantive('Sandstorm', [a.desert], s.solid),
    new Substantive('Chakram', [a.desert, a.elf, a.adventurer], s.solid),
    new Substantive('Scimitar', [a.desert, a.dragonborn, a.human], s.solid),
    new Substantive('Shamshir', [a.desert, a.nobel], s.solid),
    new Substantive('Pyramid', [a.desert, a.rich], s.solid),
    new Substantive('Sphinx', [a.desert, a.adventurer], s.solid),
    new Substantive('Palace', [a.desert, a.nobel, a.gnome], s.solid),
    new Substantive('Mummy', [a.desert, a.adventurer], s.solid),
    new Substantive('Tomb', [a.desert, a.adventurer], s.solid),
    new Substantive('Chariot', [a.desert, a.dragonborn], s.solid),
    new Substantive('Thobe', [a.desert, a.rich], s.solid),
    new Substantive('Thawb', [a.desert, a.sophisticated], s.solid),
    new Substantive('Tagelmust', [a.desert, a.nobel], s.solid),
    new Substantive('Niqaab', [a.desert, a.cleric], s.solid),
    new Substantive('Veil', [a.desert], s.solid),
    new Substantive('Forge', [a.dwarf, a.worker], s.solid),
    new Substantive('Barrel', [a.dwarf, a.worker, a.village], s.solid),
    new Substantive('Drum', [a.dwarf, a.bard, a.sophisticated], s.solid),
    new Substantive('Crane', [a.dwarf, a.worker], s.solid),
    new Substantive('Pickaxe', [a.dwarf, a.worker], s.solid),
    new Substantive('Mine', [a.dwarf, a.underdark, a.mountain], s.solid),
    new Substantive(
        'Sapphire',
        [a.dwarf, a.rich, a.underdark, a.mountain],
        s.solid
    ),
    new Substantive(
        'Ruby',
        [a.dwarf, a.rich, a.underdark, a.mountain],
        s.solid
    ),
    new Substantive(
        'Tigers-Eye',
        [a.dwarf, a.rich, a.underdark, a.mountain],
        s.solid
    ),
    new Substantive(
        'Obsidian',
        [a.dwarf, a.rich, a.underdark, a.mountain],
        s.solid
    ),
    new Substantive(
        'Malachite',
        [a.dwarf, a.rich, a.underdark, a.mountain],
        s.solid
    ),
    new Substantive(
        'Quartz',
        [a.dwarf, a.rich, a.underdark, a.mountain],
        s.solid
    ),
];
const prostituteSolidObjects = {
    necessary: [a.prostitute],
    nested: [new Substantive('Veil', [a.desert], s.solid)],
};

export const solidObjects = getDividedProducts(dividableSolidObjects).concat(
    makeProductsFromNecessary(prostituteSolidObjects)
);

// TODO: This should be a new category: "landscape"
//new Substantive("Rock", [a.druid,a.mountain], s.solid),
//new Substantive("Oasis", [a.druid,a.desert], s.solid),
//new Substantive("Dune", [a.druid,a.desert], s.solid),
//new Substantive("Beach", [a.druid,a.desert], s.solid),
