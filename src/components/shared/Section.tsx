/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useMemo } from 'react';

const sectionCss = css([
  {
    display: 'grid',
  }])

interface SectionProps {
  layout?: any
}

export const Section: React.FC<SectionProps> = ({ children, layout }) => {
  const computedCss = useMemo(() => {
    return css`
      ${sectionCss}
      ${layout}
    `
  }, [layout]);

  return (
    <section css={computedCss}>
      { children}
    </section>
  );
}
