import { RPGGenerator } from "../types/Generator";
import { generatorInitialState, generatorStateKey } from "./generator/generatorReducer";

export const rootInitialState: Record<string, RPGGenerator> = {
  [generatorStateKey]: generatorInitialState,
}

export type AppState = typeof rootInitialState;