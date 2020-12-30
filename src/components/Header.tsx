/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { BodyContainer } from './shared/BodyContainer';

const headerContainerStyle = css({
  backgroundColor: 'black'
})

const headerStyle = css({
  backgroundColor: 'black',
  color: 'white'
})

export const Header: React.FC = () => {
  return (
    <div css={headerContainerStyle}>
    <BodyContainer>
      <header css={headerStyle}>
        TRPG table roller
      </header>
    </BodyContainer>
    </div>
  );
}