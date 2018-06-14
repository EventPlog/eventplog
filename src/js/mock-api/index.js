const delay = 1000


export const saveLead = (data = {}) => {
  const newData = {...data, id: 1}
  return new Promise((resolve, reject) => setTimeout(resolve, delay, newData))
}