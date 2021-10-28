import { association } from '../../../../classes/association';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
import { drinkPrices } from '../../priceSetting/drinkPriceSetters';
import { adjustPriceSetter } from '../../priceSetting/priceSetters';
const a = association;
const MEAD_FACTOR = 1;
const MEAD_WINE_PRICE_SETTER = adjustPriceSetter(drinkPrices.wine, MEAD_FACTOR);
const TYPICAL_MEAD_LANDS = [a.city, a.village, a.forest, a.mountain];
export const meads: DishIdea[] = [
    new DishIdea(
        {
            mainIng: { name: 'Grizzly Mead' },
            firstSideDishes: [
                { name: 'Mead - strong flavors of honey and cinnamon' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: { name: "Hog's Mead" },
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
            mainIng: { name: 'Amber Mead' },
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
            mainIng: { name: 'Apple Mead' },
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
            mainIng: { name: 'Oaken Mead' },
            firstSideDishes: [
                { name: 'Mead - light brown color, sweet and nutty notes' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: { name: 'Hazel Mead' },
            firstSideDishes: [
                { name: 'Mead - brown color, very sweet and nutty taste' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: { name: 'Squirrel Mead' },
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
            mainIng: { name: 'Three Herbs Mead' },
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
            mainIng: { name: 'Shamrock Mead' },
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
            mainIng: { name: 'Daisy Mead' },
            firstSideDishes: [{ name: 'Mead - non-acloholic, soft and sweet' }],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: { name: 'Sparrow Mead' },
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
            mainIng: { name: 'Currant Mead' },
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
            mainIng: { name: 'Elderberry Mead' },
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
            mainIng: { name: 'Goldberry Mead' },
            firstSideDishes: [
                { name: 'Mead - golden color, shiny, mellow, sweet' },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: { name: 'Golden Rose Mead' },
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
            mainIng: { name: 'Ginger Mead' },
            firstSideDishes: [
                { name: 'Mead - light brown color, tastes like gingerbread ' },
            ],
        },
        //tastes loike gingerbread? with cinamon, cloves, anis etc. : )
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: { name: 'Rhubarb Mead' },
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
            mainIng: { name: 'White Owl Mead' },
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
            mainIng: { name: 'Grey Owl Mead' },
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
            mainIng: { name: 'Hellberry Mead' },
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
            mainIng: { name: 'Spitfire Mead' },
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
            mainIng: { name: 'Infernal Mead' },
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
            mainIng: { name: 'Black Mead' },
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
            mainIng: { name: 'Gentian Mead' },
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
            mainIng: { name: 'Dire Wolve Mead' },
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
            mainIng: { name: 'Blood Mead' },
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
            mainIng: { name: 'Fairy Mead' },
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
            mainIng: { name: 'Ivory Mead' },
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
            mainIng: { name: 'Silver Mead' },
            firstSideDishes: [
                {
                    name: 'Mead - moon-like, silky apperance, favored by virtuous people',
                },
            ],
        },
        // the taste of Dwarvish expertise. Can't touch this!
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: { name: 'Marble Mead' },
            firstSideDishes: [
                {
                    name: 'Mead - marble-like apperance, refreshes and cultivates consumer',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
    new DishIdea(
        {
            mainIng: { name: 'Coal Mead' },
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
            mainIng: { name: 'Quartz Mead' },
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
            mainIng: { name: 'Fungus Mead' },
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
            mainIng: { name: 'Hammer Mead' },
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
            mainIng: { name: 'Broadsword Mead' },
            firstSideDishes: [
                {
                    name: 'Mead - copper color, strong notes of nutmeg, favored by warriors',
                },
            ],
        },
        MEAD_WINE_PRICE_SETTER,
        Drinkable.wine
    ),
];
