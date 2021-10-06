import { IDishMenu } from '../../../classes/contentCreator/ContentCreator';
import { Eatable } from '../../../classes/TavernProduct';
import { breakfastPlates } from './breakfastPlates/breakfastPlates';
import { porridges } from './cereals/porridges';
import { beefRoasts } from './mainDishes/beefRoasts';
import { chickenRoasts } from './mainDishes/chickenRoasts';
import { fishAndChips } from './mainDishes/fishAndChips';
import { porkRoasts } from './mainDishes/porkRoasts';
import { leftoverStew } from './mainDishes/simpleStews';
import { steaks } from './mainDishes/steaks';
import { dipAndCream } from './sideDishes/dipAndCream';
import { mainBreads } from './simpelBreakfast/mainBread';

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
