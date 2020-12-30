import { AnyAction } from "../../types/anyAction";
import { Table } from "../../types/Table";
import { GeneratorActionTypes } from "./generatorActionTypes";

export const addTableAction = (table: Table):AnyAction => {
  return {
    type: GeneratorActionTypes.ADD_TABLE,
    payload: table,
  }
}

export const removeTableAction = (tableIndex: number): AnyAction => {
  return {
    type: GeneratorActionTypes.REMOVE_TABLE,
    payload: {
      tableIndex
    }
  }
}

export const addTableEntryAction = (tableEntry: string, tableIndex: number): AnyAction => {
  return {
    type: GeneratorActionTypes.ADD_TABLE_ENTRY,
    payload: {
      tableIndex,
      tableEntry
    }
  }
}

export const removeTableEntryAction = (tableIndex: number, tableEntryIndex: number): AnyAction => {
  return {
    type: GeneratorActionTypes.REMOVE_TABLE_ENTRY,
    payload: {
      tableIndex,
      tableEntryIndex
    }
  }
}

export const changeTableEntryAction = (tableEntry: string, tableIndex: number, tableEntryIndex: number): AnyAction => {
  return {
    type: GeneratorActionTypes.CHANGE_TABLE_ENTRY,
    payload: {
      tableEntry,
      tableIndex,
      tableEntryIndex,
    }
  }
}

export const changeGeneratorNameAction = (generatorName: string): AnyAction => {
  return {
    type: GeneratorActionTypes.CHANGE_GENERATOR_NAME,
    payload: {
      generatorName
    }
  }
}

export const changeTextTemplateAction = (textTemplate: string): AnyAction => {
  return {
    type: GeneratorActionTypes.CHANGE_TEXT_TEMPLATE,
    payload: {
      textTemplate
    }
  }
}

export const changeTableNameAction = (tableName: string, tableIndex: number): AnyAction => {
  return {
    type: GeneratorActionTypes.CHANGE_TABLE_NAME,
    payload: {
      tableName,
      tableIndex
    }
  }
}

export const updateStateFromFileAction = (fileState: any) => {
  console.log({
    type: typeof fileState,
    fileState,
  })
  return {
    type: GeneratorActionTypes.UPDATE_STATE_FROM_FILE,
    payload: {
      fileState
    }
  }
}