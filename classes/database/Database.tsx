import AsyncStorage from '@react-native-async-storage/async-storage';
import { SavedData } from '../../components/ListOfSaves/SavedData';
import { Demand } from '../../scenes/menuScene/offerList/actionInterfaces';
import { Noticable } from '../idea/Noticable';
import { Drinkable, Eatable } from '../TavernProduct';

const TAVERN_KEY_PREIMAGE = 'tavern';
export class SavedDataHandler {
    getKeysForHandler = async () => {
        const allKeys = await AsyncStorage.getAllKeys();
        return allKeys.filter((key) => {
            return this.keyFitsToRequest(key);
        });
    };
    private itemFromKeyContainsName(key: string, name: string): boolean {
        return (
            key.substring(
                this.mainKey.length,
                this.mainKey.length + name.length
            ) === name
        );
    }
    private getKeyFromName(name: string) {
        return this.saving === 'tavern'
            ? this.prefixMap.get(TAVERN_KEY_PREIMAGE) + name
            : this.prefixMap.get(this.saving.category as string) + name;
    }
    private getNameForSaving = async (name: string) => {
        const relevantKeys = await this.getKeysForHandler();
        if (!relevantKeys.some((key) => key === this.getKeyFromName(name))) {
            return name;
        }
        const keysOfNearlyDuplicates = relevantKeys.filter((key) =>
            this.itemFromKeyContainsName(key, name)
        );
        const possibleNewNames = new Array(keysOfNearlyDuplicates.length + 1)
            .fill(1)
            .map((entry, index) => name + '(' + (index + 2).toString() + ')');
        return possibleNewNames.find(
            (newName) =>
                !keysOfNearlyDuplicates.some(
                    (key) => key === this.getKeyFromName(newName)
                )
        )!;
    };
    private saving: Demand | 'tavern';
    private mainKey!: string;
    prefixMap!: Map<string, string>;
    constructor(saving: Demand | 'tavern') {
        this.saving = saving;
        this.setPrefixMap();
        this.setMainKey();
    }
    setPrefixMap() {
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
    private setMainKey() {
        if (this.saving === 'tavern') {
            this.mainKey = this.prefixMap.get(TAVERN_KEY_PREIMAGE)!;
        } else {
            this.mainKey = this.prefixMap.get(this.saving.category)!;
        }
    }

    public getSaves = async () => {
        try {
            const relevantKeys = await this.getKeysForHandler();
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

    public saveData = async (data: SavedData) => {
        const nameForSaving = await this.getNameForSaving(data.name);
        data.name = nameForSaving;
        const JSONdata = JSON.stringify(data);
        try {
            AsyncStorage.setItem(this.getKeyFromName(nameForSaving), JSONdata);
        } catch (e) {
            console.log(e);
        }
    };

    public removeData = async (name: string) => {
        try {
            await AsyncStorage.removeItem(this.getKeyFromName(name));
        } catch (e) {
            console.log(e);
        }
    };

    private keyFitsToRequest(key: string) {
        const prefixStart = 0;
        const prefixEnd = this.mainKey.length - 1;
        const prefixMatches =
            key.slice(prefixStart, prefixEnd + 1) === this.mainKey;
        return prefixMatches;
    }
}
