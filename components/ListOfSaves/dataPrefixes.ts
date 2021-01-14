import { drinkCategory, foodCategory } from '../../classes/TavernProduct';

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
    ['tavern', 'T_A_V_E_R_N_'],
]);
