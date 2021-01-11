export const nameSplitter = (drinkName: string, characterMax: number) => {
    if (drinkName.length <= characterMax) {
        return drinkName;
    }
    const lengthsOfBreakSubstrings = drinkName
        .split(' ')
        .map((string) => string.length);
    const splitIndex = lengthsOfBreakSubstrings.reduce(
        (possibleIndex, substringLength) => {
            return substringLength + possibleIndex < characterMax
                ? substringLength + possibleIndex + 1
                : possibleIndex;
        },
        -1
    );
    return (
        drinkName.substring(0, splitIndex) +
        '\n' +
        drinkName.substr(splitIndex + 1)
    );
};
