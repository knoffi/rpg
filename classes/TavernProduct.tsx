import { association } from "./Adjectives";

interface productDescription {
  taste: string;
  look: string;
  region: string;
  effect: string;
}
//more ideas: water, coffee, tea, juice, liqueur, cocktail
export enum drinkCategory {
  lemonade = "Lemonade",
  beer = "Beer",
  wine = "Wine",
  spirit = "Spirit",
}
// so that a tavern does not only
export enum foodCategory {
  breakfast = "breakfast",
  appetizer = "appetizer",
  soup = "soup",
  stew = "stew",
  dessert = "dessert",
  salad = "salad",
  mainMeat = "main dish",
  mainPoultry = "main dish",
  mainSeafood = "main dish",
  mainNoMeat = "main dish",
}
/* if someones decides: no pork because this tavern is in Arabia and Asian cuisine seems a bit misfitting
export enum mainIngredient {
  pork = "Pork",
  beef = "Beef",
  poultry = "Poultry",
  riverFish = "River Fish",
  seafood = "Seafood",
  vegan= "Vegan",
  vegetarian = "Vegetarian",
}
*/

export class TavernProduct {
  public name!: string;
  //price in copper for easier translation into gold,silver, etc.
  //TODO: make prices also for DSA and other famous Pen&Paper
  public copperPrice!: number;
  public associations!: association[];
  public productCategory!: drinkCategory | foodCategory;
  private description?: productDescription;

  constructor(
    name: string,
    price: number,
    associations: association[],
    productCategory: drinkCategory | foodCategory,
    description?: productDescription
  ) {
    this.name = name;
    this.copperPrice = price;
    this.associations = associations;
    if (description) {
      this.description = description;
    }
  }

  public getNumberOfHits(associationChecklist: association[]) {
    return associationChecklist.filter((association) => {
      return this.associations.includes(association);
    }).length;
  }

  public isFit(
    fits: association[],
    misfits: association[],
    fitsBound: number,
    misfitsBound: number
  ) {
    let countFits = 0;
    let countMisfits = 0;
    fits.forEach((association) => {
      if (this.associations.includes(association)) {
        countFits++;
      }
    });
    misfits.forEach((association) => {
      if (this.associations.includes(association)) {
        countMisfits++;
      }
    });
    return countFits >= fitsBound && countMisfits <= misfitsBound;
  }
  public getCopperPrice = (factor: any) => {
    return Math.round(this.copperPrice * (1 + factor / 10));
  };

  public getAssociationOverwrite(association: association) {
    return new TavernProduct(
      this.name,
      this.copperPrice,
      [association],
      this.productCategory,
      this.description
    );
  }

  public isDrink=()=>{
    let isDrink=false
    Object.values(drinkCategory).forEach(categoryName =>{if(categoryName=== this.productCategory){isDrink=true}});
    return isDrink;
  }

  public isFood=()=>{
    let isFood=false
    Object.values(foodCategory).forEach(categoryName =>{if(categoryName=== this.productCategory){isFood=true}});
    return isFood;
  }

  public resetCategory=(category:drinkCategory|foodCategory)=>{
    this.productCategory = category;
  }
}
