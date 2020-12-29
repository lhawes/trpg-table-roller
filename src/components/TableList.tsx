import React, { useCallback, useContext } from "react";
import { DispatchContext } from "../App";
import { StateContext } from "../App";
import { addTableAction } from "../state/generator/generatorActions";
import { getGeneratorTables } from "../state/generator/generatorSelectors";
import { AppState } from "../state/rootInitialState";
import { Table } from '../types/Table';
import { emptyTable } from "../utils/emptyTable";
import { TableComponent } from "./Table";

export const TableList: React.FC = () => {
  const dispatch = useContext(DispatchContext);
  const state: AppState = useContext(StateContext);
  // const tableName = useMemo(() => selector(state), [state[tableStateKey]]);
  // const tableEntries = useMemo(() => selector(state), [state[tableStateKey]]);

  const tables = getGeneratorTables(state) || [];
  const addTable = useCallback(() => dispatch(addTableAction(emptyTable())), [])

  return (
    <>
      {tables.map((tableEntry: Table, i: number) =>
        <TableComponent table={tableEntry} tableIndex={i} key={`table${i}`}/>
      )}
      <button onClick={addTable}>Add Table</button>
    </>
  )
}