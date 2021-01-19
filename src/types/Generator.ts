import { Table } from "./Table";

export interface RPGGenerator {
  generatorName: string,
  textTemplate: string,
  tables: Table[],
  operations: TableOperation[],
  history: string[],
  version: number
}

export interface TableOperation {
  currentTableIndex: string,
  entryIndexs: string, // array of entry indexs that trigger the result,
  nextTableIndex: string, // not currentTableIndex
}

/*

operation = (tableIndex, entryIndex) => tableIndex
Roll table n, if result x then roll on table m.

[tableId, entryId, tableId]

interface operation {

}

textTemplate:
red
glass
turns stone to ruby

ex -> "It's a {1} potion in a {2} container that {3}"


*/