/** @jsx jsx */
import { jsx, css, SerializedStyles } from "@emotion/react";
import { useMemo } from "react";
import { Header } from "../Header";

const bodyContainerCss = css({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

export interface BodyContainerProps {
  style?: SerializedStyles
}

export const BodyContainer: React.FC<BodyContainerProps> = ({ children, style }) => {
  const computedCss = useMemo(() => {
    return css(bodyContainerCss, style)
  }, [style]);

  return (
    <div css={computedCss}>
      { children }
    </div>
  );
}