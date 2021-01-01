/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/react'
import { useMemo } from 'react';
import { red } from '../../constants/styleConstants';

interface PrimaryButtonProps {
  style?: SerializedStyles;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const primaryButtonStyle = css({
  border: 'none',
  backgroundColor: red,
  color: 'white',
  width: 'auto',
  padding: '8px',
  margin: '4px',
})

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  style,
  children,
  onClick,
}) => {
  const computedStyle = useMemo(() => css(primaryButtonStyle, style), [style])
  return (
    <button css={computedStyle} onClick={onClick} >{children}</button>
  );
}