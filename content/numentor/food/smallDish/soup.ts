import { association, landAssociations } from '../../../../classes/association';
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
const exceptHaven = landAssociations.filter((fit) => fit !== a.haven);
export const soups: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                name: 'Chicken Soup',
                key: AssetKey.SMALL_DISH_soup,
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'With Chicken Pieces',
                    incomeRange: [a.modest, a.wealthy],
                },
                {
                    name: 'With Chicken Breast',
                    incomeRange: [a.wealthy],
                },
                {
                    name: 'With Chicken Feet',
                    incomeRange: [a.modest, a.poor],
                },
                {
                    name: 'With Chicken Thigh',
                    incomeRange: [a.modest, a.poor],
                },
            ],
            secondSideDishes: [
                {
                    name: ', Carrots, Onions and Celery, seasoned with Parsley',
                    landRange: europeanUnderdark,
                },
                {
                    name: ', Carrots, Onions and Peas, seasoned with Parsley',
                    landRange: europeanUnderdark,
                },
                {
                    name: ', Carrots, Onions and Celery, seasoned with White Wine and Thyme',
                    landRange: europeanUnderdark,
                    needsOne: [a.wealthy],
                },
                {
                    name: ', Carrots, Onions and Potatoes, seasoned with Cumin and Coriander',
                    needs: [a.desert],
                },
                {
                    name: ', Carrots and Sweet Potatoes, seasoned with Smoked Paprika',
                    needs: [a.desert],
                },
                {
                    name: ', Eggplant, Garlic and Chickpeas, seasoned with Nutmeg and Cinnamon',
                    needs: [a.desert],
                },
                {
                    name: ', Tomatoes and Onions, seasoned with Black Pepper and Chili',
                    needs: [a.tropical],
                },
                {
                    name: ', Noodles and Onions, seasoned with Lime and Brown Sugar',
                    needs: [a.tropical],
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
                { name: 'With Beef Feet', needs: [a.poor] },
                {
                    name: 'With Beef Chunks',
                    incomeRange: [a.modest, a.wealthy],
                },
                { name: 'With Beef Tail', needs: [a.wealthy] },
            ],
            secondSideDishes: [
                {
                    name: ', Carrots, Onions and Celery, seasoned with Parsley',
                    landRange: europeanUnderdark,
                },
                {
                    name: ', Carrots, Onions and Peas, seasoned with Parsley',
                    landRange: europeanUnderdark,
                },
                {
                    name: ', Carrots, Onions and Celery, seasoned with Red Wine and Bay Leave',
                    landRange: europeanUnderdark,
                    needsOne: [a.wealthy],
                },
                {
                    name: ', Carrots, Onions and Potatoes, seasoned with Cumin and Coriander',
                    needs: [a.desert],
                },
                {
                    name: ', Carrots and Sweet Potatoes, seasoned with Smoked Paprika',
                    needs: [a.desert],
                },
                {
                    name: ', Eggplant, Garlic and Chickpeas, seasoned with Nutmeg and Cinnamon',
                    needs: [a.desert],
                },
                {
                    name: ', Tomatoes and Onions, seasoned with Black Pepper and Chili',
                    needs: [a.tropical],
                },
                {
                    name: ', Noodles and Onions, seasoned with Lime and Brown Sugar',
                    needs: [a.tropical],
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
            mainIng: {
                name: 'Tomato Soup',
                key: AssetKey.SMALL_DISH_soup,
                landRange: [a.city, a.haven],
                misfits: [a.rich],
            },
            firstSideDishes: [
                { name: '' },
                { name: 'With Carrots slices and Onions' },
                { name: 'With Carrots slices and Garlic' },
                { name: 'With Carrots slices and Cream' },
                { name: 'With Carrots slices and Milk' },
                { name: 'Seasoned with Salt ', needs: [a.poor] },
                {
                    name: 'With Beef Chunks and seasonal Spices',
                    misfits: [a.poor],
                },
                {
                    name: 'With Lamb Chunks and seasonal Spices',
                    misfits: [a.poor],
                },
                {
                    name: 'With Chicken Chunks and seasonal Spices',
                    misfits: [a.poor],
                },
            ],
            secondSideDishes: [
                {
                    name: ', served with hard bread',
                    needs: [a.poor],
                },
                {
                    name: ', served with fresh bread',
                    misfits: [a.poor],
                },
                {
                    name: ', served with toasted bread',
                    misfits: [a.poor],
                },
                {
                    name: ', served with garlic bread',
                    misfits: [a.poor],
                },
                {
                    name: ', served with a grilled cheese sandwich',
                    needs: [a.wealthy],
                },
                {
                    name: ', served with noodles',
                    incomeRange: [a.modest],
                },
                { name: '', needs: [a.poor] },
            ],
        },
        0.9,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Pumpkin Soup',
                key: AssetKey.SMALL_DISH_soup,
                landRange: europeanUnderdark,
                misfits: [a.rich],
                powerFits: [a.village, a.halfling, a.druid],
            },
            firstSideDishes: [
                {
                    name: 'With Milk and Butter, seasoned with Cinnamon and Lemon',
                    incomeRange: [a.modest],
                },
                {
                    name: 'With Milk, seasoned with Lemon',
                    needs: [a.poor],
                },
                {
                    name: 'Refined with Onions and Cream, seasoned with Thyme and Pepper',
                    incomeRange: [a.wealthy],
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Bread Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [a.poor, a.village],
                misfits: [a.rich, a.wealthy],
                landRange: [...europeanUnderdark, a.haven],
            },
            firstSideDishes: [
                { name: 'Bread Crumbs in Vegetable Stock', misfits: [a.haven] },
                { name: 'Bread Crumbs in Fish Stock', needs: [a.haven] },
                {
                    name: 'Bread Crumbs and Boiled Egg in Pork Stock, seasoned with Marjoram',
                    landRange: europeanUnderdark,
                    misfits: [a.forest, a.poor],
                },
                {
                    name: 'Bread Crumbs and Blood Sausage in Pork Stock, seasoned with Marjoram',
                    landRange: europeanUnderdark,
                    misfits: [a.forest, a.poor],
                },
                {
                    name: 'Bread Crumbs and Liver Sausage in Pork Stock, seasoned with Marjoram',
                    landRange: europeanUnderdark,
                    misfits: [a.forest, a.poor],
                },
            ],
        },
        0.8,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Slaughter Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [
                    a.barbarian,
                    a.soldier,
                    a.assasine,
                    a.village,
                    a.dwarf,
                ],
                misfits: [a.rich, a.poor, a.druid],
            },
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
                    misfits: [a.desert],
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Carrot Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [a.druid, a.village],
                landRange: europeanUnderdark,
            },
            firstSideDishes: [{ name: 'Carrot Purée' }],
            secondSideDishes: [
                {
                    name: ' with Cream and Shallots',
                    incomeRange: [a.wealthy],
                },
                {
                    name: ' with Milk and Onions',
                    incomeRange: [a.modest],
                },
                {
                    name: ' in Hot Water with Salt',
                    priceFactor: 0.8,
                    needs: [a.poor],
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
            mainIng: {
                name: 'Onion Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [a.wealthy, a.rich],
                landRange: europeanUnderdark,
            },
            firstSideDishes: [
                {
                    name: 'Caramelized Onions with White Wine in Beef Stock, topped with Toasted Bread and Melted Cheese',
                    needsOne: [a.rich, a.wealthy],
                },
                {
                    name: 'Caramelized Onions with White Wine in Beef Stock',
                    incomeRange: [a.modest],
                },
                {
                    name: 'Caramelized Onions with White Wine in Chicken Stock',
                    incomeRange: [a.modest],
                },
                {
                    name: 'Caramelized Onions in Vegetable Stock',
                    needs: [a.poor],
                },
            ],
        },
        { wealthy: 1.3, [a.rich]: 1.3 },
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Potato Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [a.underdark, a.druid, a.city, a.human],
                landRange: europeanUnderdark,
                misfits: [a.rich],
            },
            firstSideDishes: [{ name: 'Potato Purée in Vegetable Stock' }],
            secondSideDishes: [
                {
                    name: ' with Bacon and Onions',
                    misfits: [a.druid],
                    incomeRange: [a.modest, a.wealthy],
                },
                {
                    name: ' with Carrots and Celery',
                    incomeRange: [a.modest, a.wealthy],
                },
                {
                    name: ' with Prunes',
                    needs: [a.haven],
                    incomeRange: [a.modest, a.wealthy],
                },
                {
                    name: ' with a Blood Sausage',
                    misfits: [a.druid],
                    incomeRange: [a.modest, a.wealthy],
                },
                {
                    name: ' with a Liver Sausage',
                    misfits: [a.druid],
                    incomeRange: [a.modest, a.wealthy],
                },
                {
                    name: ' with a Pork Sausage',
                    misfits: [a.druid],
                    incomeRange: [a.modest, a.wealthy],
                },
                { name: '', needs: [a.poor] },
            ],
        },
        0.9,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Cabbage Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [a.halfling, a.village, a.druid],
                landRange: europeanUnderdark,
                misfits: [a.rich],
            },
            firstSideDishes: [
                { name: 'With Sauerkraut and Diced Carrots' },
                { name: 'With Sauerkraut and Diced Potatoes' },
                {
                    name: 'With Sauerkraut, Diced Potatoes and Carrots',
                },
            ],
            secondSideDishes: [
                { name: '', needs: [a.poor] },
                {
                    name: ', served with a Smoked Sausage',
                    misfits: [a.druid],
                    incomeRange: [a.modest],
                },
                {
                    name: ', served with a Pork Sausage',
                    misfits: [a.druid],
                    incomeRange: [a.modest],
                },
                {
                    name: ', served with a Pork Leg',
                    misfits: [a.druid],
                    needs: [a.wealthy],
                },
            ],
        },
        0.9,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Vegetable Soup',
                key: AssetKey.SMALL_DISH_soup,
                incomeRange: [a.poor, a.wealthy],
                landRange: europeanUnderdark,
                powerFits: [a.druid],
            },
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
            mainIng: {
                name: 'Pea Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [a.druid, a.halfling, a.gnome, a.village],
                landRange: europeanUnderdark,
                incomeRange: [a.poor, a.modest],
            },
            firstSideDishes: [{ name: 'Dried Peas cooked with' }],
            secondSideDishes: [
                {
                    name: ' Pork, Celery and Onions',
                    misfits: [a.druid, a.poor],
                },
                { name: ' Celery and Onions' },
            ],
            thirdSideDishes: [
                {
                    name: ', served with a Smoked Sausage',
                    misfits: [a.druid, a.poor],
                },
                {
                    name: ', served with Multigrain Bread and Bacon',
                    misfits: [a.druid, a.poor],
                },
                { name: ', served with Rye Bread and Butter' },
                {
                    name: ', served with Rye Bread and Cheese',
                    misfits: [a.poor],
                },
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
            mainIng: {
                name: 'Bean Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [a.druid, a.human],
                landRange: europeanUnderdark,
            },
            firstSideDishes: [
                // Bouneschlupp from Luxembourg
                {
                    name: 'Green Beans in Vegetable Stock cooked with Potatoes, Bacon and Onions',
                    misfits: [a.druid],
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
                    misfits: [a.druid],
                },
            ],
        },
        0.9,
        Eatable.sideDish
    ),
    // is a dip in Egypt, but a soup in Morocco
    new DishIdea(
        {
            mainIng: {
                name: 'Bissara Soup',
                key: AssetKey.SMALL_DISH_soup,
                needs: [a.desert],
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Puréed Broad Beans cooked with Garlic, Olive Oil and Lemon Juice, seasoned with ',
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
            mainIng: {
                name: 'Peppersoup',
                key: AssetKey.SMALL_DISH_soup,
                needs: [a.desert],
            },
            firstSideDishes: [
                { name: 'Oxtail in Beef Stock' },
                { name: 'Goat Meat in Beef Stock' },
                { name: 'Chicken Hearts in Chicken Stock' },
                { name: 'Cat Fish and Shrimps in Fish Stock' },
                { name: 'Crabs and Shrimps in Fish Stock' },
            ],
            secondSideDishes: [
                {
                    name: ' , seasoned with chili peppers, lime and nutmeg',
                },
            ],
        },
        1.1,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Mushroom Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [a.underdark, a.druid, a.forest, a.gnome],
                landRange: europeanUnderdark,
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Blended White Mushrooms with Garlic and Onions in Chicken Stock, thickened with Cream',
                    misfits: [a.druid],
                },
                {
                    name: 'Blended Brown Mushrooms with Garlic and Onions in Chicken Stock, thickened with Cream',
                    misfits: [a.druid],
                },
                {
                    name: 'Blended White Mushrooms with Garlic and Onions in Vegetable Stock, thickened with Cream',
                },
                {
                    name: 'Blended Brown Mushrooms with Garlic and Onions in Vegetable Stock, thickened with Cream',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Fish Soup',
                key: AssetKey.SMALL_DISH_soup,
                needs: [a.haven],
            },
            firstSideDishes: [{ name: 'With Fish Pieces ' }],
            secondSideDishes: [
                ...fish,
                { name: '(Herring)' },
                { name: '(Salmon)' },
                { name: '(Catfish)' },
                { name: '(Pyke)' },
            ],
            thirdSideDishes: [
                {
                    name: ', Diced Carrots and Potatoes, seasoned with Dill and Parsley',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Clam Chowder',
                key: AssetKey.SMALL_DISH_soup,
                needsOne: [a.haven, a.rich],
                incomeRange: [a.wealthy, a.rich],
            },
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
                needs: [a.haven],
                powerFits: [a.haven, a.modest, a.poor],
                incomeRange: [a.poor, a.modest],
            },
            firstSideDishes: [
                {
                    name: 'Soup from Fish Heads (Carp) with Red Onions, Bell Peppers and Tomatoes, topped with Fish Filet',
                    incomeRange: [a.modest],
                },
                {
                    name: 'Soup from Fish Heads (Carp) with Red Onions and Tomatoes',
                    needs: [a.poor],
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    // Scottish Fish soup
    new DishIdea(
        {
            mainIng: {
                name: 'Cullen Skink Soup',
                key: AssetKey.SMALL_DISH_soup,
                needs: [a.haven],
                powerFits: [a.haven, a.modest, a.poor],
                incomeRange: [a.poor, a.modest],
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
            mainIng: {
                name: 'Shrimp Chowder',
                key: AssetKey.SMALL_DISH_soup,
                incomeRange: [a.wealthy, a.rich],
                needsOne: [a.haven, a.rich],
                misfits: [a.desert],
            },
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
            mainIng: {
                name: 'Lobster Soup',
                key: AssetKey.SMALL_DISH_soup,
                needsOne: [a.haven, a.rich],
                incomeRange: [a.wealthy, a.rich],
                misfits: [a.desert],
            },
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
            mainIng: {
                name: 'Squid Soup',
                key: AssetKey.SMALL_DISH_soup,
                needs: [a.haven],
                misfits: [a.poor, a.rich],
            },
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
            mainIng: {
                name: 'Shark Soup',
                key: AssetKey.SMALL_DISH_soup,
                needsOne: [a.haven, a.rich],
                incomeRange: [a.wealthy],
            },
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
                needsOne: [a.wealthy, a.rich],
                powerFits: [a.rich, a.tropical, a.bard],
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
            mainIng: {
                name: 'Beer Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [a.barbarian, a.soldier, a.dwarf],
                landRange: europeanUnderdark,
                incomeRange: [a.poor, a.modest],
            },
            firstSideDishes: [
                { name: 'Bread Chunks and Egg Yolk cooked in Beer and Milk' },
                { name: 'Bread Chunks with Raisins cooked in Beer and Milk' },
            ],
        },
        1.3,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Red Beet Soup',
                key: AssetKey.SMALL_DISH_soup,
                powerFits: [a.village, a.druid, a.tiefling, a.underdark],
                landRange: europeanUnderdark,
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Stock from Red Beets and Mushrooms, topped with Mushroom-Filled Dumplings',
                    misfits: [a.wealthy],
                },
                {
                    name: 'Stock from Red Beets and Chicken, cooked with White Cabbage and Carrots',
                    misfits: [a.druid, a.poor],
                },
                {
                    name: 'Stock from Red Beets and Beef, cooked with White Cabbage and Carrots',
                    misfits: [a.druid, a.poor],
                },
                {
                    name: 'Stock from Red Beets and Pork, cooked with White Cabbage and Carrots',
                    misfits: [a.druid, a.poor],
                },
                {
                    name: 'Stock from Red Beets and Lamb, cooked with White Cabbage and Carrots',
                    misfits: [a.druid, a.poor],
                },
                {
                    name: 'Stock from Red Beets and Duck, cooked with White Cabbage and Carrots',
                    misfits: [a.druid, a.poor],
                },
                {
                    name: 'Stock from Red Beets and Goose, cooked with White Cabbage and Carrots',
                    misfits: [a.druid, a.poor],
                },
            ],
        },
        1.3,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Oxtail Soup',
                key: AssetKey.SMALL_DISH_soup,
                landRange: europeanUnderdark,
                needsOne: [a.wealthy, a.rich],
            },
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
            mainIng: {
                name: 'Peanut Soup',
                key: AssetKey.SMALL_DISH_soup,
                needsOne: [a.desert, a.tropical],
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Peanut Paste with Tomatoes, topped with Beef Slices, seasoned with Pepper',
                    misfits: [a.poor],
                },
                {
                    name: 'Peanut Paste with Tomatoes, topped with Chicken Breast Slices',
                    misfits: [a.poor],
                },
                {
                    name: 'Peanut Paste with Tomatoes, topped with Corn-Dough Dumplings',
                    needs: [a.poor, a.tropical],
                },
                {
                    name: 'Peanut Paste with Tomatoes, served with Flat Bread',
                    needs: [a.poor, a.desert],
                },
            ],
        },
        1.1,
        Eatable.sideDish
    ),
    // needs soups with coconut milk for a.tropical
];
