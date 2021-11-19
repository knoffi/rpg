export const getListBottomOffset = (numberOfAccordeons: number) => {
    const offsetOfFour = 265;
    const offsetOfFive = 188;
    // linear regression
    const offset =
        (numberOfAccordeons - 5) * (offsetOfFive - offsetOfFour) + offsetOfFive;
    return offset;
};
