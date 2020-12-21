import { AnyAction } from "../../types/anyAction";
import { Table } from "../../types/Table";

export const tableStateKey: string = 'table';

export const tableInitialState: Table = {
  tableName: 'test',
  tableEntries: [
    'test 2',
    'test 3'
  ]
}

export const tableReducer = (state: Table = tableInitialState, action: AnyAction) => {
  const newState: Table = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case '':
      // const {  } = action.payload;
      return state;
  }
}