import { association } from '../../../classes/Adjectives';
import { Substantive, substantiveCategory } from '../../../classes/Substantive';
import { getDividedProducts, makeProductsFromNecessary } from '../nounDivider';
const a = association;
const s = substantiveCategory;
const dividableJobs = [
    new Substantive('Tailor', [a.worker, a.city], s.job),
    new Substantive('Undertaker', [a.worker, a.evil], s.job),
    new Substantive('Butcher', [a.worker, a.village, a.barbarian], s.job),
    new Substantive('Cobbler', [a.worker, a.city], s.job),
    new Substantive('Carpenter', [a.worker, a.city], s.job),
    new Substantive('Weaver', [a.worker, a.village, a.city], s.job),
    new Substantive(
        'Blacksmith',
        [a.worker, a.city, a.village, a.dwarf],
        s.job
    ),
    new Substantive('Jeweler', [a.worker, a.rich, a.city, a.dwarf], s.job),
    new Substantive('Potter', [a.worker, a.city, a.village], s.job),
    new Substantive('Butcher', [a.worker, a.village, a.dwarf], s.job),
    new Substantive('Cheese Maker', [a.worker, a.village, a.halfling], s.job),
    new Substantive('Baker', [a.worker, a.village, a.halfling], s.job),
    new Substantive('Brewer', [a.worker, a.village, a.dwarf], s.job),
    new Substantive('Plummer', [a.worker, a.city, a.village, a.poor], s.job),
    new Substantive(
        'Miner',
        [a.worker, a.mountain, a.underdark, a.dwarf],
        s.job
    ),
    new Substantive('Digger', [a.worker, a.underdark, a.dwarf], s.job),
    new Substantive('Pharao', [a.rich, a.nobel, a.human, a.desert], s.job),
    new Substantive('Sheikh', [a.rich, a.nobel, a.human, a.desert], s.job),
    new Substantive('Sultan', [a.rich, a.nobel, a.human, a.desert], s.job),
    new Substantive('King', [a.rich, a.nobel, a.human, a.city], s.job),
    new Substantive('Emperor', [a.rich, a.evil, a.human, a.city], s.job),
    new Substantive(
        'Vizier',
        [a.desert, a.cleric, a.sophisticated, a.tiefling],
        s.job
    ),
    new Substantive('Priest', [a.cleric, a.sophisticated], s.job),
    new Substantive('Priestess', [a.cleric, a.sophisticated], s.job),
    new Substantive('Doctor', [a.city, a.sophisticated, a.halfling], s.job),
    new Substantive('Lawyer', [a.city, a.sophisticated, a.gnome], s.job),
    new Substantive('Advocate', [a.city, a.sophisticated, a.gnome], s.job),
    new Substantive('Judge', [a.city, a.sophisticated, a.human], s.job),
    new Substantive('Alchemist', [a.city, a.sophisticated, a.human], s.job),
    new Substantive('Chancellor', [a.city, a.sophisticated, a.tiefling], s.job),
    new Substantive('Geologist', [a.city, a.sophisticated, a.tiefling], s.job),
    new Substantive('Astronomer', [a.city, a.sophisticated, a.tiefling], s.job),
];

const prostituteJobs = {
    necessary: [a.prostitute],
    nested: [
        new Substantive(
            'Mistress',
            [a.underdark, a.drow, a.human, a.city, a.haven, a.worker],
            s.job
        ),
        new Substantive(
            'Domina',
            [a.gnome, a.human, a.city, a.sophisticated, a.drow],
            s.job
        ),
        new Substantive(
            'Wench',
            [a.village, a.halfling, a.haven, a.dwarf, a.poor],
            s.job
        ),
        new Substantive(
            'Cowgirl',
            [a.village, a.mountain, a.haven, a.halfling],
            s.job
        ),
        new Substantive(
            'Milkmaid',
            [a.village, a.mountain, a.haven, a.halfling],
            s.job
        ),
        new Substantive(
            'Maiden',
            [a.bard, a.sophisticated, a.nobel, a.elf, a.worker],
            s.job
        ),
        new Substantive(
            'Harlot',
            [a.city, a.sophisticated, a.elf, a.criminal, a.poor],
            s.job
        ),
        new Substantive('Strumpet', [a.dwarf, a.sophisticated], s.job),
        new Substantive('Catamite', [a.drow, a.desert, a.city], s.job),
        new Substantive('Belly Dancer', [a.desert, a.tropical], s.job),
        new Substantive('Masseuse', [a.desert, a.tropical], s.job),
        new Substantive('Dancer', [a.desert, a.tropical], s.job),
        new Substantive('Gigolo', [a.rich, a.drow], s.job),
        new Substantive('Nurse', [], s.job),
        new Substantive('Firefighter', [], s.job),
    ],
};

export const jobs = getDividedProducts(dividableJobs).concat(
    makeProductsFromNecessary(prostituteJobs)
);
