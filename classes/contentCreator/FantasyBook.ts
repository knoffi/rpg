import { IDishMenu, IDrinkMenu, IImpressionNote } from './ContentCreator';

export type FantasyBook = {
    notes: IImpressionNote[];
    drinks: IDrinkMenu[];
    dishes: IDishMenu[];
};
