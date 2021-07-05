import AsyncStorage from '@react-native-async-storage/async-storage';
import { SavedData } from '../../components/ListOfSaves/SavedData';
import { Drinkable, Eatable, MenuCategory } from '../TavernProduct';

const TAVERN_KEY_PREIMAGE = 'tavern';

export enum WeSave {
    taverns = 'taverns',
    menu = 'menu',
}
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
        return this.chapter
            ? this.prefixMap.get(this.chapter as string) + name
            : this.prefixMap.get(TAVERN_KEY_PREIMAGE) + name;
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
    private isAbout: WeSave;
    private chapter?: MenuCategory;
    private mainKey!: string;
    prefixMap!: Map<string, string>;
    constructor(isAbout: WeSave, chapter?: MenuCategory) {
        this.isAbout = isAbout;
        this.chapter = chapter;
        this.setPrefixMap();
        this.setMainKey();
    }
    setPrefixMap() {
        this.prefixMap = new Map([
            [Eatable.appetizer as string, 'Appetizers'],
            [Eatable.breakfast as string, 'Breakfasts'],
            [Eatable.dessert as string, 'Desserts'],
            [Eatable.mainDish as string, 'Main Dishes'],
            [Eatable.sideDish as string, 'Side Dishes'],
            [Drinkable.beer as string, 'Beers'],
            [Drinkable.lemonade as string, 'Lemonades'],
            [Drinkable.spirit as string, 'Spirits'],
            [Drinkable.wine as string, 'Wines'],
            [TAVERN_KEY_PREIMAGE, 'Taverns'],
        ]);
    }
    private setMainKey() {
        if (this.isAbout === WeSave.taverns) {
            this.mainKey = this.prefixMap.get(TAVERN_KEY_PREIMAGE)!;
        } else {
            if (!this.chapter) {
                console.log(
                    'chapter is undefined but we re searching for saved menu products!'
                );
            }
            this.mainKey = this.prefixMap.get(this.chapter as string)!;
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
