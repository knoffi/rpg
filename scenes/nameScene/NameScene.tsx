import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { Button, List } from 'react-native-paper';
import { association, AssociationTypes } from '../../classes/association';
import { FitPick } from '../../classes/FitPick';
import {
    getFitsFromStructure,
    StructuredTavernFits,
} from '../../classes/idea/StructuredTavernFits';
import {
    BookButton,
    buttonEmphasis,
    GeneratorButton,
    PencilButton,
    RerollButton,
} from '../../components/buttons/Buttons';
import { Describable } from '../../mainNavigator/TavernData';
import { UniverseMap } from '../../mainNavigator/UniverseMap';
import { globalStyles } from '../globalStyles';
import { AssociationDialogBar } from './associationBar/AssociationDialogBar';
import { CoverageTest } from './contentCoverage/CoverageTest';
import { CoverageTestDialog } from './contentCoverage/DescribableDialog';
import { GeneratorDialog } from './GeneratorDialog';
import { getRandomName } from './getRandomName';
import { nameSceneStyles } from './nameSceneStyles';
import { NameSetDialog } from './NameSetDialog';
import { TavernSign } from './TavernSign';
import { UniverseDialog } from './universeDialog/UniverseDialog';

const MAX_NAME_MEMORY = 16;
const SECTION_FLEX = 0.3;
type State = {
    settingNameByUser: boolean;
    dialogText: string;
    oldNameParts: string[];
    settingUniverse: boolean;
    makingCoverageTest: boolean;
    generatingContent: boolean;
};
type Props = {
    fitsForDisplay: StructuredTavernFits;
    fitsForReroll: StructuredTavernFits;
    name: string;
    handleNewFits: (newFits: StructuredTavernFits) => void;
    handleNewName: (name: string) => void;
    setUniverse: (map: UniverseMap) => void;
    onCoverageTest: (category: Describable) => CoverageTest;
    universe: UniverseMap;
};

export class NameScene extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            settingNameByUser: false,
            dialogText: '',
            oldNameParts: [],
            settingUniverse: false,
            makingCoverageTest: false,
            generatingContent: false,
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
                            fits={this.props.fitsForDisplay}
                            pickFit={this.pickFit.bind(this)}
                            fitting={this.props.fitsForDisplay}
                        />
                    </View>
                    <View style={nameSceneStyles.signView}>
                        <NameSetDialog
                            tavernName={this.props.name}
                            setTavernName={this.props.handleNewName}
                            open={this.state.settingNameByUser}
                            startText={this.state.dialogText}
                            setStartText={(text: string) => {
                                this.setState({ dialogText: text });
                            }}
                            onDismiss={() => {
                                this.setState({ settingNameByUser: false });
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
                            {this.renderUniverseButton()}
                            {this.renderEditButton()}
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: 20,
                            }}
                        >
                            <GeneratorButton
                                onPress={() => {
                                    this.setState({ generatingContent: true });
                                }}
                                title="Roll"
                            ></GeneratorButton>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                marginTop: 20,
                            }}
                        >
                            <Button
                                onPress={() =>
                                    this.setState({ makingCoverageTest: true })
                                }
                                mode={'contained'}
                            >
                                Coverage
                            </Button>
                        </View>
                        <UniverseDialog
                            onConentSet={this.props.setUniverse}
                            isVisible={this.state.settingUniverse}
                            onDismiss={() =>
                                this.setState({ settingUniverse: false })
                            }
                            universe={this.props.universe}
                        ></UniverseDialog>
                        <CoverageTestDialog
                            isVisible={this.state.makingCoverageTest}
                            onDismiss={() =>
                                this.setState({ makingCoverageTest: false })
                            }
                            onTest={this.props.onCoverageTest}
                        ></CoverageTestDialog>
                        <GeneratorDialog
                            onDismiss={() => {
                                this.setState({ generatingContent: false });
                            }}
                            isVisible={this.state.generatingContent}
                            generate={() => {}}
                        ></GeneratorDialog>
                    </View>
                </View>
            </View>
        );
    }
    private setPowerFitByName(name: string, category: AssociationTypes) {
        const newPowerFit = Object.values(association).find(
            (fit) => (fit as string) === name
        );
        const oldPowerFit = this.props.fitsForDisplay.powerFit;
        const fitChange: Pick<StructuredTavernFits, 'powerFit'> =
            newPowerFit === oldPowerFit
                ? { powerFit: undefined }
                : { powerFit: newPowerFit };
        const newFits = { ...this.props.fitsForDisplay, ...fitChange };
        this.props.handleNewFits(newFits);
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
    private renderEditButton() {
        return (
            <PencilButton
                onPress={() => {
                    this.setState({ settingNameByUser: true });
                }}
                mode={buttonEmphasis.high}
                title={' NAME'}
            />
        );
    }
    private renderUniverseButton() {
        return (
            <BookButton
                onPress={() => this.setState({ settingUniverse: true })}
                mode={buttonEmphasis.high}
                title={' Set'}
            />
        );
    }

    private rerollName() {
        const probabilityForNameFilter = Math.random();
        const newName = getRandomName(
            this.props.fitsForReroll,
            this.state.oldNameParts,
            probabilityForNameFilter,
            probabilityForNameFilter
        );
        this.setNewName(newName);
    }

    private setNewName(newName: string) {
        this.props.handleNewName(newName);
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

    private pickFit(fitChange: FitPick) {
        const newPowerlessFits: Omit<StructuredTavernFits, 'powerFit'> = {
            ...this.props.fitsForDisplay,
            ...fitChange,
        };

        const powerFitChange = this.getPowerFitChange(newPowerlessFits);
        const newFitting = { ...newPowerlessFits, ...powerFitChange };
        this.props.handleNewFits(newFitting);
    }

    private getPowerFitChange(
        powerlessFits: Omit<StructuredTavernFits, 'powerFit'>
    ): Pick<StructuredTavernFits, 'powerFit'> {
        const oldPowerFit = this.props.fitsForDisplay.powerFit;
        const oldPowerFitContained =
            oldPowerFit &&
            getFitsFromStructure(powerlessFits).includes(oldPowerFit);
        return oldPowerFitContained
            ? { powerFit: oldPowerFit }
            : { powerFit: undefined };
    }
}
