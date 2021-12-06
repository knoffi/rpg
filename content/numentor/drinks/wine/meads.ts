import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
import { drinkPrices } from '../../../../scenes/menuScene/priceSetting/drinkPriceSetters';
import { adjustPriceSetter } from '../../../../scenes/menuScene/priceSetting/priceSetters';
const a = association;
const MEAD_FACTOR = 0.8;
const MEAD_WINE_PRICE_SETTER = adjustPriceSetter(
    drinkPrices[Drinkable.wine],
    MEAD_FACTOR
);
export const meads: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Grizzly Mead',
                classRange: [
                    a.barbarian,
                    a.soldier,
                    a.knight,
                    a.druid,
                    a.adventurer,
                ],
                specialsRange: [a.assasine],
                landRange: [a.forest, a.village, a.mountain],
                incomeRange: [a.modest, a.wealthy],
                powerFits: [a.adventurer, a.forest, a.druid],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - strong flavors of honey and cinnamon' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Hog's Mead",
                needsOne: [a.wizard, a.adventurer, a.druid],
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.desert, a.underdark, a.haven, a.tropical],
                powerFits: [a.wizard, a.adventurer, a.druid],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - sweet, brown in color, favored by magic users',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Bumble Mead',
                incomeRange: [a.modest, a.wealthy],
                misfits: [
                    a.desert,
                    a.underdark,
                    a.haven,
                    a.tropical,
                    a.barbarian,
                    a.soldier,
                ],
                powerFits: [a.forest, a.village, a.halfling],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - yellow color, sweet taste, smells like lavender',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Blackberry Mead',
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.desert, a.underdark, a.haven, a.tropical],
                powerFits: [a.city, a.village],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - dark purple color, notes of blackberry' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Strawberry Mead',
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.desert, a.underdark, a.haven, a.tropical],
                powerFits: [a.city, a.village],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - light pink color, notes of strawberry' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Blueberry Mead',
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.desert, a.underdark, a.haven, a.tropical],
                powerFits: [a.city, a.village],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - purple-blue color, notes of blueberry' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Raspberry Mead',
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.desert, a.underdark, a.haven, a.tropical],
                powerFits: [a.city, a.village],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - pink-red color, notes of raspberry' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Amber Mead',
                incomeRange: [a.rich, a.wealthy],
                misfits: [a.desert, a.underdark, a.haven, a.tropical],
                powerFits: [a.dwarf, a.elf],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - golden color, dazzling sweetness, superb taste',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Hornet Mead',
                incomeRange: [a.modest, a.poor],
                misfits: [a.desert, a.underdark, a.haven, a.tropical],
                powerFits: [a.barbarian, a.assasine],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - sweet taste, but strong like liquor' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Wasp Mead',
                needsOne: [a.barbarian, a.poor, a.assasine],
                incomeRange: [a.modest, a.poor],
                misfits: [a.desert, a.underdark, a.haven, a.tropical],
                powerFits: [a.barbarian, a.assasine, a.poor],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - sweet, slightly bitter and stings a bit' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Apple Mead',
                incomeRange: [a.poor, a.modest],
                misfits: [a.desert, a.underdark, a.haven, a.tropical],
                powerFits: [a.city, a.village],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - light green color, slightly sour notes of apple',
                },
                {
                    name: 'Mead - light red color, slightly sweet notes of apple',
                },
            ],
        },

        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Oaken Mead',
                incomeRange: [a.modest, a.poor],
                landRange: [a.forest, a.village],
                powerFits: [a.druid, a.forest],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - light brown color, sweet and notes of wood' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Hazel Mead',
                incomeRange: [a.modest, a.poor, a.wealthy],
                landRange: [a.forest, a.village],
                powerFits: [a.halfling, a.village],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - brown color, very sweet and nutty taste' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Squirrel Mead',
                incomeRange: [a.modest, a.poor],
                landRange: [a.forest, a.village],
                classRange: [a.druid, a.adventurer],
                powerFits: [a.halfling, a.forest, a.druid],
                needsOne: [a.forest, a.druid],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - brown color, slightly nutty and favored by animal lovers',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Three Herbs Mead',
                needsOne: [a.druid, a.adventurer],
                powerFits: [a.druid],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - notes of oregano, thyme and rosemary, favored by druids',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Shamrock Mead',
                needs: [a.halfling],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - green color, makes you feel lucky, favored by halflings',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Daisy Mead',
                misfits: [
                    a.barbarian,
                    a.soldier,
                    a.knight,
                    a.assasine,
                    a.thief,
                    a.dwarf,
                    a.drow,
                ],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [{ name: 'Mead - non-acloholic, soft and sweet' }],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Sparrow Mead',
                needs: [a.bard],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - mellow taste, is said to make voices more melodic',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Currant Mead',
                incomeRange: [a.wealthy, a.modest],
                landRange: [a.forest, a.mountain, a.village, a.city],
                powerFits: [a.human, a.village, a.mountain],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - red color, sweet and slightly sour taste' },
                { name: 'Mead - black color, sweet and slightly bitter taste' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Elderberry Mead',
                needsOne: [a.wizard, a.druid, a.adventurer],
                powerFits: [a.wizard, a.druid],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - blue-purple color, notes of elderberry, favored by magic users',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Goldberry Mead',
                incomeRange: [a.wealthy, a.rich],
                powerFits: [a.wealthy, a.rich, a.elf],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - golden color, shiny, mellow, sweet' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Golden Rose Mead',
                incomeRange: [a.wealthy, a.rich],
                powerFits: [a.wealthy, a.rich, a.elf],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - red-golden color, softly sweet with notes of roses',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Ginger Mead',
                incomeRange: [a.poor, a.modest],
                landRange: [a.city, a.village],
                powerFits: [a.human, a.halfling, a.village],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                { name: 'Mead - light brown color, tastes like gingerbread' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Rhubarb Mead',
                incomeRange: [a.poor, a.modest],
                landRange: [a.village, a.forest],
                powerFits: [a.halfling, a.village],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - light pink color, lightly sweet and quite sour',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'White Owl Mead',
                needsOne: [a.cleric, a.adventurer],
                powerFits: [a.cleric],
                key: AssetKey.WINE_mead,
                misfits: [a.prostitute, a.thief],
            },
            firstSideDishes: [
                {
                    name: 'Mead - white color, calms the mind, favored by monks and clerics',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Black Owl Mead',
                needs: [a.cleric],
                needsOne: [a.prostitute, a.thief],
                powerFits: [a.cleric],
                key: AssetKey.WINE_mead,
                misfits: [a.prostitute, a.thief],
            },
            firstSideDishes: [
                {
                    name: 'Mead - black color, calms the mind, favored by monks and clerics',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Grey Owl Mead',
                needsOne: [a.cleric, a.druid, a.adventurer],
                powerFits: [a.cleric, a.druid],
                key: AssetKey.WINE_mead,
                misfits: [a.prostitute],
            },
            firstSideDishes: [
                {
                    name: 'Mead - light grey color, peaceful taste, favored by wisdom seekers',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Hellberry Mead',
                needs: [a.tiefling],
                powerFits: [a.tiefling],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - dark red color, sweet and spicy taste, favored by tieflings',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Soulfire Mead',
                needs: [a.tiefling],
                powerFits: [a.tiefling],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - red-brown color, sweet taste, strengthens the inner fire',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Infernal Mead',
                needs: [a.tiefling],
                powerFits: [a.tiefling],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - flame-like color, sweet and hot, favored by tieflings',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Black Mead',
                needs: [a.drow],
                powerFits: [a.drow],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - midnight blue, sweet, notes of roasted sesame',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Opal Mead',
                needsOne: [a.drow, a.adventurer, a.thief],
                powerFits: [a.drow],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - black as the underdark, favored by drow and other vicious folk',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Silken Mead',
                needs: [a.drow],
                powerFits: [a.drow],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - silver as a spiderweb, it tastes sweet and looks silky',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Gentian Mead',
                needsOne: [a.barbarian, a.druid],
                powerFits: [a.mountain, a.druid, a.barbarian],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - blue color, notes of gentian, favored by natur lovers',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Dire Wolve Mead',
                needsOne: [a.soldier, a.barbarian, a.knight, a.assasine],
                powerFits: [a.soldier, a.barbarian, a.knight, a.assasine],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - bittersweet, fierce spicyness, favored by sturdy fighters',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Blood Mead',
                needsOne: [
                    a.drow,
                    a.tiefling,
                    a.assasine,
                    a.thief,
                    a.prostitute,
                ],
                powerFits: [
                    a.drow,
                    a.tiefling,
                    a.assasine,
                    a.thief,
                    a.prostitute,
                ],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - blood red color, tastes suprisingly sweet and tempting',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Fairy Mead',
                needsOne: [a.halfling, a.gnome],
                misfits: [a.underdark],
                powerFits: [a.halfling, a.gnome],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - graslike color, sweet, but makes consumer a bit sassy',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Ivory Mead',
                needsOne: [a.elf, a.bard],
                powerFits: [a.elf, a.bard],
                misfits: [a.poor],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - looks like eggnoc, elegantly sweet, favored by art-lovers',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Silver Mead',
                needsOne: [a.wealthy, a.knight, a.cleric],
                specialsRange: [],
                classRange: [a.knight, a.cleric],
                misfits: [a.poor, a.prostitute, a.assasine, a.thief],
                powerFits: [a.cleric, a.knight, a.wealthy],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - moon-like appearance, soft sweetness, favored by virtuous people',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Marble Mead',
                needsOne: [a.elf, a.wealthy, a.rich],
                powerFits: [a.elf, a.wealthy, a.rich],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - marble-like appearance, refreshes and cultivates consumer',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Coal Mead',
                raceRange: [a.dwarf, a.gnome],
                landRange: [a.underdark, a.mountain],
                classRange: [],
                needsOne: [a.underdark, a.gnome, a.dwarf, a.modest],
                powerFits: [a.underdark, a.gnome, a.dwarf, a.modest],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - dark grey color, but sweet and warming, favored by underdark folk',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Quartz Mead',
                raceRange: [a.dwarf, a.gnome],
                landRange: [a.underdark, a.mountain],
                powerFits: [a.dwarf, a.gnome, a.mountain, a.underdark],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - silver-grey color, tastes sweet with notes of anis',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Fungus Mead',
                classRange: [a.druid],
                landRange: [a.underdark, a.forest],
                powerFits: [a.druid, a.forest, a.underdark],
                needsOne: [a.druid, a.underdark, a.forest],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - green-brown color, smells a bit moldy, but tastes sweet',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Hammer Mead',
                needs: [a.dwarf],
                misfits: [a.poor],
                powerFits: [a.dwarf],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: "Mead - golden-brown, a delicate Dwarvish brew. Can't touch this!",
                },
            ],
        },
        // the taste of Dwarvish expertise. Can't touch this!
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Claymore Mead',
                needsOne: [a.barbarian, a.knight, a.soldier, a.assasine],
                powerFits: [a.barbarian, a.knight, a.soldier, a.assasine],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - copper color, sweet and strong drink, favored by warriors',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Dawn Mead',
                needsOne: [a.knight, a.cleric],
                incomeRange: [a.modest, a.rich, a.wealthy],
                powerFits: [a.knight, a.cleric],
                key: AssetKey.WINE_mead,
                misfits: [a.thief, a.prostitute],
            },
            firstSideDishes: [
                {
                    name: 'Mead - goldenly brownish color, it tastes like a new morning',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Thunder Mead',
                needsOne: [a.dwarf, a.knight, a.cleric],
                incomeRange: [a.modest, a.rich, a.wealthy],
                powerFits: [a.dwarf, a.knight, a.cleric],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - cloud-like foam on top, goldenly shiny liquid below',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Canary Mead',
                needsOne: [a.gnome, a.halfling, a.bard],
                powerFits: [a.gnome, a.halfling, a.bard],
                key: AssetKey.WINE_mead,
            },
            firstSideDishes: [
                {
                    name: 'Mead - it tastes sweet, loosens your tongue and makes you gossipy',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
];
