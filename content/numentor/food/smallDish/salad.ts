import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
const a = association;
export const salads: DishIdea[] = [
    // see Arab Salad
    new DishIdea(
        {
            mainIng: {
                name: 'Salata Baladi',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.desert],
            },
            firstSideDishes: [
                {
                    name: 'Diced Tomatoes, Cucumber, Bell Peppers and Red Onions, seasoned with Lemon Juice and Cumin',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Piyaz Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.desert],
            },
            firstSideDishes: [
                {
                    name: 'White Beans, Red Onions and Parsley with Garlic, mixed with Sesame Paste and Lemon Juice',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Kisir Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.desert],
            },
            firstSideDishes: [
                {
                    name: 'Finely Ground Bulgur (Cereal) with Cucumber, mixed with Tomato Paste, Parsley, Onions and Garlic',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Tabbouleh Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.desert],
            },
            firstSideDishes: [
                {
                    name: 'Couscous (Toasted Wheat Paste) mixed with Cucumber, Tomato, Onions, Lemon Juice, Parsley and Mint',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Shirazi Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.desert],
            },
            firstSideDishes: [
                {
                    name: 'Finely-Diced Tomatoes, Cucumber and Onions, seasoned with Verjuice (Sour Grape Juice) and Mint',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Fattoush',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.desert],
            },
            firstSideDishes: [
                {
                    name: 'Toasted Flat Bread Bits, Tomato, Cucumber and Garlic, seasoned with Sumac (Sour Spice) and Mint',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Balela Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.desert],
            },
            firstSideDishes: [
                {
                    name: 'Chickpeas and Black Beans with Tomatoes and Onions, sprinkled with Lemon Juice and Parsley',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Egg Salad', key: AssetKey.SMALL_DISH_salad },
            firstSideDishes: [
                {
                    name: 'Chopped, Hard-Boiled Eggs with Minced Celery and Onions, mixed with Mayonnaise, seasoned with Mustard',
                },
                {
                    name: 'Scrambled Eggs with Minced Celery and Onions, mixed with Mayonnaise, seasoned with Mustard',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Potato Salad', key: AssetKey.SMALL_DISH_salad },
            firstSideDishes: [
                //Austrian
                {
                    name: 'Potato Slices in a Dressing from Onions, Parsley, Vegetable Stock, Mustard, Apple Vinegar and Oil',
                },
                // West Prussian
                {
                    name: 'Diced Potatoes, Hard-Boiled Eggs, Bacon, Pickles and Onions, mixed with Mayonnaise and Parsley',
                },
                //Eastern Prussian
                {
                    name: 'Potato Slices mixed with Sour Cream and Mustard, sprinkled with Parsley, Dill and Chives',
                },
                // Russian
                {
                    name: 'Diced Potatoe, Hard-Boild Egg, Pickles, Peas and Carrots, mixed with Mayonnaise and Black Pepper ',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Cucumber Salad', key: AssetKey.SMALL_DISH_salad },
            firstSideDishes: [
                // U.S.-American
                {
                    name: 'Cucumber Slices in Tartar Sauce (Mayonnaise with Chopped Pickles, Carpers and Dill)',
                },
                //German
                {
                    name: 'Cucumber Slices in Vinaigrette (Mustard with Oil and Vinegar)',
                },
                // British
                {
                    name: 'Cucumber Slices with Celery Stripes in a mix of Cream and Lemon Juice',
                },
                // Russian
                {
                    name: 'Cucumber Slices with Chopped Garlic in a mix of Sour Cream and Dill',
                },
                // A La Creme
                {
                    name: 'Cucumber Slices with Chopped Onions in a mix of Sour Cream and Fruit Vinegar',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Spinach Salad with Apple Vinnaigrette',
                key: AssetKey.SMALL_DISH_salad,
                needsOne: [a.wealthy, a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Fresh Spinach with Apples Bits and Walnuts, sprinkled with Vinnaigrette (Apple Vinegar, Mustard, Oil)',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Lettuce Salad',
                key: AssetKey.SMALL_DISH_salad,
            },
            firstSideDishes: [
                {
                    name: 'Garnished with Mild Onions and Vinnaigrette (Mustard, White Wine Vinegar, Olive Oil)',
                },
                {
                    name: 'Garnished with Walnuts and Vinnaigrette (Mustard, White Wine Vinegar, Olive Oil)',
                },
                {
                    name: 'With Walnuts and Vinnaigrette (Mustard, Apple Vinegar,Sunflower Oil)',
                },
                {
                    name: 'With Onions and Vinnaigrette (Mustard, Apple Vinegar, Sunflower Oil)',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Caesar Salad', key: AssetKey.SMALL_DISH_salad },
            firstSideDishes: [
                {
                    name: 'Fresh Lettuce, garnished with Crunchy Croutons and Anchovies, seasoned with a Garlicky Dressing',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Chef Salad', key: AssetKey.SMALL_DISH_salad },
            firstSideDishes: [
                {
                    name: 'Fresh Lettuce topped with Bacon, Ham, Hard-Boiled Egg, Tomato, Cucumber and Cheese',
                },
                {
                    name: 'Fresh Lettuce topped with Turkey Breast, Hard-Boiled Egg, Tomato, Cucumber and Cheese',
                },
                {
                    name: 'Fresh Lettuce topped with Chicken Breast, Hard-Boiled Egg, Tomato, Cucumber, and Cheese',
                },
                {
                    name: 'Fresh Lettuce topped with Roast Beef, Hard-Boiled Egg, Tomato, Cucumber, and Cheese',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: { name: 'Chicken Salad', key: AssetKey.SMALL_DISH_salad },
            firstSideDishes: [
                {
                    name: 'Fresh Lettuce topped with Chicken Breast and Hard-Boiled Egg, seasoned with Mayonnaise',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    // is actually the Dutch word for Cabbage Salad...
    new DishIdea(
        {
            mainIng: { name: 'Coleslaw', key: AssetKey.SMALL_DISH_salad },
            firstSideDishes: [
                {
                    name: 'Finely Shredded Cabbage and Carrots, seasoned with Buttermilk, Mustard and White Wine Vinegar',
                },
                {
                    name: 'Finely Shredded Cabbage and Carrots, seasoned with Mayonnaise, Mustard and White Wine Vinegar',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    // the German Krautsalat, the Polish Krautsalat, the US-American Salad
    new DishIdea(
        {
            mainIng: { name: 'Cabbage Salad', key: AssetKey.SMALL_DISH_salad },
            firstSideDishes: [
                {
                    name: 'Finely Shredded Cabbage with Apple and Onions, marinated with Oil and Vinegar',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    // Russian salad with different layers: pickled herring, eggs, beetroot, potatoes, ...
    // SINCE IT IS PICKLED HERRING, IT DOES NOT NEED TO BE PREPARED IN A MARITIM REGION
    new DishIdea(
        {
            mainIng: {
                name: 'Dressed Herring',
                key: AssetKey.SMALL_DISH_salad,
            },
            firstSideDishes: [
                {
                    name: 'Diced Pickled Herring, Boiled Egg, Potatoe, Beetroot, Carrots and Onions, topped with Mayonnaise',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Crab Louis',
                key: AssetKey.SMALL_DISH_salad,
                needsOne: [a.haven, a.rich],
                incomeRange: [a.wealthy, a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Iceberg Lettuce, topped with Crab Meat, Hard-Boiled Egg, Tomato and Asparagus, topped with Louis Dressing',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Tuna Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Fish (Tuna) blended with Pickles, Onions and Hard-Boiled Egg',
                },
                {
                    name: 'Fish (Tuna) blended with Pickles, Onions and Mayonnaise',
                },
            ],
            secondSideDishes: [{ name: ', served on Lettuce' }],
        },
        'default',
        Eatable.sideDish
    ),
    // without wiki
    new DishIdea(
        {
            mainIng: {
                name: 'Seafood Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Shrimps and Crab Meat with Celery and Red Onions, seasoned with Lemon Juice, Dill and Mayonnaise',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    // without wiki
    new DishIdea(
        {
            mainIng: {
                name: 'Beetroot Salad',
                key: AssetKey.SMALL_DISH_salad,
            },
            firstSideDishes: [
                {
                    name: 'Beetroot with Apples and Onions, topped with Nuts in a Yoghurt-Honey Dressing',
                },
                { name: 'Beetroot with Onions, Oil and Vinegar' },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    // without wiki
    new DishIdea(
        {
            mainIng: {
                name: 'Mushroom & Spinach Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Fresh Spinach with White Mushrooms and Bacon, seasoned with Pepper and Lemon Juice',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Taramosalata',
                key: AssetKey.SMALL_DISH_salad,
                needsOne: [a.rich, a.haven],
                incomeRange: [a.rich, a.wealthy],
            },
            firstSideDishes: [
                { name: 'Fish Roe (Cod)' },
                { name: 'Fish Roe (Carp)' },
                {
                    name: 'Fish Roe (Grey Mullet)',
                    needs: [a.rich],
                    priceFactor: 1.1,
                },
            ],
            secondSideDishes: [
                {
                    name: ' blended with Olive Oil, Lemon Juice and Almonds',
                    needs: [a.rich],
                    priceFactor: 1.1,
                },
                { name: ' blended with Olive Oil, Lemon Juice and Potato' },
                { name: ' blended with Olive Oil, Lemon Juice and Bread' },
                {
                    name: ' blended with Olive Oil, Vinegar and Almonds',
                    needs: [a.rich],
                    priceFactor: 1.1,
                },
                { name: ' blended with Olive Oil, Vinegar and Potato' },
                { name: ' blended with Olive Oil, Vinegar and Bread' },
            ],
            thirdSideDishes: [{ name: ', served with Bread' }],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Skagenröra',
                key: AssetKey.SMALL_DISH_salad,
                needsOne: [a.rich, a.haven],
                incomeRange: [a.rich, a.wealthy],
            },
            firstSideDishes: [{ name: '' }],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Papaya Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.tropical],
            },
            firstSideDishes: [{ name: '' }],
        },
        'default',
        Eatable.sideDish
    ),
    // South American dish from Peru
    new DishIdea(
        {
            mainIng: {
                name: 'Ceviche Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.tropical],
            },
            firstSideDishes: [{ name: '' }],
        },
        'default',
        Eatable.sideDish
    ),
    // Hawaian Salad
    new DishIdea(
        {
            mainIng: {
                name: 'Poke Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.tropical],
            },
            firstSideDishes: [{ name: '' }],
        },
        'default',
        Eatable.sideDish
    ),
    // Indonesian Salad
    new DishIdea(
        {
            mainIng: {
                name: 'Pecel Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.tropical],
            },
            firstSideDishes: [{ name: '' }],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Caprese Salad',
                key: AssetKey.SMALL_DISH_salad,
                needsOne: [a.wealthy, a.rich],
            },
            firstSideDishes: [{ name: '' }],
        },
        'default',
        Eatable.sideDish
    ),
];
