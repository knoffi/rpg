import { association } from "../classes/Adjectives";
import { Substantive, substantiveCategory } from "../classes/Substantive";
const a = association;
const s = substantiveCategory;
export const jobs = [
  new Substantive("Tailor", [a.worker, a.city], s.job),
  new Substantive("Cobbler", [a.worker, a.city], s.job),
  new Substantive("Carpenter", [a.worker, a.city], s.job),
  new Substantive("Weaver", [a.worker, a.village, a.city], s.job),
  new Substantive("Blacksmith", [a.worker, a.city, a.village, a.dwarf], s.job),
  new Substantive("Jeweler", [a.worker, a.rich, a.city, a.dwarf], s.job),
  new Substantive("Potter", [a.worker, a.city, a.village], s.job),
  new Substantive("Butcher", [a.worker, a.village, a.dwarf], s.job),
  new Substantive("Cheese Maker", [a.worker, a.village, a.halfling], s.job),
  new Substantive("Baker", [a.worker, a.village, a.halfling], s.job),
  new Substantive("Brewer", [a.worker, a.village, a.dwarf], s.job),
  new Substantive("Plummer", [a.worker, a.city, a.village, a.poor], s.job),
  new Substantive("Miner", [a.worker, a.mountain, a.underdark, a.dwarf], s.job),
];
