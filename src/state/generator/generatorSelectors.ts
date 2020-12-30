import { generatorStateKey } from './generatorReducer';
import { AppState } from '../rootInitialState';

export const getGeneratorSection = (state: AppState) => state[generatorStateKey];
export const getGeneratorName = (state: AppState) => getGeneratorSection(state).generatorName;
export const getGeneratorTables = (state: AppState) => getGeneratorSection(state).tables;
export const getGeneratorTextTemplate = (state: AppState): string => getGeneratorSection(state).textTemplate;
export const getGeneratorHistory = (state: AppState): string[] => getGeneratorSection(state).history;
