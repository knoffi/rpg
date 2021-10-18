import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, List, Modal, Portal } from 'react-native-paper';
import { Database } from '../../classes/database/Database';
import { MenuCategory } from '../../classes/TavernProduct';
import { MinimalTavernData } from '../../mainNavigator/TavernData';
import { Demand } from '../../scenes/menuScene/offerList/actionInterfaces';
import { editModalStyles } from '../../scenes/startOptionsScene/editModalStyles';
interface ListOfSavesProps {
    title: string;
    dataHandler: Database;
    saving: 'tavern' | Demand;
    offerHandling?: {
        addUserOffer: (
            name: string,
            priceText: string,
            description: string
        ) => void;
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

export interface MinimalOfferDataWithNumber {
    name: string;
    priceText: number;
    description: string;
    category: MenuCategory;
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
                                    this.deleteSavedItem(save.name);
                                }}
                            >
                                DELETE
                            </Button>
                            <Button
                                style={{ marginHorizontal: 5 }}
                                onPress={() => {
                                    if (this.props.offerHandling) {
                                        const offerData =
                                            save as MinimalOfferDataWithNumber;
                                        this.props.offerHandling.addUserOffer(
                                            offerData.name,
                                            offerData.priceText.toString(),
                                            offerData.description
                                        );
                                    }
                                    if (this.props.tavernHandling) {
                                        const offerData =
                                            save as MinimalTavernData;
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
                            <List.Section title={this.props.title}>
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
        const data = await this.props.dataHandler.getSaves(this.props.saving);
        if (data) {
            this.setState({ loadedSaves: data });
        }
    };

    private deleteSavedItem = async (name: string) => {
        await this.props.dataHandler.removeData(name, this.props.saving);
        this.removeItemFromList(name);
    };

    private removeItemFromList(name: string) {
        const newSavedLoads = this.state.loadedSaves.filter(
            (save) => save.name !== name
        );
        this.setState({ loadedSaves: newSavedLoads });
    }
}
