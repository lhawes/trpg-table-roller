/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext, useCallback } from 'react'
import { DispatchContext } from '../../App'
import { addTableAction } from '../../state/generator/generatorActions'
import { emptyTable } from '../../utils/emptyTable'
import { PrimaryButton } from '../shared/PrimaryButton'
import { SubLayout } from "../shared/SubLayout"
import { TableList } from "../TableList"

const addTableButton = css({
  margin: '0 auto'
})
export const TableListLayout: React.FC = () => {
  const dispatch = useContext(DispatchContext);
  const addTable = useCallback(() => dispatch(addTableAction(emptyTable())), [dispatch]);

  return (
    <SubLayout>
      <TableList />
      <div css={addTableButton}>
        <PrimaryButton onClick={addTable}>Add Table</PrimaryButton>
      </div>
    </SubLayout>
  )
}