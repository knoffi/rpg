export const nameSplitter = (drinkName: string, characterMax: number) => {
  if (drinkName.length <= characterMax) {
    return drinkName;
  }
  let splitIndex = 0;
  let splitIndexFound = true;
  while (splitIndexFound) {
    splitIndex = splitIndex + 1 + drinkName.substring(splitIndex + 1, characterMax + 1).indexOf(" ");
    if (!splitIndex) {
      splitIndex = splitIndex + 1 + drinkName.substring(splitIndex + 2, drinkName.length).indexOf(" ");
      if (!splitIndex) {
        console.log("drink/food name has no empty space or while loop has mistake");
        return drinkName;
      }
      else {
        console.log("drink/food name too long?");
        splitIndexFound = false;
      }
    }
    if (!drinkName.substring(splitIndex + 1, characterMax + 1).includes(" ")) {
      splitIndexFound = false;
    }
  }
  return drinkName.substring(0, splitIndex) + "\n" + drinkName.substr(splitIndex + 1);
};
