import { AnyAction } from "../../types/anyAction"
import { TableActionTypes } from "./tableActionTypes"

export const addTableEntry = (tableIndex: number, value: string): AnyAction => {
  return {
    type: TableActionTypes.ADD_TABLE_ENTRY,
    payload: {
      tableIndex,
      value,
    }
  }
}