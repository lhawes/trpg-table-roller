import { Table } from "./Table";

export interface RPGGenerator {
  generatorName: string,
  tables: Table[],
  operations: any[],
}

/*

operation = (tableIndex, entryIndex) => tableIndex

*/