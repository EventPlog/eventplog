export const updateItemInCollection = (collection, payload) => {
  const newState = collection.filter(item => item.id != payload.id)
  const itemToChange = collection.find(item => item.id == payload.id)
  return itemToChange
    ? [...newState, payload]
    : [...newState]
}