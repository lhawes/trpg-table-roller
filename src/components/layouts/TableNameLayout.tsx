/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ChangeEvent, useMemo } from 'react'
import { templateDelimiter } from '../../constants/templateDelimiter'
import { SubLayout } from '../shared/SubLayout';
import { UserInputPrimary } from '../shared/UserInputPrimary';

const tableNameLayout = css({
  gridTemplateColumns: `16fr 1fr 1fr`,
  gridTemplateRows: `auto`,
  margin: '18px 0 0 0',
})

const tableDiceStyle = css({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRow: 1,
  justifySelf: 'center',
  fontWeight: 'bold',
})

const tableNameInputStyle = css({
  gridColumnStart: 1,
  gridColumnEnd: 2,
  gridRow: 1,
  fontSize: '18px',
  padding: '0 0 3px 0',
  '&:hover,&:focus': {
    padding: '0 0 2px 0',
  },
  fontWeight: 'bold',
});

const tableSymbolStyle = css({
  gridColumnStart: 3,
  gridColumnEnd: 4,
  gridRow: 1,
  color: '#757575',
  justifySelf: 'center',
});

export interface TableNameLayoutProps {
  tableName: string;
  updateTableName: (event: ChangeEvent<HTMLInputElement>) => void;
  tableLength: number;
  tableIndex: number;
}

export const TableNameLayout: React.FC<TableNameLayoutProps> = ({
  tableName,
  updateTableName,
  tableLength,
  tableIndex,
}) => {
  const tableSymbol = useMemo(() => templateDelimiter(tableIndex + 1), [tableIndex])

  return (
    <SubLayout layout={tableNameLayout}>
      <UserInputPrimary value={tableName} style={tableNameInputStyle} onChange={updateTableName} placeHolder='Table name' />
      <div css={tableDiceStyle}>{`d${tableLength}`}</div>
      <div css={tableSymbolStyle}>{tableSymbol}</div>
    </SubLayout>
  )
}