/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useReducer } from 'react';
import { BasePageLayout } from './components/layouts/BasePageLayout';
import { rootInitialState } from './state/rootInitialState';
import { rootReducer } from './state/rootReducer';
import { defaultDispatch } from './utils/defaultDispatch';

export const StateContext = React.createContext(rootInitialState);
export const DispatchContext = React.createContext(defaultDispatch);

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <BasePageLayout />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
