/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ChangeEvent, useCallback, useContext } from 'react';
import { DispatchContext } from '../App';
import { changeTableEntryAction } from '../state/generator/generatorActions';
import { Table } from '../types/Table';
import { TableEntry } from './TableEntry';

export interface TableProps {
  table: Table;
  tableIndex: number;
}

const tableStyles = css({
  border: '1px dashed black'
});
const tableNameStyle = css({
  display: 'block',
})
const tableEntryContainerStyle = css({
  display: 'block'
})
const oddTableEntryStyle = css({
  display: 'block',
  color: 'red'
})
const evenTableEntryStyle = css({
  display: 'block',
  color: 'blue'
})

export const TableComponent: React.FC<TableProps>= ({ table, tableIndex }) => {
  const dispatch = useContext(DispatchContext);
  // const state: AppState = useContext(StateContext);
  // const tableName = useMemo(() => selector(state), [state[tableStateKey]]);
  // const tableEntries = useMemo(() => selector(state), [state[tableStateKey]]);

  const tableName = table.name;
  const tableEntries = table.entries;

  const updateTableEntry = useCallback((TableEntryIndex: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const tableEntryValue = event.target.value;
    return dispatch(changeTableEntryAction(tableEntryValue, tableIndex, TableEntryIndex));
  }, [dispatch]);

  return (
    <div css={tableStyles}>
      <span css={tableNameStyle}>{tableName}</span>
      <div css={tableEntryContainerStyle}>
        { tableEntries.map((entry: string, i: number) => {
          const style = i % 2 === 0 ? evenTableEntryStyle : oddTableEntryStyle;
          return (<TableEntry value={entry} style={style} onChange={updateTableEntry(i)}/>);
        })}
      </div>
    </div>
  );
}