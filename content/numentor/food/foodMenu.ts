import { IDishMenu } from '../../../classes/contentCreator/ContentCreator';
import { Eatable } from '../../../classes/TavernProduct';
import { breakfastPlates } from './breakfast/breakfastPlates/breakfastPlates';
import { porridges } from './breakfast/cereals/porridges';
import { mainBreads } from './breakfast/simpelBreakfast/mainBread';
import { beefRoasts } from './mainDish/beefRoasts';
import { chickenRoasts } from './mainDish/chickenRoasts';
import { fishAndChips } from './mainDish/fishAndChips';
import { porkRoasts } from './mainDish/porkRoasts';
import { leftoverStew } from './mainDish/simpleStews';
import { steaks } from './mainDish/steaks';
import { dipAndCream } from './smallDish/dipAndCream';
import { soups } from './smallDish/soup';

export const foodMenu: IDishMenu[] = [
    {
        category: Eatable.mainDish,
        ideas: [
            ...porkRoasts,
            ...beefRoasts,
            ...steaks,
            fishAndChips,
            ...chickenRoasts,
            leftoverStew,
        ],
    },
    {
        category: Eatable.breakfast,
        ideas: [...porridges, ...mainBreads, ...breakfastPlates],
    },
    { category: Eatable.sideDish, ideas: [...dipAndCream, ...soups] },
];
