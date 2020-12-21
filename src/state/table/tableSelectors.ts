import { AppState } from '../rootInitialState';
import { getGeneratorTables } from '../generator/generatorSelectors'

export const getTableEntry = (state: AppState, tableIndex: number) => getGeneratorTables(state).tableEntries[tableIndex];
