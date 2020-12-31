import { AnyAction } from "../../types/anyAction";
import { RPGGenerator } from "../../types/Generator";
import { GeneratorActionTypes } from "./generatorActionTypes";
import { getGeneratorSection } from "./generatorSelectors";

export const generatorStateKey: string = 'generator';

export const generatorInitialState: RPGGenerator = {
  generatorName: '',
  textTemplate: '',
  tables: [],
  operations: [],
  history: [],
}

export const generatorReducer = (state: RPGGenerator = generatorInitialState, action: AnyAction) => {
  const newState: RPGGenerator = JSON.parse(JSON.stringify(state));
  // clear error
  // try action
  // catch error

  switch (action.type) {
    case GeneratorActionTypes.UPDATE_STATE_FROM_FILE: {
      const { fileState } = action.payload;
      return getGeneratorSection(fileState);
    }
    case GeneratorActionTypes.CHANGE_TEXT_TEMPLATE: {
      const { textTemplate } = action.payload;
      newState.textTemplate = textTemplate;
      return newState;
    }
    case GeneratorActionTypes.CHANGE_GENERATOR_NAME: {
      const { generatorName } = action.payload;
      newState.generatorName = generatorName;
      return newState;
    }
    case GeneratorActionTypes.ADD_TABLE: {
      const newTable = action.payload;
      newState.tables.push(newTable);
      return newState;
    }
    case GeneratorActionTypes.REMOVE_TABLE: {
      const { tableIndex } = action.payload;
      newState.tables = [
        ...newState.tables.filter((_v, i: number) => i !== tableIndex)
      ]
      return newState;
    }
    case GeneratorActionTypes.CHANGE_TABLE_NAME: {
      const {
        tableName,
        tableIndex,
      } =  action.payload;
      newState.tables[tableIndex].name = tableName;
      return newState;
    }
    case GeneratorActionTypes.ADD_TABLE_ENTRY: {
      const {
        tableIndex,
        tableEntry,
      } = action.payload;
      newState.tables[tableIndex].entries.push(tableEntry);
      return newState;
    }
    case GeneratorActionTypes.REMOVE_TABLE_ENTRY: {
      const {
        tableIndex,
        tableEntryIndex,
      } = action.payload;
      newState.tables[tableIndex].entries = [
        ...newState.tables[tableIndex].entries.filter((_v, i: number) => i !== tableEntryIndex)
      ]
      return newState;
    }
    case GeneratorActionTypes.CHANGE_TABLE_ENTRY: {
      const {
        tableEntry,
        tableIndex,
        tableEntryIndex,
      } = action.payload;
      newState.tables[tableIndex].entries[tableEntryIndex] = tableEntry;
      return newState;
    }
    case GeneratorActionTypes.ADD_TO_HISTORY: {
      const { tableRollResult } = action.payload;
      newState.history.push(tableRollResult);
      return newState;
    }
    case GeneratorActionTypes.CLEAR_HISTORY: {
      newState.history = [];
      return newState;
    }
    default:
      return newState;
  }
}