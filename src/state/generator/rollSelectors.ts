import { regexDelimiter, templateDelimiter } from "../../constants/templateDelimiter";
import { Table } from "../../types/Table";
import { extractIndexFromDelimiter } from "../../utils/extractIndexFromDelimiter";
import { AppState } from "../rootInitialState";
import { getGeneratorTables, getGeneratorTextTemplate } from "./generatorSelectors";

export const getRandomArbitrary = (min:number, max:number):number => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomEntryFromArray = <T>(list: T[]): T => {
  const randomIndex = getRandomArbitrary(0, list.length);
  return list[randomIndex];
}

export const getRandomEntryFromTable = (state: AppState, tableIndex: number): string => {
  const tables = getGeneratorTables(state);
  const entries = tables[tableIndex].entries;

  return getRandomEntryFromArray(entries);
}

export const getRandomEntries = (state: AppState): string[] => {
  const tables = getGeneratorTables(state);

  return tables.map((_table: Table, i: number) => {
    return getRandomEntryFromTable(state, i);
  })
}

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


// START basic result
export const getResultWithoutTemplate = (entries: string[]): string => {
  return entries.reduce((result, value) => {
    return `${result} ${value}`
  }, '');
}

export const getResultWithTemplate = (entries: string[], template: string): string => {

  return entries.reduce((result, value, index) => {
    const delimitedText = templateDelimiter(index + 1);
    if (result.includes(delimitedText)) {
      const regex = new RegExp(`${regexDelimiter(index + 1)}`, 'g');
      return result.replace(regex, value);
    }
    return result;
  }, template);
}

export const getResult = (state: AppState): string => {
  const entries = getRandomEntries(state);
  const template = getGeneratorTextTemplate(state);

  if (template) {
    return getResultWithTemplate(entries, template);
  }

  return getResultWithoutTemplate(entries);
};
// END basic result

// START multi roll result
export const getMultiRollResult = (state: AppState): string => {
  const entries = getRandomEntries(state);
  const template = getGeneratorTextTemplate(state);

  if (template) {
    const delimiter = new RegExp(`(${regexDelimiter('\\d')})`, '');
    const splitTemplate = template.split(delimiter);

    const populatedTemplate = splitTemplate.map((templatePiece: string): string => {
      if (templatePiece.match(delimiter)) {
        const tableIndex = extractIndexFromDelimiter(templatePiece);
        const result = getRandomEntryFromTable(state, tableIndex);
        return result
      }
      return templatePiece
    })
    return populatedTemplate.join('');
  }

  return getResultWithoutTemplate(entries);
}
// END multi roll result