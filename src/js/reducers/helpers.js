export const sortInAsc = (arr, col = 'id') => (
  arr.sort((next, prev) => next[col] > prev[col])
)

export const updateItemInCollection = (collection, payload, addIfAbsent = false) => {
  const newState = collection.filter(item => item.id != payload.id)
  const itemToChange = collection.find(item => item.id == payload.id)
  return itemToChange || addIfAbsent
    ? sortInAsc([...newState, payload])
    : [...newState]
}
