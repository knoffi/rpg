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
                name: 'Salata Jaza’iriya',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.desert],
            },
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
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Tabbouleh',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.desert],
            },
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Bean Salad', key: AssetKey.SMALL_DISH_salad } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Egg Salad', key: AssetKey.SMALL_DISH_salad } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Potato Salad', key: AssetKey.SMALL_DISH_salad } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Cucumber Salad', key: AssetKey.SMALL_DISH_salad } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Tomato Salad', key: AssetKey.SMALL_DISH_salad } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Spinach Salad', key: AssetKey.SMALL_DISH_salad } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Green Leaf Salad',
                key: AssetKey.SMALL_DISH_salad,
            },
        },
        'default',
        Eatable.sideDish
    ),
    // see https://www.bbcgoodfood.com/recipes/middle-eastern-carrot-salad (needs a.desert)
    new DishIdea(
        {
            mainIng: {
                name: 'Cumin Carrot Salad',
                key: AssetKey.SMALL_DISH_salad,
            },
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Caesar Salad', key: AssetKey.SMALL_DISH_salad } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Chef Salad', key: AssetKey.SMALL_DISH_salad } },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        { mainIng: { name: 'Chicken Salad', key: AssetKey.SMALL_DISH_salad } },
        'default',
        Eatable.sideDish
    ),
    // is actually the Dutch word for Cabbage Salad...
    new DishIdea(
        { mainIng: { name: 'Coleslaw', key: AssetKey.SMALL_DISH_salad } },
        'default',
        Eatable.sideDish
    ),
    // the German Krautsalat, the Polish Krautsalat, the US-American Salad
    new DishIdea(
        { mainIng: { name: 'Cabbage Salad', key: AssetKey.SMALL_DISH_salad } },
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
        },
        'default',
        Eatable.sideDish
    ),
    new DishIdea(
        {
            mainIng: {
                name: 'Crab Louis',
                key: AssetKey.SMALL_DISH_salad,
                needs: [a.haven],
            },
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
                needs: [a.haven],
            },
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
        },
        'default',
        Eatable.sideDish
    ),
];
