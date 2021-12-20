import React, { useState } from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { Income } from '../../classes/association';
import { UserMadeImpression } from '../../classes/contentCreator/ContentCreator';
import { FantasyKeys } from '../../classes/contentCreator/FantasKeys';
import { Noticable } from '../../classes/idea/Noticable';
import { ImpressionDisplay } from '../../classes/impressionDisplay/ImpressionDisplay';
import {
    AddButton,
    FeatherButton,
    ImportButton,
} from '../../components/buttons/Buttons';
import { WeServe } from '../../editNavigator/WeServe';
import { Describable } from '../../mainNavigator/TavernData';
import { globalStyles } from '../globalStyles';
import { BasePrice } from '../menuScene/basePrice';
import { menuSceneStyles } from '../menuScene/menuStyles';
import {
    Demand,
    IAddingActions,
} from '../menuScene/offerList/actionInterfaces';
import { OfferListItem } from '../menuScene/offerList/Item';
import { LIST_END_BUTTON_SIZE } from '../menuScene/offerList/LIST_END_BUTTON_SIZE';
import { Impression } from './impressions/Impression';
import { PriceAccordion } from './PriceAccordion';

export const DetailsList = (props: {
    basePrice: BasePrice;
    onInfoPress: (income: Income) => void;
    onPriceSetPress: (income: Income) => void;
    addingAcions: IAddingActions;
    onReduce: (
        deletes: string[],
        rerollss: string[],
        demand: Demand,
        removedKeys: (FantasyKeys | 'isUserMade')[]
    ) => void;
    onEdit: (startData: UserMadeImpression) => void;
    onCurrencySetPress: () => void;
    impressions: Impression[];
    noticablesLeft: Map<Describable, boolean>;
}) => {
    const impressionTitles = Object.values(Noticable);
    const impressionAccordions = impressionTitles.map((title) => {
        const impressionsOfTitle = props.impressions.filter(
            (impression) => impression.category === title
        );
        const demand: Demand = {
            isAbout: WeServe.impressions,
            category: title,
        };
        return (
            <ImpressionAccordion
                key={title}
                isBartender={title == Noticable.bartender}
                title={title}
                impressions={impressionsOfTitle}
                onReduce={(
                    deletes: string[],
                    rerolls: string[],
                    universes: (FantasyKeys | 'isUserMade')[]
                ) => props.onReduce(deletes, rerolls, demand, universes)}
                onAdd={() => props.addingAcions.randomAdd(demand)}
                onEdit={props.onEdit}
                onCreate={() => props.addingAcions.edit(demand)}
                onImport={() => props.addingAcions.import(demand)}
                isNotFull={props.noticablesLeft.get(title)!}
            ></ImpressionAccordion>
        );
    });

    const priceAccordion = (
        <PriceAccordion
            onCurrencySetPress={props.onCurrencySetPress}
            onInfoPress={props.onInfoPress}
            basePrice={props.basePrice}
            onPriceSetPress={props.onPriceSetPress}
            key={'prices'}
        />
    );
    const accordions = [priceAccordion, ...impressionAccordions];

    return (
        <List.Section title={'NOTES'} titleStyle={globalStyles.title}>
            {accordions}
        </List.Section>
    );
};

const ImpressionAccordion = (props: {
    title: string;
    isBartender: boolean;
    impressions: Impression[];
    onReduce: (
        deletes: string[],
        rerolls: string[],
        removedKeys: (FantasyKeys | 'isUserMade')[]
    ) => void;
    onAdd: () => void;
    onEdit: (data: UserMadeImpression) => void;
    onCreate: () => void;
    onImport: () => void;
    isNotFull: boolean;
}) => {
    const [bartenderSex, setBartenderSex] = useState(
        'male' as 'female' | 'male'
    );
    const [changes, setChanges] = useState({
        deletions: [] as string[],
        rerolls: [] as string[],
        universes: [] as (FantasyKeys | 'isUserMade')[],
        nameCounters: new Map<string, number>(),
    });
    const [lastChange, setLastChange] = useState({
        deletion: undefined as undefined | string,
        reroll: undefined as undefined | string,
    });
    const onLastChangeRequest = () => {
        props.onReduce(changes.deletions, changes.rerolls, changes.universes);
        const newNameCounters = new Map<string, number>(changes.nameCounters);
        const itemsForRerender = [...changes.deletions, ...changes.rerolls];
        itemsForRerender.forEach((name) => {
            const prevNameCounter = newNameCounters.get(name) || 0;
            newNameCounters.set(name, prevNameCounter + 1);
        });
        setChanges({
            ...changes,
            deletions: [],
            universes: [],
            rerolls: [],
            nameCounters: newNameCounters,
        });
    };
    React.useEffect(() => {
        setTimeout(() => {
            const newestDeletion =
                changes.deletions.length >= 1
                    ? changes.deletions[changes.deletions.length - 1]
                    : undefined;
            const newestReroll =
                changes.rerolls.length >= 1
                    ? changes.rerolls[changes.rerolls.length - 1]
                    : undefined;
            setLastChange({ deletion: newestDeletion, reroll: newestReroll });
        }, 800);
    }, [changes]);
    React.useEffect(() => {
        const userNeverDeleted = changes.deletions.length === 0;
        const userNeverRerolled = changes.rerolls.length === 0;
        const userFinishedDeleting =
            !userNeverDeleted &&
            lastChange.deletion ===
                changes.deletions[changes.deletions.length - 1];
        const userFinishedRerolling =
            !userNeverRerolled &&
            lastChange.reroll === changes.rerolls[changes.rerolls.length - 1];
        if (
            (userFinishedDeleting && userFinishedRerolling) ||
            (userFinishedDeleting && userNeverRerolled) ||
            (userNeverDeleted && userFinishedRerolling)
        ) {
            onLastChangeRequest();
        }
    }, [lastChange]);
    const adjustDisplayText = (impression: Impression) => {
        const impressionDisplay = new ImpressionDisplay(
            impression.name,
            impression.category,
            impression.sex
        );
        if (props.isBartender) {
            impressionDisplay.setSex(bartenderSex);
        }
        return impressionDisplay.getText();
    };
    const toggleBartenderSex = props.isBartender
        ? () => {
              setBartenderSex(bartenderSex === 'male' ? 'female' : 'male');
          }
        : () => {};
    const onCreate = props.onCreate;
    const onImport = props.onImport;
    const impressionsFull = !props.isNotFull;
    const descriptionItems = props.impressions.map((impression) => {
        const isUserMade = impression.universe === 'isUserMade';
        const name = impression.name;
        const text =
            isUserMade || impression.category !== Noticable.bartender
                ? impression.name
                : adjustDisplayText(impression);
        const newKey = name + changes.nameCounters.get(name);
        return (
            <OfferListItem
                title={text}
                key={newKey}
                description={''}
                price={''}
                isUserMade={isUserMade}
                noDrinkToAddLeft={impressionsFull}
                actions={{
                    onDelete: () => {
                        const newDeletions = [...changes.deletions, name];
                        const newUniverses = [
                            ...changes.universes,
                            impression.universe,
                        ];
                        setChanges({
                            ...changes,
                            deletions: newDeletions,
                            universes: newUniverses,
                        });
                    },
                    onReroll: () => {
                        const newRerolls = [...changes.rerolls, name];
                        setChanges({
                            ...changes,
                            rerolls: newRerolls,
                        });
                    },
                    onEdit: () =>
                        props.onEdit({
                            ...impression,
                            isAbout: WeServe.impressions,
                            isUserMade: true,
                            name: text,
                        }),
                    onShop: () => {},
                    onInfo: () => {},
                }}
            ></OfferListItem>
        );
    });
    const addBar = (
        <List.Item
            title=""
            key={+'addBar'}
            left={() => (
                <View style={{ flexDirection: 'row' }}>
                    <AddButton
                        size={LIST_END_BUTTON_SIZE}
                        onPress={impressionsFull ? () => {} : props.onAdd}
                        onLongPress={toggleBartenderSex}
                        disabled={impressionsFull}
                    />
                    <ImportButton
                        onPress={onImport}
                        size={LIST_END_BUTTON_SIZE}
                    />
                    <FeatherButton
                        onPress={onCreate}
                        size={LIST_END_BUTTON_SIZE}
                    />
                </View>
            )}
        ></List.Item>
    );
    const title =
        props.isBartender && bartenderSex === 'female'
            ? 'Barmaid'
            : props.title;
    return (
        <List.Accordion
            title={title}
            titleStyle={menuSceneStyles.accordionListTitle}
            key={props.title}
        >
            {[...descriptionItems, addBar]}
        </List.Accordion>
    );
};
