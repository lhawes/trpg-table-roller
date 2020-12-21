import { AnyAction } from "../../types/anyAction";
import { Table } from "../../types/Table";
import { GeneratorActionTypes } from "./generatorActionTypes";

export const addTable = (table: Table):AnyAction => {
  return {
    type: GeneratorActionTypes.ADD_TABLE,
    payload: table,
  }
}

export const removeTable = (tableIndex: number): AnyAction => {
  return {
    type: GeneratorActionTypes.REMOVE_TABLE,
    payload: {
      tableIndex
    }
  }
}

export const addTableEntry = (tableEntry: string, tableIndex: number): AnyAction => {
  return {
    type: GeneratorActionTypes.ADD_TABLE_ENTRY,
    payload: {
      tableIndex,
      tableEntry
    }
  }
}

export const removeTableEntry = (tableIndex: number, tableEntryIndex: number): AnyAction => {
  return {
    type: GeneratorActionTypes.REMOVE_TABLE_ENTRY,
    payload: {
      tableIndex,
      tableEntryIndex
    }
  }
}

export const changeTableEntry = (tableEntry: string, tableIndex: number, tableEntryIndex: number): AnyAction => {
  return {
    type: GeneratorActionTypes.CHANGE_TABLE_ENTRY,
    payload: {
      tableEntry,
      tableIndex,
      tableEntryIndex,
    }
  }
}