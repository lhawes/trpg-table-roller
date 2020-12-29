import React, { useReducer } from 'react';
import './App.css';
import { TableList } from './components/TableList';
import { getGeneratorName } from './state/generator/generatorSelectors';
import { rollGenerator } from './state/generator/rollSelectors';
import { rootInitialState } from './state/rootInitialState';
import { rootReducer } from './state/rootReducer';
import { defaultDispatch } from './utils/defaultDispatch';

export const StateContext = React.createContext(rootInitialState);
export const DispatchContext = React.createContext(defaultDispatch);

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);
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
          <div>random roll: { randomRoll.map((choice:string, i: number)=> <span key={`randomroll${i}`}>{choice}</span>) }</div>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
