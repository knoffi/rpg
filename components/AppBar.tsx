import {
    AntDesign,
    FontAwesome,
    MaterialCommunityIcons,
} from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Appbar,
    Badge,
    IconButton,
    List,
    Modal,
    Portal,
    Text,
} from 'react-native-paper';
import { WIDTH_FACTOR } from '../dimensionConstants';
import { Offer } from '../scenes/menuScene/menuEnums';

const APP_BAR_BG = '#63481F';
const ACTIVE_BUTTON_COLOR = 'white';
const INACTIVE_BUTTON_COLOR = 'grey';

const BADGE_SIZE_DIVIDER = 2.3;
const SHOPPING_ICON_SIZE = 32;

const AppBar = (props: {
    onUndo: () => void;
    undoDisabled: boolean;
    onRedo: () => void;
    redoDisabled: boolean;
    onBackNavigation: () => void;
    sceneTitle: string;
    boughtOffers: Offer[];
    currencyName: string;
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
                                style={styles.badge}
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
                    ></ShoppingList>
                </Modal>
            </Portal>
        </View>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    badge: { top: -35, right: -4 },
});

const ShoppingList = (props: {
    boughtOffers: Offer[];
    currencyName: string;
}) => {
    const boughtDrinks = [] as JSX.Element[];
    const boughtFood = [] as JSX.Element[];
    let priceSum = 0;

    const drinkMap = new Map<string, { price: number; count: number }>([]);
    const foodMap = new Map<string, { price: number; count: number }>([]);
    props.boughtOffers.forEach((offer) => {
        const name = offer.product.name;
        const thisMap = offer.product.isFood() ? foodMap : drinkMap;
        const orderValues = thisMap.get(name);
        if (orderValues) {
            thisMap.delete(name);
            thisMap.set(name, {
                price: orderValues.price + offer.price,
                count: orderValues.count + 1,
            });
        } else {
            thisMap.set(name, { price: offer.price, count: 1 });
        }
    });
    drinkMap.forEach((orderValues, name) => {
        boughtDrinks.push(getListItem(orderValues, name, props.currencyName));
        priceSum += orderValues.price;
    });
    foodMap.forEach((orderValues, name) => {
        boughtFood.push(getListItem(orderValues, name, props.currencyName));
        priceSum += orderValues.price;
    });

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ justifyContent: 'center', margin: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            textDecorationLine: 'underline',
                            fontSize: 22 * WIDTH_FACTOR,
                        }}
                    >
                        {'Total Price: '}
                    </Text>
                    <Text
                        style={{
                            fontSize: 22 * WIDTH_FACTOR,
                            color: moneyColor,
                        }}
                    >
                        {priceSum.toString() + ' ' + props.currencyName}
                    </Text>
                </View>
            </View>
            <List.Section title="You ordered">
                <List.Accordion
                    titleStyle={{
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                        fontSize: 22 * WIDTH_FACTOR,
                    }}
                    title="Drinks"
                >
                    {boughtDrinks}
                </List.Accordion>
                <List.Accordion
                    titleStyle={{
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                        fontSize: 22 * WIDTH_FACTOR,
                    }}
                    title="Food"
                >
                    {boughtFood}
                </List.Accordion>
            </List.Section>
        </ScrollView>
    );
};
const moneyColor = '#996515';
function getListItem(
    orderValues: { price: number; count: number },
    name: string,
    currencyName: string
): JSX.Element {
    return (
        <List.Item
            style={{ margin: 5 * WIDTH_FACTOR }}
            title={' '}
            left={() => (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    }}
                >
                    <View
                        style={{
                            borderStyle: 'solid',
                            borderColor: 'black',
                            borderWidth: StyleSheet.hairlineWidth,
                            width: 325 * WIDTH_FACTOR,
                            margin: 10 * WIDTH_FACTOR,
                            padding: 5,
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18 * WIDTH_FACTOR,
                                fontWeight: 'bold',
                            }}
                        >
                            {orderValues.count.toString() + 'x ' + ' ' + name}
                        </Text>
                        <View
                            style={{
                                justifyContent: 'flex-end',
                                width: 315 * WIDTH_FACTOR,
                                flexDirection: 'row',
                            }}
                        >
                            <Text
                                style={{
                                    color: moneyColor,
                                    fontSize: 18 * WIDTH_FACTOR,
                                    fontWeight: 'bold',
                                }}
                            >
                                {orderValues.price.toString() +
                                    ' ' +
                                    currencyName}
                            </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-between' }}>
                        <IconButton
                            icon={(props) => (
                                <MaterialCommunityIcons
                                    name="plus-box-outline"
                                    size={props.size + 8 * WIDTH_FACTOR}
                                    color={props.color}
                                />
                            )}
                        />
                        <IconButton
                            icon={(props) => (
                                <MaterialCommunityIcons
                                    name="minus-box-outline"
                                    size={props.size + 8 * WIDTH_FACTOR}
                                    color={props.color}
                                />
                            )}
                        />
                    </View>
                </View>
            )}
            key={name + orderValues.price.toString()}
        ></List.Item>
    );
}
