import { expect } from 'chai';
import { association } from '../classes/association';
import { Noticable } from '../classes/idea/Noticable';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { PatternHandler } from '../classes/patternHandler/PatternHandler';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { Describable } from '../mainNavigator/TavernData';
import {
    ChapterSize,
    ContentFiller,
} from './../classes/contentFiller/ContentFiller';
import { Constants } from './constants/Constants';

const MIN_PAGE_SIZE = 1;
describe('Content Filler', () => {
    it('with non-empty properties', () => {
        const universe = Constants.universe;
        const filler = new ContentFiller(universe);
        const randomTavern = filler.getRandomTavern();
        expect(randomTavern).to.have.property('fitting');
        expect(randomTavern).to.have.property('boughtOffers');
        expect(randomTavern).to.have.property('name');
        expect(randomTavern).to.have.property('prices');
        expect(randomTavern).to.have.property('universe');
        Object.values(WeServe).forEach((isAbout) => {
            expect(
                randomTavern,
                'failed for ' +
                    isAbout +
                    ' with fitting ' +
                    randomTavern.fitting
            )
                .to.have.property(isAbout)
                .to.have.length.greaterThanOrEqual(MIN_PAGE_SIZE);
        });
    });
    it('random page is filled', () => {
        const universe = Constants.universe;
        const filler = new ContentFiller(universe);
        const chaptersOfPage = Object.values(Drinkable).length;
        const page = filler.randomPage(
            {},
            { isAbout: WeServe.drinks, category: Drinkable.beer },
            new KeyHandler('noPreviousContent'),
            new PatternHandler('noContent')
        );
        expect(page).to.have.property('category').to.equal(Drinkable.beer);
        expect(page).to.have.property('isAbout').to.equal(WeServe.drinks);
        expect(page).to.have.property('content').to.have.length.greaterThan(0);
        expect(page).to.have.property('newKeys');
        expect(page).to.have.property('newPattern');
    });
    it('random page fills best fits first', () => {
        const universe = Constants.universe;
        const filler = new ContentFiller(universe);
        const page = filler.randomPage(
            { powerFit: association.haven },
            { isAbout: WeServe.drinks, category: Drinkable.spirit },
            new KeyHandler('noPreviousContent'),
            new PatternHandler('noContent')
        );
        expect(page.content).to.have.length.greaterThan(0);
        const first = page.content[0];
        expect(first.name).to.eql('Don Salvador Rum');
        if (page.content.length > 2) {
            const second = page.content[1];
            expect(second.name).to.eql('Raging Whiskey');
        }
        if (page.content.length > 3) {
            const second = page.content[2];
            expect(second.name).to.eql('Holy Rum');
        }
    });
    it('random chapter', () => {
        const universe = Constants.universe;
        const filler = new ContentFiller(universe);
        const newContent = filler.randomChapter(
            { powerFit: association.desert, land: association.desert },
            WeServe.food,
            new KeyHandler('noPreviousContent'),
            new PatternHandler('noContent')
        );
        expect(newContent).to.have.property('isAbout').to.eql(WeServe.food);
        if (newContent.isAbout === WeServe.food) {
            expect(newContent)
                .to.have.property('chapter')
                .to.have.property(WeServe.food)
                .to.have.length.greaterThan(0);
            const dishList = newContent.chapter[WeServe.food];
            Object.values(Eatable).forEach((category) => {
                const dishes = dishList.filter(
                    (dish) => dish.category === category
                );
                expect(
                    dishes,
                    'failed for ' + category
                ).to.have.length.greaterThan(0);
                if (Eatable.breakfast === category) {
                    expect(dishes[0].name).to.eql('Sabich');
                    if (dishes.length > 1) {
                        expect(dishes[1].name).to.eql('Bread');
                    }
                }
            });
        }
    });
    it('random content', () => {
        const universe = Constants.universe;
        const filler = new ContentFiller(universe);
        const content = filler.randomContent({ powerFit: association.knight });
        Object.values(WeServe).forEach((isAbout) => {
            expect(content[isAbout]).to.have.length.greaterThan(2);
        });
    });
    it('chapter size', () => {
        const min = ChapterSize.MIN;
        const max = ChapterSize.MAX;
        const size = new ChapterSize();
        const test = (category: Describable) => {
            const randomSize = size.roll(category);
            expect(randomSize)
                .to.be.lessThanOrEqual(max)
                .and.greaterThanOrEqual(min);
            expect(randomSize).to.be.greaterThan(0);
        };
        Object.values({ ...Eatable, ...Drinkable, ...Noticable }).forEach(
            (category) => {
                test(category);
            }
        );
    });
    it('size rolling', () => {
        const size = new ChapterSize();
        const sizeCounting = new Map<number, number>([
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
        ]);
        const testRolls = 20;
        const fillSizeCounting = new Array(testRolls).fill(1).forEach(() => {
            const rolledSize = size.roll(Drinkable.beer);
            const oldCount = sizeCounting.get(rolledSize);
            expect(oldCount).to.not.be.undefined;
            if (oldCount || oldCount === 0) {
                sizeCounting.set(rolledSize, oldCount + 1);
            }
        });
        const meanValue =
            [...sizeCounting.entries()].reduce(
                (sum, keyValue) => sum + keyValue[0] * keyValue[1],
                0
            ) / testRolls;
        const expectedMeanValue = ChapterSize.meanValueRoll();
        expect(meanValue)
            .to.be.greaterThan(expectedMeanValue * 0.5)
            .and.to.be.lessThan(expectedMeanValue * 1.5);
    });
});
