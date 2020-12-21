import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { Table } from '../types/Table';

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
  // const dispatch = useContext(DispatchContext);
  // const state: AppState = useContext(StateContext);
  // const tableName = useMemo(() => selector(state), [state[tableStateKey]]);
  // const tableEntries = useMemo(() => selector(state), [state[tableStateKey]]);

  const tableName = table.name;
  const tableEntries = table.entries;

  return (
    <div css={tableStyles}>
      <span css={tableNameStyle}>{tableName}</span>
      <div css={tableEntryContainerStyle}>
        { tableEntries.map((entry:string, i: number) => {
          const style = i % 2 === 0 ? evenTableEntryStyle : oddTableEntryStyle;
          return (<span css={style} key={i}>{entry}</span>);
        })}
      </div>
    </div>
  );
}