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
import { association } from '../../classes/association';
import { NameIdea } from '../../classes/NameIdea';
import { getStructuredFits } from '../../classes/StructuredTavernFits';
import { substantiveCategory } from '../../classes/Substantive';
import {
    buttonEmphasis,
    PencilButton,
    RerollButton,
} from '../../components/buttons/generalButtons';
import { removeEmptyStrings } from '../../editNavigator/editNavigatorFunctions';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { misfitMode } from '../../helpingFunctions/misfitModes';
import { getMisfits } from '../../helpingFunctions/misFitsHandlers';
import { TavernData } from '../../mainNavigator/TavernData';
import { globalStyles } from '../globalStyles';
import { AssociationDialogBar } from './associationBar/AssociationDialogBar';
import { nameIdeas } from './names/nameIdeas';
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
                        {this.getFittingNamesSign()}
                    </View>
                </View>
            </View>
        );
    }
    private noFitsActive() {
        return this.props.fitting.fits.length === 0;
    }

    private renderRerollButton() {
        return (
            <RerollButton
                mode={buttonEmphasis.high}
                onPress={() => this.rerollName()}
                title=" NAME"
            ></RerollButton>
        );
    }

    private rerollName() {
        const randomNumber = Math.random();
        const structuredFits = getStructuredFits(this.props.fitting.fits);
        if (randomNumber > PROBABILITY_SPECIAL_NAME || this.noFitsActive()) {
            const possibleNames = nameIdeas.filter((nameIdea) =>
                nameIdea.fitsToTavern(structuredFits)
            );
            const newNameIdea = getRandomArrayEntry(possibleNames) as NameIdea;
            const newName = newNameIdea
                ? newNameIdea.getConcreteName(structuredFits)
                : 'Nameless Tavern';
            this.props.onDataChange({ name: newName });
            this.setState({ isSpecialName: false });
        } else {
            const specialName = this.getSpecialNames();
            this.props.onDataChange({ name: specialName });
            this.setState({ isSpecialName: true });
        }
    }

    private getSpecialNames() {
        const randomFit = getRandomArrayEntry(this.props.fitting.fits);
        const specialNames = specialTavernNames.filter((entry) => {
            return entry.association === randomFit;
        });
        if (specialNames.length === 0) {
            console.log(
                'specialNames are empty, but special Names are requested'
            );
        }
        if (!randomFit) {
            console.log('fits are empty, but special name was requested');
            return getRandomArrayEntry(specialTavernNames[0].names);
        }
        return getRandomArrayEntry(specialNames[0].names);
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

    private getFittingNamesSign() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Button>{this.totalNumberOfPossibleNames()}</Button>
            </View>
        );
    }
    private totalNumberOfPossibleNames() {
        const structuredFits = getStructuredFits(this.props.fitting.fits);
        return nameIdeas
            .map((nameIdea) => nameIdea.countFittingChoices(structuredFits))
            .reduce((sum, cur) => sum + cur, 0);
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
