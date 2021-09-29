import React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { Button, List } from 'react-native-paper';
import {
    association,
    AssociationTypes,
    getCategoryOfAssociation,
} from '../../classes/association';
import {
    getFitsFromStructure,
    StructuredTavernFits,
} from '../../classes/idea/StructuredTavernFits';
import {
    buttonEmphasis,
    PencilButton,
    RerollButton,
} from '../../components/buttons/Buttons';
import { checkDataDistribution } from '../../helpingFunctions/checkDataDistribution';
import { TavernData } from '../../mainNavigator/TavernData';
import { globalStyles } from '../globalStyles';
import { AssociationDialogBar } from './associationBar/AssociationDialogBar';
import {
    ButtonState,
    ButtonStates,
    getButtonStates,
} from './associationBar/getButtonStates';
import { getRandomName } from './getRandomName';
import { nameIdeas } from './names/nameIdeas';
import { nameSceneStyles } from './nameSceneStyles';
import { NameSetDialog } from './NameSetDialog';
import { TavernSign } from './TavernSign';

const MAX_NAME_MEMORY = 16;
const SECTION_FLEX = 0.2;
type TextAndFitBoardState = {
    nameSetDialogOpen: boolean;
    dialogText: string;
    oldNameParts: string[];
    buttons: ButtonStates;
    userActivelySetPowerfit: boolean;
};
type NameProps = {
    fitting: StructuredTavernFits;
    name: string;
    onDataChange: (newData: Partial<TavernData>) => void;
    getImpliedChanges: (
        newFitting: StructuredTavernFits
    ) => Partial<TavernData>;
};

export class NameScene extends React.Component<
    NameProps,
    TextAndFitBoardState
> {
    constructor(props: any) {
        super(props);

        this.state = {
            nameSetDialogOpen: false,
            dialogText: '',
            oldNameParts: [],
            buttons: getButtonStates(this.props.fitting),
            userActivelySetPowerfit: false,
        };
    }

    public render() {
        return (
            <View style={nameSceneStyles.backgroundView}>
                <List.Section
                    style={{ flex: SECTION_FLEX }}
                    title="NAME"
                    titleStyle={globalStyles.title}
                >
                    <List.Item title=""></List.Item>
                </List.Section>
                <View style={nameSceneStyles.associationView}>
                    <View>
                        <AssociationDialogBar
                            setPowerFit={this.setPowerFitByName.bind(this)}
                            fits={this.props.fitting}
                            switchFits={this.updateFits.bind(this)}
                            buttonStates={this.state.buttons}
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
                        <Text>{JSON.stringify(this.props.fitting)}</Text>
                    </View>
                </View>
            </View>
        );
    }
    private setButtonState(category: AssociationTypes, state: ButtonState) {
        const newButtonStates: ButtonStates = {
            ...this.state.buttons,
            [category]: state,
        };
        this.setState({ buttons: newButtonStates });
    }
    private setPowerFitByName(name: string, category: AssociationTypes) {
        const newPowerFit = Object.values(association).find(
            (fit) => (fit as string) === name
        );
        const oldPowerFit = this.props.fitting.powerFit;
        if (newPowerFit) {
            const newFits: StructuredTavernFits = {
                ...this.props.fitting,
            };
            if (name === oldPowerFit) {
                if (this.state.userActivelySetPowerfit) {
                    this.setState({ userActivelySetPowerfit: false });
                    newFits.powerFit = undefined;
                    this.setButtonState(category, ButtonState.active);
                } else {
                    this.setState({ userActivelySetPowerfit: true });
                    this.setButtonState(category, ButtonState.powerFit);
                }
            } else {
                this.setState({ userActivelySetPowerfit: true });
                newFits.powerFit = newPowerFit;
                this.setButtonState(category, ButtonState.powerFit);
                const oldPowerFitType = getCategoryOfAssociation(oldPowerFit);
                if (oldPowerFitType) {
                    this.setButtonState(oldPowerFitType, ButtonState.active);
                }
            }
            this.props.onDataChange({
                fitting: newFits,
                ...this.props.getImpliedChanges(newFits),
            });
        }
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
        const probabilityForNameFilter = Math.random();
        const newName = getRandomName(
            this.props.fitting,
            this.state.oldNameParts,
            probabilityForNameFilter,
            probabilityForNameFilter
        );
        this.setNewName(newName);
    }

    private setNewName(newName: string) {
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
    }

    private updateFits(
        newFit: Partial<StructuredTavernFits>,
        category: AssociationTypes
    ) {
        const newFitting: StructuredTavernFits = {
            ...this.props.fitting,
            ...newFit,
        };
        const updatedFits = getFitsFromStructure(newFitting);
        const oldPowerFit = this.props.fitting.powerFit;
        newFitting.powerFit = this.getPowerFitForUpdatedFits(
            updatedFits,
            oldPowerFit
        );
        const newFitWasPowerfit =
            this.state.userActivelySetPowerfit &&
            Object.values(newFit)[0] === oldPowerFit;
        const newFitAdded = newFitting[category];
        this.setButtonState(
            category,
            newFitAdded
                ? newFitWasPowerfit
                    ? ButtonState.powerFit
                    : ButtonState.active
                : ButtonState.none
        );

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
        return nameIdeas
            .map((nameIdea) => nameIdea.countFittingChoices(this.props.fitting))
            .reduce((sum, cur) => sum + cur, 0);
    }

    private getPowerFitForUpdatedFits(
        updatedFits: association[],
        oldPowerFit?: association
    ) {
        if (oldPowerFit) {
            if (updatedFits.includes(oldPowerFit)) {
                if (!this.state.userActivelySetPowerfit) {
                    if (updatedFits.length > 1) {
                        return undefined;
                    }
                }
            } else {
                this.setState({ userActivelySetPowerfit: false });
                if (updatedFits.length === 1) {
                    return updatedFits[0];
                } else {
                    return undefined;
                }
            }
        } else {
            if (updatedFits.length === 1) {
                return updatedFits[0];
            }
        }
        return oldPowerFit;
    }
}
