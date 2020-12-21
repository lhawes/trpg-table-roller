import { generatorInitialState } from "./generator/generatorReducer";

export const rootInitialState: Record<string, any> = {
  generator: generatorInitialState,
}

export type AppState = typeof rootInitialState;