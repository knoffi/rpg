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
                powerFits: [a.forest, a.village, a.halfling, a.modest],
                misfits: [a.desert, a.tropical, a.drow, a.elf],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Grain Scotch  -' }],
            secondSideDishes: [
                {
                    name: ' dry taste with a subtle oaky note',
                },
            ],
        },
        'default',
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Jolly Walker, Grey Label',
                needs: [a.poor],
                powerFits: [a.poor, a.human],
                misfits: [a.desert, a.tropical, a.drow, a.elf],
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
                powerFits: [a.modest, a.human],
                misfits: [a.desert, a.tropical, a.drow, a.elf],
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
                powerFits: [a.human, a.modest],
                misfits: [a.desert, a.tropical, a.drow, a.elf],
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
                powerFits: [a.tiefling, a.wealthy],
                misfits: [a.desert, a.tropical, a.drow, a.elf],
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
                powerFits: [a.rich, a.human],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Whisky, Single Malt Scotch  - notes of cacao with a mouth-coating maltyness',
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
                name: 'Stormy Stallion',
                needs: [a.knight],
                powerFits: [a.knight, a.wealthy],
                incomeRange: [a.wealthy, a.modest],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' mouth-coating maltyness storms your tongue' },
            ],
        },
        { [a.modest]: 1.4 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Mac Mulligan',
                needs: [a.poor],
                powerFits: [a.poor, a.halfling, a.village, a.forest],
                misfits: [a.desert, a.tropical, a.elf, a.drow],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Scotch  -' }],
            secondSideDishes: [{ name: ' woody notes with a bitter finish' }],
        },
        'default',
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Mac Master',
                needs: [a.rich],
                misfits: [a.desert, a.tropical, a.drow],
            },
            firstSideDishes: [{ name: 'Whisky, Single Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' creamy nuances mingling with notes of orange' },
            ],
        },
        1.4,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Mac Master, Export Label',
                needs: [a.rich],
                needsOne: [a.desert, a.tropical, a.drow],
            },
            firstSideDishes: [{ name: 'Whisky, Single Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' creamy nuances mingling with notes of citrus' },
            ],
        },
        1.7,
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Amber Grace',
                incomeRange: [a.modest, a.wealthy],
                powerFits: [a.elf, a.cleric, a.city, a.wealthy],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' strong oaken flavors with notes of honey' },
            ],
        },
        { [a.modest]: 1.5 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Smooth Millie',
                incomeRange: [a.modest, a.wealthy],
                powerFits: [a.halfling, a.gnome, a.bard],
                misfits: [a.desert, a.tropical, a.elf, a.drow, a.tiefling],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Malt Scotch  -' }],
            secondSideDishes: [
                { name: ' a rich, creamy taste with notes of hazelnut' },
            ],
        },
        { [a.modest]: 1.5 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Freya Mitchel's",
                incomeRange: [a.modest],
                powerFits: [a.human, a.modest, a.city],
                misfits: [a.desert, a.tropical, a.drow, a.elf, a.tiefling],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Scotch  -' }],
            secondSideDishes: [
                { name: ' subtle notes of apples with a spicy finish' },
            ],
        },
        'default',
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Blackwood Benson',
                incomeRange: [a.modest, a.wealthy],
                powerFits: [a.druid, a.adventurer, a.bard, a.forest],
                misfits: [a.desert, a.tropical, a.elf, a.drow],
            },
            firstSideDishes: [{ name: 'Whisky, Single Grain Scotch  -' }],
            secondSideDishes: [
                { name: ' mouth-coating oakyness with a smoky finish' },
            ],
        },
        { [a.wealthy]: 0.7 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Fiery Ferguson',
                powerFits: [a.tiefling, a.wizard],
                needsOne: [a.tiefling, a.wizard],
                misfits: [a.desert, a.tropical, a.poor],
            },
            firstSideDishes: [
                {
                    name: 'Whisky, Blended Malt Scotch  -',
                    incomeRange: [a.modest],
                },
                {
                    name: 'Whisky, Single Malt Scotch  -',
                    incomeRange: [a.wealthy, a.rich],
                },
            ],
            secondSideDishes: [
                {
                    name: ' rich spicyness with notes of cherry',
                    incomeRange: [a.wealthy, a.rich],
                },
                {
                    name: ' subtle spicyness with notes of cherry',
                    incomeRange: [a.modest],
                },
            ],
        },
        { [a.modest]: 1.5, [a.rich]: 0.7 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Copper Noon',
                incomeRange: [a.modest, a.poor],
                needsOne: [a.assasine, a.soldier, a.mountain],
                powerFits: [a.assasine, a.soldier, a.mountain],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [
                { name: 'Whisky, Single Grain Scotch  -' },
                { name: 'Whisky, Blended Scotch  -' },
            ],
            secondSideDishes: [
                { name: ' subtle fruityness with a smoky finish' },
            ],
        },
        { [a.poor]: 1.3 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Rosetto's",
                needs: [a.prostitute],
                powerFits: [a.prostitute],
                misfits: [a.desert, a.tropical, a.rich],
            },
            firstSideDishes: [{ name: 'Whisky, Blended Grain Scotch  -' }],
            secondSideDishes: [
                { name: ' youthful nuances of cream and peach' },
            ],
        },
        { [a.wealthy]: 0.8 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Belezebu's",
                needs: [a.tiefling],
                powerFits: [a.tiefling],
                incomeRange: [a.poor, a.modest],
                misfits: [a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whisky, Single Grain Scotch  -' }],
            secondSideDishes: [{ name: ' dry maltyness with a spicy finish ' }],
        },
        { [a.poor]: 1.5 },
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
        'default',
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
        'default',
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
        'default',
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
        'default',
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
        'default',
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
        'default',
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
        'default',
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
        'default',
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
        'default',
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
        'default',
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
        'default',
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
        'default',
        Drinkable.spirit
    ),
];
