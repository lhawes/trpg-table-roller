import React, { useReducer } from 'react';
import './App.css';
import { TableList } from './components/TableList';
import { getGeneratorName, getGeneratorTables } from './state/generator/generatorSelectors';
import { rollGenerator } from './state/generator/rollSelectors';
import { rootInitialState } from './state/rootInitialState';
import { rootReducer } from './state/rootReducer';
import { defaultDispatch } from './utils/defaultDispatch';

export const StateContext = React.createContext(rootInitialState);
export const DispatchContext = React.createContext(defaultDispatch);

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);

  // const firstTable = useMemo(() => { getGeneratorTables(state)}, [])
  const tables = getGeneratorTables(state) || [];
  const generatorName = getGeneratorName(state);

  const randomRoll = rollGenerator(state);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <header className="App-header">
            TRPG table roller
          </header>
          {generatorName }
          <TableList />
          <div>random roll: { randomRoll[0] }</div>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
