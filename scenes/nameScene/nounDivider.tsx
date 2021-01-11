import { association } from '../../classes/Adjectives';
import { ITavernAsset } from '../../helpingFunctions/ITavernAsset';

export const getDividedProducts = (products: ITavernAsset[]) => {
    const productDivisions = products.map((product) =>
        product.associations.map((association) =>
            product.getAssociationOverwrite(association)
        )
    );
    const result = productDivisions.reduce(
        (collectedProducts, productVariations) => [
            ...collectedProducts,
            ...productVariations,
        ]
    );
    return result;
};

export const makeProductsFromNecessary = (nestedProducts: {
    necessary: association[];
    nested: ITavernAsset[];
}) => {
    let dividedNestedProducts = getDividedProducts(nestedProducts.nested);
    let result = [] as ITavernAsset[];
    dividedNestedProducts.forEach((product) => {
        nestedProducts.necessary.forEach((necessaryAssociation) => {
            product.associations.push(necessaryAssociation);
        });

        result.push(product);
    });
    return result;
};
