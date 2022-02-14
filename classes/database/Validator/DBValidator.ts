import {
    DataHolder,
    SavedData,
} from '../../../components/ListOfSaves/SavedData';
import { WeServe } from '../../../editNavigator/WeServe';
import { getTavernHistoryInitializer } from '../../../mainNavigator/mainNavigatorFunctions';
import { MinimalTavernData } from '../../../mainNavigator/TavernData';
import { DEFAULT_UNIVERSE_MAP } from '../../../mainNavigator/UniverseMap';
import { Offer } from '../../../scenes/menuScene/Offer';
import { Impression } from '../../../scenes/questScene/impressions/Impression';
import { association } from '../../association';
import { FantasyKeys } from '../../contentCreator/FantasKeys';
import { Noticable } from '../../idea/Noticable';
import { Drinkable, Eatable } from '../../TavernProduct';
import { ForTavern } from '../TAVERN_KEY_PREIMAGE';

export class DBValidator {
    private static minimalTavern: MinimalTavernData =
        getTavernHistoryInitializer(DEFAULT_UNIVERSE_MAP).tavern;
    private static minimalImpression: Impression = {
        category: Noticable.bartender,
        impliedPatterns: [],
        name: 'Cool Person',
        isAbout: WeServe.impressions,
        patterns: [],
        keys: { main: [], addition: [] },
        universe: FantasyKeys.standard,
    };
    private static maximalImpression: Impression = {
        ...DBValidator.minimalImpression,
        sex: 'male',
    };
    private static minimalDish: Offer = {
        category: Eatable.breakfast,
        impliedPatterns: [],
        name: 'Marmelade with Bread',
        isAbout: WeServe.food,
        patterns: [],
        keys: { main: [], addition: [] },
        universe: FantasyKeys.standard,
        description: 'It is tasty!',
        income: association.empty,
        isUserMade: false,
        price: 10,
    };
    private static minimalDrink: Offer = {
        category: Drinkable.wine,
        impliedPatterns: [],
        name: 'Purple-Red Wine',
        isAbout: WeServe.drinks,
        patterns: [],
        keys: { main: [], addition: [] },
        universe: FantasyKeys.standard,
        description: 'Fruity and delicious.',
        income: association.empty,
        isUserMade: false,
        price: 10,
    };
    private static maximalDrink: Offer = { ...DBValidator.minimalDrink };
    private static maximalDish: Offer = { ...DBValidator.minimalDish };
    private static maximalTavern: MinimalTavernData = {
        ...DBValidator.minimalTavern,
    };
    private static minimalKeys = {
        [WeServe.impressions]: Object.keys(this.minimalImpression),
        [WeServe.drinks]: Object.keys(this.minimalDrink),
        [WeServe.food]: Object.keys(this.minimalDish),
        ['tavern']: Object.keys(this.minimalTavern),
    };
    private static maximalKeys = {
        [WeServe.impressions]: Object.keys(this.maximalImpression),
        [WeServe.drinks]: Object.keys(this.maximalDrink),
        [WeServe.food]: Object.keys(this.maximalDish),
        ['tavern']: Object.keys(this.maximalTavern),
    };
    constructor() {}
    public parse(
        json: string,
        isAbout: WeServe | ForTavern
    ): DataHolder | undefined {
        if (this.missesProperty(json, isAbout)) {
            return undefined;
        }
        const checkedJSON = json;
        return this.build(checkedJSON, isAbout);
    }
    private wrapperMissesProperty(json: string): boolean {
        // TODO: check for existing properties BEFORE converting to object
        const save = JSON.parse(json);
        if (!save.title || !save.data) {
            return true;
        }
        return false;
    }
    private missesProperty(json: string, isAbout: WeServe | 'tavern') {
        if (this.wrapperMissesProperty(json)) {
            return true;
        } else {
            // TODO: ignore unwanted keys BEFORE converting to object
            const save = JSON.parse(json);
            const data = save.data;
            const minimalKeys = DBValidator.minimalKeys[isAbout];
            return minimalKeys.some((key) => data[key] === undefined);
        }
    }
    private build(
        jsonWithAllProperties: string,
        isAbout: 'tavern' | WeServe
    ): DataHolder {
        //TODO leave out unwanted properties BEFORE parsing!
        const save = JSON.parse(jsonWithAllProperties);
        const wantedKeys = DBValidator.maximalKeys[isAbout];
        const pureData = wantedKeys.reduce((prev, cur) => {
            //to leave out unused, optional propertoes, makes testing easier
            const toAdd =
                save.data[cur] === undefined ? {} : { [cur]: save.data[cur] };
            return { ...prev, ...toAdd };
        }, {} as SavedData);
        return { title: save.title, data: pureData };
    }
}
