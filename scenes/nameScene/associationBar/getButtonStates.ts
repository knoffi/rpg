import {
    AssociationTypes,
    getAssociationsOfType,
} from '../../../classes/association';
import { StructuredTavernFits } from '../../../classes/idea/StructuredTavernFits';

export enum ButtonState {
    active = 'active',
    none = 'none',
    powerFit = 'powerFit',
}

export const getButtonStates = (fits: StructuredTavernFits) => {
    const states = {
        [AssociationTypes.class]: ButtonState.none,
        [AssociationTypes.land]: ButtonState.none,
        [AssociationTypes.income]: ButtonState.none,
        [AssociationTypes.race]: ButtonState.none,
        [AssociationTypes.special]: ButtonState.none,
    };
    Object.values(AssociationTypes).forEach(
        (category) => (states[category] = getButtonState(category, fits))
    );
    return states;
};

const getButtonState = (
    category: AssociationTypes,
    fits: StructuredTavernFits
) => {
    const categoryEmpty = !fits[category];
    if (categoryEmpty) {
        return ButtonState.none;
    } else {
        const powerFit = fits.powerFit;
        if (!powerFit) {
            return ButtonState.active;
        } else {
            return getAssociationsOfType(category).includes(powerFit)
                ? ButtonState.powerFit
                : ButtonState.active;
        }
    }
};
