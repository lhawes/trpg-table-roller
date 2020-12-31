/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react';
import { ChangeEvent } from 'react';

export interface TableEntryProps {
  value: string;
  style?: SerializedStyles;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const UserInput: React.FC<TableEntryProps> = ({ value = '', style, onChange }) => {
  return (
    <input value={value} css={style} onChange={onChange} />
  );
}