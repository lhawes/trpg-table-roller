/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ChangeEvent } from "react";
import { inputHeight, inputWidth, lightRed } from '../../constants/styleConstants';
import { Table } from "../../types/Table";
import { SubLayout } from "../shared/SubLayout";
import { UserInputPrimary } from '../shared/UserInputPrimary';
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
  handleLastEntryEnterKey: (e: React.KeyboardEvent) => void
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

const removeButtonHoverStyle = css({
  // backgroundColor: '#F5F5F5',
})

const removeButtonStyle = css({
  border: 'none',
  outline: 'none',
  appearance: 'none',
  backgroundColor: 'transparent',
  '&:hover,&:focus': removeButtonHoverStyle,
  height: `${inputHeight} + 1px`,
  padding: '0 0 1px 0'
});

const coloredEntryStyle = css({
  backgroundColor: lightRed,
})

export const TableComponentLayout: React.FC<TableComponentLayoutProps> = ({ table, tableIndex }) => {
  return (
    <TableComponent table={table} tableIndex={tableIndex} render={({
      tableName,
      updateTableName,
      tableEntries,
      addTableEntry,
      handleLastEntryEnterKey
    }: TableStaterenderProps) => (
        <SubLayout layout={IndividualTableGrid}>
          <UserInputPrimary value={tableName} style={tableNameLayout} onChange={updateTableName} placeHolder='Table name'/>
          { tableEntries.map(({ value, changeEntry, entryIndex, removeEntry }: TableEntryProps) => {
            const addStyle = entryIndex % 2 ? coloredEntryStyle : undefined;
            let onKeyDown
            if (entryIndex + 1 === tableEntries.length) {
              onKeyDown = handleLastEntryEnterKey;
            }
            return [
              <UserInputPrimary tabIndex={entryIndex} onKeyDown={onKeyDown} style={addStyle} value={value} onChange={changeEntry} key={`table-entry-${entryIndex}`} placeHolder='Entry text'/>,
              <button css={css(removeButtonStyle, addStyle)} onClick={removeEntry} key={`close-table-entry-${entryIndex}`}>X</button>
            ];
          })}
          <button onClick={addTableEntry} css={addEntryLayout}>Add Table Entry</button>
        </SubLayout>
      )} />
  )
}
