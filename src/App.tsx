import React, { ChangeEvent, useCallback, useReducer } from 'react';
import './App.css';
import { TableEntry } from './components/TableEntry';
import { TableList } from './components/TableList';
import { changeTextTemplateAction, updateStateFromFileAction } from './state/generator/generatorActions';
import { getGeneratorName, getGeneratorTextTemplate } from './state/generator/generatorSelectors';
import { getRandomEntries, getResult } from './state/generator/rollSelectors';
import { rootInitialState } from './state/rootInitialState';
import { rootReducer } from './state/rootReducer';
import { defaultDispatch } from './utils/defaultDispatch';
import { saveFile, transformStateForFile } from './utils/saveFile';
import { getFile, uploadInputId } from './utils/uploadFile';

export const StateContext = React.createContext(rootInitialState);
export const DispatchContext = React.createContext(defaultDispatch);

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);
  const generatorName = getGeneratorName(state);
  const randomRoll = getRandomEntries(state);
  const result = getResult(state);
  const textTemplate = getGeneratorTextTemplate(state);

  const changeTextTemplate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(changeTextTemplateAction(value));
  }, []);

  const exportData = useCallback(() => {
    saveFile(transformStateForFile(state), `${generatorName}-tables`);
  }, [state]);

  const updateStateFromFile = useCallback((content) => dispatch(updateStateFromFileAction(content)),[]);
  const getFileHandler = useCallback(getFile(updateStateFromFile), [updateStateFromFile]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <header className="App-header">
            TRPG table roller
          </header>
          {generatorName }<br/>
          <TableEntry value={textTemplate} style={{}} onChange={changeTextTemplate} />
          <TableList />
          <div>
            <button>random roll</button>: { randomRoll.map((choice:string, i: number)=> <span key={`randomroll${i}`}>{choice}</span>) }</div>
            getResultValue = {result}
          <button onClick={exportData}>Export Tables</button>
          <input id={uploadInputId} type="file" onChange={getFileHandler}></input>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
