import {
    DataHolder,
    SavedData,
} from '../../../components/ListOfSaves/SavedData';
import { WeServe } from '../../../editNavigator/WeServe';
import { getTavernHistoryInitializer } from '../../../mainNavigator/mainNavigatorFunctions';
import { MinimalTavernData } from '../../../mainNavigator/TavernData';
import { DEFAULT_UNIVERSE_MAP } from '../../../mainNavigator/UniverseMap';
import { ForTavern, TAVERN_KEY_PREIMAGE } from '../TAVERN_KEY_PREIMAGE';

export class DBValidator {
    private static defaultTavern: SavedData =
        getTavernHistoryInitializer(DEFAULT_UNIVERSE_MAP).tavern;
    private static tavernKeys: string[] = Object.keys(
        DBValidator.defaultTavern
    );
    constructor() {}
    public construct(
        json: string,
        isAbout: WeServe | ForTavern
    ): DataHolder | undefined {
        if (isAbout === TAVERN_KEY_PREIMAGE) {
            if (this.tavernMissesProperty(json)) {
                return undefined;
            } else {
                return this.buildPureTavern(json);
            }
        } else {
            switch (isAbout) {
                case WeServe.impressions:
                    if (this.impressionMissesProperty(json)) {
                        return undefined;
                    } else {
                        return this.buildPureImpression(json);
                    }

                case WeServe.food:
                    if (this.dishMissesProperty(json)) {
                        return undefined;
                    } else {
                        return this.buildPureDish(json);
                    }

                default:
                    if (this.drinkMissesProperty(json)) {
                        return undefined;
                    } else {
                        return this.buildPureDrink(json);
                    }
            }
        }
    }
    private buildPureDrink(json: string): DataHolder | undefined {
        return undefined;
    }
    private drinkMissesProperty(json: string) {
        return true;
    }
    private dishMissesProperty(json: string) {
        return true;
    }
    private buildPureDish(json: string): DataHolder | undefined {
        return undefined;
    }
    private buildPureImpression(json: string): DataHolder | undefined {
        return undefined;
    }
    private impressionMissesProperty(json: string): boolean {
        return false;
    }
    private dataHolderMissesProperty(json: string): boolean {
        // TODO: validate string without converting to object
        const save = JSON.parse(json);
        if (!save.title || !save.data) {
            return true;
        }
        return false;
    }
    private tavernMissesProperty(json: string): boolean {
        // TODO: validate string without converting to object
        const save = JSON.parse(json);
        if (this.dataHolderMissesProperty(json)) {
            return true;
        } else {
            const data = save.data;
            return DBValidator.tavernKeys.some((key) => !data[key]);
        }
    }
    private buildPureTavern(
        jsonWithAllProperties: string
    ): DataHolder & { data: MinimalTavernData } {
        const save = JSON.parse(jsonWithAllProperties);
        const tavern = DBValidator.tavernKeys.reduce((prev, cur) => {
            return { ...prev, [cur]: save.data[cur] };
        }, {} as MinimalTavernData);
        const tavernHolder: DataHolder & { data: MinimalTavernData } = {
            data: tavern,
            title: save.title,
        };
        return tavernHolder;
    }
}
