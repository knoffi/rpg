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
                misfits: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
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
                misfits: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
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
                misfits: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
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
                name: 'Jolly Walker, Export Label',
                incomeRange: [a.modest, a.poor, a.wealthy],
                needsOne: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
                landRange: [a.underdark, a.forest, a.desert, a.tropical],
            },
            firstSideDishes: [
                {
                    name: 'Whisky, Blended Grain Scotch  - subtle maltyness with notes of corn',
                },
            ],
        },
        { [a.poor]: 1.8, [a.modest]: 1.3, [a.wealthy]: 0.8 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Jolly Walker, Blue Label',
                incomeRange: [a.modest],
                powerFits: [a.human, a.modest],
                misfits: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
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
                misfits: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
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
                misfits: [a.underdark, a.desert, a.tropical],
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
                misfits: [a.underdark, a.desert, a.tropical],
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
                misfits: [a.underdark, a.desert, a.tropical, a.elf, a.drow],
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
                misfits: [a.underdark, a.desert, a.tropical, a.drow],
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
                needsOne: [a.underdark, a.desert, a.tropical, a.drow],
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
                misfits: [a.underdark, a.desert, a.tropical],
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
                misfits: [
                    a.underdark,
                    a.desert,
                    a.tropical,
                    a.elf,
                    a.drow,
                    a.tiefling,
                ],
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
                misfits: [
                    a.underdark,
                    a.desert,
                    a.tropical,
                    a.drow,
                    a.elf,
                    a.tiefling,
                ],
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
                misfits: [a.underdark, a.desert, a.tropical, a.elf, a.drow],
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
                misfits: [a.underdark, a.desert, a.tropical, a.poor],
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
                misfits: [a.underdark, a.desert, a.tropical],
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
                misfits: [a.underdark, a.desert, a.tropical, a.rich],
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
                misfits: [a.underdark, a.desert, a.tropical],
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
                incomeRange: [a.modest, a.wealthy],
                powerFits: [
                    a.mountain,
                    a.underdark,
                    a.village,
                    a.barbarian,
                    a.dwarf,
                ],
                misfits: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
            },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [{ name: ' dry smokyness with a malty finish' }],
        },
        { [a.wealthy]: 0.7 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Old Kennedy',
                incomeRange: [a.modest, a.wealthy],
                powerFits: [a.wealthy, a.wizard, a.bard, a.gnome, a.cleric],
                misfits: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' rich, creamy flavor with a malty finish' },
            ],
        },
        { [a.modest]: 1.4 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Mild Miller's",
                needs: [a.rich],
                misfits: [a.underdark, a.desert, a.tropical, a.drow],
            },
            firstSideDishes: [{ name: 'Whiskey, Single Batch  -' }],
            secondSideDishes: [
                { name: ' dignified maltyness paired with notes of caramel' },
            ],
        },
        { [a.rich]: 1.3 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Mild Miller's, Export Label",
                needs: [a.rich],
                needsOne: [a.drow, a.underdark, a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Single Batch  -' }],
            secondSideDishes: [
                { name: ' youthful maltyness paired with notes of caramel' },
            ],
        },
        { [a.rich]: 1.6 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Old Jefferson',
                incomeRange: [a.poor, a.modest, a.wealthy],
                powerFits: [a.halfling, a.village, a.forest, a.druid],
                misfits: [a.underdark, a.desert, a.tropical],
            },
            firstSideDishes: [
                { name: 'Whiskey, Straight Bourbon  -', misfits: [a.poor] },
                { name: 'Whiskey, Bonded Bourbon  -', misfits: [a.wealthy] },
            ],
            secondSideDishes: [
                {
                    name: ' rich fruityness with a firm, grassy finish',
                    misfits: [a.poor],
                },
                {
                    name: ' subtle fruityness with a grassy finish',
                    misfits: [a.rich],
                },
            ],
        },
        { [a.poor]: 1.6, [a.wealthy]: 0.8 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Copper Joe',
                incomeRange: [a.poor, a.modest],
                powerFits: [a.mountain, a.village, a.poor, a.dwarf],
                misfits: [a.underdark, a.desert, a.tropical, a.elf, a.drow],
            },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [
                { name: ' mild fruityness with a note of copper' },
            ],
        },
        { [a.modest]: 0.7 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Oaky Jackson',
                powerFits: [a.barbarian, a.assasine, a.forest, a.druid],
                misfits: [a.underdark, a.desert, a.tropical, a.drow],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' harsh oakyness with a slightly herbal finish ' },
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
                powerFits: [a.human, a.modest],
                misfits: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
            },
            firstSideDishes: [
                { name: 'Whiskey, Straight Bourbon  -', misfits: [a.poor] },
                { name: 'Whiskey, Bonded Bourbon  -', needs: [a.poor] },
            ],
            secondSideDishes: [
                {
                    name: ' light notes of sweet corn and a mild spicyness',
                    misfits: [a.poor],
                },
                {
                    name: ' light notes of sweet corn and a subtle spicyness',
                    needs: [a.poor],
                },
            ],
        },
        { [a.poor]: 1.5 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'John Beam, Export Label',
                incomeRange: [a.poor, a.modest],
                powerFits: [a.human, a.modest, a.city],
                needsOne: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
                landRange: [
                    a.forest,
                    a.underdark,
                    a.underdark,
                    a.desert,
                    a.tropical,
                ],
            },
            firstSideDishes: [
                { name: 'Whiskey, Straight Bourbon  -', misfits: [a.poor] },
                { name: 'Whiskey, Blended Bourbon  -', needs: [a.poor] },
            ],
            secondSideDishes: [
                {
                    name: ' light notes of sweet corn and a subtle sour finish',
                    misfits: [a.poor],
                },
                {
                    name: ' light notes of sweet corn and a sour finish',
                    needs: [a.poor],
                },
            ],
        },
        { [a.poor]: 1.8, [a.modest]: 1.3 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Jeff Daniel's",
                incomeRange: [a.modest, a.wealthy],
                powerFits: [a.human, a.city, a.modest],
                misfits: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
            },
            firstSideDishes: [
                { name: 'Whiskey, Straight Bourbon  -', needs: [a.wealthy] },
                { name: 'Whiskey, Bonded Bourbon  -', misfits: [a.wealthy] },
            ],
            secondSideDishes: [
                {
                    name: ' nutty nuances with notes of corn and maples',
                    needs: [a.wealthy],
                },
                {
                    name: ' light nuttyness with notes of corn',
                    misfits: [a.wealthy],
                },
            ],
        },
        { [a.wealthy]: 0.6, [a.modest]: 1.1 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: "Jeff Daniel's, Export Label",
                incomeRange: [a.modest, a.wealthy],
                powerFits: [a.human, a.modest],
                needsOne: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
                landRange: [
                    a.forest,
                    a.underdark,
                    a.underdark,
                    a.desert,
                    a.tropical,
                ],
            },
            firstSideDishes: [
                { name: 'Whiskey, Straight Bourbon  -', needs: [a.wealthy] },
                { name: 'Whiskey, Bonded Bourbon  -', misfits: [a.wealthy] },
            ],
            secondSideDishes: [
                { name: ' nutty nuances with notes of corn and maples' },
                { name: ' light nuttyness with notes of corn' },
            ],
        },
        { [a.wealthy]: 0.9, [a.modest]: 1.5 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Lumber Jason',
                incomeRange: [a.poor, a.modest],
                powerFits: [a.forest, a.druid, a.barbarian, a.modest],
                misfits: [a.underdark, a.desert, a.tropical, a.drow, a.elf],
            },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [
                { name: ' woody bitterness with a spicy finish' },
            ],
        },
        { [a.modest]: 0.6 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Amber Marie',
                needsOne: [a.cleric, a.knight],
                misfits: [a.underdark, a.desert, a.tropical, a.rich, a.poor],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' youthful maltyness with notes of citrus' },
            ],
        },
        { [a.modest]: 1.3 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Luster Lacy',
                needs: [a.prostitute],
                incomeRange: [a.poor, a.modest],
                misfits: [a.underdark, a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [
                { name: ' rich maltyness and subtle notes of orange' },
            ],
        },
        { [a.poor]: 1.5 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Lavish Lucy',
                needs: [a.prostitute],
                incomeRange: [a.modest, a.wealthy],
                misfits: [a.underdark, a.desert, a.tropical],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' mouth-coating maltyness with a soft, oaky finish' },
            ],
        },
        { [a.modest]: 1.5 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Luster Lacy, Export Label',
                needs: [a.prostitute],
                incomeRange: [a.poor, a.modest],
                needsOne: [a.underdark, a.desert, a.tropical, a.elf],
                landRange: [
                    a.forest,
                    a.underdark,
                    a.underdark,
                    a.desert,
                    a.tropical,
                ],
                misfits: [a.drow],
            },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [
                { name: ' rich maltyness and subtle notes of lemon' },
            ],
        },
        { [a.poor]: 1.7, [a.modest]: 1.2 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Lavish Lucy, Export Label',
                needs: [a.prostitute],
                incomeRange: [a.modest, a.wealthy],
                needsOne: [a.underdark, a.desert, a.tropical, a.elf],
                landRange: [
                    a.forest,
                    a.underdark,
                    a.underdark,
                    a.desert,
                    a.tropical,
                ],
                misfits: [a.drow],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' mouth-coating maltyness with a subtle, oaky finish' },
            ],
        },
        { [a.wealthy]: 1.2, [a.modest]: 1.7 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Luster Larry, Export Label',
                needs: [a.prostitute, a.drow],
                incomeRange: [a.poor, a.modest],
            },
            firstSideDishes: [{ name: 'Whiskey, Bonded Bourbon  -' }],
            secondSideDishes: [
                { name: ' rich maltyness and subtle notes of blood orange' },
            ],
        },
        { [a.poor]: 1.7, [a.modest]: 1.3 },
        Drinkable.spirit
    ),
    new DishIdea(
        {
            mainIng: {
                key: AssetKey.SPIRIT_whiskey,
                name: 'Lavish Lucas, Export Label',
                needs: [a.prostitute, a.drow],
                incomeRange: [a.modest, a.wealthy],
            },
            firstSideDishes: [{ name: 'Whiskey, Straight Bourbon  -' }],
            secondSideDishes: [
                { name: ' mouth-coating maltyness with a strong, oaky finish' },
            ],
        },
        { [a.modest]: 1.7, [a.wealthy]: 1.3 },
        Drinkable.spirit
    ),
];
