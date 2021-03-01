import { association } from '../../../../classes/association';
import { foodCategory, TavernProduct } from '../../../../classes/TavernProduct';
import { priceVariation } from '../priceVariation';
import { poorAreaToppingsMap } from './poorAreaToppingsMap';
import { poorBases } from './poorBases';
import { wealthyAreaToppingsMap } from './wealthyAreaToppingsMap';
import { wealthyBases } from './wealthyBases';
import { workerAreaToppingMap } from './workerAreaToppingMap';
import { workerBases } from './workerBases';
export const a = association;

export const porridgeTemplate = (
    areaBases: { base: string; areas: association[] }[],
    income: association,
    areaToppingMap: Map<association, string[]>,
    price: number
) => {
    const porridgeVariants = [] as TavernProduct[];
    const garnishPhrase =
        income === association.poor || income === association.worker
            ? ' with '
            : ' garnished with ';
    areaBases.forEach((areaBase) => {
        areaBase.areas.forEach((area) => {
            const toppings = areaToppingMap.get(area) || [];
            toppings.forEach((topping) => {
                const porridgeName = 'Porridge (' + areaBase.base + ')';
                const productName = porridgeName + garnishPhrase + topping;
                porridgeVariants.push(
                    new TavernProduct(
                        productName,
                        priceVariation(price),
                        [area, income],
                        foodCategory.breakfast
                    )
                );
            });
        });
    });
    return porridgeVariants;
};

const workerPorridge = porridgeTemplate(
    workerBases,
    a.worker,
    workerAreaToppingMap,
    12
);
const wealthyPorridge = porridgeTemplate(
    wealthyBases,
    a.sophisticated,
    wealthyAreaToppingsMap,
    25
);

const poorPorrodge = porridgeTemplate(
    poorBases,
    a.poor,
    poorAreaToppingsMap,
    4
);

export const porridge = workerPorridge.concat(wealthyPorridge, poorPorrodge);
