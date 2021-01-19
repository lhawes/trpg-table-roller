/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { ChangeEvent, useCallback, useMemo } from "react";
import { TableOperation } from '../types/Generator';
import { SecondaryButton } from './shared/SecondaryButton';
import { SubLayout } from "./shared/SubLayout";
import { UserInput } from "./shared/UserInput";

// table index, roll results, next table index
const conditionalRowStyle = css({ })

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
      <span>If Table:</span>
      <span>Rolls a:</span>
      <span>Then Roll on table:</span>
      <UserInput value={currentTableIndex} onChange={updateConditionalOperationHandler('currentTableIndex')} />
      <UserInput value={entryIndexs} onChange={entriesIndexesHandler} />
      <UserInput value={nextTableIndex} onChange={updateConditionalOperationHandler('nextTableIndex')} />
      <SecondaryButton onClick={removeConditionalOperation}>X</SecondaryButton>
    </SubLayout>
  );
}