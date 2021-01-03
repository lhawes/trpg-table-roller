import { useContext, useCallback } from "react";
import { DispatchContext } from "../App";
import React from 'react'
import { clearHistory } from "../state/generator/generatorActions";
import { SecondaryButton } from "./shared/SecondaryButton";

export const ClearHistory: React.FC = () => {
  const dispatch = useContext(DispatchContext);
  const clearRollToHistory = useCallback(() => dispatch(clearHistory()), [dispatch]);
  return (
    <SecondaryButton onClick={clearRollToHistory}>Clear Roll History</SecondaryButton>
  );
}