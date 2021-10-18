import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import {
    UserMadeDrink,
    UserMadeFood,
} from '../../../classes/contentCreator/ContentCreator';
import { Database } from '../../../classes/database/Database';
import {
    buttonEmphasis,
    OkayButton,
    UploadButton,
} from '../../../components/buttons/Buttons';
import { MinimalOfferDataWithNumber } from '../../../components/ListOfSaves/ListOfSaves';
import { productEditorStyles } from './productEditorStyles';

export const ProductEditor = (props: {
    addEdit: (asset: UserMadeFood | UserMadeDrink) => void;
    overwriteEdit: (
        asset: UserMadeFood | UserMadeDrink,
        prevName: string
    ) => void;
    names: string[];
    prevData: UserMadeFood | UserMadeDrink;
}) => {
    const [name, setName] = useState(props.prevData.name);
    const [priceText, setPriceText] = useState(props.prevData.priceText);
    const [description, setDescription] = useState(props.prevData.description);
    const startTextIsValid = props.prevData.name.length > 0 ? true : false;
    const [priceTextIsValid, setPriceTextIsValid] = useState(true);
    const [nameTextIsValid, setNameTextIsValid] = useState(startTextIsValid);
    const textIsNumber = (text: string) => {
        return text.match(/^[0-9]+$/) != null && text !== '0';
    };
    const storeOffer = async () => {
        // TODO: this is not a nice piece of code
        const minimalOfferDataWithNumber: MinimalOfferDataWithNumber = {
            priceText: parseInt(priceText),
            description: description,
            name: name,
            category: props.prevData.category,
        };
        new Database().saveData(minimalOfferDataWithNumber, props.prevData);
    };

    return (
        <ScrollView style={productEditorStyles.scrollView}>
            <Text style={productEditorStyles.title}>
                {'CREATE ' + props.prevData.category.toUpperCase()}
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
                            const nameIsValid =
                                name === props.prevData.name ||
                                props.names.every(
                                    (name) => name !== props.prevData.name
                                );
                            setNameTextIsValid(nameIsValid);
                        }}
                    ></TextInput>

                    <HelperText
                        type="error"
                        visible={!nameTextIsValid}
                        onTextLayout={() => {}}
                        dataDetectorType={'none'}
                    >
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
                    <HelperText
                        type="error"
                        visible={!priceTextIsValid}
                        onTextLayout={() => {}}
                        dataDetectorType={'none'}
                    >
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
                                const newProductData = props.prevData;

                                if (props.prevData.name.length > 0) {
                                    props.overwriteEdit(
                                        newProductData,
                                        props.prevData.name
                                    );
                                } else {
                                    props.addEdit(newProductData);
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
        </ScrollView>
    );
};
