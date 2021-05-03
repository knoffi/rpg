import { splitMarker } from './splitMarker';

export const getDishTexts = (dishName: string) => {
    const splitIndex = dishName.indexOf(splitMarker);
    if (splitIndex === -1) {
        return { name: dishName, description: '' };
    }
    const title = dishName.slice(0, splitIndex);
    const description = dishName.slice(splitIndex + splitMarker.length);
    return { name: title, description: description };
};
