import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { UserMadeImpression } from '../../../classes/contentCreator/ContentCreator';
import { Database } from '../../../classes/database/Database';
import {
    buttonEmphasis,
    OkayButton,
    UploadButton,
} from '../../../components/buttons/Buttons';
import { SavedData } from '../../../components/ListOfSaves/SavedData';
import { productEditorStyles } from '../../menuScene/productEditor/productEditorStyles';

export const ImpressionEditor = (props: {
    addEdit: (asset: UserMadeImpression) => void;
    overwriteEdit: (asset: UserMadeImpression, prevName: string) => void;
    names: string[];
    prevData: UserMadeImpression;
}) => {
    const [name, setName] = useState(props.prevData.name);
    const startTextIsValid = props.prevData.name.length > 0 ? true : false;
    const [nameTextIsValid, setNameTextIsValid] = useState(startTextIsValid);
    const storeOffer = async () => {
        const impression: SavedData = {
            ...props.prevData,
            name,
            universe: 'isUserMade',
            impliedPatterns: [],
            patterns: [],
            keys: { main: [], addition: [] },
        };
        new Database().saveData(impression, props.prevData);
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
                                (name.length > 0 &&
                                    props.names.every((text) => text !== name));
                            setNameTextIsValid(nameIsValid);
                        }}
                    ></TextInput>

                    <HelperText
                        type="error"
                        visible={!nameTextIsValid}
                        onTextLayout={() => {}}
                        dataDetectorType={'none'}
                    >
                        Please enter a name which does not exist in your notes!
                    </HelperText>
                </View>
            </View>
            <View style={productEditorStyles.bottomItem}>
                <View>
                    <View style={productEditorStyles.buttonView}>
                        <OkayButton
                            mode={buttonEmphasis.high}
                            disabled={name.length === 0 || !nameTextIsValid}
                            onPress={() => {
                                const newProductData: UserMadeImpression = {
                                    ...props.prevData,
                                    name,
                                };

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
                            disabled={name.length === 0}
                            onPress={storeOffer}
                            title=" LIBRARY"
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
