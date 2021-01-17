import React from 'react'
import { useContext, useCallback } from "react";
import { DispatchContext } from '../App';
import { StateContext } from "../App";
import { addToHistory } from "../state/generator/generatorActions";
import { getMultiRollResult } from "../state/generator/rollSelectors";
import { AppState } from "../state/rootInitialState";
import { PrimaryButton } from './shared/PrimaryButton';

export const RollOnTableButton: React.FC = () => {
  const state: AppState = useContext(StateContext)
  const dispatch = useContext(DispatchContext);

  const pushRollToHistory = useCallback(() => dispatch(addToHistory(getMultiRollResult(state))), [state]);
  // const pushRollToHistory = useCallback(() => dispatch(addToHistory(getResult(state))), [state]);
  return (
    <PrimaryButton onClick={pushRollToHistory}>Roll on Table</PrimaryButton>
  )
}