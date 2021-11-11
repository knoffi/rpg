import { IDishMenu, IDrinkMenu, ImpressionNote } from './ContentCreator';

export type FantasyBook = {
    notes: ImpressionNote[];
    drinks: IDrinkMenu[];
    dishes: IDishMenu[];
};
