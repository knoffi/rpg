import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    drinkCategory,
    foodCategory,
    menuCategory,
} from '../../classes/TavernProduct';
export const TAVERN_KEY_PREIMAGE = 'tavern';
//TODO
export const prefixMap: Map<string, string> = new Map([
    [foodCategory.appetizer as string, 'Appetizers'],
    [foodCategory.breakfast as string, 'Breakfasts'],
    [foodCategory.dessert as string, 'Desserts'],
    [foodCategory.mainDish as string, 'Main Dishes'],
    [foodCategory.sideDish as string, 'Side Dishes'],
    [drinkCategory.beer as string, 'Beers'],
    [drinkCategory.lemonade as string, 'Lemonades'],
    [drinkCategory.spirit as string, 'Spirits'],
    [drinkCategory.wine as string, 'Wines'],
    [TAVERN_KEY_PREIMAGE, 'Taverns'],
]);

export const getKeyFromName = (name: string, category?: menuCategory) => {
    return category
        ? prefixMap.get(category as string) + name
        : prefixMap.get(TAVERN_KEY_PREIMAGE) + name;
};
export const getNameFromKey = (key: string, category?: menuCategory) => {
    return category
        ? key.slice(prefixMap.get(category as string)!.length)
        : key.slice(prefixMap.get(TAVERN_KEY_PREIMAGE)!.length);
};

export const getNumberOfNameDuplicates = async (
    name: string,
    category?: menuCategory
) => {
    const allKeys = await AsyncStorage.getAllKeys();
    const occurenceOfName = allKeys.filter((key) => {
        //BEWARE: If MyCola AND MyCola(2) are already saved, then a drink made by user with name "MyCola" should be stored as MyCola(3)
        const extractedName = category
            ? getNameFromKey(key, category).slice(0, name.length)
            : getNameFromKey(key).slice(0, name.length);
        return extractedName === name;
    });
    return occurenceOfName.length;
};
