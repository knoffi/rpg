import { association, Income } from '../../classes/association';

type PriceSetter = {
    open: boolean;
    income: Income;
    priceText: string;
    price: number;
};
export const DEFAULT_PRICE_SETTER: PriceSetter = {
    open: false,
    income: association.poor,
    priceText: 'Prices are important',
    price: 12,
};
