import React, { useContext, useCallback, ChangeEvent } from "react";
import { StateContext, DispatchContext } from "../App";
import { changeTextTemplateAction } from "../state/generator/generatorActions";
import { getGeneratorTextTemplate } from "../state/generator/generatorSelectors";
import { getResult } from "../state/generator/rollSelectors";
import { AppState } from "../state/rootInitialState";
import { UserInput } from "./UserInput";

export const TextTemplate: React.FC = () => {
  const state: AppState = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const textTemplate = getGeneratorTextTemplate(state);
  const preview = getResult(state);

  const changeTextTemplate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(changeTextTemplateAction(value));
  }, [dispatch]);

  return (
    <div>
      <UserInput value={textTemplate} style={{}} onChange={changeTextTemplate} /> : { preview }
    </div>
  );
}