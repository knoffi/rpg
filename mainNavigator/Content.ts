import { DeepReadonly } from 'ts-essentials';
import { WeServe } from '../editNavigator/WeServe';
import { Offer } from '../scenes/menuScene/Offer';
import { Impression } from '../scenes/questScene/impressions/Impression';
import { MinimalTavernData } from './TavernData';

export type Content = Pick<
    MinimalTavernData,
    WeServe.drinks | WeServe.food | WeServe.impressions
>;

export type DeeplyReadonlyImpression = DeepReadonly<Impression>;
export type DeeplyReadonlyOffer = DeepReadonly<Offer>;
export type DeeplyReadonlyContent = DeepReadonly<Content>;
