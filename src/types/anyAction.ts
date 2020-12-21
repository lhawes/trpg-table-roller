// import { characterActionTypes } from 'src/state/characters/actionTypes';

export interface AnyAction {
  type: string,
  payload?: any,
  [key: string]: any
}