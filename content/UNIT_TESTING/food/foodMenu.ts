import { IDishMenu } from '../../../classes/contentCreator/ContentCreator';
import { Eatable } from '../../../classes/TavernProduct';
import { mainBreads } from './breakfast/simpelBreakfast/mainBread';
import { simpleCakes } from './desserts/pie';
import { pork } from './mainDish/pork';
import { steaks } from './mainDish/steaks';
import { forMultiReroll } from './smallDish/smallDish';

export const foodMenu: IDishMenu[] = [
    {
        category: Eatable.mainDish,
        ideas: [...steaks, ...pork],
    },
    {
        category: Eatable.breakfast,
        ideas: [...mainBreads],
    },
    { category: Eatable.sideDish, ideas: [...forMultiReroll] },
    { category: Eatable.dessert, ideas: [...simpleCakes] },
];
