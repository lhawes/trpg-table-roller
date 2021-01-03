/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ChangeEvent, useCallback, useContext } from "react";
import { DispatchContext } from '../../App';
import { inputHeight, inputWidth, redScheme } from '../../constants/styleConstants';
import { removeTableAction } from '../../state/generator/generatorActions';
import { Table } from "../../types/Table";
import { PrimaryButton } from '../shared/PrimaryButton';
import { SecondaryButton } from '../shared/SecondaryButton';
import { SubLayout } from "../shared/SubLayout";
import { UserInputPrimary } from '../shared/UserInputPrimary';
import { TableComponent } from "../Table";
import { TableNameLayout } from './TableNameLayout';

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

const tableNameStyle = css({
  gridColumnStart: 1,
  gridColumnEnd: 3,
  gridRow: 1,
})

const tableButtons = css({
  gridColumnStart: 1,
  gridColumnEnd: 3,
})

const removeTableButton = css({
  float: 'right',
})

const removeButtonStyle = css({
  border: 'none',
  outline: 'none',
  appearance: 'none',
  backgroundColor: 'transparent',
  '&:hover,&:focus': {},
  // height: `${inputHeight} + 1px`,
  padding: '0 0 1px 0'
});

const coloredEntryStyle = css({
  backgroundColor: redScheme.highlightPallette.primary,
})

export const TableComponentLayout: React.FC<TableComponentLayoutProps> = ({ table, tableIndex }) => {
  const dispatch = useContext(DispatchContext);
  const removeTable = useCallback(() => dispatch(removeTableAction(tableIndex)), [tableIndex]);

  return (
    <TableComponent table={table} tableIndex={tableIndex} render={({
      tableName,
      updateTableName,
      tableEntries,
      addTableEntry,
      handleLastEntryEnterKey
    }: TableStaterenderProps) => (
        <SubLayout layout={IndividualTableGrid}>
          <div css={tableNameStyle}><TableNameLayout tableName={tableName} updateTableName={updateTableName} tableLength={table.entries.length} tableIndex={tableIndex} /></div>
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
          <div css={tableButtons}>
            <PrimaryButton onClick={addTableEntry} >Add Table Entry</PrimaryButton>
            <SecondaryButton style={removeTableButton} onClick={removeTable} >Remove Table</SecondaryButton>
          </div>
        </SubLayout>
      )} />
  )
}
