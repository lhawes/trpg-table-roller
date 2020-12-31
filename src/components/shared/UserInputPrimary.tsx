/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useMemo } from 'react';
import { inputHeight, inputLeftPadding } from '../../constants/styleConstants';
import { UserInput, UserInputProps } from "./UserInput";

const inputHoverStyle = css({
  borderBottom: '1px solid black',
  // backgroundColor: '#F5F5F5',
  height: inputHeight,
  padding: `0 0 0 ${inputLeftPadding}`
})

const baseUserInputPrimaryStyle = css({
  border: 'none',
  outline: 'none',
  '&:hover,&:focus': inputHoverStyle,
  height: inputHeight,
  padding: `0 0 1px ${inputLeftPadding}`
})

export const UserInputPrimary: React.FC<UserInputProps> = ({
  value,
  style,
  onChange,
  placeHolder,
  onKeyDown,
  tabIndex,
}) => {
  const computedStyle = useMemo(() => css(baseUserInputPrimaryStyle, style), [style]);

  return (
    <UserInput onKeyDown={onKeyDown} value={value} style={computedStyle} onChange={onChange} placeHolder={placeHolder} />
  );
}