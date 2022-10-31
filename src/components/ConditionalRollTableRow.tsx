/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { ChangeEvent, useCallback } from "react";
import { TableOperation } from '../types/Generator';
import { GridCell } from './shared/GridCell';
import { SecondaryButton } from './shared/SecondaryButton';
import { SubLayout } from "./shared/SubLayout";
import { UserInput } from "./shared/UserInput";

const conditionalRowStyle = css({
  gridTemplateColumns: `1fr 1fr 1fr 1fr`,
  gridTemplateRows: 'auto',
})

const removeConditionButtonStyle = css({
  margin: '0'
})

interface ConditionalRollTableRowProps {
  currentTableIndex: string;
  entryIndexs: string;
  nextTableIndex: string;
  updateConditionalOperation: (operation: TableOperation) => void;
  removeConditionalOperation: () => void;
}

const entriesIndexesInputPattern = '^[0-9 ,]*$';
const tableIndexInputPattern = '^[0-9]*$';

export const ConditionalRollTableRow: React.FC<ConditionalRollTableRowProps> = ({
  currentTableIndex,
  entryIndexs,
  nextTableIndex,
  updateConditionalOperation,
  removeConditionalOperation,
}) => {

  const entriesIndexesHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.match(entriesIndexesInputPattern)) {
      updateConditionalOperation({
        currentTableIndex,
        entryIndexs: value,
        nextTableIndex,
      })
    };
  }, [currentTableIndex, nextTableIndex, entryIndexs, updateConditionalOperation]);

  const updateConditionalOperationHandler = useCallback((operationKey: string) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.match(tableIndexInputPattern)) {
      updateConditionalOperation({
        currentTableIndex,
        entryIndexs,
        nextTableIndex,
        [operationKey]: value
      })
    };
  }, [currentTableIndex, nextTableIndex, entryIndexs, updateConditionalOperation]);

  return (
    <SubLayout css={conditionalRowStyle}>
      <GridCell position={{ row: 1, col: 1 }}><span>If Table #:</span></GridCell>
      <GridCell position={{ row: 1, col: 2 }}><span>Rolls a #:</span></GridCell>
      <GridCell position={{ row: 1, col: 3 }}><span>Then Roll on table #:</span></GridCell>
      <GridCell position={{ row: 2, col: 1 }}><UserInput css={{ display: 'inline' }} value={currentTableIndex} onChange={updateConditionalOperationHandler('currentTableIndex')} /></GridCell>
      <GridCell position={{ row: 2, col: 2 }}><UserInput css={{ display: 'inline' }} value={entryIndexs} onChange={entriesIndexesHandler} /></GridCell>
      <GridCell position={{ row: 2, col: 3 }}><UserInput css={{ display: 'inline' }} value={nextTableIndex} onChange={updateConditionalOperationHandler('nextTableIndex')} /></GridCell>
      <GridCell position={{ rstart: 1, rend: 3, col: 4 }}><SecondaryButton style={removeConditionButtonStyle} onClick={removeConditionalOperation}>X</SecondaryButton></GridCell>
    </SubLayout>
  );
}