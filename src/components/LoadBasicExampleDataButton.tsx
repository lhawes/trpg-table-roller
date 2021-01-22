import React, { useCallback } from "react"
import { useContext } from "react"
import { DispatchContext } from "../App"
import { basicExampleDataState } from "../state/exampleDataState"
import { updateStateFromFileAction } from "../state/generator/generatorActions"
import { SecondaryButton } from "./shared/SecondaryButton"

export const LoadBasicExampleDataButton: React.FC = () => {
  const dispatch = useContext(DispatchContext);
  const loadExampleDataHandler = useCallback( () => {
    dispatch(updateStateFromFileAction(basicExampleDataState))
  }, [dispatch]);
  return (
    <SecondaryButton onClick={loadExampleDataHandler}>Load Example Data</SecondaryButton>
  )
}