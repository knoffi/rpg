import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataHolder, SavedData } from '../../components/ListOfSaves/SavedData';
import { Demand } from '../../scenes/menuScene/offerList/actionInterfaces';
import { Noticable } from '../idea/Noticable';
import { Drinkable, Eatable } from '../TavernProduct';
import { ForTavern, TAVERN_KEY_PREIMAGE } from './TAVERN_KEY_PREIMAGE';
import { DBValidator } from './Validator/DBValidator';

export class Database {
    prefixMap!: Map<string, string>;
    private validator: DBValidator;
    constructor() {
        this.setPrefixMap();
        this.validator = new DBValidator();
    }
    private setPrefixMap() {
        //TODO: make more resilient code with building map by adding of key-value with help of Noticable|Eatable|Drinkable enums or go to object {["tavern"]:"Taverns", [Eatable.mainDish]: ... }
        this.prefixMap = new Map([
            [Eatable.breakfast as string, 'Breakfasts'],
            [Eatable.dessert as string, 'Desserts'],
            [Eatable.mainDish as string, 'Main Dishes'],
            [Eatable.sideDish as string, 'Side Dishes'],
            [Drinkable.beer as string, 'Beers'],
            [Drinkable.lemonade as string, 'Lemonades'],
            [Drinkable.spirit as string, 'Spirits'],
            [Drinkable.wine as string, 'Wines'],
            [Noticable.averageCustomer as string, 'Average'],
            [Noticable.bartender as string, 'Bartender'],
            [Noticable.furniture as string, 'Furniture'],
            [Noticable.someCustomers as string, 'Individuals'],
            [TAVERN_KEY_PREIMAGE, 'Taverns'],
        ]);
    }
    private getMainKey(saving: ForTavern | Demand) {
        if (saving === TAVERN_KEY_PREIMAGE) {
            return this.prefixMap.get(TAVERN_KEY_PREIMAGE)!;
        } else {
            return this.prefixMap.get(saving.category)!;
        }
    }
    public getSaves = async (
        saving: ForTavern | Demand
    ): Promise<DataHolder[]> => {
        try {
            const relevantKeys = await this.getAllKeys(saving);
            if (relevantKeys) {
                try {
                    const valuePairs = await AsyncStorage.multiGet(
                        relevantKeys
                    );
                    const storedData = valuePairs.map((pair) =>
                        this.parsePair(pair, saving)
                    );
                    return storedData.filter(
                        (value) => value !== undefined
                    ) as DataHolder[];
                } catch (e2) {
                    console.log(e2);
                }
            }
        } catch (e) {
            console.log(e);
        }
        return [];
    };
    private parsePair(
        pair: [string, string | null],
        demand: ForTavern | Demand
    ): DataHolder | undefined {
        const json = pair[1] === null ? '' : pair[1];
        const isAbout =
            demand === TAVERN_KEY_PREIMAGE
                ? TAVERN_KEY_PREIMAGE
                : demand.isAbout;
        return this.validator.parse(json, isAbout);
    }

    public saveData = async (data: SavedData, saving: ForTavern | Demand) => {
        const title = await this.getTitleForDB(data.name, saving);
        const toSave: DataHolder = { data, title };
        const JSONdata = JSON.stringify(toSave);
        try {
            AsyncStorage.setItem(this.getKeyByTitle(title, saving), JSONdata);
        } catch (e) {
            console.log(e);
        }
    };

    public removeData = async (title: string, saving: ForTavern | Demand) => {
        try {
            await AsyncStorage.removeItem(this.getKeyByTitle(title, saving));
        } catch (e) {
            console.log(e);
        }
    };
    public async clearAll(target: ForTavern | Demand) {
        try {
            const targetKeys = await this.getAllKeys(target);
            try {
                await AsyncStorage.multiRemove(targetKeys);
            } catch (multiRemoveError) {
                console.log(multiRemoveError);
            }
        } catch (getKeysError) {
            console.log(getKeysError);
        }
    }

    private keyFitsToRequest(key: string, saving: ForTavern | Demand) {
        const mainKey = this.getMainKey(saving);
        const prefixStart = 0;
        const prefixEnd = mainKey.length - 1;
        const prefixMatches = key.slice(prefixStart, prefixEnd + 1) === mainKey;
        return prefixMatches;
    }
    private getAllKeys = async (saving: ForTavern | Demand) => {
        const allKeys = await AsyncStorage.getAllKeys();
        return allKeys.filter((key) => {
            return this.keyFitsToRequest(key, saving);
        });
    };
    private itemFromKeyContainsName(
        key: string,
        name: string,
        saving: ForTavern | Demand
    ): boolean {
        const mainKey = this.getMainKey(saving);
        return (
            key.substring(mainKey.length, mainKey.length + name.length) === name
        );
    }
    private getKeyByTitle(title: string, saving: ForTavern | Demand) {
        return saving === TAVERN_KEY_PREIMAGE
            ? this.prefixMap.get(TAVERN_KEY_PREIMAGE) + title
            : this.prefixMap.get(saving.category as string) + title;
    }
    private getTitleForDB = async (
        name: string,
        saving: ForTavern | Demand
    ) => {
        const relevantKeys = await this.getAllKeys(saving);
        if (
            !relevantKeys.some(
                (key) => key === this.getKeyByTitle(name, saving)
            )
        ) {
            return name;
        }
        const keysOfNearlyDuplicates = relevantKeys.filter((key) =>
            this.itemFromKeyContainsName(key, name, saving)
        );
        const possibleTitles = new Array(keysOfNearlyDuplicates.length + 1)
            .fill(1)
            .map((entry, index) => name + '(' + (index + 2).toString() + ')');
        return possibleTitles.find(
            (suggestedTitle) =>
                !keysOfNearlyDuplicates.some(
                    (key) => key === this.getKeyByTitle(suggestedTitle, saving)
                )
        )!;
    };
}
