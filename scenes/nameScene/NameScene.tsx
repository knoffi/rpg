import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { Button, List } from 'react-native-paper';
import { association } from '../../classes/association';
import { NameIdea } from '../../classes/idea/NameIdea';
import { getStructuredFits } from '../../classes/idea/StructuredTavernFits';
import {
    buttonEmphasis,
    PencilButton,
    RerollButton,
} from '../../components/buttons/generalButtons';
import { removeEmptyStrings } from '../../editNavigator/editNavigatorFunctions';
import { checkDataDistribution } from '../../helpingFunctions/checkDataDistribution';
import { getRandomArrayEntry } from '../../helpingFunctions/getFittingRandom';
import { misfitMode } from '../../helpingFunctions/misfitModes';
import { getMisfits } from '../../helpingFunctions/misFitsHandlers';
import { TavernData } from '../../mainNavigator/TavernData';
import { globalStyles } from '../globalStyles';
import { AssociationDialogBar } from './associationBar/AssociationDialogBar';
import { nameIdeas } from './names/nameIdeas';
import { getSpecialTavernName } from './names/specialTavernNames';
import { nameSceneStyles } from './nameSceneStyles';
import { NameSetDialog } from './NameSetDialog';
import { TavernSign } from './TavernSign';

const PROBABILITY_SPECIAL_NAME = 0.15;
const MAX_NAME_MEMORY = 2;
type TextState = {
    invalidSubstantives: string[];
    nameSetDialogOpen: boolean;
    dialogText: string;
    oldNameParts: string[];
};

type NameProps = {
    fitting: { fits: association[]; misfits: association[] };
    name: string;
    onDataChange: (newData: Partial<TavernData>) => void;
    getImpliedChanges: (newFitting: {
        fits: association[];
        misfits: association[];
    }) => Partial<TavernData>;
};

export class NameScene extends React.Component<NameProps, TextState> {
    constructor(props: any) {
        super(props);
        this.state = {
            invalidSubstantives: [],
            nameSetDialogOpen: false,
            dialogText: '',
            oldNameParts: [],
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
                        <TavernSign nameText={this.props.name}></TavernSign>
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
                ? newNameIdea.getConcreteName(
                      structuredFits,
                      this.state.oldNameParts
                  )
                : 'Nameless Tavern';
            this.props.onDataChange({ name: newName });
            const incomingNameParts = newName.split(' ');
            const newOldNameParts = [
                ...this.state.oldNameParts,
                ...incomingNameParts,
            ].filter(
                (part, index) =>
                    this.state.oldNameParts.length <= MAX_NAME_MEMORY ||
                    index >= incomingNameParts.length
            );
            this.setState({ oldNameParts: newOldNameParts });
        } else {
            const specialName = this.getSpecialNames();
            this.props.onDataChange({ name: specialName });
        }
    }

    private getSpecialNames() {
        return getSpecialTavernName(this.props.fitting.fits);
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
                <Button
                    onPress={() => {
                        checkDataDistribution();
                    }}
                >
                    {this.totalNumberOfPossibleNames()}
                </Button>
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
