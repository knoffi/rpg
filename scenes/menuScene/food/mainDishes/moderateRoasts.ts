import { association } from '../../../../classes/association';
import { IngredientList } from '../../../../classes/mainDishSuperStructures';

const a = association;
export const workerMainIngredients: IngredientList = [
    {
        name: 'Roast Beef',
        areas: [a.city, a.village, a.mountain, a.forest, a.underdark, a.haven],
        sauces: ['in Red Wine Sauce', 'in Pepper Sauce', 'in Onion Gravy'],
    },
    {
        name: 'Roast Goose',
        areas: [a.village, a.city, a.forest],
        sauces: [
            'in Redcurrant Sauce',
            'in Blackcurrant Sauce',
            'in Port Wine Sauce',
        ],
    },
    {
        name: 'Roast Turkey',
        areas: [a.city, a.village, a.mountain],
        sauces: [
            'in Cranberry Sauce',
            'in Redcurrant Sauce',
            'in Port Wine Sauce',
        ],
    },
    {
        name: 'Roast Pork',
        areas: [a.city, a.village, a.mountain, a.forest, a.underdark, a.haven],
        sauces: ['in Brown Sauce', 'in Beer Sauce', 'in Mustard Sauce'],
    },
    {
        name: 'Rump Steak',
        areas: [a.city, a.village],
        sauces: ['in Whiskey Sauce', '', ''],
    },
    {
        name: 'Chuck-Eye Steak',
        areas: [a.forest, a.haven],
        sauces: ['in Whiskey Sauce', '', ''],
    },
    {
        name: 'Roast Chicken',
        areas: [a.city, a.village, a.mountain, a.forest, a.haven],
        sauces: [
            'in White Wine Sauce',
            'in Honey Mustard Sauce',
            'in Lemon Sauce',
        ],
    },
    {
        name: 'Pork Sausages',
        areas: [a.city, a.village, a.mountain],
        sauces: ['', '', 'and Mustard'],
    },
    {
        name: 'Beef Sausages',
        areas: [a.city, a.village, a.mountain],
        sauces: ['', '', 'and Mustard'],
    },
    {
        name: 'Deer Sausages',
        areas: [a.village, a.mountain, a.forest],
        sauces: ['in Cranberry Sauce', '', ''],
    },
    {
        name: 'Boar Sausages',
        areas: [a.village, a.forest],
        sauces: ['', 'in Cranberry Sauce', ''],
    },
    {
        name: 'Blood Sausages',
        areas: [a.village, a.mountain],
        sauces: ['in Apple Sauce', 'in Apple Sauce', ''],
    },
    {
        name: 'Lamb Sausages',
        areas: [a.village, a.mountain],
        sauces: ['', '', '', ''],
    },
    {
        name: 'Roast Lamb',
        areas: [a.village, a.mountain],
        sauces: ['in Red Wine Sauce', 'in Pepper Sauce', 'in Port Wine Sauce'],
    },
    {
        name: 'Meat Loaf',
        areas: [a.village, a.mountain],
        sauces: ['in Tomato Sauce', 'in Mushroom Sauce', 'in Brown Gravy'],
    },
    {
        name: 'Chicken Wings',
        areas: [a.village, a.mountain],
        sauces: [
            'in Honey Garlic Sauce',
            'in Barbecue Sauce',
            'in Honey Mustard Sauce',
        ],
    },
];
export const workerCarbIngredients: IngredientList = [
    {
        name: 'Mashed Potatoes',
        areas: [a.village, a.mountain],
    },
    {
        name: 'Pan Fried Potatoes',
        areas: [a.city, a.haven],
    },
    {
        name: 'Boiled Potatoes',
        areas: [a.haven, a.village],
    },
    {
        name: 'Deep Fried Potatoes',
        areas: [a.city, a.underdark],
    },
    {
        name: 'Sweet Potatoes',
        areas: [a.city, a.haven],
    },
    {
        name: 'Potato Wedges',
        areas: [a.city, a.underdark],
    },
    {
        name: 'Potato Dumplings',
        areas: [a.village, a.forest],
    },
];
export const workerGreenIngredients: IngredientList = [
    {
        name: 'with Broccoli, Peas',
        areas: [a.city, a.forest],
    },
    {
        name: 'with Cauliflower, Peas',
        areas: [a.village, a.mountain],
    },
    {
        name: 'with Cabbage, Mustard',
        areas: [a.village, a.forest],
    },
    {
        name: 'with Pickled Cabbage',
        areas: [a.village, a.mountain],
    },
    {
        name: 'with Mushrooms',
        areas: [a.forest, a.underdark],
    },
    {
        name: 'with Red Beet',
        areas: [a.mountain, a.underdark],
    },
    {
        name: 'with Onions, Apples',
        areas: [a.forest, a.village],
    },
    {
        name: 'with Carrots, Peas',
        areas: [a.village, a.city],
    },
    {
        name: 'with Brussel Sprouts',
        areas: [a.village, a.city],
    },
    {
        name: 'with Cole Slaw',
        areas: [a.city, a.haven],
    },
    {
        name: 'with Spinach',
        areas: [a.haven, a.mountain],
    },
];
