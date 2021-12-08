import { association } from '../association';
import { PriceSetter } from '../idea/PriceSetter';
import { Drinkable, Eatable } from '../TavernProduct';

export const incomeRange = [
    association.poor,
    association.modest,
    association.wealthy,
    association.rich,
] as const;
export type Income =
    | association.poor
    | association.modest
    | association.wealthy
    | association.rich;
export type FoodPricing = Record<Eatable, PriceSetter>;
export type DrinkPricing = Record<Drinkable, PriceSetter>;
export type MenuPricing = FoodPricing & DrinkPricing;
