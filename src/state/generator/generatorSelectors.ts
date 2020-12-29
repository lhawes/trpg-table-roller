import { generatorStateKey } from './generatorReducer';
import { AppState } from '../rootInitialState';

export const getGeneratorSection = (state: AppState) => state[generatorStateKey];
export const getGeneratorName = (state: AppState) => getGeneratorSection(state).generatorName;
export const getGeneratorTables = (state: AppState) => getGeneratorSection(state).tables;

