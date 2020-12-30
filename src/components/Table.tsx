import React from 'react'
import { ChangeEvent, useCallback, useContext } from 'react';
import { DispatchContext } from '../App';
import { addTableEntryAction, changeTableEntryAction, removeTableEntryAction } from '../state/generator/generatorActions';
import { Table } from '../types/Table';
import { TableStaterenderProps } from './layouts/TableLayout';

export interface TableProps {
  table: Table;
  tableIndex: number;
  render: any;
}

const defaultTableEntry = 'default entry';

export const TableComponent: React.FC<TableProps>= ({ table, tableIndex, render }) => {
  const dispatch = useContext(DispatchContext);

  const tableName = table.name;
  const tableEntries = table.entries;

  const updateTableEntry = useCallback((TableEntryIndex: number) => (event: ChangeEvent<HTMLInputElement>): void => {
    const tableEntryValue = event.target.value;
    return dispatch(changeTableEntryAction(tableEntryValue, tableIndex, TableEntryIndex));
  }, [tableIndex, dispatch]);

  const removeTableEntry = useCallback((TableEntryIndex: number) => (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    return dispatch(removeTableEntryAction(tableIndex, TableEntryIndex));
  }, [tableIndex, dispatch]);

  const addTableEntry = useCallback((): void => {
    return dispatch(addTableEntryAction(defaultTableEntry, tableIndex));
  }, [tableIndex, dispatch]);

  const tableState: TableStaterenderProps = {
    tableName,
    tableEntries: tableEntries.map((entry: string, i: number) => ({
      value: entry,
      changeEntry: updateTableEntry(i),
      entryIndex: i,
      removeEntry: removeTableEntry(i),
    })),
    addTableEntry
  }

  return render(tableState)
}
