import { association } from '../classes/Adjectives';
import { category } from './getFittingRandom';

export const getDividedProducts = (product: category[]) => {
    let dividedProducts = [] as category[];
    product.forEach((product) => {
        if (product.associations.length <= 1) {
            dividedProducts.push(product);
        } else {
            product.associations.forEach((association) =>
                dividedProducts.push(
                    product.getAssociationOverwrite(association)
                )
            );
        }
    });
    return dividedProducts;
};

export const makeProductsFromNecessary = (nestedProducts: {
    necessary: association[];
    nested: category[];
}) => {
    let dividedNestedProducts = getDividedProducts(nestedProducts.nested);
    let result = [] as category[];
    dividedNestedProducts.forEach((product) => {
        nestedProducts.necessary.forEach((necessaryAssociation) => {
            product.associations.push(necessaryAssociation);
        });

        result.push(product);
    });
    return result;
};
