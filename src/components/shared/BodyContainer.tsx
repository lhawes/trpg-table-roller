/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Header } from "../Header";

const bodyContainerCss = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const BodyContainer: React.FC = ({ children }) => {
  return (
    <div id="App" css={bodyContainerCss}>
      <Header />
      { children }
    </div>
  );
}