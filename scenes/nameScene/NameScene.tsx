import React, { useState } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import {
    Button,
    Dialog,
    HelperText,
    List,
    Portal,
    TextInput,
} from 'react-native-paper';
import { Adjective, association } from '../../classes/Adjectives';
import { substantiveCategory } from '../../classes/Substantive';
import {
    buttonEmphasis,
    PencilButton,
    RerollButton,
} from '../../components/buttons/generalButtons';
import { removeEmptyStrings } from '../../editNavigator/editNavigatorFunctions';
import {
    getFittingRandom,
    getRandomArrayEntry,
} from '../../helpingFunctions/getFittingRandom';
import { misfitMode } from '../../helpingFunctions/misfitModes';
import { getMisfits } from '../../helpingFunctions/misFitsHandlers';
import { TavernData } from '../../mainNavigator/TavernData';
import { globalStyles } from '../globalStyles';
import { AssociationDialogBar } from './associationBar/AssociationDialogBar';
import { adjectives, substantives } from './names/nouns';
import { specialTavernNames } from './names/specialTavernNames';
import { nameSceneStyles } from './nameSceneStyles';
import { nameSplitter } from './nameSplitter';
import { TavernSign } from './TavernSign';

const PROBABILITY_SPECIAL_NAME = 0.15;
const CHARACTER_MAX_ON_LINE = 14;
interface TextState {
    invalidSubstantives: substantiveCategory[];
    isSpecialName: boolean;
    nameSetDialogOpen: boolean;
    dialogText: string;
}

interface NameProps {
    fitting: { fits: association[]; misfits: association[] };
    name: string;
    onDataChange: (newData: Partial<TavernData>) => void;
    getImpliedChanges: (newFitting: {
        fits: association[];
        misfits: association[];
    }) => Partial<TavernData>;
}

// Food Scene: Fehler bei Main Dish
export class NameScene extends React.Component<NameProps, TextState> {
    constructor(props: any) {
        super(props);
        this.state = {
            invalidSubstantives: [],
            isSpecialName: true,
            nameSetDialogOpen: false,
            dialogText: '',
        };
    }

    public render() {
        return (
            <View style={nameSceneStyles.backgroundView}>
                <List.Section
                    style={{ flex: 0.2 }}
                    title="NAME"
                    titleStyle={globalStyles.title}
                >
                    <List.Item title=""></List.Item>
                </List.Section>
                <View style={nameSceneStyles.associationView}>
                    <View>
                        <AssociationDialogBar
                            fits={this.props.fitting.fits}
                            switchFits={(newFits: association[]) => {
                                this.updateFitsAndMisfits(newFits);
                            }}
                        />
                    </View>
                    <View style={nameSceneStyles.signView}>
                        <NameSetDialog
                            tavernName={this.props.name}
                            setTavernName={(name: string) => {
                                this.props.onDataChange({ name: name });
                            }}
                            open={this.state.nameSetDialogOpen}
                            startText={this.state.dialogText}
                            setStartText={(text: string) => {
                                this.setState({ dialogText: text });
                            }}
                            onDismiss={() => {
                                this.setState({ nameSetDialogOpen: false });
                            }}
                        />
                        <TavernSign
                            nameText={nameSplitter(
                                this.props.name,
                                CHARACTER_MAX_ON_LINE
                            )}
                        ></TavernSign>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                paddingHorizontal: 0,
                            }}
                        >
                            {this.renderRerollButton()}
                            <PencilButton
                                onPress={() => {
                                    this.setState({ nameSetDialogOpen: true });
                                }}
                                mode={buttonEmphasis.high}
                                title={'EDIT'}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    noFitsActive() {
        return this.props.fitting.fits.length === 0;
    }

    renderRerollButton() {
        return (
            <RerollButton
                mode={buttonEmphasis.high}
                onPress={() => this.rerollName()}
                title=" NAME"
            ></RerollButton>
        );
    }

    rerollName() {
        const randomNumber = Math.random();
        if (randomNumber > PROBABILITY_SPECIAL_NAME || this.noFitsActive()) {
            const newAdjective = this.getAdjective();
            const newName =
                newAdjective.name +
                ' ' +
                this.getSubstantiveName(newAdjective.badWords);
            this.props.onDataChange({ name: newName });
            this.setState({ isSpecialName: false });
        } else {
            const specialName = this.getSpecialNames();
            this.props.onDataChange({ name: specialName });
            this.setState({ isSpecialName: true });
        }
    }
    getSpecialNames() {
        const randomFit = getRandomArrayEntry(this.props.fitting.fits);
        const specialNames = specialTavernNames.filter((entry) => {
            return entry.association === randomFit;
        });
        if (specialNames.length === 0) {
            console.log(
                'specialNames ist leer! Das sollte abr nicht passieren! this.props.fitting.fits ist nämlich nicht leer!'
            );
        }
        if (!randomFit) {
            return getRandomArrayEntry(specialTavernNames[0].names);
        }
        return getRandomArrayEntry(specialNames[0].names);
    }

    private getAdjective() {
        const prevAdjective = this.getNameParts().adjective;
        return getFittingRandom(
            adjectives,
            this.props.fitting.fits,
            this.props.fitting.misfits,
            [prevAdjective]
        ) as Adjective;
    }
    private getSubstantiveName(invalids: substantiveCategory[]) {
        const prevSubstantive = this.getNameParts().substantive;
        const validSubstantiveChapters = substantives.filter(
            (chapter) => !invalids.includes(chapter.category)
        );
        const validSubstantives = validSubstantiveChapters.flatMap(
            (chapter) => chapter.substantives
        );
        return getFittingRandom(
            validSubstantives,
            this.props.fitting.fits,
            this.props.fitting.misfits,
            [prevSubstantive]
        ).name;
    }

    private getNameParts() {
        const name = this.props.name;
        if (this.state.isSpecialName) {
            return { substantive: '', adjective: '' };
        } else {
            const breakIndex = name.indexOf(' ');
            const adjective = name.slice(0, breakIndex);
            const substantive = name.slice(breakIndex + 1);
            return { substantive: substantive, adjective: adjective };
        }
    }
    private updateFitsAndMisfits(newFits: association[]) {
        // Testen: Code wird in richtiger Reihenfolge ausgeführt, obwohl wir states setzen? Ja oder Nein?
        const newMisfits = getMisfits(newFits, misfitMode.stricter);
        const newFitting = removeEmptyStrings(newFits, newMisfits);
        this.props.onDataChange({
            fitting: newFitting,
            ...this.props.getImpliedChanges(newFitting),
        });
    }
}

const NameSetDialog = (props: {
    startText: string;
    setStartText: (text: string) => void;
    open: boolean;
    tavernName: string;
    setTavernName: (text: string) => void;
    onDismiss: () => void;
}) => {
    const [textIsValid, setTextIsValid] = useState(true);

    const checkText = (text: string) => {
        if (text.length > CHARACTER_MAX_ON_LINE + 7) {
            setTextIsValid(false);
        } else {
            setTextIsValid(true);
        }
    };

    return (
        <Portal>
            <Dialog visible={props.open} onDismiss={props.onDismiss}>
                <Dialog.Content>
                    <TextInput
                        label="Tavern Name"
                        value={props.startText}
                        onChangeText={(text: string) => {
                            props.setStartText(text);
                            checkText(text);
                        }}
                    ></TextInput>
                    <HelperText type="error" visible={!textIsValid}>
                        Name is too long and not dividable by empty spaces.
                    </HelperText>
                    <Button
                        onPress={() => {
                            props.onDismiss();
                            props.setTavernName(props.startText);
                        }}
                        disabled={!textIsValid}
                    >
                        Okay!
                    </Button>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};
