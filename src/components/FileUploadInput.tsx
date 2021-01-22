/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useCallback, useContext } from "react";
import { DispatchContext } from "../App";
import { updateStateFromFileAction } from "../state/generator/generatorActions";
import { getFile, uploadInputId } from "../utils/uploadFile";

const uploadStyle = css({
  margin: '1rem',
})

export const FileUploadInput: React.FC = () => {
  const dispatch = useContext(DispatchContext);

  const updateStateFromFile = useCallback((content) => dispatch(updateStateFromFileAction(content)), []);
  const getFileHandler = useCallback(getFile(updateStateFromFile), [updateStateFromFile]);
  return (
    <input id={uploadInputId} css={uploadStyle} type="file" onChange={getFileHandler}></input>
  );
}