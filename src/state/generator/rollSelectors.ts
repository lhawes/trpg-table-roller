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

  if (template) {
    return entries.reduce((result, value, index) => {
      const delimitedText = templateDelimiter(index + 1);
      if (result.includes(delimitedText)) {
        const regex = new RegExp(`${regexDelimiter(index + 1)}`, 'g');
        return result.replace(regex, value);
      }
      return result;
    }, template);
  }

  return entries.reduce((result, value) => {
    return `${result} ${value}`
  }, '');
};

export const getTextTemplatePreview = (state: AppState): string => {
  const tables = getGeneratorTables(state);
  const template = getGeneratorTextTemplate(state);

  return tables.reduce((result, table, index) => {
    const delimitedText = templateDelimiter(index + 1);
    if (result.includes(delimitedText)) {
      const regex = new RegExp(`${regexDelimiter(index + 1)}`, 'g');
      return result.replace(regex, templateDelimiter(table.name));
    }
    return result;
  }, template);
}