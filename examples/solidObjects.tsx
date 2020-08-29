import { association } from "../classes/Adjectives";
import { Substantive, substantiveCategory } from "../classes/Substantive";
const a = association;
const s = substantiveCategory;
export const solidObjects = [
  new Substantive("Wheel", [a.adventurer, a.worker, a.city], s.solid),

  new Substantive("Axe", [a.barbarian, a.dwarf, a.dragonborn], s.solid),
  new Substantive("Longsword", [a.nobel, a.elf], s.solid),
  new Substantive("Quarterstaff", [a.wizard, a.elf, a.cleric], s.solid),
  new Substantive("Bow", [a.nobel, a.barbarian, a.elf], s.solid),
  new Substantive("Hammer", [a.barbarian, a.dwarf, a.cleric], s.solid),
  new Substantive("Spear", [a.elf, a.dragonborn], s.solid),
  new Substantive(
    "Shield",
    [a.nobel, a.dwarf, a.cleric, a.dragonborn, a.human],
    s.solid
  ),
  new Substantive("Lance", [a.nobel, a.human], s.solid),
  new Substantive("Helmet", [a.nobel, a.elf, a.dwarf, a.cleric], s.solid),
  new Substantive("Flail", [a.nobel, a.barbarian, a.dwarf, a.cleric], s.solid),
  new Substantive("Claymore", [a.nobel, a.barbarian, a.cleric], s.solid),
  new Substantive("Mace", [a.barbarian, a.cleric], s.solid),
  new Substantive("Robe", [a.wizard, a.elf, a.cleric], s.solid),
  new Substantive("Chain Mail", [a.nobel, a.cleric, a.dragonborn], s.solid),
  new Substantive("Cross Bow", [a.dwarf, a.cleric, a.dragonborn], s.solid),
  new Substantive("Scepter", [a.wizard, a.cleric, a.gnome], s.solid),
  new Substantive("Dagger", [a.halfling, a.criminal, a.dragonborn], s.solid),
  new Substantive("Knife", [a.halfling, a.criminal], s.solid),
  new Substantive("Saber", [a.haven, a.criminal], s.solid),
  new Substantive("Harpune", [a.haven, a.gnome], s.solid),
  new Substantive("Net", [a.haven, a.poor], s.solid),
  new Substantive("Cutlass", [a.haven, a.criminal], s.solid),
  new Substantive("Trident", [a.haven, a.sophisticated], s.solid),
  new Substantive("Sextant", [a.haven, a.sophisticated, a.adventurer], s.solid),
  new Substantive("Anker", [a.haven, a.worker], s.solid),
  new Substantive("Steering Wheel", [a.haven, a.worker], s.solid),
  new Substantive("Cannon", [a.haven], s.solid),
  new Substantive("Rapier", [a.dwarf, a.cleric, a.dragonborn], s.solid),
];
