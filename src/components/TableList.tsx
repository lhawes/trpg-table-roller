import React, { useCallback, useContext } from "react";
import { DispatchContext } from "../App";
import { StateContext } from "../App";
import { addTableAction } from "../state/generator/generatorActions";
import { getGeneratorTables } from "../state/generator/generatorSelectors";
import { AppState } from "../state/rootInitialState";
import { Table } from '../types/Table';
import { emptyTable } from "../utils/emptyTable";
import { TableComponentLayout } from "./layouts/TableLayout";
import { PrimaryButton } from "./shared/PrimaryButton";

export const TableList: React.FC = () => {
  const dispatch = useContext(DispatchContext);
  const state: AppState = useContext(StateContext);

  const tables = getGeneratorTables(state) || [];
  const addTable = useCallback(() => dispatch(addTableAction(emptyTable())), [])

  return (
    <>
      {tables.map((tableEntry: Table, i: number) =>
        <TableComponentLayout table={tableEntry} tableIndex={i} key={`table${i}`}/>
      )}
      <PrimaryButton onClick={addTable}>Add Table</PrimaryButton>
    </>
  )
}
