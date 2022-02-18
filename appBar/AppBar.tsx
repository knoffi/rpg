import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { View } from 'react-native';
import { Appbar, Badge, Modal, Portal } from 'react-native-paper';
import { TavernData } from '../mainNavigator/TavernData';
import { Offer } from '../scenes/menuScene/Offer';
import { appBarStyles } from './appBarStyles';
import { ShoppingList } from './ShoppingList';

const APP_BAR_BG = '#63481F';
const ACTIVE_BUTTON_COLOR = 'white';
const INACTIVE_BUTTON_COLOR = 'grey';

const BADGE_SIZE_DIVIDER = 2.3;
const SHOPPING_ICON_SIZE = 30;

export const AppBar = (props: {
    onUndo: () => void;
    onSave: () => void;
    undoDisabled: boolean;
    onRedo: () => void;
    redoDisabled: boolean;
    onBackNavigation: () => void;
    sceneTitle: string;
    boughtOffers: Offer[];
    currencyName: string;
    getAdjustedPrice: (offer: Offer) => number;
    onBuyChange: (newData: Pick<TavernData, 'boughtOffers'>) => void;
}) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const numberOfBoughtItems = props.boughtOffers.length;
    const hideModal = () => setModalVisible(false);
    return (
        <View>
            <Appbar.Header style={{ backgroundColor: APP_BAR_BG }}>
                <Appbar.BackAction onPress={props.onBackNavigation} />
                <Appbar.Content title={props.sceneTitle} />
                <Appbar.Action
                    animated={false}
                    color={ACTIVE_BUTTON_COLOR}
                    icon={(props) => (
                        <FontAwesome
                            name="share-alt"
                            size={props.size}
                            color={props.color}
                            onPress={() => {}}
                        ></FontAwesome>
                    )}
                ></Appbar.Action>
                <Appbar.Action
                    animated={false}
                    color={ACTIVE_BUTTON_COLOR}
                    icon={(props) => (
                        <FontAwesome
                            name="save"
                            size={props.size}
                            color={props.color}
                        />
                    )}
                    onPress={props.onSave}
                />
                <Appbar.Action
                    animated={false}
                    color={
                        props.undoDisabled
                            ? INACTIVE_BUTTON_COLOR
                            : ACTIVE_BUTTON_COLOR
                    }
                    icon={(props) => (
                        <FontAwesome
                            name="mail-reply"
                            size={props.size}
                            color={props.color}
                        />
                    )}
                    onPress={() => {
                        if (!props.undoDisabled) {
                            props.onUndo();
                        }
                    }}
                />
                <Appbar.Action
                    animated={false}
                    color={
                        props.redoDisabled
                            ? INACTIVE_BUTTON_COLOR
                            : ACTIVE_BUTTON_COLOR
                    }
                    icon={(props) => (
                        <FontAwesome
                            name="mail-forward"
                            size={props.size}
                            color={props.color}
                        />
                    )}
                    onPress={() => {
                        if (!props.redoDisabled) {
                            props.onRedo();
                        }
                    }}
                />
                <Appbar.Action
                    color={
                        numberOfBoughtItems === 0
                            ? INACTIVE_BUTTON_COLOR
                            : ACTIVE_BUTTON_COLOR
                    }
                    animated={false}
                    size={SHOPPING_ICON_SIZE}
                    icon={(props) => (
                        <View style={{ top: 6, right: 2 }}>
                            <FontAwesome
                                name="shopping-cart"
                                size={props.size}
                                color={props.color}
                            ></FontAwesome>
                            <Badge
                                visible={numberOfBoughtItems !== 0}
                                style={appBarStyles.badge}
                                size={props.size / BADGE_SIZE_DIVIDER}
                                onPressIn={undefined}
                                onPressOut={undefined}
                            >
                                {numberOfBoughtItems}
                            </Badge>
                        </View>
                    )}
                    onPress={() => {
                        if (props.boughtOffers.length > 0) {
                            setModalVisible(true);
                        }
                    }}
                />
            </Appbar.Header>
            <Portal>
                <Modal visible={modalVisible} onDismiss={hideModal}>
                    <ShoppingList
                        getAdjustedPrice={props.getAdjustedPrice}
                        boughtOffers={props.boughtOffers}
                        currencyName={props.currencyName}
                        increaseOrder={(offerName: string) => {
                            const reorderedOffer = props.boughtOffers.find(
                                (order) => {
                                    return order.name === offerName;
                                }
                            );
                            props.onBuyChange({
                                boughtOffers: [
                                    ...props.boughtOffers,
                                    reorderedOffer!,
                                ],
                            });
                        }}
                        decreaseOrder={(offerName: string) => {
                            const cancelledOffer = props.boughtOffers.find(
                                (order) => {
                                    return order.name === offerName;
                                }
                            );
                            const cancelIndex = props.boughtOffers.lastIndexOf(
                                cancelledOffer!
                            );

                            const newOrderList = [
                                ...props.boughtOffers.slice(0, cancelIndex),
                                ...props.boughtOffers.slice(
                                    cancelIndex + 1,
                                    props.boughtOffers.length
                                ),
                            ];

                            props.onBuyChange({ boughtOffers: newOrderList });
                        }}
                    ></ShoppingList>
                </Modal>
            </Portal>
        </View>
    );
};
