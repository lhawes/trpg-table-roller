/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { BodyContainer } from './shared/BodyContainer';

const headerContainerStyle = css({
  backgroundColor: 'black'
})

const headerStyle = css({
  backgroundColor: 'black',
  color: 'white',
  padding: '0.5rem'
});

const siteNameTitleStyle = css({
  fontWeight: 'bold',
})

export const Header: React.FC = () => {
  return (
    <div css={headerContainerStyle}>
    <BodyContainer>
      <header css={headerStyle}>
          <span css={siteNameTitleStyle}>TRPG table roller</span>: A tool to create multi table rollers
      </header>
    </BodyContainer>
    </div>
  );
}