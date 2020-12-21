import { AnyAction } from "../../types/anyAction";
import { RPGGenerator } from "../../types/Generator";
import { Table } from "../../types/Table";

export const generatorStateKey: string = 'generator';

export const generatorInitialState: RPGGenerator = {
  generatorName: 'generatopr',
  tables: [{
    name: 'table',
    entries: ['one', 'two']
  },{
      name: 'second table',
      entries: ['apple', 'pie']
  }],
  operations: [],
}

export const generatorReducer = (state: RPGGenerator = generatorInitialState, action: AnyAction) => {
  const newState: Table = JSON.parse(JSON.stringify(state));
  // clear error
  // try action
  // catch error


  switch (action.type) {
    case '':
      // const {  } = action.payload;
      return state;
  }
}