import { SerializedStyles } from "@emotion/react";
import React, { ChangeEvent, useCallback, useContext } from "react";
import { DispatchContext } from "../App";
import { StateContext } from "../App";
import { changeGeneratorNameAction } from "../state/generator/generatorActions";
import { getGeneratorName } from "../state/generator/generatorSelectors";
import { AppState } from "../state/rootInitialState";
import { UserInputPrimary } from "./shared/UserInputPrimary";

export interface GeneratorNameProps {
  style?: SerializedStyles
}
export const GeneratorName: React.FC<GeneratorNameProps> = ({
  style
}) => {
  const state: AppState = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const generatorName = getGeneratorName(state);
  const changeGeneratorNameTemplate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(changeGeneratorNameAction(value));
  }, [dispatch]);

  return (
    <UserInputPrimary value={generatorName} style={style} onChange={changeGeneratorNameTemplate} placeHolder='Table Generator name'/>
  )
}