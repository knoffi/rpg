import { IDishMenu } from '../../../classes/contentCreator/ContentCreator';
import { Eatable } from '../../../classes/TavernProduct';
import { breakfastPlates } from './breakfast/breakfastPlates/breakfastPlates';
import { porridges } from './breakfast/cereals/porridges';
import { beefRoasts } from './mainDish/beefRoasts';
import { chickenRoasts } from './mainDish/chickenRoasts';
import { fishAndChips } from './mainDish/fishAndChips';
import { porkRoasts } from './mainDish/porkRoasts';
import { leftoverStew } from './mainDish/simpleStews';
import { steaks } from './mainDish/steaks';
import { mainBreads } from './breakfast/simpelBreakfast/mainBread';
import { dipAndCream } from './smallDish/dipAndCream';

export const foodMenu: IDishMenu[] = [
    {
        category: Eatable.mainDish,
        dishes: [
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
        dishes: [...porridges, ...mainBreads, ...breakfastPlates],
    },
    { category: Eatable.sideDish, dishes: [...dipAndCream] },
];
