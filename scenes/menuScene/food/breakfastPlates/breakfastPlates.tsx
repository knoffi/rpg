import { association } from '../../../../classes/Adjectives';
import { foodCategory, TavernProduct } from '../../../../classes/TavernProduct';
import { priceVariation } from '../priceVariation';
import { areaBreads } from './areaBreads';
import { areaRichToppingMap } from './areaRichToppingMap';
import { areaWorkerToppingMap } from './areaWorkerToppingMap';
import { incomeEggTypeMap } from './incomeEggTypeMap';

const a = association;

export const breakfastPlatesTemplate = (
    areaBreads: { bread: string; areas: association[] }[],
    income: association,
    areaToppingMap: Map<association, string[]>,
    price: number
) => {
    const breakfastPlates = [] as TavernProduct[];
    const garnishPhrase =
        income === association.poor || income === association.worker
            ? ' with '
            : ' served with ';
    areaBreads.forEach((bread) => {
        bread.areas.forEach((area) => {
            const toppings = areaToppingMap.get(area)!;
            const eggs = incomeEggTypeMap.get(income)!;
            toppings.forEach((topping) => {
                eggs.forEach((egg) => {
                    const productName =
                        'Breakfast Plate: ' +
                        egg +
                        garnishPhrase +
                        bread.bread +
                        ', ' +
                        topping;
                    breakfastPlates.push(
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
    });
    return breakfastPlates;
};

const workerBreakfastPlates = breakfastPlatesTemplate(
    areaBreads,
    a.worker,
    areaWorkerToppingMap,
    10
);
const poorBreakfastPlates = breakfastPlatesTemplate(
    areaBreads,
    a.worker,
    areaWorkerToppingMap,
    22
);
const wealthyBreakfastPlates = breakfastPlatesTemplate(
    areaBreads,
    a.sophisticated,
    areaWorkerToppingMap,
    40
);
const richBreakfastPlates = breakfastPlatesTemplate(
    areaBreads,
    a.rich,
    areaRichToppingMap,
    100
);
export const breakfastPlates = workerBreakfastPlates.concat(
    poorBreakfastPlates,
    wealthyBreakfastPlates,
    richBreakfastPlates
);
