import { regexDelimiter, templateDelimiter } from "../../constants/templateDelimiter";
import { Table } from "../../types/Table";
import { AppState } from "../rootInitialState";
import { getGeneratorTables, getGeneratorTextTemplate } from "./generatorSelectors";

export const getRandomArbitrary = (min:number, max:number):number => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomEntryFromArray = (entries: string[]): string => {
  const randomIndex = getRandomArbitrary(0, entries.length);
  return entries[randomIndex];
}

export const getRandomEntries = (state: AppState): string[] => {
  const tables = getGeneratorTables(state);

  return tables.map((table: Table) => {
    return getRandomEntryFromArray(table.entries);
  })
}

export const getResult = (state: AppState): string => {
  const entries = getRandomEntries(state);
  const template = getGeneratorTextTemplate(state);

  return entries.reduce((result, value, index) => {
    const delimitedText = templateDelimiter(index + 1);
    if (result.includes(delimitedText)) {
      const regex = new RegExp(`${regexDelimiter(index + 1)}`, 'g');
      const result2 = result.replace(regex, value);
      return result2
    }
    return result;
  }, template);
};