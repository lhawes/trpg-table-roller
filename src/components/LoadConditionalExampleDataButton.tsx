import React, { useCallback } from "react"
import { useContext } from "react"
import { DispatchContext } from "../App"
import { conditionalExampleDataState } from "../state/exampleDataState"
import { updateStateFromFileAction } from "../state/generator/generatorActions"
import { SecondaryButton } from "./shared/SecondaryButton"

export const LoadConditionalExampleDataButton: React.FC = () => {
  const dispatch = useContext(DispatchContext);
  const loadExampleDataHandler = useCallback(() => {
    dispatch(updateStateFromFileAction(conditionalExampleDataState))
  }, [dispatch]);
  return (
    <SecondaryButton onClick={loadExampleDataHandler}>Load Example Data</SecondaryButton>
  )
}