/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useCallback, useContext } from "react";
import { DispatchContext, StateContext } from "../App";
import { addConditionalOperationAction, changeConditionalOperationAction, removeConditionalOperationAction } from "../state/generator/generatorActions";
import { getGeneratorConditionalOperations } from "../state/generator/generatorSelectors";
import { TableOperation } from "../types/Generator";
import { ConditionalRollTableRow } from "./ConditionalRollTableRow";
import { PrimaryButton } from "./shared/PrimaryButton";
import { SubLayout } from "./shared/SubLayout";

const defaultOperation: TableOperation = {
  currentTableIndex: '',
  nextTableIndex: '',
  entryIndexs: '',
}

const conditionalRollLayout = css({
  rowGap: '1rem'
});

const addConditionButtonStyle = css({
  marginTop: '0'
})

export const ConditionalRollTable: React.FC = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const conditionalOperations = getGeneratorConditionalOperations(state);

  const updateConditionalOperation = useCallback((index: number) => (operation: TableOperation) => {

      return dispatch(changeConditionalOperationAction(index, operation));

  }, [dispatch]);
  const removeConditionalOperation = useCallback((index: number) => () => dispatch(removeConditionalOperationAction(index)), [dispatch]);
  const addConditionalOperation = useCallback(() => dispatch(addConditionalOperationAction(defaultOperation)), [dispatch]);

  return (
    <SubLayout layout={conditionalRollLayout}>
        Conditional Roll Operations
        Roll on table 1 then:
        { conditionalOperations.map(({ currentTableIndex, entryIndexs, nextTableIndex }: TableOperation, index: number) => (
          <ConditionalRollTableRow
            currentTableIndex={currentTableIndex}
            entryIndexs={entryIndexs}
            nextTableIndex={nextTableIndex}
            updateConditionalOperation={updateConditionalOperation(index)}
            removeConditionalOperation={removeConditionalOperation(index)}
          />
        )) }
      <PrimaryButton style={addConditionButtonStyle} onClick={addConditionalOperation}>Add Operation</PrimaryButton>
    </SubLayout>
  );
}