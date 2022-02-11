import { expect } from 'chai';
import { association } from '../classes/association';
import { KeyHandler } from '../classes/keyHandler/KeyHandler';
import { PatternHandler } from '../classes/patternHandler/PatternHandler';
import { Drinkable, Eatable } from '../classes/TavernProduct';
import { WeServe } from '../editNavigator/WeServe';
import { ContentFiller } from './../classes/contentFiller/ContentFiller';
import { Constants } from './constants/Constants';

describe('Content Filler', () => {
    it('with non-empty properties', () => {
        const universe = Constants.universe;
        const filler = new ContentFiller(universe);
        const randomTavern = filler.getRandomTavern();
        Object.values(WeServe).forEach((isAbout) => {
            expect(randomTavern, 'failed for ' + isAbout)
                .to.have.property(isAbout)
                .to.have.length.greaterThanOrEqual(2);
        });
        expect(randomTavern).to.have.property('fitting');
        expect(randomTavern).to.have.property('boughtOffers');
        expect(randomTavern).to.have.property('name');
        expect(randomTavern).to.have.property('prices');
        expect(randomTavern).to.have.property('universe');
    });
    it('random page is filled', () => {
        const universe = Constants.universe;
        const filler = new ContentFiller(universe);
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
        const chapter = filler.randomChapter(
            { powerFit: association.desert, land: association.desert },
            WeServe.food,
            new KeyHandler('noPreviousContent'),
            new PatternHandler('noContent')
        );
        expect(chapter)
            .to.have.property(WeServe.food)
            .to.have.length.greaterThan(0);
        Object.values(Eatable).forEach((category) => {
            const dishes = (chapter[WeServe.food] || []).filter(
                (dish) => dish.category === category
            );
            expect(dishes, 'failed for ' + category).to.have.length.greaterThan(
                0
            );
            if (Eatable.breakfast === category) {
                expect(dishes[0].name).to.eql('Sabich');
                if (dishes.length > 1) {
                    expect(dishes[1].name).to.eql('Bread');
                }
            }
        });
    });
    it('random content', () => {
        const universe = Constants.universe;
        const filler = new ContentFiller(universe);
        const content = filler.randomContent({ powerFit: association.knight });
        Object.values(WeServe).forEach((isAbout) => {
            expect(content[isAbout]).to.have.length.greaterThan(2);
        });
    });
});
