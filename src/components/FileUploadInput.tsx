import React, { useCallback, useContext } from "react";
import { DispatchContext } from "../App";
import { updateStateFromFileAction } from "../state/generator/generatorActions";
import { getFile, uploadInputId } from "../utils/uploadFile";

export const FileUploadInput: React.FC = () => {
  const dispatch = useContext(DispatchContext);

  const updateStateFromFile = useCallback((content) => dispatch(updateStateFromFileAction(content)), []);
  const getFileHandler = useCallback(getFile(updateStateFromFile), [updateStateFromFile]);
  return (
    <input id={uploadInputId} type="file" onChange={getFileHandler}></input>
  );
}