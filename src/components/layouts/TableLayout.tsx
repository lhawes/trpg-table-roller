/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ChangeEvent } from "react";
import { inputWidth } from '../../constants/styleConstants';
import { Table } from "../../types/Table";
import { SubLayout } from "../shared/SubLayout";
import { UserInput } from "../shared/UserInput";
import { TableComponent } from "../Table";

export interface TableEntryProps {
  value: string,
  changeEntry: (event: ChangeEvent<HTMLInputElement>) => void,
  entryIndex: number,
  removeEntry: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export interface TableStaterenderProps {
  tableName: string,
  updateTableName: (event: ChangeEvent<HTMLInputElement>) => void,
  tableEntries: TableEntryProps[]
  addTableEntry: () => void
}

export interface TableComponentLayoutProps {
  table: Table,
  tableIndex: number,
}

const IndividualTableGrid = css({
  gridTemplateColumns: `1fr ${inputWidth}`,
  gridTemplateRows: `1fr`,
});

const tableNameLayout = css({
  gridColumnStart: 1,
  gridColumnEnd: 3,
  gridRow: 1,
});

const addEntryLayout = css({
  gridColumnStart: 1,
  gridColumnEnd: 3,

})

export const TableComponentLayout: React.FC<TableComponentLayoutProps> = ({ table, tableIndex }) => {
  return (
    <TableComponent table={table} tableIndex={tableIndex} render={({
      tableName,
      updateTableName,
      tableEntries,
      addTableEntry
    }: TableStaterenderProps) => (
        <SubLayout layout={IndividualTableGrid}>
          <UserInput value={tableName} style={tableNameLayout} onChange={updateTableName} />
          { tableEntries.map(({ value, changeEntry, entryIndex, removeEntry }: TableEntryProps) => {
            return [
              <UserInput value={value} onChange={changeEntry} key={`table-entry-${entryIndex}`} />,
              <button onClick={removeEntry} key={`close-table-entry-${entryIndex}`}>X</button>
            ];
          })}
          <button onClick={addTableEntry} css={addEntryLayout}>Add Table Entry</button>
        </SubLayout>
      )} />
  )
}
