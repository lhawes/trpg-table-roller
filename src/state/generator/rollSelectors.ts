import { regexDelimiter, templateDelimiter } from "../../constants/templateDelimiter";
import { TableOperation } from "../../types/Generator";
import { Table } from "../../types/Table";
import { extractIndexFromDelimiter } from "../../utils/extractIndexFromDelimiter";
import { AppState } from "../rootInitialState";
import { getGeneratorConditionalOperations, getGeneratorTables, getGeneratorTextTemplate } from "./generatorSelectors";

export const getRandomArbitrary = (min:number, max:number):number => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomEntryFromArray = <T>(list: T[]): { index: number, result: T } => {
  const randomNumber = getRandomArbitrary(0, list.length);
  return  {
    index: randomNumber,
    result: list[randomNumber]
  }
}

export const getRandomEntryFromTable = (state: AppState, tableIndex: number): string => {
  const tables = getGeneratorTables(state);
  const entries = tables[tableIndex].entries;

  return getRandomEntryFromArray(entries).result;
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

// START conditional roll result
interface NormalizedOperation {
  currentTableIndex: number,
  entryIndexs: Record<number, true>,
  nextTableIndex: number,
}

const normalizeConditionalOperations = (operation: TableOperation): NormalizedOperation => {
  const entries = operation.entryIndexs
    .replace(/ /g, '')
    .split(',')
    .map((entry: string) => parseInt(entry, 10))
    .filter((entry: number) => !isNaN(entry))
    .map((entry: number) => entry - 1)
    .reduce((acc: Record<number, true>, entry: number) => {
        acc[entry] = true
      return acc;
    }, {});

  return {
    currentTableIndex: parseInt(operation.currentTableIndex, 10) - 1,
    entryIndexs: entries,
    nextTableIndex: parseInt(operation.nextTableIndex, 10) - 1,
  }
}

const checkOperationTriggered = (choice: number, operation: NormalizedOperation): boolean => {
  return !!operation.entryIndexs[choice];
}

const firstMatch = <T>(list: T[], callback: (e: T) => boolean): { index: number, match: boolean } => {
  for (let index = 0; index < list.length; index++) {
    if (callback(list[index])) {
      return {
        index,
        match: true
      }
    }
  }
  return {
    index: 0,
    match: false
  }
}

export const getConditionalRollResult = (state: AppState): string => {
  const tables = getGeneratorTables(state);
  const operations = getGeneratorConditionalOperations(state);
  const normalizedOperations = operations.map(normalizeConditionalOperations);
  console.log(normalizedOperations);
  let finalResult: string;
  let rollIndex: number;

  // roll on the first table (always)
  let firstEntry = getRandomEntryFromArray(tables[0].entries);
  finalResult = firstEntry.result;
  rollIndex = firstEntry.index;

  let currentTableIndex = 0;
  let safetyCounter = 100;


  // loop through the operations and find the first that matches:
  // current table index = 1 and checkOperationTriggered(rollIndex, operation);

  // get a random entry from the next table index
  // set the new roll index

  // set the next table index as the current table index



  // !! NOTE: I'm seeing that the first operation always has to have a current index set to 0 in order to trigger the next


  while (!isNaN(currentTableIndex) && safetyCounter > 0) {
    console.log({
      currentTableIndex,
      safetyCounter,
      finalResult,
      rollIndex,
    })
    safetyCounter--; // prevent likely infinite loop

    const { match, index: operationIndex } = firstMatch(normalizedOperations, (operation: NormalizedOperation) => {
      return operation.currentTableIndex === currentTableIndex && operation.entryIndexs[rollIndex] // offset for humans
    });
    // no match in any of the operations found for the currentTableIndex and rollIndex
    if (!match) {
      console.log(`no matches found for table: ${currentTableIndex} and roll: ${rollIndex}`);
      break;
    }

    currentTableIndex = normalizedOperations[operationIndex].nextTableIndex; // set to look for next table

    const currentEntry = getRandomEntryFromArray(tables[currentTableIndex].entries);
    finalResult += currentEntry.result;
    rollIndex = currentEntry.index;
  }
  if (safetyCounter === 0) {
    alert('infinite loop detected!');
    return '';
  }

  return finalResult;
}
// END conditional roll result