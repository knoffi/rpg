import { association } from '../classes/association';
import { misfitMode, misfitModeList } from './misfitModes';
export const getMisfits = (fits: association[], misfitModeName: misfitMode) => {
    const associationGroups = misfitModeList.find((misfitMode) => {
        return (misfitMode.key as misfitMode) === misfitModeName;
    })!.associationGroups;

    const misfits = Object.values(associationGroups).reduce(
        (misfits, group) => {
            const groupExceptFits = group.filter((element) => {
                return !fits.includes(element);
            });
            return group.length === groupExceptFits.length
                ? misfits
                : [...misfits, ...groupExceptFits];
        },
        [] as association[]
    );
    return misfits;
};
