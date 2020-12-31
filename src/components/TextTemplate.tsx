import { SerializedStyles } from "@emotion/react";
import React, { useContext, useCallback, ChangeEvent } from "react";
import { StateContext, DispatchContext } from "../App";
import { changeTextTemplateAction } from "../state/generator/generatorActions";
import { getGeneratorTextTemplate } from "../state/generator/generatorSelectors";
import { AppState } from "../state/rootInitialState";
import { UserInputPrimary } from "./shared/UserInputPrimary";

export interface TextTemplateLayoutProps {
  style?: SerializedStyles
}

export const TextTemplate: React.FC<TextTemplateLayoutProps> = ({
  style
}) => {
  const state: AppState = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const textTemplate = getGeneratorTextTemplate(state);

  const changeTextTemplate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(changeTextTemplateAction(value));
  }, [dispatch]);

  return (<UserInputPrimary value={textTemplate} style={style} onChange={changeTextTemplate} placeHolder='Text template {{1}}'/>);
}