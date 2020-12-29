/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ChangeEvent } from 'react';

export interface TableEntryProps {
  value: string;
  style: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TableEntry: React.FC<TableEntryProps> = ({ value = '', style, onChange }) => {
  return (
    <input value={value} css={style} onChange={onChange} />
  );
}