import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    drinkCategory,
    foodCategory,
    menuCategory,
} from '../../classes/TavernProduct';
const TAVERN_KEY_PREIMAGE = 'tavern';
//TODO
export const prefixMap: Map<string, string> = new Map([
    [foodCategory.appetizer as string, 'A_P_P_E_T_I_Z_E_R_'],
    [foodCategory.breakfast as string, 'B_R_E_A_K_F_A_S_T_'],
    [foodCategory.dessert as string, 'D_E_S_S_E_R_T_'],
    [foodCategory.mainDish as string, 'M_A_I_N_D_I_S_H_'],
    [foodCategory.sideDish as string, 'S_I_D_E_D_I_S_H_'],
    [drinkCategory.beer as string, 'B_E_E_R_'],
    [drinkCategory.lemonade as string, 'L_E_M_O_N_A_D_E_'],
    [drinkCategory.spirit as string, 'S_P_I_R_I_T_'],
    [drinkCategory.wine as string, 'W_I_N_E_'],
    [TAVERN_KEY_PREIMAGE, 'T_A_V_E_R_N_'],
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
    category: menuCategory
) => {
    const allKeys = await AsyncStorage.getAllKeys();
    const occurenceOfName = allKeys.filter((key) => {
        //BEWARE: If MyCola AND MyCola(2) are already saved, then a drink made by user with name "MyCola" should be stored as MyCola(3)
        return getNameFromKey(key, category).slice(0, name.length);
    }).length;
    return occurenceOfName;
};
