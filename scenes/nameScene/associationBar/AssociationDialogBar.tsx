import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    AssociationTypes,
    getAssociationsOfType,
} from '../../../classes/association';
import { FitPick } from '../../../classes/FitPick';
import {
    getFitFromStructure,
    StructuredTavernFits,
} from '../../../classes/idea/StructuredTavernFits';
import { AssociationDialog } from './AssociationDialog';
import { getButtonStates } from './getButtonStates';

const colors = {
    land: '#117A65',
    income: '#B9770E',
    class: '#76448A',
    race: '#717D7E',
    special: '#B03A2E',
};

export const AssociationDialogBar = (props: {
    fits: StructuredTavernFits;
    pickFit: (newFit: FitPick) => void;
    setPowerFit: (fit: string, category: AssociationTypes) => void;
    fitting: StructuredTavernFits;
}) => {
    const buttonStates = getButtonStates(props.fitting);
    const onPick = (newFit: FitPick) => {
        props.pickFit(newFit);
    };
    const getPowerFitCallback =
        (category: AssociationTypes, fit: string) => () => {
            props.setPowerFit(fit, category);
        };
    const dialogs = Object.values(AssociationTypes).map((type) => {
        const title =
            getFitFromStructure(type, props.fits) || type.toUpperCase();
        return (
            <AssociationDialog
                type={type}
                key={'Dialog' + type}
                pickAssociationList={getAssociationsOfType(type)}
                startText={title}
                onPick={onPick}
                onLongPress={getPowerFitCallback(type, title)}
                color={getColorForType(type)}
                activity={buttonStates[type]}
            ></AssociationDialog>
        );
    });

    const topDialogs = dialogs.slice(0, 3);
    const bottomDialogs = dialogs.slice(3, 5);

    return (
        <View
            style={{
                margin: 10,
                padding: 10,
                borderBottomColor: '#0c0c38',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderTopWidth: StyleSheet.hairlineWidth,
            }}
        >
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
                {topDialogs}
            </View>
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
                {bottomDialogs}
            </View>
        </View>
    );
};

const getColorForType = (type: AssociationTypes) => {
    switch (type) {
        case AssociationTypes.class:
            return colors.class;
        case AssociationTypes.land:
            return colors.land;
        case AssociationTypes.race:
            return colors.race;
        case AssociationTypes.income:
            return colors.income;
        case AssociationTypes.special:
            return colors.special;

        default:
            console.log('Could not find a color for that type');
            return '#000000';
    }
};
