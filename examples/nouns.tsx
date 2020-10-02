import { Adjective, association } from "../classes/Adjectives";
import { substantiveCategory } from "../classes/Substantive";
import { animals } from "./animals";
import { jobs } from "./jobs";
import { plants } from "./plants";
import { solidObjects } from "./solidObjects";

const a = association;
const s = substantiveCategory;

const empty = [] as substantiveCategory[];

export const adjectives = [
  new Adjective("Platinum", [a.dwarf, a.rich, a.nobel], empty),
  new Adjective("Ivory", [a.elf, a.rich, a.nobel], empty),
  new Adjective("Saphire", [a.elf, a.rich, a.nobel], empty),
  new Adjective("Generous", [a.bard, a.rich, a.dwarf], [s.solid]),
  new Adjective("Elegant", [a.bard, a.rich, a.elf], empty),
  new Adjective("Diamant", [a.gnome, a.rich, a.dwarf, a.mountain], empty),
  new Adjective("Golden", [a.nobel, a.rich, a.dwarf], empty),
  new Adjective("Silver", [a.nobel, a.rich, a.elf, a.cleric], empty),
  new Adjective("Rusty", [a.criminal, a.poor], empty),
  new Adjective("Copper", [a.worker, a.poor, a.criminal, a.prostitute], empty),
  new Adjective("Steel", [a.worker, a.nobel], empty),
  new Adjective("Stone", [a.worker, a.city, a.nobel, a.desert], empty),
  new Adjective("Sand", [a.tropical, a.desert], empty),
  new Adjective("Leather", [a.worker, a.criminal, a.village], empty),
  new Adjective("Marble", [a.nobel, a.rich, a.sophisticated, a.cleric], empty),
  new Adjective("Iron", [a.worker, a.nobel], empty),
  new Adjective("Velvet", [a.bard, a.elf, a.rich, a.prostitute], empty),
  new Adjective("Silky", [a.bard, a.elf, a.rich, a.prostitute], empty),
  new Adjective("Twill", [a.village, a.elf, a.halfling], empty),
  new Adjective("Weaving", [a.worker, a.elf, a.halfling, a.human], [s.solid]),
  new Adjective("Knitting", [a.worker, a.elf, a.halfling, a.human], [s.solid]),
  new Adjective("Dreamy", [a.bard, a.elf, a.human], [s.solid]),
  new Adjective("Extravagant", [a.bard, a.rich, a.dwarf], empty),
  new Adjective("Lousy", [a.criminal, a.poor], empty),
  new Adjective("Starving", [a.poor], [s.solid]),
  new Adjective("Pathetic", [a.poor], empty),
  new Adjective("Rotting", [a.criminal, a.poor], empty),
  new Adjective("Wooden", [a.criminal, a.poor, a.forest], empty),
  new Adjective("Not Trustworthy", [a.criminal, a.poor], empty),
  new Adjective("Dubious", [a.criminal, a.poor], empty),
  new Adjective("Frivolous", [a.criminal, a.poor], empty),
  new Adjective("Backhanded", [a.criminal, a.poor], empty),
  new Adjective("Cockeyed", [a.criminal, a.poor], [s.solid]),
  new Adjective("Squint-eyed", [a.criminal, a.poor], [s.solid]),
  new Adjective("Happy", [], empty),
  new Adjective("Laughing", [], empty),
  new Adjective("Whining", [], empty),
  new Adjective("Cheering", [], empty),
  new Adjective("Drinking", [], [s.solid]),
  new Adjective("Dining", [a.rich, a.nobel], [s.solid]),
  new Adjective("Savoring", [a.rich, a.sophisticated], [s.solid]),
  new Adjective("Feasting", [a.worker, a.village], [s.solid]),
  new Adjective("Eating", [a.worker, a.village], [s.solid]),
  new Adjective("Thirsty", [], empty),
  new Adjective("Hungry", [a.worker, a.poor, a.barbarian], empty),
  new Adjective("Munching", [a.druid, a.poor, a.barbarian], [s.solid]),
  new Adjective("Chomping", [a.druid, a.dwarf, a.barbarian, a.poor], [s.solid]),
  new Adjective("Sleeping", [a.worker, a.poor], empty),
  new Adjective("Slumbering", [a.rich, a.bard, a.sophisticated], empty),
  new Adjective("Exhausted", [], [s.solid, s.plant]),
  new Adjective("Resting", [], [s.solid, s.plant]),
  new Adjective("Salty", [a.haven], [s.solid]),
  new Adjective("Fishy", [a.haven, a.criminal], [s.solid]),
  new Adjective("Spicy", [a.tropical], [s.solid]),
  new Adjective("Fruity", [a.tropical], [s.solid]),
  new Adjective("Spitting", [a.criminal, a.poor], [s.solid]),
  new Adjective("Moaning", [a.prostitute, a.village], [s.solid]),
  new Adjective("Licking", [a.prostitute, a.village], [s.solid]),
  new Adjective("Kissing", [a.prostitute, a.village], [s.solid]),
  new Adjective("Salacious", [a.prostitute, a.rich], [s.solid]),
  new Adjective("Juicy", [a.prostitute, a.poor], [s.solid]),
  new Adjective("Lascivious", [a.prostitute, a.rich], [s.solid]),
  new Adjective("Moist", [a.prostitute, a.rich], [s.solid]),
  new Adjective("Wet", [a.prostitute, a.poor, a.haven], [s.solid]),
  new Adjective("Hard", [a.prostitute, a.poor], empty),
  new Adjective("Corrupting", [a.prostitute, a.criminal], [s.solid]),
  new Adjective("Perverting", [a.prostitute, a.criminal], [s.solid]),
  new Adjective("Stimulating", [a.prostitute, a.worker], [s.solid]),
  new Adjective("Seducing", [a.prostitute, a.worker], [s.solid]),
  new Adjective("Enticing", [a.prostitute, a.sophisticated], [s.solid]),
  new Adjective("Alluring", [a.prostitute, a.sophisticated, a.rich], [s.solid]),
  new Adjective("Raging", [a.barbarian], [s.solid]),
  new Adjective("Furious", [a.barbarian], [s.solid]),
  new Adjective("Angry", [a.barbarian, a.poor], [s.solid]),
  new Adjective("Savage", [a.barbarian], [s.solid]),
  new Adjective("Infuriated", [a.barbarian], [s.solid]),
  new Adjective("Irated", [a.barbarian], [s.solid]),
  new Adjective("Ferocious", [a.barbarian], [s.solid]),
  new Adjective("Enraged", [a.barbarian], [s.solid]),
  new Adjective("Rabid", [a.barbarian], [s.solid]),
  new Adjective("Vigorous", [a.barbarian], [s.solid]),
  new Adjective("Fierce", [a.barbarian], [s.solid]),
  new Adjective("Grim", [a.barbarian, a.tiefling, a.evil, a.drow], [s.solid]),
  new Adjective("Wrathful", [a.barbarian, a.drow], [s.solid]),
  new Adjective("Nonchalant", [a.sophisticated, a.city, a.bard], [s.solid]),
  new Adjective("Dapper", [a.elf, a.sophisticated, a.rich, a.bard], [s.solid]),
  new Adjective(
    "Legendary",
    [a.adventurer, a.wizard, a.cleric, a.bard],
    [s.person]
  ),
  new Adjective(
    "Mysterious",
    [a.adventurer, a.wizard, a.cleric, a.bard, a.desert],
    [s.solid]
  ),
  new Adjective(
    "Mythical",
    [a.adventurer, a.wizard, a.cleric, a.bard, a.desert],
    [s.job, s.person, s.plant]
  ),
  new Adjective(
    "Mystical",
    [a.adventurer, a.wizard, a.cleric, a.bard, a.desert],
    [s.job, s.person]
  ),
  new Adjective(
    "Secret",
    [a.adventurer, a.drow, a.tiefling, a.evil, a.bard],
    [s.job, s.person, s.plant]
  ),
  new Adjective(
    "Breathtaking",
    [a.adventurer, a.gnome, a.bard],
    [s.job, s.person, s.plant, s.animal]
  ),
  new Adjective(
    "Wondrous",
    [a.adventurer, a.gnome, a.bard],
    [s.job, s.person, s.animal]
  ),
  new Adjective(
    "Miraculous",
    [a.adventurer, a.gnome, a.bard],
    [s.job, s.person, s.plant, s.animal]
  ),
  new Adjective(
    "Fantastic",
    [a.adventurer, a.gnome, a.bard],
    [s.job, s.person, s.plant, s.animal]
  ),
  new Adjective("Bizarre", [a.adventurer, a.gnome, a.bard], []),
  new Adjective("Cursed", [a.tiefling, a.evil, a.desert], []),
  new Adjective("Horned", [a.tiefling], [s.solid]),
  new Adjective("Macabre", [a.tiefling, a.drow], [s.solid, s.plant]),
  new Adjective("Morbid", [a.tiefling, a.drow, a.evil], [s.solid, s.plant]),
  new Adjective("Infernal", [a.tiefling, a.evil], []),
  new Adjective("Hellish", [a.tiefling, a.evil], []),
  new Adjective("Fiery", [a.tiefling, a.evil], []),
  new Adjective("Shady", [a.tiefling, a.evil, a.criminal, a.drow], []),
  new Adjective("Shifty", [a.tiefling, a.evil, a.criminal, a.drow], []),
  new Adjective("Unsavory", [a.tiefling, a.evil, a.criminal, a.drow], []),
  new Adjective("Flaming", [a.tiefling, a.evil, a.barbarian], []),
  new Adjective("Seedy", [a.tiefling, a.evil, a.criminal, a.drow], []),
  new Adjective("Dark", [a.tiefling, a.evil, a.criminal, a.drow], []),
  new Adjective("Sinister", [a.tiefling, a.evil, a.criminal, a.drow], []),
  new Adjective("Gloomy", [a.tiefling, a.evil, a.criminal, a.drow], []),
  new Adjective("Venomous", [a.tropical, a.criminal, a.drow], []),
  new Adjective("Poisonous", [a.tropical, a.evil, a.criminal, a.drow], []),
  new Adjective("Sweaty", [a.desert, a.poor], [s.plant, s.solid]),
  new Adjective("Cashmere", [a.desert, a.rich], [s.person, s.job, s.animal]),
  new Adjective("Melting", [a.tropical, a.desert, a.rich], [s.plant, s.solid]),
  new Adjective("Dried Out", [a.desert], [s.solid]),
];

export const substantives = [
  { category: s.animal, substantives: animals },
  { category: s.solid, substantives: solidObjects },
  { category: s.job, substantives: jobs },
  { category: s.plant, substantives: plants },
];
