import { PowerFitConcept } from './PowerFitConcept';

export const defaultPowerFitConcepts = {
    nameWithAdditions: {
        main: false,
        harmony: true,
        contrast: true,
    } as PowerFitConcept,
    nameWithoutAdditions: {
        main: true,
        harmony: false,
        contrast: false,
    } as PowerFitConcept,
    menu: { main: false, harmony: false, contrast: false } as PowerFitConcept,
    impression: {
        main: true,
        harmony: false,
        contrast: false,
    } as PowerFitConcept,
    main: { main: true, harmony: false, contrast: false } as PowerFitConcept,
    harmony: { main: false, harmony: true, contrast: false } as PowerFitConcept,
    contrast: {
        main: false,
        harmony: false,
        contrast: true,
    } as PowerFitConcept,
    nothing: {
        main: false,
        harmony: false,
        contrast: false,
    } as PowerFitConcept,
};
