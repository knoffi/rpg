export function getRandomArrayEntry<Type>(array: Type[]) {
    if (array.length === 0) {
        return undefined;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    if (randomIndex === array.length) {
        return array[0];
    }
    return array[randomIndex];
}
