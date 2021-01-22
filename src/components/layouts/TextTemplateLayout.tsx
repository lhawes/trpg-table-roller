/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/react'
import { useContext, useMemo } from "react";
import { StateContext } from "../../App";
import { getTextTemplatePreview } from '../../state/generator/rollSelectors';
import { AppState } from "../../state/rootInitialState";
import { TextTemplate } from "../TextTemplate";

const textTemplateContainerStyle = css({
  width: '100%'
})

const textTemplateInputStyle = css({
  width: 'calc(100% - 20px)',
  marginBottom: '2px',
});

const previewStyle = css({
  height: '55px',
  overflow: 'scroll'
});

const textTemplateTitleStyle = css({
  fontSize: '18px',
  margin: '1rem 0',
});

export interface TextTemplateLayoutProps {
  style?: SerializedStyles
}

export const TextTemplateLayout: React.FC<TextTemplateLayoutProps> = ({ style }) => {
  const state: AppState = useContext(StateContext)
  const preview = getTextTemplatePreview(state);

  const computedStyle = useMemo(() => {
    return css(style, textTemplateContainerStyle);
  }, [style])

  return (
    <div css={computedStyle}>
      <div css={textTemplateTitleStyle}>Roll result template</div>
      <TextTemplate style={textTemplateInputStyle}/>
      <div css={previewStyle} >preview: {preview}</div>
    </div>
  );
}