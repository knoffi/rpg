import React from 'react';
import { StyleSheet, View } from 'react-native';
import { association } from '../../../classes/Adjectives';
import { AssociationDialog } from './AssociationDialog';

const colors = {
    land: '#117A65',
    income: '#B9770E',
    class: '#76448A',
    race: '#717D7E',
    specials: '#B03A2E',
};

export const AssociationDialogBar = (props: {
    fits: association[];
    switchFits: (newFits: association[]) => void;
}) => {
    let associationDialogs = [] as JSX.Element[];
    Object.values(fitGroup).forEach((group) => {
        const dialogData = dialogMap.get(group)!;
        const onPick = (
            oldAssociation: association,
            newAssociation: association
        ) => {
            props.switchFits(
                getNewFits(props.fits, newAssociation, oldAssociation)
            );
        };
        let startText = group as string;
        // assuming that every fitGroup has atmost one fit active and that fitGroup contains only string values
        props.fits.forEach((fit) => {
            if (dialogData.fits.includes(fit)) {
                startText = fit;
            }
        });
        associationDialogs.push(
            <AssociationDialog
                pickAssociationList={dialogData.fits}
                startText={startText}
                onPick={onPick}
                color={dialogData.color}
                key={group + 'Dialog'}
            ></AssociationDialog>
        );
    });
    const topDialogs = associationDialogs.slice(0, 3);
    const bottomDialogs = associationDialogs.slice(3, 5);

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

const getNewFits = (
    array: association[],
    newAssociation: association,
    oldAssociation: association
) => {
    const switchedOutArray = array.filter((element) => {
        return element !== oldAssociation;
    });
    switchedOutArray.push(newAssociation);
    return switchedOutArray;
};
const a = association;
enum fitGroup {
    land = 'LAND',
    income = 'INCOME',
    class = 'CLASS',
    race = 'RACE',
    special = 'SPECIALS',
}
const dialogMap = new Map([
    [
        fitGroup.land,
        {
            fits: [
                a.city,
                a.forest,
                a.mountain,
                a.desert,
                a.haven,
                a.village,
                a.tropical,
                a.underdark,
            ],
            color: '#117A65',
        },
    ],
    [
        fitGroup.income,
        { fits: [a.worker, a.poor, a.sophisticated, a.rich], color: '#B9770E' },
    ],
    [
        fitGroup.race,
        {
            fits: [
                a.dwarf,
                a.drow,
                a.elf,
                a.human,
                a.gnome,
                a.halfling,
                a.tiefling,
            ],
            color: '#76448A',
        },
    ],
    [
        fitGroup.class,
        {
            fits: [
                a.adventurer,
                a.barbarian,
                a.bard,
                a.dragonborn,
                a.cleric,
                a.wizard,
                a.nobel,
                a.druid,
            ],
            color: '#717D7E',
        },
    ],
    [
        fitGroup.special,
        { fits: [a.criminal, a.prostitute, a.evil], color: '#B03A2E' },
    ],
]) as Map<fitGroup, { fits: association[]; color: string }>;
