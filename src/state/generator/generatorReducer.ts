import { AnyAction } from "../../types/anyAction";
import { RPGGenerator } from "../../types/Generator";
import { Table } from "../../types/Table";
import { tableInitialState } from "../table/tableReducer";

export const generatorStateKey: string = 'generator';

export const generatorInitialState: RPGGenerator = {
  generatorName: '',
  tables: [tableInitialState],
  operations: [],
}

export const generatorReducer = (state: RPGGenerator = generatorInitialState, action: AnyAction) => {
  const newState: Table = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case '':
      // const {  } = action.payload;
      return state;
  }
}