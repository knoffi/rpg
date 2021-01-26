import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, List, Modal, Portal } from 'react-native-paper';
import { menuCategory } from '../../classes/TavernProduct';
import { MinimalTavernData } from '../../mainNavigator/TavernData';
import { MinimalOfferData } from '../../scenes/menuScene/userOffer';
import { editModalStyles } from '../../scenes/startOptionsScene/editModalStyles';
import { getKeyFromName, getNameFromKey } from './keyHandlers';
type SavedData = MinimalTavernData | MinimalOfferDataWithNumber;
interface ListOfSavesProps {
    mainKey: string;
    offerHandling?: {
        category: menuCategory;
        addUserOffer: (offerData: MinimalOfferData) => void;
        nameIsDuplicated: (name: string) => boolean;
    };
    tavernHandling?: {
        buildTavern: (minimalTavernData: MinimalTavernData) => void;
    };
    visible: boolean;
    onDismiss: () => void;
}
interface ListOfSavesState {
    loadedSaves: (MinimalTavernData | MinimalOfferDataWithNumber)[];
}

interface MinimalOfferDataWithNumber {
    name: string;
    priceText: number;
    description: string;
    category: menuCategory;
}

export class ListOfSaves extends React.Component<
    ListOfSavesProps,
    ListOfSavesState
> {
    state = {
        loadedSaves: [] as (MinimalTavernData | MinimalOfferDataWithNumber)[],
    };
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        this.setSavedData();
    }

    public render() {
        if (this.props.visible) {
            this.setSavedData();
        }
        const listItems = this.state.loadedSaves.map((save, index) => {
            return (
                <List.Item
                    title={save.name}
                    key={index.toString() + save.name}
                    right={() => (
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Button
                                style={{ marginHorizontal: 5 }}
                                onPress={() => {
                                    this.deleteSavedItem(
                                        getKeyFromName(
                                            save.name,
                                            this.props.offerHandling?.category
                                        )
                                    );
                                }}
                            >
                                DELETE
                            </Button>
                            <Button
                                style={{ marginHorizontal: 5 }}
                                onPress={() => {
                                    if (this.props.offerHandling) {
                                        const offerData = save as MinimalOfferDataWithNumber;
                                        this.props.offerHandling.addUserOffer({
                                            name: offerData.name,
                                            category: this.props.offerHandling
                                                .category,
                                            priceText: offerData.priceText.toString(),
                                            description: offerData.description,
                                        });
                                    }
                                    if (this.props.tavernHandling) {
                                        const offerData = save as MinimalTavernData;
                                        this.props.tavernHandling.buildTavern(
                                            offerData
                                        );
                                    }
                                }}
                                disabled={this.props.offerHandling?.nameIsDuplicated(
                                    save.name
                                )}
                            >
                                {'ADD'}
                            </Button>

                            <Button
                                style={{ marginHorizontal: 5 }}
                                disabled={true}
                            >
                                EDIT
                            </Button>
                        </View>
                    )}
                />
            );
        });

        return (
            <Portal>
                <Modal
                    visible={this.props.visible}
                    onDismiss={() => {
                        this.dismissScene();
                    }}
                    contentContainerStyle={editModalStyles.containerStyle}
                >
                    <ScrollView>
                        <Button
                            onPress={() => {
                                this.dismissScene();
                            }}
                        >
                            Back
                        </Button>
                        {
                            <List.Section title={this.props.mainKey}>
                                {listItems!}
                            </List.Section>
                        }
                    </ScrollView>
                </Modal>
            </Portal>
        );
    }
    dismissScene() {
        this.props.onDismiss();
    }
    setSavedData = async () => {
        try {
            const allKeys = await AsyncStorage.getAllKeys();
            const relevantKeys = allKeys.filter((key) => {
                return this.keyFitsToListOfSaves(key);
            });
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
                    const cleanStoredData = storedData.filter(
                        (value) => value !== undefined
                    ) as SavedData[];

                    this.setState({ loadedSaves: cleanStoredData });
                } catch (error2) {}
            }
        } catch (e) {
            console.log(e);
        }
    };

    private keyFitsToListOfSaves(key: string) {
        const prefixStart = 0;
        const prefixEnd = this.props.mainKey.length - 1;
        const prefixMatches =
            key.slice(prefixStart, prefixEnd + 1) === this.props.mainKey;
        return prefixMatches;
    }

    private deleteSavedItem = async (key: string) => {
        try {
            const allKeys = await await AsyncStorage.getAllKeys();
            /*const allKeys = await AsyncStorage.getAllKeys();
            await AsyncStorage.multiRemove(allKeys);*/
            await AsyncStorage.removeItem(key, () =>
                this.removeItemFromList(key)
            );
        } catch (e) {
            console.log(e);
        }
    };

    private removeItemFromList(key: string) {
        const nameOfItemToRemove = this.props.offerHandling
            ? getNameFromKey(key, this.props.offerHandling.category)
            : getNameFromKey(key);
        const newSavedLoads = this.state.loadedSaves.filter(
            (save) => save.name !== nameOfItemToRemove
        );
        this.setState({ loadedSaves: newSavedLoads });
    }
}
