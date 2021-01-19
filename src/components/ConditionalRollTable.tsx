import React, { useCallback, useContext } from "react";
import { DispatchContext, StateContext } from "../App";
import { addConditionalOperationAction, changeConditionalOperationAction, removeConditionalOperationAction } from "../state/generator/generatorActions";
import { getGeneratorConditionalOperations } from "../state/generator/generatorSelectors";
import { TableOperation } from "../types/Generator";
import { ConditionalRollTableRow } from "./ConditionalRollTableRow";
import { PrimaryButton } from "./shared/PrimaryButton";

const defaultOperation: TableOperation = {
  currentTableIndex: '',
  nextTableIndex: '',
  entryIndexs: '',
}

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
    <React.Fragment>
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
      <PrimaryButton onClick={addConditionalOperation}>Add Operation</PrimaryButton>
    </React.Fragment>
  );
}