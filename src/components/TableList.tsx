import React, { useContext } from "react";
import { StateContext } from "../App";
import { getGeneratorTables } from "../state/generator/generatorSelectors";
import { AppState } from "../state/rootInitialState";
import { Table } from '../types/Table';
import { TableComponentLayout } from "./layouts/TableLayout";

export const TableList = () => {
  const state: AppState = useContext(StateContext);
  const tables = getGeneratorTables(state) || [];

  return <>
    {tables.map((tableEntry: Table, i: number) =>
      <TableComponentLayout table={tableEntry} tableIndex={i} key={`table${i}`}/>
    )}
  </>
}
