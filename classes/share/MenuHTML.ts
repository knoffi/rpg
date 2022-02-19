import { WeServe } from '../../editNavigator/WeServe';
import { Drinkable, Eatable, MenuCategory } from '../TavernProduct';
import { MenuCard, OfferEssence } from './MenuCard';

type CategoryEmojis = Map<Eatable | Drinkable, string>;
export class MenuHTML {
    private emojis: CategoryEmojis;
    private headHTML: string;
    private titleHTMLTag: string;
    private offers: Map<Eatable | Drinkable, OfferEssence[]>;
    private currency: string;
    constructor(menu: MenuCard) {
        this.emojis = MenuHTML.getEmojis();
        this.headHTML = MenuHTML.getHead();
        this.titleHTMLTag = MenuHTML.getTitle(menu.name);
        this.offers = MenuHTML.getOffers(menu);
        this.currency = menu.prices.currency;
    }

    public construct(): string {
        const foodPage = Object.values(Eatable)
            .map((category) => this.textForCategory(category))
            .join('');
        const drinkPage = Object.values(Drinkable)
            .map((category) => this.textForCategory(category))
            .join('');
        const body = MenuHTML.wrapInBodyTag(
            this.titleHTMLTag + foodPage + drinkPage
        );
        return this.headHTML + body;
    }

    private textForCategory(category: Drinkable | Eatable) {
        const offers: OfferEssence[] = this.offers.get(category) || [];
        const noOffersForCategory = offers.length === 0;
        if (noOffersForCategory) {
            return '';
        } else {
            const title = this.categorySubtitle(category);
            const menu = offers.map((offer) => this.offerLine(offer)).join('');
            return title + menu;
        }
    }
    private categorySubtitle(category: MenuCategory): string {
        return (
            '<br/><br/><h2> ' +
            this.emojis.get(category) +
            this.emojis.get(category) +
            category +
            this.emojis.get(category) +
            this.emojis.get(category) +
            ' </h2><br/>'
        );
    }
    private offerLine(offer: OfferEssence): string {
        return (
            '<text>' +
            offer.name +
            '</text>' +
            '<div style="margin-top:10px;margin-bottom:15px">' +
            '<i style="color:orange;">' +
            offer.price +
            ' ' +
            this.currency +
            '</i></div><br/>'
        );
    }
    private static wrapInBodyTag(view: string): string {
        return `<body style="text-align: center;">` + view + `</body>`;
    }
    private static getOffers(
        menu: MenuCard
    ): Map<Eatable | Drinkable, OfferEssence[]> {
        const food: [Eatable, OfferEssence[]][] = Object.values(Eatable).map(
            (category) => {
                const foodOfCategory = menu[WeServe.food].filter(
                    (offer) => offer.category === category
                );
                return [category, foodOfCategory];
            }
        );
        const drinks: [Drinkable, OfferEssence[]][] = Object.values(
            Drinkable
        ).map((category) => {
            const drinksOfCategory = menu[WeServe.drinks].filter(
                (offer) => offer.category === category
            );
            return [category, drinksOfCategory];
        });
        return new Map<Drinkable | Eatable, OfferEssence[]>([
            ...food,
            ...drinks,
        ]);
    }
    private static getTitle(name: string): string {
        return (
            '<h1 style="font-size:60px">' +
            name.toUpperCase() +
            '</h1><br/><br/>'
        );
    }
    private static getHead(): string {
        return '<head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" /></head>';
    }
    private static getEmojis(): CategoryEmojis {
        const emojis = new Map<Eatable | Drinkable, string>([
            [Drinkable.wine, ' 🍷 '],
            [Drinkable.beer, ' 🍺 '],
            [Eatable.dessert, ' 🍰 '],
            [Eatable.breakfast, ' 🍞 '],
            [Eatable.mainDish, ' 🍝 '],
            [Eatable.sideDish, ' 🥗 '],
            [Drinkable.lemonade, ' 🥛 '],
            [Drinkable.spirit, ' 🥃 '],
        ]);
        return emojis;
    }
}
