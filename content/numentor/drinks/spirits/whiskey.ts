import { association } from '../../../../classes/association';
import { AssetKey } from '../../../../classes/idea/AssetKey/AssetKey';
import { DishIdea } from '../../../../classes/idea/DishIdea';
import { Drinkable } from '../../../../classes/TavernProduct';
const a = association;
export const scotch: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Mac Barclay',
                incomeRange: [a.modest],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Grain Scotch  -' }],
            secondSideDishes: [
                {
                    name: ' dry taste with a subtle oaken note',
                },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Jolly Walker, Grey Label',
                needs: [a.poor],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Whisky, Blended Scotch  - fruity notes followed by bitterness',
                },
            ],
        },
        1.3,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Jolly Walker, Red Label',
                incomeRange: [a.modest],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Whisky, Blended Grain Scotch  - fuity notes with a peppery spicyness',
                },
            ],
        },
        { [a.modest]: 1.1 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Jolly Walker, Blue Label',
                incomeRange: [a.modest],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Whisky, Blended Malt Scotch  - fruity notes with a rich, creamy finish',
                },
            ],
        },
        { [a.modest]: 1.2 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Jolly Walker, Silver Label',
                incomeRange: [a.wealthy],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Whisky, Single Grain Scotch  - fruity notes with a firm, spicy finish',
                },
            ],
        },
        { [a.modest]: 1.5 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Jolly Walker, Gold Label',
                needs: [a.rich],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Whisky, Single Malt Scotch  - fruity notes with a mouth-coating maltyness',
                },
            ],
        },
        0.8,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Storming Stallion',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' mouth-coating maltyness with notes of walnut' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Mac Mulligan',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Scotch  -' }],
            secondSideDishes: [{ name: ' woody notes with a bitter finish' }],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Mac Master',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Single Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' creamy nuances mingling with notes of orange' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Amber Grace',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' strong oaken flavors with notes of honey' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Smooth Millie',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' a rich, creamy taste with notes of hazelnut' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Freya Mitchel's",
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Scotch  -' }],
            secondSideDishes: [
                { name: ' subtle notes of apples with a spicy finish' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Blackwood Benson',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Single Grain Scotch  -' }],
            secondSideDishes: [
                { name: ' mouth-coating oakyness with a smoky finish' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Fiery Ferguson',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' rich fruityness with a peppery finish' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Copper Noon',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Single Grain Scotch  -' }],
            secondSideDishes: [
                { name: ' dry, mouthful fruityness with a smoky finish' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Rosetto's",
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Grain Scotch  -' }],
            secondSideDishes: [
                { name: ' youthful nuances of cream and peach' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Belezebu's",
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Single Grain Scotch  -' }],
            secondSideDishes: [{ name: ' dry maltyness with a spicy finish ' }],
        },
        1,
        Drinkable.spirit
    ),
];
export const bourbon: DishIdea[] = [
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Gregory Gregson',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [{ name: ' dry smokyness with a malty finish' }],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Old Kennedy',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' rich, creamy flavor with a malty finish' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Mild Miller's",
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Single Batch  -' }],
            secondSideDishes: [
                { name: ' dignified maltyness paired with notes of caramel' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Old Jefferson',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' rich fruityness with a firm, grassy finish' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Copper Joe',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [
                { name: ' strong, fruity flavors with a note of copper' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Oaky Jackson',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' harsh oakyness with a herbal finish ' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'John Beam',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' light notes of sweet corn and a mild spicyness' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Jeff Daniel's",
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' light nuttyness with notes of corn and maples' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Lumber Jason',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [
                { name: ' woody bitterness with a spicy finish' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Amber Marie',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' youthful fruityness with notes of citrus' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Luster Lacy',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' rich fruityness with notes of lemon and orange' },
            ],
        },
        1,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Lavish Lucy',
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [
                { name: ' mouth-coating spicyness with a soft, oaky finish' },
            ],
        },
        1,
        Drinkable.spirit
    ),
];
