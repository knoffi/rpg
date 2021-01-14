import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, List } from 'react-native-paper';
import { menuCategory } from '../../classes/TavernProduct';
import { minimalTavernData } from '../../mainNavigator/TavernData';
import { minimalOfferData } from '../../scenes/menuScene/userOffer';
type savedData = minimalTavernData | minimalOfferData;
interface ListOfSavesProps {
    mainKey: string;
    category?: menuCategory;
    visible: boolean;
    onDismiss: () => void;
}
interface ListOfSavesState {
    loadedSaves: (minimalTavernData | minimalOfferData)[];
}

export class ListOfSaves extends React.Component<
    ListOfSavesProps,
    ListOfSavesState
> {
    state = { loadedSaves: [] as (minimalTavernData | minimalOfferData)[] };
    constructor(props: any) {
        super(props);
        this.getData();
    }

    public render() {
        let listItems: JSX.Element[] = [];
        this.getData();
        listItems = this.state.loadedSaves.map((save, index) => {
            return (
                <List.Item
                    title={save.name}
                    key={index.toString() + save.name}
                />
            );
        });

        return (
            <Modal
                visible={this.props.visible}
                onDismiss={this.props.onDismiss}
            >
                <ScrollView>
                    <Button onPress={this.props.onDismiss}>Back</Button>
                    {
                        <List.Section title={this.props.mainKey}>
                            {listItems!}
                        </List.Section>
                    }
                </ScrollView>
            </Modal>
        );
    }

    getData = async () => {
        try {
            const allKeys = await AsyncStorage.getAllKeys();
            const relevantKeys = allKeys.filter((key) => {
                console.log('I passed!');
                return this.keyFitsToListOfSaves(key);
            });
            console.log(allKeys.length);
            console.log(relevantKeys.length);
            if (relevantKeys) {
                try {
                    console.log(
                        'keys are relevant! We got ' +
                            relevantKeys.length.toString()
                    );
                    const valuePairs = await AsyncStorage.multiGet(
                        relevantKeys
                    );
                    console.log(valuePairs);
                    const storedData = valuePairs.map((valuePair) => {
                        console.log('here comes the value');
                        console.log(valuePair[1]);
                        return valuePair[1] !== null
                            ? JSON.parse(valuePair[1])
                            : undefined;
                    });
                    const cleanStoredData = storedData.filter(
                        (value) => value !== undefined
                    ) as savedData[];
                    console.log('the data:');
                    console.log(cleanStoredData);
                    this.setState({ loadedSaves: cleanStoredData });
                } catch (error2) {
                    console.log(error2);
                }
            }
        } catch (error1) {
            console.log(error1);
        }
    };

    private keyFitsToListOfSaves(key: string) {
        const prefixStart = 0;
        const prefixEnd = this.props.mainKey.length - 1;
        console.log(this.props.mainKey);
        console.log(key.slice(prefixStart, prefixEnd + 1));
        const prefixMatches =
            key.slice(prefixStart, prefixEnd + 1) === this.props.mainKey;
        console.log(prefixMatches);
        console.log('-------------------');
        return prefixMatches;
    }
}
