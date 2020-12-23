import { association } from '../../../../classes/Adjectives';
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
    let garnishPhrase =
        income === association.poor || income === association.worker
            ? ' with '
            : ' garnished with ';
    areaBases.forEach((areaBase) => {
        areaBase.areas.forEach((area) => {
            let toppings = areaToppingMap.get(area);
            if (!toppings) {
                toppings = [];
            }
            toppings.forEach((topping) => {
                let productName = 'Porridge (' + areaBase.base + ')';
                productName = productName + garnishPhrase + topping;
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
