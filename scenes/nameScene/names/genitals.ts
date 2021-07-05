import { association } from '../../../classes/association';
import { DescriptionAsset } from '../../../classes/idea/DescriptionAsset';

const a = association;

export const maleGenitals: DescriptionAsset[] = [
    { name: 'Prick', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Spear', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Anaconda', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Lance', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Boner', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Shaft', needs: [a.prostitute], worksForBrothel: true },
];
export const femaleGenitals: DescriptionAsset[] = [
    { name: 'Crack', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Hole', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Slit', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Honeypot', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Beaver', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Clit', needs: [a.prostitute], worksForBrothel: true },
    {
        name: 'Oyster',
        needs: [a.prostitute],
        worksForBrothel: true,
        needsOne: [a.city, a.haven],
    },
];

export const sexyParts: DescriptionAsset[] = [
    { name: 'Rump', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Bottom', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Buns', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Booty', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Breasts', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Boobies', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Chest', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Bust', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Melons', needs: [a.prostitute], worksForBrothel: true },
    { name: 'Thighs', needs: [a.prostitute], worksForBrothel: true },
];
