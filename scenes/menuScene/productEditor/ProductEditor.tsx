import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { HelperText, Text, TextInput } from 'react-native-paper';
import {
    buttonEmphasis,
    OkayButton,
    UploadButton,
} from '../../../components/buttons/generalButtons';
import {
    getKeyFromName,
    getNumberOfNameDuplicates,
} from '../../../components/ListOfSaves/keyHandlers';
import { MinimalOfferData } from '../userOffer';
import { productEditorStyles } from './productEditorStyles';
import { TavernAssetSaver } from './TavernAssetSaver';

export const ProductEditor = (props: {
    addTavernProduct: (textData: MinimalOfferData) => void;
    overwriteTavernProduct: (textData: MinimalOfferData) => void;
    nameIsDuplicated: (name: string) => boolean;
    startTexts: MinimalOfferData;
}) => {
    const [name, setName] = useState(props.startTexts.name);
    const [priceText, setPriceText] = useState(props.startTexts.priceText);
    const [description, setDescription] = useState(
        props.startTexts.description
    );
    const startTextIsValid = props.startTexts.name.length > 0 ? true : false;
    const [priceTextIsValid, setPriceTextIsValid] = useState(true);
    const [nameTextIsValid, setNameTextIsValid] = useState(startTextIsValid);
    const textIsNumber = (text: string) => {
        return text.match(/^[0-9]+$/) != null && text !== '0';
    };
    const storeOffer = async () => {
        try {
            const occurenceOfName = await getNumberOfNameDuplicates(
                name,
                props.startTexts.category
            );
            console.log(occurenceOfName);
            const nameForSaving =
                occurenceOfName > 0
                    ? name + ' (' + occurenceOfName.toString() + ')'
                    : name;
            const key = getKeyFromName(
                nameForSaving,
                props.startTexts.category
            );
            const minimalofferData: MinimalOfferData = {
                name: nameForSaving,
                priceText: priceText,
                category: props.startTexts.category,
                description: description,
            };
            const jsonValue = JSON.stringify(minimalofferData);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <ScrollView style={productEditorStyles.scrollView}>
            <Text style={productEditorStyles.title}>
                {'CREATE ' + props.startTexts.category.toUpperCase()}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <View style={productEditorStyles.topTextFields}>
                    <TextInput
                        label="Name"
                        value={name}
                        onChangeText={(name: string) => {
                            setName(name);
                            if (
                                name.length === 0 ||
                                (props.nameIsDuplicated(name) &&
                                    name !== props.startTexts.name)
                            ) {
                                setNameTextIsValid(false);
                            } else {
                                setNameTextIsValid(true);
                            }
                        }}
                    ></TextInput>

                    <HelperText type="error" visible={!nameTextIsValid}>
                        Please enter a name which does not exist on your menu!
                    </HelperText>
                </View>
                <View style={productEditorStyles.topTextFields}>
                    <TextInput
                        label="Price"
                        value={priceText}
                        onChangeText={(text: string) => {
                            setPriceTextIsValid(textIsNumber(text));
                            setPriceText(text);
                        }}
                    ></TextInput>
                    <HelperText type="error" visible={!priceTextIsValid}>
                        Only positive numbers, please.
                    </HelperText>
                </View>
            </View>
            <View style={productEditorStyles.bottomItem}>
                <View>
                    <TextInput
                        label="Description"
                        value={description}
                        onChangeText={(description: string) => {
                            setDescription(description);
                        }}
                        multiline={true}
                        style={productEditorStyles.descriptionTextField}
                    ></TextInput>
                    <View style={productEditorStyles.buttonView}>
                        <OkayButton
                            mode={buttonEmphasis.high}
                            disabled={!priceTextIsValid || !nameTextIsValid}
                            onPress={() => {
                                const newProductData = {
                                    name: name,
                                    priceText: priceText,
                                    description: description,
                                    category: props.startTexts.category,
                                };
                                if (props.startTexts.name.length > 0) {
                                    props.overwriteTavernProduct(
                                        newProductData
                                    );
                                } else {
                                    props.addTavernProduct(newProductData);
                                }
                            }}
                            title=" TAVERN"
                        />
                        <UploadButton
                            mode={buttonEmphasis.high}
                            disabled={!priceTextIsValid || name.length === 0}
                            onPress={storeOffer}
                            title=" LIBRARY"
                        />
                    </View>
                </View>
            </View>
            <TavernAssetSaver name={name} />
        </ScrollView>
    );
};
