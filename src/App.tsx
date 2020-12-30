/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { useReducer } from 'react';
import './App.css';
import { ClearHistory } from './components/ClearHistory';
import { ExportDataButton } from './components/ExportDataButton';
import { FileUploadInput } from './components/FileUploadInput';
import { GeneratorName } from './components/GeneratorName';
import { Header } from './components/Header';
import { HistoryList } from './components/HistoryList';
import { RollOnTableButton } from './components/RollOnTableButton';
import { TableList } from './components/TableList';
import { TextTemplate } from './components/TextTemplate';
import { rootInitialState } from './state/rootInitialState';
import { rootReducer } from './state/rootReducer';
import { defaultDispatch } from './utils/defaultDispatch';

export const StateContext = React.createContext(rootInitialState);
export const DispatchContext = React.createContext(defaultDispatch);

const appStyles = css({
 margin: '30px'
})

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div id="App" css={appStyles}>
          <Header />
          <GeneratorName />
          <TextTemplate />
          <TableList /><br />
          <RollOnTableButton /><br />
          <ExportDataButton /><br />
          <FileUploadInput /><br />
          <HistoryList />
          <ClearHistory />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
