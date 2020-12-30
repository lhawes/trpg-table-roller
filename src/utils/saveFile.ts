import { saveAs } from 'file-saver';
import { AppState } from '../state/rootInitialState';

let canSave = false;
try {
  canSave = !!new Blob;
} catch (e) {
  console.error(e)
}

export const saveFile = (data: string[], name: string): void => {
  if (!canSave) {
    throw new Error('cannot save file');
  }
  const blob = new Blob(data, { type: "text/plain;charset=utf-8" });
  saveAs(blob, name)
}

export const transformStateForFile = (state: AppState): string[] => {
  const stateToString = JSON.stringify(state, null, 2);
  return [stateToString];
}

// saveFile([test], "hello world 2.txt");