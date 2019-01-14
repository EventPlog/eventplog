export const sortInAsc = (arr, col = 'id') => (
  arr.sort((next, prev) => next[col] > prev[col])
)

export const updateItemInCollection = (collection, update, addIfAbsent = false) => {
  const newState = collection.filter(item => item.id != update.id)
  const updatedItemIndex = collection.findIndex(item => item.id == update.id)
  if (updatedItemIndex != -1) return (
    [
      ...collection.slice(0, updatedItemIndex),
      update,
      ...collection.slice(updatedItemIndex + 1)
    ]
  )
  if(addIfAbsent) return ([...newState, update])

  return newState
}
