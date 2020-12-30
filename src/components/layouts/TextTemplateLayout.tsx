/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useContext } from "react";
import { StateContext } from "../../App";
import { getTextTemplatePreview } from '../../state/generator/rollSelectors';
import { AppState } from "../../state/rootInitialState";
import { TextTemplate } from "../TextTemplate";

const textTemplateContainer = css({
  width: '100%'
})

const textTemplateInput = css({
  width: '100%'
})

export const TextTemplateLayout: React.FC = () => {
  const state: AppState = useContext(StateContext)
  const preview = getTextTemplatePreview(state);

  return (
    <div css={textTemplateContainer}>
      <TextTemplate style={textTemplateInput}/>
      preview: { preview }
    </div>
  );
}