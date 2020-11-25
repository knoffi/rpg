import { association } from '../classes/Adjectives';
import { misfitMode, misfitModeList } from './misfitMode';
export const getMisfits = (fits: association[], misfitModeName: misfitMode) => {
    const associationGroups = misfitModeList.find((misfitMode) => {
        return (misfitMode.key as misfitMode) === misfitModeName;
    })!.associationGroups;
    let misfits: association[];
    misfits = [];
    let popListFits = fits.map((fit) => {
        return fit;
    });
    while (popListFits.length > 0) {
        let popFit = popListFits.pop()!;
        let groupOfPopFit: association[];
        groupOfPopFit = [];
        Object.values(associationGroups).forEach((list) => {
            if (list.includes(popFit)) {
                groupOfPopFit = groupOfPopFit.concat(list);
            }
        });
        groupOfPopFit.forEach((element) => {
            if (!fits.includes(element)) {
                misfits.push(element);
            }
        });
        popListFits = popListFits.filter((fit) => {
            return !groupOfPopFit.includes(fit);
        });
    }
    return misfits;
};

export const getMisfitsOf = (fit: association) => {
    let misfits: association[];
    misfits = [];
    if (fit === 'poor') {
        misfits.push(association.rich);
    }
    if (fit === 'rich') {
        misfits.push(association.poor);
    }
    return misfits;
};
