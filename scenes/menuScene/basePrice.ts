export interface BasePrice {
    poor: number;
    modest: number;
    wealthy: number;
    rich: number;
    currency: string;
}

export const standardBasePrice = {
    currency: 'copper',
    rich: 80,
    wealthy: 40,
    poor: 5,
    modest: 15,
};
