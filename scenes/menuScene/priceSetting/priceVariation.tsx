export function priceVariation(price: number): number {
    return Math.floor(price + ((Math.random() - 0.5) * price) / 3);
}
