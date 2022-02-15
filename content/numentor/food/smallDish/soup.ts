import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
const a = association;
export const soups: DishIdea[] = [
    new DishIdea(
        {
            mainIng: { name: 'Chicken Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Chicken Stock with Carrots, Onions and Sellery, served with Bread',
                },
                {
                    name: 'Soup from Chicken Feet with Carrots, Onions and Sellery, served with Bread',
                },
            ],
        },
        1.1,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Beef Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Beef Stock with Carrots, Onions and Sellery, served with Bread',
                },
                {
                    name: 'Soup from Cow Feet with Carrots, Onions and Sellery, served with Bread',
                },
            ],
        },
        1.3,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Lamb Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Beef Stock with Carrots, Onions and Sellery, served with Bread',
                },
                {
                    name: 'Soup from Cow Feet with Carrots, Onions and Sellery, served with Bread',
                },
            ],
        },
        1.2,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Cow Udder Soup', key: AssetKey.SMALL_DISH_soup },
            firstSideDishes: [
                {
                    name: 'Soup from Cow Udder with Carrots, Onions and Sellery, served with Bread',
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
        { mainIng: { name: 'Bean Soup', key: AssetKey.SMALL_DISH_soup } },
        0.9,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Pepper Soup', key: AssetKey.SMALL_DISH_soup } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Mushroom Soup', key: AssetKey.SMALL_DISH_soup } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Fish Soup', key: AssetKey.SMALL_DISH_soup } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Prawn Soup', key: AssetKey.SMALL_DISH_soup } },
        1.1,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Lobster Soup', key: AssetKey.SMALL_DISH_soup } },
        1.2,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Squid Soup', key: AssetKey.SMALL_DISH_soup } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Shark Soup', key: AssetKey.SMALL_DISH_soup } },
        1.3,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Tiger Penis Soup',
                key: AssetKey.SMALL_DISH_soup,
                needs: [a.tropical],
            },
        },
        1.0,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Beer Soup', key: AssetKey.SMALL_DISH_soup } },
        1.3,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Red Beet Soup', key: AssetKey.SMALL_DISH_soup } },
        1.3,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Oxtail Soup', key: AssetKey.SMALL_DISH_soup } },
        1.2,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Peanut Soup', key: AssetKey.SMALL_DISH_soup } },
        1.3,
        Eatable.sideDish
    ),
];
