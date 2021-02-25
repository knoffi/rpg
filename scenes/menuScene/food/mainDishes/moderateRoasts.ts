import { association } from '../../../../classes/association';
import { IngredientList } from '../../../../classes/mainDishSuperStructures';
const a = association;
const workerMainIngredients: IngredientList = [
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
