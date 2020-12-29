import { generatorInitialState, generatorStateKey } from "./generator/generatorReducer";

export const rootInitialState: Record<string, any> = {
  [generatorStateKey]: generatorInitialState,
}

export type AppState = typeof rootInitialState;