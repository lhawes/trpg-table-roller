import { AnyAction } from "../../types/anyAction";
import { RPGGenerator, TableOperation } from "../../types/Generator";
import { Table } from "../../types/Table";
import { GeneratorActionTypes } from "./generatorActionTypes";

export const addTableAction = (table: Table):AnyAction => ({
    type: GeneratorActionTypes.ADD_TABLE,
    payload: table,
})

export const removeTableAction = (tableIndex: number): AnyAction => ({
    type: GeneratorActionTypes.REMOVE_TABLE,
    payload: {
      tableIndex
    }
})

export const addTableEntryAction = (tableEntry: string, tableIndex: number): AnyAction => ({
    type: GeneratorActionTypes.ADD_TABLE_ENTRY,
    payload: {
      tableIndex,
      tableEntry
    }
})

export const removeTableEntryAction = (tableIndex: number, tableEntryIndex: number): AnyAction => ({
    type: GeneratorActionTypes.REMOVE_TABLE_ENTRY,
    payload: {
      tableIndex,
      tableEntryIndex
    }
})

export const changeTableEntryAction = (tableEntry: string, tableIndex: number, tableEntryIndex: number): AnyAction => ({
    type: GeneratorActionTypes.CHANGE_TABLE_ENTRY,
    payload: {
      tableEntry,
      tableIndex,
      tableEntryIndex,
    }
})

export const changeGeneratorNameAction = (generatorName: string): AnyAction => ({
    type: GeneratorActionTypes.CHANGE_GENERATOR_NAME,
    payload: {
      generatorName
    }
})

export const changeTextTemplateAction = (textTemplate: string): AnyAction => ({
    type: GeneratorActionTypes.CHANGE_TEXT_TEMPLATE,
    payload: {
      textTemplate
    }
})

export const changeTableNameAction = (tableName: string, tableIndex: number): AnyAction => ({
    type: GeneratorActionTypes.CHANGE_TABLE_NAME,
    payload: {
      tableName,
      tableIndex
    }
})

export const updateStateFromFileAction = (fileState: Record<string, RPGGenerator>) => ({
    type: GeneratorActionTypes.UPDATE_STATE_FROM_FILE,
    payload: {
      fileState
    }
})

export const addToHistory = (tableRollResult: string) => ({
    type: GeneratorActionTypes.ADD_TO_HISTORY,
    payload: {
      tableRollResult
    }
})

export const clearHistory = () => ({
    type: GeneratorActionTypes.CLEAR_HISTORY,
})

export const addConditionalOperation = (operationAttributes: TableOperation) => ({
  type: GeneratorActionTypes.ADD_CONDITIONAL_OPERATION,
  payload: { operationAttributes: { ...operationAttributes } }
});

export const removeConditionalOperation = (operationIndex: number) => ({
  type: GeneratorActionTypes.REMOVE_CONDITIONAL_OPERATION,
  payload: {
    operationIndex,
  }
});

export const changeConditionalOperation = (operationIndex: number, operationAttributes: TableOperation) => ({
  type: GeneratorActionTypes.CHANGE_CONDITIONAL_OPERATION,
  payload: {
    operationIndex,
    operationAttributes: { ...operationAttributes }
  }
});
