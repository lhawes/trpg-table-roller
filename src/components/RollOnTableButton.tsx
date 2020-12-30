import React from 'react'
import { useContext, useCallback } from "react";
import { DispatchContext } from '../App';
import { StateContext } from "../App";
import { addToHistory } from "../state/generator/generatorActions";
import { getResult } from "../state/generator/rollSelectors";
import { AppState } from "../state/rootInitialState";

export const RollOnTableButton: React.FC = () => {
  const state: AppState = useContext(StateContext)
  const dispatch = useContext(DispatchContext);

  const pushRollToHistory = useCallback(() => dispatch(addToHistory(getResult(state))), [state]);
  return (
    <button onClick={pushRollToHistory}>Roll on Table</button>
  )
}