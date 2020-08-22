import { Adjective, association } from "./Adjectives";
import { Substantive } from "./Substantive";

export const adjectives = [
  new Adjective("Golden", [association.bard, association.rich]),
  new Adjective("Generous", [
    association.bard,
    association.rich,
    association.dwarf,
  ]),
  new Adjective("Elegant", [
    association.bard,
    association.rich,
    association.elf,
  ]),
  new Adjective("Diamant", [
    association.bard,
    association.rich,
    association.dwarf,
  ]),
  new Adjective("Golden", [
    association.bard,
    association.rich,
    association.dwarf,
  ]),
  new Adjective("Rusty", [association.criminal, association.poor]),
  new Adjective("Velvet", [
    association.bard,
    association.elf,
    association.rich,
  ]),
  new Adjective("Silky", [association.bard, association.elf, association.rich]),
  new Adjective("Twill", [
    association.village,
    association.elf,
    association.halfling,
  ]),
  new Adjective("Weaving", [
    association.worker,
    association.elf,
    association.halfling,
    association.human,
  ]),
  new Adjective("Knitting", [
    association.worker,
    association.elf,
    association.halfling,
    association.human,
  ]),
  new Adjective("Dreaming", [
    association.bard,
    association.elf,
    association.human,
  ]),
  new Adjective("Extravagant", [
    association.bard,
    association.rich,
    association.dwarf,
  ]),
  new Adjective("Lousy", [association.criminal, association.poor]),
  new Adjective("Hungry", [association.criminal, association.poor]),
  new Adjective("Pathetic", [association.poor]),
  new Adjective("Rotting", [association.criminal, association.poor]),
  new Adjective("Wooden", [
    association.criminal,
    association.poor,
    association.forest,
  ]),
  new Adjective("Not Trustworthy", [association.criminal, association.poor]),
  new Adjective("Cockeyed", [association.criminal, association.poor]),
  new Adjective("Squint-eyed", [association.criminal, association.poor]),
  new Adjective("Spitting", [association.criminal, association.poor]),
];

export const substantives = [
  new Substantive("Pheasant", [
    association.druid,
    association.nobel,
    association.forest,
  ]),
  new Substantive("Guinea Fowl", [
    association.druid,
    association.nobel,
    association.forest,
  ]),
  new Substantive("Partridges", [
    association.druid,
    association.nobel,
    association.forest,
  ]),
  new Substantive("Deer", [
    association.druid,
    association.nobel,
    association.forest,
  ]),
  new Substantive("Moose", [
    association.druid,
    association.nobel,
    association.forest,
  ]),
  new Substantive("Eagle", [
    association.druid,
    association.nobel,
    association.forest,
  ]),
  new Substantive("Falcon", [
    association.druid,
    association.nobel,
    association.forest,
  ]),
  new Substantive("Chicken", [
    association.druid,
    association.poor,
    association.forest,
  ]),
  new Substantive("Weasel", [
    association.druid,
    association.poor,
    association.forest,
  ]),
  new Substantive("Mouse", [
    association.druid,
    association.poor,
    association.forest,
    association.city,
  ]),
  new Substantive("Rat", [
    association.druid,
    association.poor,
    association.criminal,
    association.city,
  ]),
  new Substantive("Cockroach", [
    association.druid,
    association.poor,
    association.criminal,
    association.city,
  ]),
  new Substantive("Snake", [
    association.druid,
    association.criminal,
    association.forest,
  ]),
  new Substantive("Butterfly", [
    association.druid,
    association.elf,
    association.forest,
  ]),
  new Substantive("Tailor", [association.worker, association.city]),
  new Substantive("Coppler", [association.worker, association.city]),
  new Substantive("Carpenter", [association.worker, association.city]),
  new Substantive("Weaver", [association.worker, association.city]),
  new Substantive("Blacksmith", [association.worker, association.city]),
  new Substantive("Jeweler", [
    association.worker,
    association.rich,
    association.city,
  ]),
  new Substantive("Potter", [association.worker, association.city]),
  new Substantive("Butcher", [association.worker, association.city]),
  new Substantive("Cheese Maker", [association.worker, association.city]),
  new Substantive("Plummer", [association.worker, association.city]),
  new Substantive("Miner", [
    association.worker,
    association.city,
    association.mountain,
    association.underdark,
  ]),
];
