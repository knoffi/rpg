import { Adjective, association } from "../classes/Adjectives";
import { substantiveCategory } from "../classes/Substantive";
import { animals } from "./animals";
import { jobs } from "./jobs";
import { solidObjects } from "./solidObjects";

const a = association;
const s = substantiveCategory;

const empty = [] as substantiveCategory[];
export const adjectives = [
  new Adjective("Platinum", [a.dwarf, a.rich, a.nobel], empty),
  new Adjective("Generous", [a.bard, a.rich, a.dwarf], [s.solid]),
  new Adjective("Elegant", [a.bard, a.rich, a.elf], empty),
  new Adjective("Diamant", [a.gnome, a.rich, a.dwarf, a.mountain], empty),
  new Adjective("Golden", [a.nobel, a.rich, a.dwarf], empty),
  new Adjective("Silver", [a.nobel, a.rich, a.elf], empty),
  new Adjective("Rusty", [a.criminal, a.poor], empty),
  new Adjective("Iron", [a.worker, a.nobel], empty),
  new Adjective("Velvet", [a.bard, a.elf, a.rich, a.prostitute], empty),
  new Adjective("Silky", [a.bard, a.elf, a.rich, a.prostitute], empty),
  new Adjective("Twill", [a.village, a.elf, a.halfling], empty),
  new Adjective("Weaving", [a.worker, a.elf, a.halfling, a.human], [s.solid]),
  new Adjective("Knitting", [a.worker, a.elf, a.halfling, a.human], [s.solid]),
  new Adjective("Dreaming", [a.bard, a.elf, a.human], [s.solid]),
  new Adjective("Extravagant", [a.bard, a.rich, a.dwarf], empty),
  new Adjective("Lousy", [a.criminal, a.poor], empty),
  new Adjective("Starving", [a.poor], [s.solid]),
  new Adjective("Pathetic", [a.poor], empty),
  new Adjective("Rotting", [a.criminal, a.poor], empty),
  new Adjective("Wooden", [a.criminal, a.poor, a.forest], empty),
  new Adjective("Not Trustworthy", [a.criminal, a.poor], empty),
  new Adjective("Cockeyed", [a.criminal, a.poor], [s.solid]),
  new Adjective("Squint-eyed", [a.criminal, a.poor], [s.solid]),
  new Adjective("Happy", [], empty),
  new Adjective("Laughing", [], empty),
  new Adjective("Whining", [], [s.solid]),
  new Adjective("Cheering", [], [s.solid]),
  new Adjective("Drinking", [], [s.solid]),
  new Adjective("Dining", [a.rich, a.nobel], [s.solid]),
  new Adjective("Savoring", [a.rich, a.sophisticated], [s.solid]),
  new Adjective("Feasting", [a.worker, a.village], [s.solid]),
  new Adjective("Eating", [a.worker, a.village], [s.solid]),
  new Adjective("Thirsty", [], empty),
  new Adjective("Hungry", [], empty),
  new Adjective("Sleepy", [], empty),
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
];

export const substantives = [
  { category: s.animal, substantives: animals },
  { category: s.solid, substantives: solidObjects },
  { category: s.job, substantives: jobs },
];
