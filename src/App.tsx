import React, { useReducer } from 'react';
import './App.css';
import { Table } from './components/Table';
import { rootInitialState } from './state/rootInitialState';
import { rootReducer } from './state/rootReducer';
import { defaultDispatch } from './utils/defaultDispatch';

export const StateContext = React.createContext(rootInitialState);
export const DispatchContext = React.createContext(defaultDispatch);

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);

  // useEffect(() => {

  // }, [dispatch]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <header className="App-header">
            TRPG table roller
          </header>
          <Table />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}



export default App;
