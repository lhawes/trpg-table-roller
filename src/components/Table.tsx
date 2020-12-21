import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/react/macro'

import { Table } from '../types/Table';

export interface TableProps {
  table: Table;
  tableIndex: number;
}

const tableStyles = css({
  border: '1px dashed black'
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
        <p>{tableName}</p>
        { tableEntries.map((entry:string, i: number) => {
          return (<span key={i}>{entry}</span>);
        })}
      </div>
  );
}