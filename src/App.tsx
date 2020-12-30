import React, { ChangeEvent, useCallback, useReducer } from 'react';
import './App.css';
import { HistoryList } from './components/HistoryList';
import { TableEntry } from './components/TableEntry';
import { TableList } from './components/TableList';
import { addToHistory, changeTextTemplateAction, clearHistory, updateStateFromFileAction } from './state/generator/generatorActions';
import { getGeneratorName, getGeneratorTextTemplate } from './state/generator/generatorSelectors';
import { getResult } from './state/generator/rollSelectors';
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
  const textTemplate = getGeneratorTextTemplate(state);
  const preview = getResult(state);

  const changeTextTemplate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(changeTextTemplateAction(value));
  }, []);

  const exportData = useCallback(() => {
    saveFile(transformStateForFile(state), `${generatorName}-tables`);
  }, [state]);

  const updateStateFromFile = useCallback((content) => dispatch(updateStateFromFileAction(content)),[]);
  const getFileHandler = useCallback(getFile(updateStateFromFile), [updateStateFromFile]);

  const pushRollToHistory = useCallback(() => dispatch(addToHistory(getResult(state))), [state]);
  const clearRollToHistory = useCallback(() => dispatch(clearHistory()), [state]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <header className="App-header">
            TRPG table roller
          </header>
          { generatorName }<br/>
          <TableEntry value={textTemplate} style={{}} onChange={changeTextTemplate} /> : {preview}
          <TableList /><br />
          <button onClick={pushRollToHistory}>Roll on Table</button><br />
          <button onClick={exportData}>Export Table</button><br />
          <input id={uploadInputId} type="file" onChange={getFileHandler}></input><br />
          Table Roll Results:<br />
          <HistoryList />
          <button onClick={clearRollToHistory}>Clear Roll History</button>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
