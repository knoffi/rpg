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
                    name: 'Chicken stock with Carrots, Onions and Sellery, served with Bread',
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
                    name: 'Beef stock with Carrots, Onions and Sellery, served with Bread',
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
                { name: 'with Carrots slices and Onions,' },
                { name: 'with Carrots slices and Garlic, ' },
                { name: 'with Carrots slices and Cream, ' },
                { name: 'with Carrots slices and Milk, ' },
                { name: 'seasoned with Salt, ' },
                { name: 'with Beef Chunks and seasonal Spices, ' },
                { name: 'with Lamb Chunks and seasonal Spices, ' },
                { name: 'with Chicken Chunks and seasonal Spices, ' },
            ],
            secondSideDishes: [
                {
                    name: 'served with hard bread',
                },
                {
                    name: 'served with fresh bread',
                },
                {
                    name: 'served with toasted bread',
                },
                {
                    name: 'served with garlic bread',
                },
                {
                    name: 'served with a grilled cheese sandwich',
                },
                {
                    name: 'served with noodles',
                },
            ],
        },
        0.9,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Pumpkin Soup', key: AssetKey.SMALL_DISH_soup } },
        1.0,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Bread Soup', key: AssetKey.SMALL_DISH_soup } },
        0.7,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Carrot Soup', key: AssetKey.SMALL_DISH_soup } },
        1.0,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Onion Soup', key: AssetKey.SMALL_DISH_soup } },
        { wealthy: 1.3, [a.rich]: 1.3 },
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Potato Soup', key: AssetKey.SMALL_DISH_soup } },
        0.9,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Cabbage Soup', key: AssetKey.SMALL_DISH_soup } },
        0.8,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Vegetable Broth', key: AssetKey.SMALL_DISH_soup } },
        1.0,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Lamb Soup', key: AssetKey.SMALL_DISH_soup } },
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
        1.0,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Mushroom Soup', key: AssetKey.SMALL_DISH_soup } },
        1.0,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Fish Soup', key: AssetKey.SMALL_DISH_soup } },
        1.0,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Prawn Soup', key: AssetKey.SMALL_DISH_soup } },
        1.1,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Squid Soup', key: AssetKey.SMALL_DISH_soup } },
        1.0,
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Shark Soup', key: AssetKey.SMALL_DISH_soup } },
        1.3,
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
        { mainIng: { name: 'Peanut Soup', key: AssetKey.SMALL_DISH_soup } },
        1.3,
        Eatable.sideDish
    ),
];
