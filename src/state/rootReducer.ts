import { combineReducers } from "../utils/combineReducers";
import { generatorReducer, generatorStateKey } from "./generator/generatorReducer";
import { tableReducer, tableStateKey } from "./table/tableReducer";

export const rootReducer = combineReducers({
  [tableStateKey]: tableReducer,
  [generatorStateKey]: generatorReducer,
});
