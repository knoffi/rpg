import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { menuCategory } from '../../../classes/TavernProduct';
import {
    buttonEmphasis,
    OkayButton,
    UploadButton,
} from '../../../components/buttons/generalButtons';
import { productEditorStyles } from './productEditorStyles';

export const ProductEditor = (props: {
    addTavernProduct: (
        name: string,
        price: number,
        description: string
    ) => void;
    category: menuCategory;
}) => {
    const [name, setName] = useState('My Name');
    const [priceText, setPriceText] = useState('10');
    const [description, setDescription] = useState('My Description');
    const [priceTextIsValid, setPriceTextIsValid] = useState(true);
    const textIsNumber = (text: string) => {
        return text.match(/^[0-9]+$/) != null && text !== '0';
    };
    return (
        <ScrollView style={productEditorStyles.scrollView}>
            <Text style={productEditorStyles.title}>
                {'CREATE ' + props.category.toUpperCase()}
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
                        }}
                    ></TextInput>
                    <HelperText type="error" visible={name.length === 0}>
                        Please enter a name.
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
                        onChangeText={(description: string) => {
                            setDescription(description);
                        }}
                        multiline={true}
                        style={productEditorStyles.descriptionTextField}
                    ></TextInput>
                    <View style={productEditorStyles.buttonView}>
                        <OkayButton
                            mode={buttonEmphasis.high}
                            disabled={!priceTextIsValid || name.length === 0}
                            onPress={() => {
                                props.addTavernProduct(
                                    name,
                                    parseInt(priceText),
                                    description
                                );
                            }}
                            title=" TAVERN"
                        />
                        <UploadButton
                            mode={buttonEmphasis.high}
                            disabled={!priceTextIsValid || name.length === 0}
                            onPress={() => {}}
                            title=" LIBRARY"
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
