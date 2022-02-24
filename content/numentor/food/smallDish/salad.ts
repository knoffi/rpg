import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Eatable } from '../../../../classes/TavernProduct';
const a = association;
const europeanUnderdark = [
    a.mountain,
    a.underdark,
    a.city,
    a.village,
    a.forest,
];
export const salads: DishIdea[] = [
    // see Arab Salad
    new DishIdea(
        {
            mainIng: {
                name: 'Salata Baladi',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.desert],
                misfits: [a.rich],
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
                misfits: [a.rich],
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
                misfits: [a.rich],
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
                misfits: [a.rich],
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
                misfits: [a.rich],
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
                misfits: [a.rich],
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
                misfits: [a.rich],
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
            mainIng: {
                name: 'Egg Salad',
                key: AssetKey.SMALL_DISH_salad,
                incomeRange: [a.wealthy, a.modest],
                powerFits: [a.city, a.human],
                landRange: europeanUnderdark,
            },
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
            mainIng: {
                name: 'Potato Salad',
                key: AssetKey.SMALL_DISH_salad,
                powerFits: [...europeanUnderdark, a.halfling, a.gnome],
                misfits: [a.rich, a.tropical, a.desert],
            },
            firstSideDishes: [
                //Austrian
                {
                    name: 'Potato Slices in a Dressing from Onions, Parsley, Vegetable Stock, Mustard, Apple Vinegar and Oil',
                    landRange: [a.village, a.mountain, a.forest],
                },
                // West Prussian
                {
                    name: 'Diced Potatoes, Hard-Boiled Eggs, Bacon, Pickles and Onions, mixed with Mayonnaise and Parsley',
                    landRange: [a.city],
                },
                //Eastern Prussian
                {
                    name: 'Potato Slices mixed with Sour Cream and Mustard, sprinkled with Parsley, Dill and Chives',
                    landRange: [a.haven],
                },
                // Russian
                {
                    name: 'Diced Potatoe, Hard-Boild Egg, Pickles, Peas and Carrots, mixed with Mayonnaise and Black Pepper ',
                    landRange: [a.underdark],
                },
            ],
        },
        1.1,
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Cucumber Salad',
                key: AssetKey.SMALL_DISH_salad,
                landRange: [a.city, a.village, a.forest, a.haven],
                powerFits: [a.druid],
                misfits: [a.rich],
            },
            firstSideDishes: [
                // U.S.-American
                {
                    name: 'Cucumber Slices in Tartar Sauce (Mayonnaise with Chopped Pickles, Carpers and Dill)',
                    needs: [a.wealthy],
                },
                //German
                {
                    name: 'Cucumber Slices in Vinaigrette (Mustard with Oil and Vinegar)',
                    incomeRange: [a.poor, a.modest],
                    misfits: [a.haven],
                },
                // British
                {
                    name: 'Cucumber Slices with Celery Stripes in a mix of Cream and Lemon Juice',
                    incomeRange: [a.modest],
                    misfits: [a.haven],
                },
                // Russian
                {
                    name: 'Cucumber Slices with Chopped Garlic in a mix of Sour Cream and Dill',
                    incomeRange: [a.modest],
                    needs: [a.haven],
                },
                // A La Creme
                {
                    name: 'Cucumber Slices with Chopped Onions in a mix of Sour Cream and Fruit Vinegar',
                    incomeRange: [a.modest],
                    misfits: [a.haven],
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
                needsOne: [a.village, a.rich],
                incomeRange: [a.wealthy, a.rich],
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
                landRange: europeanUnderdark,
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Garnished with Mild Onions and Dressing (Mustard, White Wine Vinegar, Olive Oil)',
                    incomeRange: [a.wealthy, a.modest],
                },
                {
                    name: 'Garnished with Walnuts and Dressing (Mustard, White Wine Vinegar, Olive Oil)',
                    needs: [a.wealthy],
                },
                {
                    name: 'Garnished with Walnuts and Dressing (Mustard, White Wine Vinegar, Pumpkin Oil)',
                    needs: [a.wealthy],
                },
                {
                    name: 'With Walnuts and Dressing (Mustard, Apple Vinegar,Sunflower Oil)',
                    incomeRange: [a.modest],
                },
                {
                    name: 'With Onions and Dressing (Mustard, Apple Vinegar, Sunflower Oil)',
                    incomeRange: [a.poor, a.modest],
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Caesar Salad',
                key: AssetKey.SMALL_DISH_salad,
                needsOne: [a.haven, a.rich],
                incomeRange: [a.rich],
                misfits: [a.desert, a.tropical],
                powerFits: [a.human, a.haven, a.rich],
            },
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
            mainIng: {
                name: 'Chef Salad',
                key: AssetKey.SMALL_DISH_salad,
                needsOne: [a.city, a.rich],
                incomeRange: [a.rich],
                misfits: [a.desert, a.tropical],
                powerFits: [a.human, a.city, a.rich],
            },
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
            mainIng: {
                name: 'Chicken Salad',
                key: AssetKey.SMALL_DISH_salad,
                needsOne: [a.village, a.rich],
                incomeRange: [a.rich],
                misfits: [a.desert, a.tropical],
                powerFits: [a.human, a.village, a.rich],
            },
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
            mainIng: {
                name: 'Coleslaw',
                key: AssetKey.SMALL_DISH_salad,
                landRange: europeanUnderdark,
                misfits: [a.rich],
                powerFits: [a.gnome, a.city],
            },
            firstSideDishes: [
                {
                    name: 'Finely Shredded Cabbage and Carrots, seasoned with Buttermilk, Mustard and White Wine Vinegar',
                    misfits: [a.city],
                },
                {
                    name: 'Finely Shredded Cabbage and Carrots, seasoned with Mayonnaise, Mustard and White Wine Vinegar',
                    misfits: [a.village],
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    // the German Krautsalat, the Polish Krautsalat, the US-American Salad
    new DishIdea(
        {
            mainIng: {
                name: 'Cabbage Salad',
                key: AssetKey.SMALL_DISH_salad,
                powerFits: [a.mountain, a.forest, a.druid],
                landRange: europeanUnderdark,
                misfits: [a.rich],
            },
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
                incomeRange: [a.poor, a.modest],
                powerFits: [a.modest, a.haven],
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
                misfits: [a.desert, a.tropical],
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
                incomeRange: [a.poor, a.modest, a.wealthy],
            },
            firstSideDishes: [
                {
                    name: 'Fish (Tuna) blended with Pickles, Onions and Hard-Boiled Egg',
                    incomeRange: [a.poor, a.modest],
                },
                {
                    name: 'Fish (Tuna) blended with Pickles, Onions and Mayonnaise',
                    incomeRange: [a.wealthy],
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
                needsOne: [a.haven, a.wealthy, a.rich],
                incomeRange: [a.modest, a.wealthy, a.rich],
                misfits: [a.desert, a.tropical],
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
                powerFits: [a.underdark, a.halfling, a.poor, a.elf],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Beetroot with Apples and Onions, topped with Nuts in a Yoghurt-Honey Dressing',
                    needsOne: [a.elf, a.rich, a.wealthy],
                    incomeRange: [a.rich, a.wealthy],
                },
                {
                    name: 'Beetroot with Onions, Oil and Vinegar',
                    incomeRange: [a.poor, a.modest],
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
                name: 'Mushroom & Spinach Salad',
                key: AssetKey.SMALL_DISH_salad,
                incomeRange: [a.modest, a.wealthy],
                powerFits: [a.underdark, a.gnome, a.druid],
                misfits: [a.tropical, a.desert, a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Fresh Spinach with Brown and White Mushrooms, seasoned with Pepper and Lemon Juice',
                },
                {
                    name: 'Fresh Spinach with White Mushrooms and Bacon, seasoned with Pepper and Lemon Juice',
                    misfits: [a.druid],
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
            firstSideDishes: [
                {
                    name: 'Prawns mixed with Mayonnaise, Sour Cream and Dill, garnished with Roe, served with Toasted Bread',
                },
                {
                    name: 'Crab Meat mixed with Mayonnaise, Sour Cream and Dill, garnished with Roe, served with Toasted Bread',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Pineapple-Coconut Salad',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.tropical],
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Grilled Pineapple Rings, Coconut Bits, Lettuce and Peppers, with a Fruity-Spicy Dressing',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
    // South American dish from Peru
    new DishIdea(
        {
            mainIng: {
                name: 'Ceviche',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.tropical],
                misfits: [a.rich],
            },
            firstSideDishes: [
                {
                    name: 'Raw Fish Dices in Bitter Orange Juice, with Chopped Onions, Chili Peppers and Cilantro',
                },
                {
                    name: 'Raw Fish Dices in Lime Juice, with Chopped Onions, Chili Peppers and Cilantro',
                },
            ],
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
                needsOne: [a.tropical, a.wealthy],
                landRange: [a.tropical, a.haven],
            },
            firstSideDishes: [
                {
                    name: 'Raw Tuna Dices mixed with Sea Salt, Seaweed and Candlenut',
                },
                {
                    name: 'Raw Squid Dices mixed with Sea Salt, Seaweed and Candlenut',
                },
                {
                    name: 'Raw Salmon Dices mixed with Sea Salt, Seaweed and Candlenut',
                },
            ],
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
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Slices Of Tomato and Mozarella, topped with Basil and sprinkled with Olive Oil',
                },
            ],
        },
        'default',
        Eatable.sideDish
    ),
];
