import React, { useContext, useCallback } from "react";
import { StateContext } from "../App";
import { getGeneratorName } from "../state/generator/generatorSelectors";
import { AppState } from "../state/rootInitialState";
import { saveFile, transformStateForFile } from "../utils/saveFile";

export const ExportDataButton: React.FC = () => {
  const state: AppState = useContext(StateContext);

  const generatorName = getGeneratorName(state);
  const exportData = useCallback(() => {
    saveFile(transformStateForFile(state), `${generatorName}-tables`);
  }, [state]);

  return (
    <button onClick={exportData}>Export Table</button>
  );
}