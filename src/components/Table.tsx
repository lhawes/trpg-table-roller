import React from 'react'
import { ChangeEvent, useCallback, useContext } from 'react';
import { DispatchContext } from '../App';
import { addTableEntryAction, changeTableEntryAction, changeTableNameAction, removeTableEntryAction } from '../state/generator/generatorActions';
import { Table } from '../types/Table';
import { TableStaterenderProps } from './layouts/TableLayout';

export interface TableProps {
  table: Table;
  tableIndex: number;
  render: any;
}

export const TableComponent: React.FC<TableProps>= ({ table, tableIndex, render }) => {
  const dispatch = useContext(DispatchContext);

  const tableName = table.name;
  const tableEntries = table.entries;

  const updateTableName = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const tableNameValue = event.target.value;
    return dispatch(changeTableNameAction(tableNameValue, tableIndex));
  }, [tableIndex, dispatch]);

  const updateTableEntry = useCallback((TableEntryIndex: number) => (event: ChangeEvent<HTMLInputElement>): void => {
    const tableEntryValue = event.target.value;
    return dispatch(changeTableEntryAction(tableEntryValue, tableIndex, TableEntryIndex));
  }, [tableIndex, dispatch]);

  const removeTableEntry = useCallback((TableEntryIndex: number) => (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    return dispatch(removeTableEntryAction(tableIndex, TableEntryIndex));
  }, [tableIndex, dispatch]);

  const addTableEntry = useCallback((): void => {
    return dispatch(addTableEntryAction('', tableIndex));
  }, [tableIndex, dispatch]);

  const handleLastEntryEnterKey = useCallback((e: React.KeyboardEvent) => {
    console.log(e.key, e)
    if (e.key === 'Enter') {
      return dispatch(addTableEntryAction('', tableIndex));
    }
  }, [tableIndex, dispatch])

  const tableState: TableStaterenderProps = {
    tableName,
    updateTableName,
    tableEntries: tableEntries.map((entry: string, i: number) => ({
      value: entry,
      changeEntry: updateTableEntry(i),
      entryIndex: i,
      removeEntry: removeTableEntry(i),
    })),
    addTableEntry,
    handleLastEntryEnterKey,
  }

  return render(tableState)
}
