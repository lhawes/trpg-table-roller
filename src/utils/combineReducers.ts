
import { AppState, rootInitialState } from "../state/rootInitialState";
import { AnyAction } from "../types/anyAction";

export type AnyReducer = (state: any, action: AnyAction) => any;

export interface CombinedReducers {
  [key: string]: AnyReducer
}

export function combineReducers(reducers: CombinedReducers) {
  return (state: any = rootInitialState, action: AnyAction): AppState => {
    const newState: Record<string, any> = {};
    Object.keys(reducers).forEach((key: string) => {
      newState[key] = reducers[key](state[key], action);
    })
    return newState as AppState;
  }
}