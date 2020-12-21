import { combineReducers } from "../utils/combineReducers";
import { generatorReducer, generatorStateKey } from "./generator/generatorReducer";

export const rootReducer = combineReducers({
  [generatorStateKey]: generatorReducer,
});
