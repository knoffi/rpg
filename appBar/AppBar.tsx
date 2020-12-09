import { AntDesign, FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { View } from 'react-native';
import { Appbar, Badge, Modal, Portal } from 'react-native-paper';
import { TavernData } from '../mainNavigator/TavernData';
import { Offer } from '../scenes/menuScene/menuEnums';
import { appBarStyles } from './appBarStyles';
import { ShoppingList } from './ShoppingList';

const APP_BAR_BG = '#63481F';
const ACTIVE_BUTTON_COLOR = 'white';
const INACTIVE_BUTTON_COLOR = 'grey';

const BADGE_SIZE_DIVIDER = 2.3;
const SHOPPING_ICON_SIZE = 32;

export const AppBar = (props: {
    onUndo: () => void;
    undoDisabled: boolean;
    onRedo: () => void;
    redoDisabled: boolean;
    onBackNavigation: () => void;
    sceneTitle: string;
    boughtOffers: Offer[];
    currencyName: string;
    onDataChange: (newData: Partial<TavernData>) => void;
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
                    size={SHOPPING_ICON_SIZE}
                    icon={(props) => (
                        <View>
                            <AntDesign
                                name="shoppingcart"
                                size={props.size}
                                color={props.color}
                            ></AntDesign>
                            <Badge
                                visible={true}
                                style={appBarStyles.badge}
                                size={props.size / BADGE_SIZE_DIVIDER}
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
                        boughtOffers={props.boughtOffers}
                        currencyName={props.currencyName}
                        increaseOrder={(offerName: string) => {
                            const reorderedOffer = props.boughtOffers.find(
                                (order) => {
                                    return order.product.name === offerName;
                                }
                            );
                            props.onDataChange({
                                boughtOffers: [
                                    ...props.boughtOffers,
                                    reorderedOffer!,
                                ],
                            });
                        }}
                        decreaseOrder={(offerName: string) => {
                            const cancelledOffer = props.boughtOffers.find(
                                (order) => {
                                    return order.product.name === offerName;
                                }
                            );
                            const cancelIndex = props.boughtOffers.lastIndexOf(
                                cancelledOffer!
                            );
                            let newOrderList = props.boughtOffers.slice(
                                0,
                                cancelIndex
                            );
                            if (cancelIndex < props.boughtOffers.length - 1) {
                                newOrderList = [
                                    ...newOrderList,
                                    ...props.boughtOffers.slice(
                                        cancelIndex + 1,
                                        props.boughtOffers.length
                                    ),
                                ];
                            }
                            props.onDataChange({ boughtOffers: newOrderList });
                        }}
                    ></ShoppingList>
                </Modal>
            </Portal>
        </View>
    );
};
