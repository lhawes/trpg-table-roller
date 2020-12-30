/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useMemo } from 'react';

const subLayoutCss = css([
  {
    display: 'grid',
  }]);

interface SubLayoutProps {
  layout?: any;
}

export const SubLayout: React.FC<SubLayoutProps> = ({ children, layout }) => {
  const computedCss = useMemo(() => {
    return css`
      ${subLayoutCss}
      ${layout}
    `
  }, [layout]);

  return (
    <div css={computedCss}>
      { children }
    </div>
  );
}