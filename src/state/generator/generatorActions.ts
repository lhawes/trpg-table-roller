import { AnyAction } from "../../types/anyAction";
import { Table } from "../../types/Table";
import { GeneratorActionTypes } from "./generatorActionTypes";

export const addTable = (table: Table):AnyAction => {
  return {
    type: GeneratorActionTypes.ADD_TABLE,
    payload: table,
  }
}