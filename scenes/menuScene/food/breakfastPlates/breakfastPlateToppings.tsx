import { association } from '../../../../classes/association';
import { DescriptionAsset } from '../../../../classes/DescriptionIdea';
const a = association;
export const nonRichBreakfastPlateToppings: DescriptionAsset[] = [
    { name: ', Jam & Cheddar', landRange: [a.village], misfits: [a.rich] },
    {
        name: ', Bacon & Goat Cheese',
        landRange: [a.village],
        misfits: [a.rich],
    },
    {
        name: ', Cottage Cheese & Grapes',
        landRange: [a.village],
        misfits: [a.rich],
    },
    {
        name: ', Pickled Mackarel & Onions',
        landRange: [a.haven],
        misfits: [a.rich],
    },
    {
        name: ', Smoked Salmon & Horseradish Cream',
        landRange: [a.haven],
        misfits: [a.rich],
    },
    { name: ', Gouda & Smoked Ham', landRange: [a.haven], misfits: [a.rich] },
    { name: ', Cottage Cheese & Jam', landRange: [a.city], misfits: [a.rich] },
    { name: ', Sausage & Baked Beans', landRange: [a.city], misfits: [a.rich] },
    {
        name: ', Bacon & Cherry Tomatoes',
        landRange: [a.city],
        misfits: [a.rich],
    },
    {
        name: ', White Sausage & Pretzels',
        landRange: [a.forest],
        misfits: [a.rich],
    },
    {
        name: ', Blackberry Jam & Butter',
        landRange: [a.forest],
        misfits: [a.rich],
    },
    {
        name: ', Blueberry Jam & Cheese',
        landRange: [a.forest],
        misfits: [a.rich],
    },
    {
        name: ', Wild Honey & Yoghurt',
        landRange: [a.forest],
        misfits: [a.rich],
    },
    { name: ', Red Beans & Hummus', landRange: [a.desert], misfits: [a.rich] },
    {
        name: ', Dried Fruits & Goat Cheese',
        landRange: [a.desert],
        misfits: [a.rich],
    },
    {
        name: ', Fried Beef & Tomatoes',
        landRange: [a.desert],
        misfits: [a.rich],
    },
    { name: ', Goat Cheese & Honey', landRange: [a.desert], misfits: [a.rich] },
    {
        name: ', Toasted Crickets & Peanuts',
        landRange: [a.desert],
        misfits: [a.rich],
    },
    {
        name: ', Sausage & Goat Cheese',
        landRange: [a.mountain],
        misfits: [a.rich],
    },
    {
        name: ', Smoked Trout & Goat Cheese',
        landRange: [a.mountain],
        misfits: [a.rich],
    },
    {
        name: ', Hard Cheese & Grapes',
        landRange: [a.mountain],
        misfits: [a.rich],
    },
    {
        name: ', Blood Sausage & Dark Cheese',
        landRange: [a.underdark],
        misfits: [a.rich],
    },
    {
        name: ', Walnuts & Black Honey',
        landRange: [a.underdark],
        misfits: [a.rich],
    },
    {
        name: ', Smoked Beef & Fried Potatoes',
        landRange: [a.underdark],
        misfits: [a.rich],
    },
    {
        name: ', Papaya & Cream Cheese',
        landRange: [a.tropical],
        incomeRange: [a.wealthy],
    },
    {
        name: ', Bananas & Honey',
        landRange: [a.tropical],
        incomeRange: [a.poor, a.modest],
    },
    {
        name: ', Cashew Nuts & Mango',
        landRange: [a.tropical],
        misfits: [a.rich],
    },
    {
        name: ', Chicken Wings & Pineapple',
        landRange: [a.tropical],
        misfits: [a.rich],
    },
];

export const richBreakfastPlateToppings: DescriptionAsset[] = [
    {
        name: ', Goldberry Jam & Cheddar',
        needs: [a.rich],
        landRange: [a.village],
    },
    {
        name: ', Caramelized Bacon & Goat Cheese',
        needs: [a.rich],
        landRange: [a.village],
    },
    {
        name: ', Gold-Plated Cheese & Silver Grapes',
        needs: [a.rich],
        landRange: [a.village],
    },
    { name: ', Lobster & Silver Onions', landRange: [a.haven] },
    { name: ', Smoked White Whale & Truffles', landRange: [a.haven] },
    { name: ', Caviar & Sour Cream', landRange: [a.haven] },
    { name: ', Caviar & Champagne Sauce', landRange: [a.city] },
    { name: ', Gryphon Sausage & Baked Beans', landRange: [a.city] },
    { name: ', Minotaur Bacon & Ruby Tomatoes', landRange: [a.city] },
    { name: ', White Boar Sausage & Pretzels', landRange: [a.forest] },
    { name: ', Goldberry Jam & Hollandaise Sauce', landRange: [a.forest] },
    { name: ', Cockatrice Breast & Cherry Tomatoe', landRange: [a.forest] },
    { name: ', Ruby Beans & Gold-Plated Falafel', landRange: [a.desert] },
    { name: ', Fried Sphinx & Sapphire Mushroom', landRange: [a.desert] },
    { name: ', Toasted Snake & Gold Okra', landRange: [a.desert] },
    { name: ', Fried Asparagus & Emerald Berries', landRange: [a.mountain] },
    { name: ', Silver Trout & Truffles', landRange: [a.mountain] },
    {
        name: ', Cockatrice Breast & Gold-Plated Grapes',
        landRange: [a.mountain],
    },
    { name: ', Fried Beholder Tentacles & Caviar', landRange: [a.underdark] },
    {
        name: ', Pickled Beholder Eye & Crème Fraîche',
        landRange: [a.underdark],
    },
    { name: ', White Lizard Legs & Opal Grapes', landRange: [a.underdark] },
    { name: ', Abalone Snails & Jade Mango', landRange: [a.tropical] },
    { name: ', Silver Oyster & Grated Horseradishes', landRange: [a.tropical] },
    { name: ', Gold-Plated Durian & Monkey Brain', landRange: [a.tropical] },
];
