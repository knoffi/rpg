import AsyncStorage from '@react-native-async-storage/async-storage';
import { SavedData } from '../../components/ListOfSaves/SavedData';
import { Demand } from '../../scenes/menuScene/offerList/actionInterfaces';
import { Noticable } from '../idea/Noticable';
import { Drinkable, Eatable } from '../TavernProduct';

const TAVERN_KEY_PREIMAGE = 'tavern';
export class Database {
    private getAllKeys = async (saving: 'tavern' | Demand) => {
        const allKeys = await AsyncStorage.getAllKeys();
        return allKeys.filter((key) => {
            return this.keyFitsToRequest(key, saving);
        });
    };
    private itemFromKeyContainsName(
        key: string,
        name: string,
        saving: 'tavern' | Demand
    ): boolean {
        const mainKey = this.getMainKey(saving);
        return (
            key.substring(mainKey.length, mainKey.length + name.length) === name
        );
    }
    private getKeyFromName(name: string, saving: 'tavern' | Demand) {
        return saving === 'tavern'
            ? this.prefixMap.get(TAVERN_KEY_PREIMAGE) + name
            : this.prefixMap.get(saving.category as string) + name;
    }
    private getNameForSaving = async (
        name: string,
        saving: 'tavern' | Demand
    ) => {
        const relevantKeys = await this.getAllKeys(saving);
        if (
            !relevantKeys.some(
                (key) => key === this.getKeyFromName(name, saving)
            )
        ) {
            return name;
        }
        const keysOfNearlyDuplicates = relevantKeys.filter((key) =>
            this.itemFromKeyContainsName(key, name, saving)
        );
        const possibleNewNames = new Array(keysOfNearlyDuplicates.length + 1)
            .fill(1)
            .map((entry, index) => name + '(' + (index + 2).toString() + ')');
        return possibleNewNames.find(
            (newName) =>
                !keysOfNearlyDuplicates.some(
                    (key) => key === this.getKeyFromName(newName, saving)
                )
        )!;
    };
    prefixMap!: Map<string, string>;
    constructor() {
        this.setPrefixMap();
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
    private getMainKey(saving: 'tavern' | Demand) {
        if (saving === 'tavern') {
            return this.prefixMap.get(TAVERN_KEY_PREIMAGE)!;
        } else {
            return this.prefixMap.get(saving.category)!;
        }
    }

    public getSaves = async (saving: 'tavern' | Demand) => {
        try {
            const relevantKeys = await this.getAllKeys(saving);
            if (relevantKeys) {
                try {
                    const valuePairs = await AsyncStorage.multiGet(
                        relevantKeys
                    );
                    const storedData = valuePairs.map((valuePair) => {
                        return valuePair[1] !== null
                            ? JSON.parse(valuePair[1])
                            : undefined;
                    });
                    return storedData.filter(
                        (value) => value !== undefined
                    ) as SavedData[];
                } catch (e2) {
                    console.log(e2);
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    public saveData = async (data: SavedData, saving: 'tavern' | Demand) => {
        const nameForSaving = await this.getNameForSaving(data.name, saving);
        data.name = nameForSaving;
        const JSONdata = JSON.stringify(data);
        try {
            AsyncStorage.setItem(
                this.getKeyFromName(nameForSaving, saving),
                JSONdata
            );
        } catch (e) {
            console.log(e);
        }
    };

    public removeData = async (name: string, saving: 'tavern' | Demand) => {
        try {
            await AsyncStorage.removeItem(this.getKeyFromName(name, saving));
        } catch (e) {
            console.log(e);
        }
    };

    private keyFitsToRequest(key: string, saving: 'tavern' | Demand) {
        const mainKey = this.getMainKey(saving);
        const prefixStart = 0;
        const prefixEnd = mainKey.length - 1;
        const prefixMatches = key.slice(prefixStart, prefixEnd + 1) === mainKey;
        return prefixMatches;
    }
}
