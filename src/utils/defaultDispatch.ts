export const defaultDispatch = (action: { type: string }) => {
  throw new Error('Context consumer provided with default dispatch ' + action.type)
  return;
}