import { Table } from "../../types/Table";
import { AppState } from "../rootInitialState";
import { getGeneratorTables } from "./generatorSelectors";

export const getRandomArbitrary = (min:number, max:number):number => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomEntryFromArray = (entries: string[]): string => {
  const randomIndex = getRandomArbitrary(0, entries.length);
  console.log({
    randomIndex,
    length: entries.length,

  })
  return entries[randomIndex];
}

export const rollGenerator = (state: AppState): string[] => {
  const tables = getGeneratorTables(state);

  return tables.map((table: Table) => {
    return getRandomEntryFromArray(table.entries);
  })
}