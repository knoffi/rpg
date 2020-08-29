import { association } from "../classes/Adjectives";
import { Substantive, substantiveCategory } from "../classes/Substantive";
const a = association;
const s = substantiveCategory;
export const animals = [
  new Substantive("Pheasant", [a.druid, a.nobel, a.forest, a.rich], s.animal),
  new Substantive(
    "Guinea Fowl",
    [a.druid, a.nobel, a.forest, a.rich],
    s.animal
  ),
  new Substantive("Partridges", [a.druid, a.nobel, a.forest, a.rich], s.animal),
  new Substantive("Deer", [a.druid, a.nobel, a.forest], s.animal),
  new Substantive(
    "Stallion",
    [a.druid, a.nobel, a.city, a.adventurer],
    s.animal
  ),
  new Substantive("Carriage", [a.nobel, a.adventurer, a.rich], s.animal),
  new Substantive("Moose", [a.druid, a.nobel, a.forest], s.animal),
  new Substantive("Eagle", [a.druid, a.nobel, a.forest, a.rich], s.animal),
  new Substantive("Falcon", [a.druid, a.nobel, a.forest, a.rich], s.animal),
  new Substantive("Chicken", [a.druid, a.poor, a.forest], s.animal),
  new Substantive("Weasel", [a.druid, a.poor, a.forest], s.animal),
  new Substantive("Mouse", [a.druid, a.poor, a.forest, a.city], s.animal),
  new Substantive("Rat", [a.druid, a.poor, a.criminal, a.city], s.animal),
  new Substantive("Cockroach", [a.druid, a.poor, a.criminal, a.city], s.animal),
  new Substantive("Snake", [a.druid, a.criminal, a.forest], s.animal),
  new Substantive("Butterfly", [a.druid, a.elf, a.forest], s.animal),
  new Substantive("Troll", [a.adventurer, a.forest, a.barbarian], s.animal),
  new Substantive("Cockatrice", [a.adventurer, a.desert, a.bard], s.animal),
  new Substantive("Bugbear", [a.adventurer, a.forest, a.criminal], s.animal),
  new Substantive("Hag", [a.adventurer, a.wizard, a.evil], s.animal),
  new Substantive(
    "Dragon",
    [a.adventurer, a.wizard, a.bard, a.dragonborn],
    s.animal
  ),
  new Substantive("Manticore", [a.adventurer, a.wizard, a.mountain], s.animal),
  new Substantive("Giant", [a.adventurer, a.mountain, a.barbarian], s.animal),
  new Substantive("Goblin", [a.adventurer, a.forest, a.mountain], s.animal),
  new Substantive("Imp", [a.adventurer, a.wizard, a.desert, a.evil], s.animal),
  new Substantive("Unicorn", [a.adventurer, a.wizard, a.nobel], s.animal),
  new Substantive("Mermaid", [a.adventurer, a.prostitute, a.haven], s.animal),
  new Substantive("Nymph", [a.adventurer, a.bard, a.prostitute], s.animal),
  new Substantive("Satyr", [a.adventurer, a.bard, a.prostitute], s.animal),
  new Substantive(
    "Gorgon",
    [a.adventurer, a.wizard, a.sophisticated],
    s.animal
  ),
  new Substantive(
    "Wolpertinger",
    [a.adventurer, a.halfling, a.gnome],
    s.animal
  ),
  new Substantive("Gryphon", [a.adventurer, a.wizard, a.nobel], s.animal),
  new Substantive("Sphinx", [a.adventurer, a.wizard, a.desert], s.animal),
  new Substantive(
    "Merman",
    [a.adventurer, a.haven, a.bard, a.prostitute],
    s.animal
  ),
  new Substantive("Centaur", [a.adventurer, a.wizard, a.barbarian], s.animal),
  new Substantive("Ogre", [a.adventurer, a.barbarian, a.village], s.animal),
];
