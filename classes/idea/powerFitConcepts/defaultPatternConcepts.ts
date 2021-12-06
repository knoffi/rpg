import { PatternConcept } from './PatternConcept';

export const defaultPatternConcepts = {
    nameWithAdditions: {
        main: false,
        harmony: true,
        contrast: true,
    } as PatternConcept,
    nameWithoutAdditions: {
        main: true,
        harmony: false,
        contrast: false,
    } as PatternConcept,
    menu: { main: true, harmony: false, contrast: false } as PatternConcept,
    impression: {
        main: true,
        harmony: false,
        contrast: false,
    } as PatternConcept,
    main: { main: true, harmony: false, contrast: false } as PatternConcept,
    harmony: { main: false, harmony: true, contrast: false } as PatternConcept,
    contrast: {
        main: false,
        harmony: false,
        contrast: true,
    } as PatternConcept,
    nothing: {
        main: false,
        harmony: false,
        contrast: false,
    } as PatternConcept,
};
