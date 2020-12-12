import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Banner, Modal, Portal, Text, TextInput } from 'react-native-paper';
import { association } from '../../classes/Adjectives';
import { drinkCategory, TavernProduct } from '../../classes/TavernProduct';
import {
    buttonEmphasis,
    OkayButton,
    UploadButton,
} from '../../components/buttons/generalButtons';
import { HEIGHT_FACTOR, WIDTH_FACTOR } from '../../dimensionConstants';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { TavernData } from '../../mainNavigator/TavernData';
import { nameSceneStyles } from '../nameScene/nameSceneStyles';
import {
    drinkBannerEndings,
    foodBannerEndings,
    serviceBannerEndings,
} from './bannerEndings';
import { BasePrice } from './basePrice';
import { NothingLeftOffer, Offer } from './menuEnums';
import {
    getNewRandomDrinkOffer,
    offersWithOneReroll,
    weServe,
} from './menuFunctions';
import { menuCategory } from './menuProduct';
import { OfferList } from './offerList/OfferList';
import { getAdjustedPriceString } from './priceFunctions';

const mapOfBannerEndings = new Map([
    [weServe.drinks, drinkBannerEndings],
    [weServe.food, foodBannerEndings],
    [weServe.service, serviceBannerEndings],
]);

const menuStyle = StyleSheet.create({
    menuRow: { justifyContent: 'flex-start', flexDirection: 'row' },
    sceneButton: { justifyContent: 'center' },
});

export interface BannerData {
    emptyCategories: menuCategory[];
    isVisible: boolean;
}

interface MenuProps {
    fitting: { fits: association[]; misfits: association[] };
    isAbout: weServe;
    offers: Offer[];
    onDataChange: (newData: Partial<TavernData>) => void;
    offersLeft: Map<menuCategory, boolean>;
    offersBought: Offer[];
    basePrice: BasePrice;
    bannerData: BannerData;
    getImpliedChanges: (
        newDrinks?: Offer[],
        newDishes?: Offer[]
    ) => Partial<TavernData>;
    buyOffer: (boughtOffer: Offer) => void;
}

export const MenuScene = (props: MenuProps) => {
    const fits = props.fitting.fits;
    const misfits = props.fitting.misfits;
    const [bannerEnding, setBannerEnding] = useState(
        getRandomArrayEntry(mapOfBannerEndings.get(props.isAbout)!)
    );
    const [modalData, setModalData] = useState({
        visible: false,
        category: drinkCategory.lemonade as menuCategory,
    });

    const deleteOffer = (name: string) => {
        let newOffers = [] as Offer[];
        let deletedCategory: menuCategory;
        //asuming that delete button is not clickable if props.offers is empty
        props.offers.forEach((offer) => {
            if (offer.product.name !== name) {
                newOffers.push(offer);
            } else {
                deletedCategory = offer.product.category;
            }
        });
        if (props.isAbout === weServe.drinks) {
            props.onDataChange({
                drinks: newOffers,
                ...props.getImpliedChanges(newOffers, undefined),
            });
        } else {
            props.onDataChange({
                dishes: newOffers,
                ...props.getImpliedChanges(undefined, newOffers),
            });
        }
    };
    const rerollOffer = (name: string) => {
        const newOffers = offersWithOneReroll(
            name,
            props.offers,
            fits,
            misfits,
            props.isAbout,
            props.basePrice
        );
        if (props.isAbout === weServe.drinks) {
            props.onDataChange({ drinks: newOffers });
        } else {
            props.onDataChange({ dishes: newOffers });
        }
    };

    const buyOffer = (name: string) => {
        //TODO: This only works as long as drinks can be distuingished by name
        props.offers.forEach((offer) => {
            if (offer.product.name === name) {
                props.buyOffer(offer);
            }
        });
    };
    const addRandomOffer = (category: menuCategory) => {
        let newOffers = [] as Offer[];
        props.offers.forEach((offer) => {
            newOffers.push(offer);
        });
        const newOffer = getNewRandomDrinkOffer(
            fits,
            misfits,
            category,
            props.offers,
            props.isAbout
        );
        newOffers.push(newOffer);
        const testOffer = getNewRandomDrinkOffer(
            fits,
            misfits,
            category,
            newOffers,
            props.isAbout
        );
        if (testOffer.product.name === NothingLeftOffer.product.name) {
            setBannerEnding(
                getRandomArrayEntry(mapOfBannerEndings.get(props.isAbout)!)
            );
        }
        if (props.isAbout === weServe.drinks) {
            props.onDataChange({
                drinks: newOffers,
                ...props.getImpliedChanges(newOffers, undefined),
            });
        } else {
            props.onDataChange({
                dishes: newOffers,
                ...props.getImpliedChanges(undefined, newOffers),
            });
        }
    };

    const getEmptyCategoriesString = (names: menuCategory[]) => {
        let numerationString = '';
        names.forEach((name: menuCategory, index: number) => {
            if (index === 0) {
                numerationString = numerationString + name;
            } else {
                if (index < names.length - 1) {
                    numerationString = numerationString + ', ' + name;
                } else {
                    numerationString = numerationString + ' and ' + name;
                }
            }
        });
        return numerationString.toLocaleLowerCase();
    };

    return (
        <View>
            <ScrollView
                style={{
                    backgroundColor:
                        nameSceneStyles.backgroundView.backgroundColor,
                }}
            >
                <Banner
                    visible={props.bannerData.isVisible}
                    actions={[
                        {
                            label: 'Got it',
                            onPress: () => {
                                if (props.isAbout === weServe.drinks) {
                                    const newBannerData = props.getImpliedChanges()
                                        .drinkBannerData!;

                                    newBannerData.isVisible = false;
                                    props.onDataChange({
                                        drinkBannerData: newBannerData,
                                    });
                                } else {
                                    const newBannerData = props.getImpliedChanges()
                                        .foodBannerData!;
                                    newBannerData.isVisible = false;
                                    props.onDataChange({
                                        foodBannerData: newBannerData,
                                    });
                                }
                            },
                        },
                    ]}
                >
                    {'Your tavern offers every fitting ' +
                        getEmptyCategoriesString(
                            props.bannerData.emptyCategories
                        ) +
                        '!\n\n' +
                        bannerEnding}
                </Banner>
                <OfferList
                    offers={props.offers}
                    isAbout={props.isAbout}
                    addingActions={{
                        randomAdd: addRandomOffer,
                        import: (category: menuCategory) => {},
                        edit: (category: menuCategory) => {
                            setModalData({
                                visible: true,
                                category: category,
                            });
                        },
                    }}
                    offerActions={{
                        deleteOffer: deleteOffer,
                        rerollOffer: rerollOffer,
                        shopOffer: buyOffer,
                    }}
                    offersLeftMap={props.offersLeft}
                    getPriceString={(offer: Offer) => {
                        return getAdjustedPriceString(
                            offer,
                            props.fitting.fits,
                            props.fitting.misfits,
                            props.basePrice
                        );
                    }}
                />
            </ScrollView>
            <Portal>
                <Modal
                    visible={modalData.visible}
                    onDismiss={() => {
                        setModalData({
                            visible: false,
                            category: modalData.category,
                        });
                    }}
                >
                    <EditProductView
                        addTavernProduct={(
                            name: string,
                            price: number,
                            description: string
                        ) => {
                            const newUserOffer = {
                                product: new TavernProduct(
                                    name,
                                    price,
                                    [] as association[],
                                    modalData.category,
                                    description
                                ),
                                price: price,
                            };
                            const newOffers = [...props.offers, newUserOffer];
                            if (props.isAbout === weServe.drinks) {
                                props.onDataChange({ drinks: newOffers });
                            } else {
                                props.onDataChange({ dishes: newOffers });
                            }
                        }}
                    />
                </Modal>
            </Portal>
        </View>
    );
};

const EditProductView = (props: {
    addTavernProduct: (
        name: string,
        price: number,
        description: string
    ) => void;
}) => {
    const [name, setName] = useState('My Name');
    const [price, setPrice] = useState(10);
    const [description, setDescription] = useState('My Description');
    return (
        <ScrollView
            style={{
                backgroundColor: 'white',
                marginTop: 80 * HEIGHT_FACTOR,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                        marginHorizontal: 10,
                        width: 170 * WIDTH_FACTOR,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            textDecorationLine: 'underline',
                        }}
                    >
                        Hello
                    </Text>
                    <TextInput
                        value={name}
                        onChangeText={(name: string) => {
                            setName(name);
                        }}
                    ></TextInput>
                </View>
                <View
                    style={{
                        marginHorizontal: 10,
                        width: 170 * WIDTH_FACTOR,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            textDecorationLine: 'underline',
                        }}
                    >
                        Hello
                    </Text>
                    <TextInput
                        value={price.toString()}
                        onChangeText={(priceText: string) => {
                            setPrice(parseInt(priceText));
                        }}
                    ></TextInput>
                </View>
            </View>
            <View
                style={{
                    marginVertical: 20,
                    marginHorizontal: 10,
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                    }}
                >
                    Hello
                </Text>
                <View>
                    <TextInput
                        onChangeText={(description: string) => {
                            setDescription(description);
                        }}
                        multiline={true}
                        style={{ width: 300 }}
                    ></TextInput>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <OkayButton
                            mode={buttonEmphasis.high}
                            onPress={() => {
                                props.addTavernProduct(
                                    name,
                                    price,
                                    description
                                );
                            }}
                            title="TAVERN"
                        />
                        <UploadButton
                            mode={buttonEmphasis.high}
                            onPress={() => {}}
                            title="LIBRARY"
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
//TODO: test whether offer and drinkMenuCategories have corresponding entries
