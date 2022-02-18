import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
import { fish } from '../mainDish/fishAndChips';
const a = association;
const european = [a.city, a.village, a.forest, a.mountain];
const europeanUnderdark = [
    a.city,
    a.village,
    a.forest,
    a.mountain,
    a.underdark,
];
export const soups: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Chicken Soup',
                key: AssetKey.SMALL_DISH_soup,
                landRange: europeanUnderdark,
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Chicken Stock with Carrots, Onions and Celery, seasoned with Parsley',
                    incomeRange: [a.modest, a.wealthy],
                },
                {
                    name: 'Chicken Feet with Carrots, Onions and Celery, seasoned with Parsley',
                    incomeRange: [a.modest],
                },
                {
                    name: 'Chicken Feet with Carrots, Onions and Celery',
                    needs: [a.poor],
                },
            ],
        },
        1.1,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Beef Soup',
                key: AssetKey.SMALL_DISH_soup,
                landRange: europeanUnderdark,
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Beef Stock with Carrots, Onions and Celery, seasoned with Parsley',
                    incomeRange: [a.wealthy, a.modest],
                },
                {
                    name: 'Soup from Cow Feet with Carrots, Onions and Celery, seasoned with Parsley',
                    incomeRange: [a.modest],
                },
                {
                    name: 'Soup from Cow Feet with Carrots, Onions and Celery',
                    needs: [a.poor],
                },
            ],
        },
        1.3,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Cow Udder Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [a.village],
                landRange: europeanUnderdark,
                incomeRange: [a.poor, a.modest],
            },
            firstSideDishes: [
                {
                    name: 'Soup from Cow Udder with Carrots, Onions and Celery',
                },
            ],
        },
        1.3,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Tomato Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                { name: '' },
                { name: 'with Carrots slices and Onions' },
                { name: 'with Carrots slices and Garlic ' },
                { name: 'with Carrots slices and Cream ' },
                { name: 'with Carrots slices and Milk ' },
                { name: 'seasoned with Salt ' },
                { name: 'with Beef Chunks and seasonal Spices ' },
                { name: 'with Lamb Chunks and seasonal Spices ' },
                { name: 'with Chicken Chunks and seasonal Spices ' },
            ],
            secondSideDishes: [
                {
                    name: ', served with hard bread',
                },
                {
                    name: ', served with fresh bread',
                },
                {
                    name: ', served with toasted bread',
                },
                {
                    name: ', served with garlic bread',
                },
                {
                    name: ', served with a grilled cheese sandwich',
                },
                {
                    name: ', served with noodles',
                },
                { name: '', needs: [a.poor] },
            ],
        },
        0.9,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Pumpkin Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'with Milk and Butter, seasoned with Cinnamon and Lemon',
                },
                {
                    name: 'refined with Onions and Cream, seasoned with Thyme and Pepper',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Bread Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                { name: 'Bread Crumbs in Vegetable Stock' },
                { name: 'Bread Crumbs in Fish Stock' },
                {
                    name: 'Bread Crumbs and Boiled Egg in Pork Stock, seasoned with Marjoram',
                },
                {
                    name: 'Bread Crumbs and Blood Sausage in Pork Stock, seasoned with Marjoram',
                },
                {
                    name: 'Bread Crumbs and Liver Sausage in Pork Stock, seasoned with Marjoram',
                },
            ],
        },
        0.8,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Slaughter Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Pieces of Liver, Kidneys and Stomach cooked in Chicken Stock',
                },
                {
                    name: 'Pieces of Liver, Kidneys and Stomach cooked in Beef Stock',
                    priceFactor: 1.1,
                },
                {
                    name: 'Pieces of Liver, Kidneys and Stomach cooked in Lamb Stock',
                    priceFactor: 1.2,
                },
                {
                    name: 'Pieces of Liver, Kidneys and Stomach cooked in Pork Stock',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Carrot Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [{ name: 'Carrot Purée' }],
            secondSideDishes: [
                {
                    name: ' with Cream and Shallots',
                },
                {
                    name: ' with Milk and Onions',
                },
                {
                    name: ' in Hot Water',
                    priceFactor: 0.8,
                },
            ],
            thirdSideDishes: [
                { name: ', seasoned with Nutmeg', priceFactor: 1.1 },
                { name: ', seasoned with Mint' },
                { name: ', seasoned with Ginger', priceFactor: 1.1 },
                { name: '', needs: [a.poor] },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Onion Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Caramelized Onions with White Wine in Beef Stock, topped with Toasted Bread and Melted Cheese',
                },
                { name: 'Caramelized Onions with White Wine in Beef Stock' },
                { name: 'Caramelized Onions with White Wine in Chicken Stock' },
                { name: 'Caramelized Onions in Vegetable Stock' },
            ],
        },
        { wealthy: 1.3, [a.rich]: 1.3 },
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Potato Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [{ name: 'Potato Purée in Vegetable Stock' }],
            secondSideDishes: [
                { name: ' with Bacon and Onions' },
                { name: ' with Carrots and Celery' },
                { name: ' with Prunes', needs: [a.haven] },
                { name: ' with a Blood Sausage' },
                { name: ' with a Liver Sausage' },
                { name: ' with a Pork Sausage' },
                { name: '', needs: [a.poor] },
            ],
        },
        0.9,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Cabbage Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                { name: 'Sauerkraut cooked in water with Diced Carrots' },
                { name: 'Sauerkraut cooked in water with Diced Potatoes' },
                {
                    name: 'Sauerkraut cooked in water with Diced Potatoes and Carrots',
                },
            ],
            secondSideDishes: [
                { name: '', needs: [a.poor] },
                { name: ', served with Smoked Sausage' },
                { name: ', served with Pork Chunks' },
            ],
        },
        0.8,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Vegetable Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Chunks of Carrots and Celery with Peas and Onions, cooked together in a pot',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Pea Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [{ name: 'Dried Peas cooked with' }],
            secondSideDishes: [
                { name: ' Pork, Celery and Onions' },
                { name: ' Celery and Onions' },
            ],
            thirdSideDishes: [
                { name: ', served with a Smoked Sausage' },
                { name: ', served with Multigrain Bread and Bacon' },
                { name: ', served with Rye Bread and Butter' },
                { name: ', served with Rye Bread and Cheese' },
                { name: '', needs: [a.poor] },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Goat Pepper Soup',
                key: AssetKey.SMALL_DISH_soup,
                needs: [a.desert],
            },
            firstSideDishes: [
                {
                    name: 'Goat Chunks with Diced Onions and Potato, seasoned with various Exotic Peppers',
                },
            ],
        },
        1.2,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Bean Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                // Bouneschlupp from Luxembourg
                {
                    name: 'Green Beans in Vegetable Stock cooked with Potatoes, Bacon and Onions',
                },
                // Rumanian dish
                {
                    name: 'Dried Beans cooked in a Vegetable Stock with Onions, Tomatoes and Mint',
                },
                {
                    name: 'White Beans cooked with Tomatoes, Olive Oil and Carrots, seasoned with Parsley',
                },
                {
                    name: 'White Beans in Vegetable Stock with Celery and Pork Knuckle, seasoned with Parsley',
                },
            ],
        },
        0.9,
        Eatable.sideDish
    ),
    // is a dip in Egypt, but a soup in Morocco
    new DishIdea(
        {
            mainIng: { name: 'Bissara Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Puréed Broad Beans cooked with Garlic, Olive Oil and Lemon Juice, seasoned with Cumin',
                },
            ],
            secondSideDishes: [
                { name: 'Cumin' },
                { name: 'Red Pepper' },
                { name: 'Mint' },
            ],
        },
        1.0,
        Eatable.sideDish
    ),
    new DishIdea(
        // it is exactly written like this... It is a delicacy in West Africa
        {
            mainIng: { name: 'Peppersoup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                { name: 'Oxtail and Ox Stomach in Beef Stock' },
                { name: 'Goat Meat in Beef Stock' },
                { name: 'Chicken Hearts and Thighs in Chicken Stock' },
                { name: 'Cat Fish and Shrimps in Fish Stock' },
                { name: 'Crabs and Shrimps in Fish Stock' },
            ],
            secondSideDishes: [
                {
                    name: ' , seasoned with chili peppers, lime juice and nutmeg',
                },
            ],
        },
        1.1,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Mushroom Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Blended White Mushrooms with Garlic and Onions in Chicken Stock thickened with Cream',
                },
                {
                    name: 'Blended White Mushrooms with Garlic and Onions in Vegetable Stock thickened with Cream',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Fish Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [{ name: 'Chunky Fish Stock ' }],
            secondSideDishes: [
                ...fish,
                { name: '(Herring)' },
                { name: '(Salmon)' },
                { name: '(Catfish)' },
                { name: '(Pyke)' },
            ],
            thirdSideDishes: [
                {
                    name: ' with Diced Carrots and Potatoes, seasoned with Dill and Parsley',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Clam Chowder', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Clams and Potatoe Dices in Milk and Butter, served with Oyster Crackers ',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: "Fisherman's Soup",
                key: AssetKey.SMALL_DISH_soup,
            },
            firstSideDishes: [
                {
                    name: 'Soup from Fish Heads (Carp) with Red Onions, Bell Peppers and Tomatoes, topped with Fish Filet',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Cullen Skink Soup',
                key: AssetKey.SMALL_DISH_soup,
            },
            firstSideDishes: [
                {
                    name: 'Soup from Smoked Fish (Haddock) with Potatoes and Onions',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Shrimp Chowder', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Shrimps, Celery and Shallots cooked in Cream and White Wine, served with Garlic Bread',
                },
            ],
        },
        1.1,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Lobster Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Fresh Lobsters simmered in Heavy Cream and Milk, seasoned with Sherry Wine and Parsley',
                },
            ],
        },
        1.2,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Squid Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Squid Slices with Carrots, Radish and Onions, garnished with Coriander Leaves',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Shark Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Shark Fins and Crabmeat in Chicken Stock, seasoned with Black Vinegar and Pepper ',
                },
            ],
        },
        1.4,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Tiger Penis Soup',
                key: AssetKey.SMALL_DISH_soup,
                needs: [a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Soup from Tiger Penis and Tiger Bones with various Spices (increases libido)',
                },
            ],
        },
        1.0,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Beer Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                { name: 'Bread Chunks and Egg Yolk cooked in Beer and Milk' },
                { name: 'Bread Chunks with Raisins cooked in Beer and Cream' },
            ],
        },
        1.3,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Red Beet Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Stock from Red Beets and Mushrooms, topped with Mushroom-Filled Dumplings',
                },
                {
                    name: 'Stock from Red Beets and Chicken, cooked with White Cabbage and Carrots',
                },
                {
                    name: 'Stock from Red Beets and Beef, cooked with White Cabbage and Carrots',
                },
                {
                    name: 'Stock from Red Beets and Pork, cooked with White Cabbage and Carrots',
                },
                {
                    name: 'Stock from Red Beets and Lamb, cooked with White Cabbage and Carrots',
                },
                {
                    name: 'Stock from Red Beets and Duck, cooked with White Cabbage and Carrots',
                },
                {
                    name: 'Stock from Red Beets and Goose, cooked with White Cabbage and Carrots',
                },
            ],
        },
        1.3,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Oxtail Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Oxtail with Carrots, Celery and Onions, seasoned with Sherry and Herbs',
                },
            ],
        },
        1.2,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Peanut Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Peanut Paste with Tomatoes, topped with Beef Slices, seasoned with Pepper',
                },
                {
                    name: 'Peanut Paste with Tomatoes, topped with Chicken Slices',
                },
                {
                    name: 'Peanut Paste with Tomatoes, topped with Corn-Dough Dumplings',
                },
            ],
        },
        1.1,
        Eatable.sideDish
    ),
];
