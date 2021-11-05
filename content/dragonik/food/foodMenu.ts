import { IDishMenu } from '../../../classes/contentCreator/ContentCreator';
import { Eatable } from '../../../classes/TavernProduct';
import { mainBreads } from './breakfast/simpelBreakfast/mainBread';
import { simpleCakes } from './desserts/pie';
import { steaks } from './mainDish/steaks';
import { dipAndCream } from './smallDish/dipAndCream';

export const foodMenu: IDishMenu[] = [
    {
        category: Eatable.mainDish,
        dishes: [...steaks],
    },
    {
        category: Eatable.breakfast,
        dishes: [...mainBreads],
    },
    { category: Eatable.sideDish, dishes: [...dipAndCream] },
    { category: Eatable.dessert, dishes: [...simpleCakes] },
];
