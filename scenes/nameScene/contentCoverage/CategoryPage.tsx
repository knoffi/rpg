import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { association } from '../../../classes/association';
import { HEIGHT_FACTOR, WIDTH_FACTOR } from '../../../dimensionConstants';
import {
    Describable,
    getDescribables,
} from '../../../mainNavigator/TavernData';
import { CategoryButton } from './CategoryButton';
import { CategoryButtonsProps, CategoryHandling } from './CategoryHandling';
import { CoverageTest } from './CoverageTest';
type PageState = { showResult: CoverageTest | false };

export const CategoryPage = (props: { handling: CategoryHandling }) => {
    const [page, setPage] = useState({ showResult: false } as PageState);
    const showResult = (data: CoverageTest) => {
        setPage({ showResult: data });
    };
    const buttons = getCategoryButtons({ ...props.handling, showResult });
    return (
        <View
            style={{
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'space-between',
            }}
        >
            {page.showResult ? getResultDisplay(page.showResult) : buttons}
        </View>
    );
};
const getResultDisplay = (props: CoverageTest) => {
    return (
        <View style={{ justifyContent: 'center' }}>
            <DataRow result={props.fewestPowerfits} title="Single Power Fits" />
            <DataRow
                result={props.fewestRegularFits}
                title="Single Regular Fits"
            />
        </View>
    );
};
const DataRow = (props: {
    title: string;
    result: { fits: association[]; value: number };
}) => {
    const associationText = props.result.fits.reduce(
        (prev, cur) => prev + cur + ', ',
        ''
    );
    return (
        <View
            style={{
                marginBottom: 15 * HEIGHT_FACTOR,
                marginHorizontal: 5 * WIDTH_FACTOR,
            }}
        >
            <Text
                style={{
                    fontWeight: 'bold',
                    borderBottomWidth: 4 * WIDTH_FACTOR,
                    borderBottomColor: 'black',
                    marginBottom: 5 * HEIGHT_FACTOR,
                    maxWidth: 140 * WIDTH_FACTOR,
                }}
            >
                {props.title}
            </Text>
            <Text>
                {'Counted ' +
                    props.result.value +
                    ' ideas for ' +
                    props.result.fits.length +
                    ' associations: \n\n'}
                <Text style={{ fontStyle: 'italic' }}>{associationText}</Text>
            </Text>
        </View>
    );
};
const getCategoryButtons = (props: CategoryButtonsProps) => {
    const getOnPress = (category: Describable) => () =>
        props.showResult(props.onCategory(category));
    const categories = getDescribables(props.isAbout);
    return categories.map((category) => (
        <CategoryButton
            category={category}
            onPress={getOnPress(category)}
            key={category}
        />
    ));
};
