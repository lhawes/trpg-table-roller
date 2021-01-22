/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/react'
import { useMemo } from 'react';
import { redScheme } from '../../constants/styleConstants';

interface SecondaryButtonProps {
  style?: SerializedStyles;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const secondaryButtonStyle = css({
  border: 'none',
  backgroundColor: redScheme.highlightPallette.blue,
  color: 'white',
  width: 'auto',
  padding: '8px',
  margin: '1rem 0',
})

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  style,
  children,
  onClick,
}) => {
  const computedStyle = useMemo(() => css(secondaryButtonStyle, style), [style])
  return (
    <button css={computedStyle} onClick={onClick} >{children}</button>
  );
}