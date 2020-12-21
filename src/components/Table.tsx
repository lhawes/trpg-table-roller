import { useContext, useMemo } from "react";
import { StateContext } from "../App";
import { AppState } from "../state/rootInitialState";
import { tableStateKey } from "../state/table/tableReducer";


export const Table: React.FC = ({}) => {
  // const dispatch = useContext(DispatchContext);
  const state: AppState = useContext(StateContext);
  // const tableName = useMemo(() => selector(state), [state[tableStateKey]]);
  // const tableEntries = useMemo(() => selector(state), [state[tableStateKey]]);

  const tableName = 'asdfz'
  const tableEntries = ['aaaaa', 'ddddd'];

  console.log(tableEntries)

  return (
    <>
      <div>
        <p>{tableName}</p>
        { tableEntries.map((entry:string, i: number) => {
          return (<span key={i}>{entry}</span>);
        })}
      </div>
    </>
  )
}