/** @jsxImportSource @emotion/react */
import { jsx, SerializedStyles } from '@emotion/react';
import { ChangeEvent } from 'react';

export interface UserInputProps {
  value: string | number;
  style?: SerializedStyles;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void,
  tabIndex?: number,
}

export const UserInput: React.FC<UserInputProps> = ({
  value = '',
  style,
  onChange,
  placeHolder = '',
  onKeyDown,
  tabIndex
}) => {
  return (
    <input tabIndex={tabIndex} onKeyDown={onKeyDown} value={value} css={style} onChange={onChange} placeholder={placeHolder}/>
  );
}