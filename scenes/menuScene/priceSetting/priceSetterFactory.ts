import { PriceSetter } from '../../../classes/idea/PriceSetter';
import { MenuCategory } from '../../../classes/TavernProduct';
import { drinkPrices } from './drinkPriceSetters';
import { foodPrices } from './foodPriceSetters';
import { adjustPriceSetter } from './priceSetters';
type MenuPricing = Record<MenuCategory, PriceSetter>;
const menuPrices: MenuPricing = { ...foodPrices, ...drinkPrices };
export const buildPriceSetterFactory =
    (factors?: number | Partial<PriceSetter>) =>
    (category: MenuCategory): PriceSetter => {
        return adjustPriceSetter(menuPrices[category], factors);
    };
