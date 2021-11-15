import { IDishMenu } from '../../../classes/contentCreator/ContentCreator';
import { Eatable } from '../../../classes/TavernProduct';
import { mainBreads } from './breakfast/simpelBreakfast/mainBread';
import { simpleCakes } from './desserts/pie';
import { steaks } from './mainDish/steaks';
import { dipAndCream } from './smallDish/dipAndCream';

export const foodMenu: IDishMenu[] = [
    {
        category: Eatable.mainDish,
        ideas: [...steaks],
    },
    {
        category: Eatable.breakfast,
        ideas: [...mainBreads],
    },
    { category: Eatable.sideDish, ideas: [...dipAndCream] },
    { category: Eatable.dessert, ideas: [...simpleCakes] },
];
