/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ChangeEvent, useCallback, useContext } from 'react';
import { DispatchContext } from '../App';
import { addTableEntryAction, changeTableEntryAction, removeTableEntryAction } from '../state/generator/generatorActions';
import { Table } from '../types/Table';
import { UserInput } from './UserInput';

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
});

const defaultTableEntry = 'default entry';

export const TableComponent: React.FC<TableProps>= ({ table, tableIndex }) => {
  const dispatch = useContext(DispatchContext);
  // const state: AppState = useContext(StateContext);
  // const tableName = useMemo(() => selector(state), [state[tableStateKey]]);
  // const tableEntries = useMemo(() => selector(state), [state[tableStateKey]]);

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

  return (
    <div css={tableStyles}>
      <span css={tableNameStyle}>{tableName}</span>
      <div css={tableEntryContainerStyle}>
        { tableEntries.map((entry: string, i: number) => {
          const style = i % 2 === 0 ? evenTableEntryStyle : oddTableEntryStyle;
          return (<div key={i}>
            <UserInput value={entry} style={style} onChange={updateTableEntry(i)}/>
            <button onClick={removeTableEntry(i)}>X</button>
          </div>);
        })}
      </div>
      <button onClick={addTableEntry}>Add Table Entry</button>
    </div>
  );
}