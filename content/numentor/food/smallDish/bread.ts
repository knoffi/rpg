import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
const a = association;
export const carbonStarter: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Bruschetta',
                key: AssetKey.SMALL_DISH_carbon,
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Grilled Bread Slices, topped with Finely-Diced Onions, Garlic, Tomato and Basil',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Bread with Ham & Ćwikla',
                key: AssetKey.SMALL_DISH_carbon,
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Fresh Bread, topped with Ham and a Puree of Beetroot and Horseradish',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Sandwich',
                key: AssetKey.SMALL_DISH_carbon,
                misfits: [a.desert, a.tropical],
                incomeRange: [a.poor, a.modest],
            },
            firstSideDishes: [
                { name: 'Bread Rolls', landRange: [a.city, a.haven] },
                {
                    name: 'Whole-Grain Bread',
                    landRange: [a.village, a.mountain],
                },
                {
                    name: 'Multigrain Bread',
                    landRange: [a.village, a.forest],
                },
                {
                    name: 'White Bread',
                    landRange: [a.city, a.haven],
                },
                {
                    name: 'Sourdough Bread',
                    landRange: [a.city, a.village],
                },
                {
                    name: 'Rye Bread',
                    landRange: [a.mountain, a.city],
                },
                {
                    name: 'Potato Bread',
                    landRange: [a.village, a.underdark],
                },
                {
                    name: 'Pumpkin Bread',
                    landRange: [a.forest, a.village],
                },
            ],
            secondSideDishes: [
                {
                    name: 'with Butter',
                    needs: [a.poor],
                    misfits: [a.haven],
                },
                {
                    name: 'with Oily Anchovies',
                    needs: [a.poor, a.haven],
                },
                {
                    name: 'with Butter & Smoked Ham',
                    landRange: [a.mountain, a.city, a.underdark],
                    misfits: [a.poor],
                },
                {
                    name: 'with Butter & Ham',
                    landRange: [a.village, a.city],
                    misfits: [a.poor],
                },
                {
                    name: 'with Butter & Cheese',
                    landRange: [a.village, a.forest],
                    misfits: [a.poor],
                },
                {
                    name: 'with Sausage Slices',
                    needs: [a.mountain],
                },
                {
                    name: 'with Blood Sausage',
                    needs: [a.mountain],
                },
                {
                    name: 'with Liver Sausage',
                    needs: [a.mountain],
                },
                {
                    name: 'with Salmon and Onions',
                    needs: [a.haven],
                    misfits: [a.poor],
                },
                {
                    name: 'with Tuna and Onions',
                    needs: [a.haven],
                    misfits: [a.poor],
                },
                {
                    name: 'with Hard-Boiled Egg Slices',
                    misfits: [a.haven],
                },
                {
                    name: 'with Cheese & Pickles',
                    needs: [a.city],
                    misfits: [a.poor],
                },
                {
                    name: 'with Cheese, Bacon and Pickles',
                    needs: [a.city],
                    misfits: [a.poor],
                },
                {
                    name: 'with Cheese, Mole Bacon and Pickles',
                    needs: [a.underdark],
                    misfits: [a.poor],
                },
                {
                    name: 'with Cheese, a Fried Egg and Pickles',
                    needs: [a.city],
                    misfits: [a.poor],
                },
                {
                    name: 'with various Mushrooms and Onions',
                    needsOne: [a.underdark, a.forest],
                    misfits: [a.poor],
                },
                {
                    name: 'topped with a Fried Egg and Pickles',
                    needs: [a.city],
                    misfits: [a.poor],
                },
                {
                    name: 'with Butter and Beef Cuts',
                    needs: [a.city],
                    misfits: [a.poor],
                },
                {
                    name: 'with Butter and Lamb Cuts',
                    needs: [a.mountain],
                    misfits: [a.poor],
                },
                {
                    name: 'with Butter and Pork Cuts',
                    needs: [a.village],
                    misfits: [a.poor],
                },
                {
                    name: 'with Butter and Slices of Boar Meat',
                    needs: [a.forest],
                    misfits: [a.poor],
                },
                {
                    name: 'topped with Stink Fungus',
                    needsOne: [a.underdark, a.forest],
                    misfits: [a.poor],
                },
            ],
        },
        0.9,
        Eatable.sideDish
    ),
];
