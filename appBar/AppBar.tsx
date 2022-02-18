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
export type Action = (() => void | Promise<void>) | 'disabled';
type ShopingCart = {
    boughtOffers: Offer[];
    getAdjustedPrice: (offer: Offer) => number;
    onBuyChange: (newData: Pick<TavernData, 'boughtOffers'>) => void;
    currencyName: string;
};
type AppBarProps = {
    actions: {
        undo: Action;
        redo: Action;
        share: Action;
        save: Action;
        navigateBack: Action;
    };
    shoppingCart: ShopingCart | 'disabled';
    title: string;
};

export const AppBar = (props: AppBarProps) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const { actions, shoppingCart, title } = props;
    const numberOfBoughtItems =
        shoppingCart === 'disabled' ? 0 : shoppingCart.boughtOffers.length;
    const hideModal = () => setModalVisible(false);
    const onPress = (action: Action) =>
        action === 'disabled' ? () => {} : action;
    const buttonColor = (action: Action) =>
        action === 'disabled' ? INACTIVE_BUTTON_COLOR : ACTIVE_BUTTON_COLOR;
    return (
        <View>
            <Appbar.Header style={{ backgroundColor: APP_BAR_BG }}>
                <Appbar.BackAction onPress={onPress(actions.navigateBack)} />
                <Appbar.Content title={title} />
                <Appbar.Action
                    animated={false}
                    color={ACTIVE_BUTTON_COLOR}
                    icon={(props) => (
                        <FontAwesome
                            name="share-alt"
                            size={props.size}
                            color={props.color}
                        ></FontAwesome>
                    )}
                    onPress={onPress(actions.share)}
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
                    onPress={onPress(actions.save)}
                />
                <Appbar.Action
                    animated={false}
                    color={
                        actions.undo === 'disabled'
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
                    onPress={onPress(actions.undo)}
                />
                <Appbar.Action
                    animated={false}
                    color={buttonColor(actions.redo)}
                    icon={(props) => (
                        <FontAwesome
                            name="mail-forward"
                            size={props.size}
                            color={props.color}
                        />
                    )}
                    onPress={onPress(actions.redo)}
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
                        if (
                            shoppingCart !== 'disabled' &&
                            numberOfBoughtItems > 0
                        ) {
                            setModalVisible(true);
                        }
                    }}
                />
            </Appbar.Header>
            {shoppingCart === 'disabled' ? undefined : (
                <Portal>
                    <Modal visible={modalVisible} onDismiss={hideModal}>
                        <ShoppingList
                            getAdjustedPrice={shoppingCart.getAdjustedPrice}
                            boughtOffers={shoppingCart.boughtOffers}
                            currencyName={shoppingCart.currencyName}
                            increaseOrder={(offerName: string) => {
                                const reorderedOffer =
                                    shoppingCart.boughtOffers.find((order) => {
                                        return order.name === offerName;
                                    });
                                shoppingCart.onBuyChange({
                                    boughtOffers: [
                                        ...shoppingCart.boughtOffers,
                                        reorderedOffer!,
                                    ],
                                });
                            }}
                            decreaseOrder={(offerName: string) => {
                                const cancelledOffer =
                                    shoppingCart.boughtOffers.find((order) => {
                                        return order.name === offerName;
                                    });
                                const cancelIndex =
                                    shoppingCart.boughtOffers.lastIndexOf(
                                        cancelledOffer!
                                    );

                                const newOrderList = [
                                    ...shoppingCart.boughtOffers.slice(
                                        0,
                                        cancelIndex
                                    ),
                                    ...shoppingCart.boughtOffers.slice(
                                        cancelIndex + 1,
                                        numberOfBoughtItems
                                    ),
                                ];

                                shoppingCart.onBuyChange({
                                    boughtOffers: newOrderList,
                                });
                            }}
                        ></ShoppingList>
                    </Modal>
                </Portal>
            )}
        </View>
    );
};
