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
    const dividedNestedProducts = getDividedProducts(nestedProducts.nested);
    dividedNestedProducts.forEach((product) => {
        product.associations = [
            ...product.associations,
            ...nestedProducts.necessary,
        ];
    });
    return dividedNestedProducts;
};
