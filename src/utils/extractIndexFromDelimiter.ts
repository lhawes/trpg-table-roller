import { regexDelimiter } from "../constants/templateDelimiter";

export const extractIndexFromDelimiter = (delimiter: string): number => {
  const removeRegex = new RegExp(`[${regexDelimiter('')}]`, 'g');
  const strippedText = delimiter.replace(removeRegex, '');
  return parseInt(strippedText, 10) - 1;
}