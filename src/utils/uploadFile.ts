import { ChangeEvent } from "react";

export const uploadInputId = 'upload';

export const getFile = (callback: Function) => (event: ChangeEvent<HTMLInputElement>) => {
  const input = event.target;
  if ('files' in input && (input.files || []).length > 0) {
    readFileContent((input.files || [])[0])
      .then((content) => callback(convertContentToObj(content as string)))
      .catch(error => console.log(error))
  }
}

export const convertContentToObj = (content: string) => {
  return JSON.parse(content);
}

export const readFileContent = (file: Blob) => {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event?.target?.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}