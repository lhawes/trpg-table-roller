import React, { useContext } from "react";
import { StateContext } from "../App";
import { getGeneratorTables } from "../state/generator/generatorSelectors";
import { AppState } from "../state/rootInitialState";
import { Table } from '../types/Table';
import { TableComponent } from "./Table";


export const TableList: React.FC = () => {
  // const dispatch = useContext(DispatchContext);
  const state: AppState = useContext(StateContext);
  // const tableName = useMemo(() => selector(state), [state[tableStateKey]]);
  // const tableEntries = useMemo(() => selector(state), [state[tableStateKey]]);

  const tables = getGeneratorTables(state) || [];

  return (
    <>
      {tables.map((tableEntry: Table, i: number) =>
        <TableComponent table={tableEntry} tableIndex={i} key={`table${i}`}/>
      )}
    </>
  )
}