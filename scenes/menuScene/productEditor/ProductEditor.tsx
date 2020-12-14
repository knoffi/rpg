import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
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
}) => {
    const [name, setName] = useState('My Name');
    const [price, setPrice] = useState(10);
    const [description, setDescription] = useState('My Description');
    return (
        <ScrollView style={productEditorStyles.scrollView}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <View style={productEditorStyles.topTextFields}>
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
                <View style={productEditorStyles.topTextFields}>
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
            <View style={productEditorStyles.bottomItem}>
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
                        style={productEditorStyles.descriptionTextField}
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
