import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, List, Modal, Portal } from 'react-native-paper';
import { Database } from '../../classes/database/Database';
import { WeServe } from '../../editNavigator/WeServe';
import { MinimalTavernData } from '../../mainNavigator/TavernData';
import { Offer } from '../../scenes/menuScene/Offer';
import { Demand } from '../../scenes/menuScene/offerList/actionInterfaces';
import { Impression } from '../../scenes/questScene/impressions/Impression';
import { editModalStyles } from '../../scenes/startOptionsScene/editModalStyles';
type TavernBuild = {
    isAbout: 'tavern';
    build: (minimalTavernData: MinimalTavernData) => void;
};
type OfferBuild = Demand & { isAbout: WeServe.food | WeServe.drinks } & {
    build: (name: string, priceText: string, description: string) => void;
    nameIsDuplicated: (name: string) => boolean;
};
type ImpressionBuild = Demand & { isAbout: WeServe.impressions } & {
    build: (name: string) => void;
    nameIsDuplicated: (name: string) => boolean;
};
interface ListOfSavesProps {
    title: string;
    dataHandler: Database;
    building: TavernBuild | OfferBuild | ImpressionBuild;
    visible: boolean;
    onDismiss: () => void;
}
interface ListOfSavesState {
    loadedSaves: (MinimalTavernData | Offer | Impression)[];
}

export class ListOfSaves extends React.Component<
    ListOfSavesProps,
    ListOfSavesState
> {
    state = {
        loadedSaves: [] as (MinimalTavernData | Offer | Impression)[],
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
                                    switch (this.props.building.isAbout) {
                                        case 'tavern':
                                            const tavern =
                                                save as MinimalTavernData;
                                            this.props.building.build(tavern);
                                            break;
                                        case WeServe.impressions:
                                            const impression =
                                                save as Impression;
                                            this.props.building.build(
                                                impression.name
                                            );
                                            break;

                                        default:
                                            const offer = save as Offer;
                                            this.props.building.build(
                                                offer.name,
                                                offer.price.toString(),
                                                offer.description || ''
                                            );
                                            break;
                                    }
                                }}
                                disabled={
                                    this.props.building.isAbout !== 'tavern' &&
                                    this.props.building.nameIsDuplicated(
                                        save.name
                                    )
                                }
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
        const demand =
            this.props.building.isAbout === 'tavern'
                ? 'tavern'
                : this.props.building;
        const data = await this.props.dataHandler.getSaves(demand);
        if (data) {
            this.setState({ loadedSaves: data });
        }
    };

    private deleteSavedItem = async (name: string) => {
        const demand =
            this.props.building.isAbout === 'tavern'
                ? 'tavern'
                : this.props.building;
        await this.props.dataHandler.removeData(name, demand);
        this.removeItemFromList(name);
    };

    private removeItemFromList(name: string) {
        const newSavedLoads = this.state.loadedSaves.filter(
            (save) => save.name !== name
        );
        this.setState({ loadedSaves: newSavedLoads });
    }
}
